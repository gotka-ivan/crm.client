import { UserResponseDto, UsersService as GeneratedAuthService } from '@/api'
export class UsersService {
  public static async getProfile(): Promise<UserResponseDto> {
    return GeneratedAuthService.usersControllerGetUser()
  }
}
