import { AuthService } from '@/services/auth.service'
import type { RegisterSchema } from '../register.schema'
import { useMutation } from '@tanstack/vue-query'

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (payload: RegisterSchema) => {
      return AuthService.doRegister({
        username: payload.username,
        email: payload.email,
        yourName: payload.yourName,
        password: payload.password,
        confirmPassword: payload.confirmPassword,
      })
    },
  })
}
