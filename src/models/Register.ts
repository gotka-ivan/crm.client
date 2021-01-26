export class RegisterRequest implements IRegisterRequest {
  constructor() {
    this.email = ''
    this.password = ''
  }
  email: string
  password: string
}

export interface IRegisterRequest {
  email: string
  password: string
}

export interface IRegisterResponse {
  status: string
  message: string
}
