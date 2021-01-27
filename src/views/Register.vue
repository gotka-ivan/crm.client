<template>
  <form class="card" @submit.prevent="register">
    <div class="card-content">
      <span class="card-title">Создать аккаунт</span>
      <div class="input-field">
        <input
          id="name"
          v-model="form.name"
          :class="{ invalid: $v.form.name.$dirty && !$v.form.name.required }"
          type="text"
        />
        <label for="name">Имя:</label>
        <small v-if="$v.form.name.$dirty && !$v.form.name.required" class="helper-text red-text"
          >Имя обязательно для заполнения</small
        >
      </div>
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
          >Пароль должен быть больше 4 символов</small
        >
      </div>
      <div class="input-field">
        <input
          id="repeatPassword"
          v-model="repeatPassword"
          :class="{
            invalid: $v.repeatPassword.$dirty && (!$v.repeatPassword.required || !$v.repeatPassword.sameAs)
          }"
          type="password"
        />
        <label for="repeatPassword">Повторный пароль:</label>
        <small
          v-if="$v.repeatPassword.$dirty && (!$v.repeatPassword.sameAs || !$v.repeatPassword.required)"
          class="helper-text red-text"
          >Пароли должны совпадать</small
        >
      </div>
    </div>
    <div class="card-action">
      <button type="submit" class="modal-action btn waves-effect">Создать</button>
    </div>
  </form>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Validations } from 'vuelidate-property-decorators'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import { auth } from '@/store/modules/auth/index'
import { RegisterRequest } from '@/models/Register'

@Component
class RegisterTemplate extends Vue {
  auth = auth.context(this.$store)
  form: RegisterRequest = new RegisterRequest()
  repeatPassword: string = ''
  @Validations()
  validations = {
    form: {
      name: { required },
      email: { required, email },
      password: { required, minLength: minLength(4) }
    },
    repeatPassword: {
      required,
      sameAs: sameAs((): string => {
        return this.form.password
      })
    }
  }

  register(): void {
    if (this.$v.$invalid) {
      this.$v.$touch()
      return
    }
    this.auth.actions.register(this.form).then(() => this.$router.push({ name: 'history' }))
  }
}
export default RegisterTemplate
</script>
