import { LoginRequestDto, LoginResponseDto, UserResponseDto } from '@/api'
import { RegisterRequest } from '@/models/Register'
import { AuthService } from '@/servies/Auth'
import { UsersService } from '@/servies/User'
import { removeToken, setToken } from '@/tools/token'
import { Getters, Mutations, Actions, Module } from 'vuex-smart-module'

class AuthState {
  profile: UserResponseDto
}

class AuthGetters extends Getters<AuthState> {}

class AuthMutations extends Mutations<AuthState> {
  setUserProfile(profile: UserResponseDto) {
    this.state.profile = profile
  }
}

class AuthActions extends Actions<AuthState, AuthGetters, AuthMutations, AuthActions> {
  async login(loginRequest: LoginRequestDto): Promise<LoginResponseDto> {
    const response = await AuthService.login(loginRequest)
    setToken(response.access_token)
    return response
  }

  async register(registerRequest: RegisterRequest) {
    const response = await AuthService.register(registerRequest)
    setToken(response.access_token)
    this.commit('setUserProfile', response.user)
    return response
  }

  async getProfile() {
    const user = await UsersService.getProfile()
    this.commit('setUserProfile', user)
    return user
  }

  logout() {
    removeToken()
  }
}

export const auth = new Module({
  state: AuthState,
  getters: AuthGetters,
  mutations: AuthMutations,
  actions: AuthActions
})
