import { LoginRequest, ILoginResponse } from '@/models/Login'
import { RegisterRequest, IRegisterResponse } from '@/models/Register'
import { getData } from '@/tools/fetch'

export class AuthService {
  public static async login(loginRequest: LoginRequest): Promise<ILoginResponse> {
    return getData('/api/auth/login', 'post', loginRequest)
  }

  public static async register(loginRequest: RegisterRequest): Promise<IRegisterResponse> {
    return getData('/api/auth/login', 'post', loginRequest)
  }
}
