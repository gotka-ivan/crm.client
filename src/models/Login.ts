import { IUserProfile } from './User'

export class LoginRequest implements ILoginRequest {
  constructor() {
    this.email = ''
    this.password = ''
  }
  email: string
  password: string
}

export interface ILoginRequest {
  email: string
  password: string
}

export interface ILoginResponse {
  user: IUserProfile
  token: string
}
