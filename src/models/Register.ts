import { IUserProfile } from './User'

export class RegisterRequest implements IRegisterRequest {
  constructor() {
    this.name = ''
    this.email = ''
    this.password = ''
  }
  name: string
  email: string
  password: string
}

export interface IRegisterRequest {
  name: string
  email: string
  password: string
}

export interface IRegisterResponse {
  user: IUserProfile
  token: string
}
