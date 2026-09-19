import { apiClient } from '@/configs/axios.config'
import type { AuthSession } from '@/pages/auth/auth.store'

export type LoginPayload = {
  login: string
  password: string
}

export class AuthService {
  public static async doLogin(payload: LoginPayload): Promise<ResponseBody<AuthSession>> {
    const response = await apiClient.post<ResponseBody<AuthSession>>('/auth/login', payload)
    console.log('doLogin response:', response.data)
    return response.data
  }
}
