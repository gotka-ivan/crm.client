<template>
  <div>
    <nav>
      <div class="nav-wrapper grey darken-1">
        <a href="#" class="brand-logo">Newborn</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link :to="{ name: 'login' }">Вход</router-link></li>
          <li><router-link :to="{ name: 'register' }">Регистрация</router-link></li>
        </ul>
      </div>
    </nav>

    <div class="auth-block">
      <slot />
    </div>
  </div>
</template>
