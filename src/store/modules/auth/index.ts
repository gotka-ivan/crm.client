import { LoginRequest } from '@/models/Login'
import { RegisterRequest } from '@/models/Register'
import { IUserProfile } from '@/models/User'
import { AuthService } from '@/servies/Auth'
import { removeToken, setToken } from '@/tools/token'
import { Getters, Mutations, Actions, Module } from 'vuex-smart-module'

class AuthState {
  profile: IUserProfile
}

class AuthGetters extends Getters<AuthState> {}

class AuthMutations extends Mutations<AuthState> {
  setUserProfile(profile: IUserProfile) {
    this.state.profile = profile
  }
}

class AuthActions extends Actions<AuthState, AuthGetters, AuthMutations, AuthActions> {
  async login(loginRequest: LoginRequest) {
    const response = await AuthService.login(loginRequest)
    setToken(response.token)
    this.commit('setUserProfile', response.user)
  }

  async register(registerRequest: RegisterRequest) {
    const response = await AuthService.register(registerRequest)
    setToken(response.token)
    this.commit('setUserProfile', response.user)
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
