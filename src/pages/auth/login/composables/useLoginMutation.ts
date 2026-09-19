import { useAuthStore } from '@/pages/auth/auth.store'
import { AuthService } from '@/services/auth.service'
import { useMutation } from '@tanstack/vue-query'
import type { LoginSchema } from '../login.schemas'

export const useLoginMutation = () => {
  const authStore = useAuthStore()

  return useMutation({
    mutationFn: (payload: LoginSchema) =>
      AuthService.doLogin({
        login: payload.username,
        password: payload.password,
      }),

    onSuccess: ({ metadata }) => {
      authStore.setSession(metadata)
    },
  })
}
