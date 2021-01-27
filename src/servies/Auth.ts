import { LoginRequest, ILoginResponse } from '@/models/Login'
import { RegisterRequest, IRegisterResponse } from '@/models/Register'
import { getData } from '@/tools/fetch'

export class AuthService {
  public static async login(request: LoginRequest): Promise<ILoginResponse> {
    return getData('/api/auth/login', 'post', request)
  }

  public static async register(request: RegisterRequest): Promise<IRegisterResponse> {
    return getData('/api/auth/register', 'post', request)
  }
}
