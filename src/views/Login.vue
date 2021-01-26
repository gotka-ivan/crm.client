<template>
  <form class="card" @submit.prevent="login">
    <div class="card-content">
      <span class="card-title">Войти в систему</span>
      <div class="input-field">
        <input
          id="email"
          v-model="form.email"
          :class="{ invalid: $v.form.email.$dirty && (!$v.form.email.required || !$v.form.email.email) }"
          type="text"
        />
        <label for="email">Email:</label>
        <small v-if="$v.form.email.$dirty && !$v.form.email.required" class="helper-text red-text"
          >E-mail обязателен для заполнения</small
        >
        <small v-if="$v.form.email.$dirty && !$v.form.email.email" class="helper-text red-text"
          >E-mail должен быть корректным</small
        >
      </div>
      <div class="input-field">
        <input
          id="password"
          v-model="form.password"
          :class="{ invalid: $v.form.password.$dirty && (!$v.form.password.required || !$v.form.password.minLength) }"
          type="password"
        />
        <label for="password">Пароль:</label>
        <small v-if="$v.form.password.$dirty && !$v.form.password.required" class="helper-text red-text"
          >Пароль обязателен для заполнения</small
        >
        <small v-if="$v.form.password.$dirty && !$v.form.password.minLength" class="helper-text red-text"
          >Длина пароля должна быть больше 3</small
        >
      </div>
    </div>
    <div class="card-action">
      <button class="modal-action btn waves-effect">Войти</button>
    </div>
  </form>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { LoginRequest } from '@/models/Login'
import { Validations } from 'vuelidate-property-decorators'
import { required, minLength, email } from 'vuelidate/lib/validators'
import { auth } from '@/store/modules/auth/index'

@Component
class LoginTemplate extends Vue {
  auth = auth.context(this.$store)
  form: LoginRequest = new LoginRequest()
  @Validations()
  validations = {
    form: {
      email: { required, email },
      password: { required, minLength: minLength(4) }
    }
  }

  login(): void {
    if (this.$v.$invalid) {
      this.$v.$touch()
      return
    }
    this.auth.actions.login(this.form).then(() => this.$router.push({ name: 'history' }))
  }
}
export default LoginTemplate
</script>
