import { RegisterRequestDto } from '@/api'

export class RegisterRequest implements RegisterRequestDto {
  constructor() {
    this.name = ''
    this.email = ''
    this.password = ''
  }
  name: string
  email: string
  password: string
}
