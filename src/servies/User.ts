import { UserResponseDto, UsersService as GeneratedAuthService } from '@/api'
import { OpenAPI } from '@/api'
import { getToken } from '@/tools/token'
export class UsersService {
  public static async getProfile(): Promise<UserResponseDto> {
    OpenAPI.TOKEN = getToken()
    return GeneratedAuthService.usersControllerGetUser()
  }
}
