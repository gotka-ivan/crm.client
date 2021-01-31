import {
  LoginResponseDto,
  RegisterResponseDto,
  RegisterRequestDto,
  LoginRequestDto,
  AuthService as GeneratedAuthService
} from '@/api'

export class AuthService {
  public static async login(request: LoginRequestDto): Promise<LoginResponseDto> {
    return GeneratedAuthService.authControllerLogin(request)
  }

  public static async register(request: RegisterRequestDto): Promise<RegisterResponseDto> {
    return GeneratedAuthService.authControllerRegister(request)
  }
}
