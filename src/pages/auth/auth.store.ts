import { defineStore } from 'pinia'

export type AuthUser = {
  id: number
  user_name: string
  email: string
}

export type AuthSession = {
  access_token: string
  token_type: string
  expires_in: number
  user: AuthUser
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    access_token: null as string | null,
    token_type: null as string | null,
    expires_at: null as number | null,
    user: null as AuthUser | null,
  }),

  getters: {
    isAuthenticated: (state) =>
      Boolean(state.access_token) && (!state.expires_at || state.expires_at > Date.now()),
  },

  actions: {
    setSession(payload: AuthSession) {
      this.access_token = payload.access_token
      this.token_type = payload.token_type
      this.expires_at = Date.now() + payload.expires_in * 1_000
      this.user = payload.user
    },

    setAccessToken(accessToken: string) {
      this.access_token = accessToken
    },

    clearSession() {
      this.access_token = null
      this.token_type = null
      this.expires_at = null
      this.user = null
    },
  },

  persist: {
    pick: ['access_token', 'token_type', 'expires_at', 'user'],
  },
})
