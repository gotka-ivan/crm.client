import { LoginRequest } from '@/models/Login'
import { AuthService } from '@/servies/Auth'
import { Getters, Mutations, Actions, Module } from 'vuex-smart-module'

class AuthState {}

class AuthGetters extends Getters<AuthState> {}

class AuthMutations extends Mutations<AuthState> {}

class AuthActions extends Actions<AuthState, AuthGetters, AuthMutations, AuthActions> {
  async login(loginRequest: LoginRequest) {
    const response = AuthService.login(loginRequest)
    console.log(response)
  }
}

export const auth = new Module({
  state: AuthState,
  getters: AuthGetters,
  mutations: AuthMutations,
  actions: AuthActions
})
