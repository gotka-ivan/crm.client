import { LoginRequestDto } from '@/api'

export class LoginRequest implements LoginRequestDto {
  constructor() {
    this.email = ''
    this.password = ''
  }
  email: string
  password: string
}
