import { useAuthStore } from '@/pages/auth/auth.store'
import router from '@/router'
import { useAppStore } from '@/stores/app.store'
import { useWorkspaceStore } from '@/stores/workspace.store'

import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios'

import qs from 'qs'
import { toast } from 'vue-sonner'

interface RefreshTokenMetadata {
  access_token: string
}

type RetryConfig = InternalAxiosRequestConfig & {
  _retry?: boolean
}

const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

const timeout = Number(import.meta.env.VITE_API_TIMEOUT ?? 10_000)

const refreshClient = axios.create({
  baseURL: baseUrl,
  timeout,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const apiClient = axios.create({
  baseURL: baseUrl,

  timeout,

  headers: {
    'Content-Type': 'application/json',
  },

  paramsSerializer: (params) => {
    return qs.stringify(params, {
      skipNulls: true,
      format: 'RFC1738',
    })
  },
})

let refreshPromise: Promise<string> | null = null

let sessionExpirationPromise: Promise<void> | null = null

function handleSessionExpired(): Promise<void> {
  if (sessionExpirationPromise) {
    return sessionExpirationPromise
  }

  sessionExpirationPromise = (async () => {
    const authStore = useAuthStore()
    const workspaceStore = useWorkspaceStore()

    authStore.clearSession()
    workspaceStore.clearContext()

    toast.error('Session expired. Please log in again.')

    if (router.currentRoute.value.name !== 'login') {
      await router.push({
        name: 'login',
      })
    }
  })().finally(() => {
    sessionExpirationPromise = null
  })

  return sessionExpirationPromise
}

async function refreshAccessToken(): Promise<string> {
  const authStore = useAuthStore()

  if (!authStore.access_token) {
    throw new Error('Cannot refresh access token because current token is missing.')
  }

  const response = await refreshClient.post<ResponseBody<RefreshTokenMetadata>>(
    '/auth/refresh',
    {},
    {
      headers: {
        Authorization: `Bearer ${authStore.access_token}`,
      },
    },
  )

  const accessToken = response.data.metadata?.access_token

  if (!accessToken) {
    throw new Error('Refresh response does not contain access_token.')
  }

  authStore.setAccessToken(accessToken)

  return accessToken
}

function getRefreshedAccessToken(): Promise<string> {
  if (refreshPromise) {
    return refreshPromise
  }

  refreshPromise = refreshAccessToken()
    .catch(async (error) => {
      await handleSessionExpired()

      throw error
    })
    .finally(() => {
      refreshPromise = null
    })

  return refreshPromise
}

apiClient.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore()
    const appStore = useAppStore()
    const workspaceStore = useWorkspaceStore()

    if (authStore.access_token && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${authStore.access_token}`
    }

    if (!config.headers['Accept-Language']) {
      config.headers['Accept-Language'] = appStore.locale
    }

    if (workspaceStore.organization?.code) {
      config.headers['X-Organization-Code'] = workspaceStore.organization.code
    }

    if (workspaceStore.project?.code) {
      config.headers['X-Project-Code'] = workspaceStore.project.code
    }

    return config
  },

  (error) => {
    return Promise.reject(error)
  },
)

apiClient.interceptors.response.use(
  (response) => {
    return response
  },

  async (error: AxiosError<ResponseBody<unknown>>) => {
    const responseStatus = error.response?.status

    const originalRequest = error.config as RetryConfig | undefined

    if (!originalRequest) {
      return Promise.reject(error)
    }

    const authStore = useAuthStore()

    const requestUrl = originalRequest.url ?? ''

    const isAuthRequest = ['/auth/login', '/auth/refresh'].some((url) => requestUrl.includes(url))

    if (
      responseStatus === 401 &&
      !originalRequest._retry &&
      !isAuthRequest &&
      authStore.access_token
    ) {
      originalRequest._retry = true

      const currentAuthorization = `Bearer ${authStore.access_token}`

      const requestAuthorization = originalRequest.headers.Authorization

      if (requestAuthorization && requestAuthorization !== currentAuthorization) {
        originalRequest.headers.Authorization = currentAuthorization

        return apiClient(originalRequest)
      }

      try {
        const accessToken = await getRefreshedAccessToken()

        originalRequest.headers.Authorization = `Bearer ${accessToken}`
        return apiClient(originalRequest)
      } catch (refreshError) {
        return Promise.reject(refreshError)
      }
    }

    if (responseStatus === 401 && originalRequest._retry && !isAuthRequest) {
      await handleSessionExpired()

      return Promise.reject(error)
    }

    if (responseStatus === 403) {
      toast.error(
        error.response?.data.message || 'You do not have permission to perform this action.',
      )

      // Nếu sau này muốn có trang 403 riêng:
      //
      // if (
      //   router.currentRoute.value.name !==
      //   'forbidden'
      // ) {
      //   await router.push({
      //     name: 'forbidden',
      //   })
      // }
    }
    return Promise.reject(error)
  },
)
