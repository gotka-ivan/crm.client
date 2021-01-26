import Vue from 'vue'
import Vuex from 'vuex'

import { Getters, Mutations, Actions, Module, createStore } from 'vuex-smart-module'

import { auth } from '@/store/modules/auth/index.ts'

Vue.use(Vuex)

class RootState {}

class RootGetters extends Getters<RootState> {}

class RootMutations extends Mutations<RootState> {}

class RootActions extends Actions<RootState, RootGetters, RootMutations, RootActions> {}

export const root = new Module({
  modules: {
    auth
  },
  state: RootState,
  getters: RootGetters,
  mutations: RootMutations,
  actions: RootActions
})

export const store = createStore(root)
