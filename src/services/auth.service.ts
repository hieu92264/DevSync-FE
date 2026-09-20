import { apiClient } from '@/configs/axios.config'
import type { AuthSession } from '@/pages/auth/auth.store'
import type { LoginPayload } from '@/pages/auth/auth.type'
import type { RegisterPayload } from '@/pages/auth/auth.type'

export class AuthService {
  public static async doLogin(payload: LoginPayload): Promise<ResponseBody<AuthSession>> {
    const response = await apiClient.post<ResponseBody<AuthSession>>('/auth/login', payload)
    console.log('doLogin response:', response.data)
    return response.data
  }
  public static async doRegister(payload: RegisterPayload): Promise<ResponseBody> {
    const response = await apiClient.post<ResponseBody<AuthSession>>('/auth/register', payload)

    console.log('doRegister response:', response.data)

    return response.data
  }
}
