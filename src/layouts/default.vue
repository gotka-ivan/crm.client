<template>
  <div>
    <!--SIDEBAR-->
    <ul class="sidenav sidenav-fixed a-sidenav">
      <h4>Newborn</h4>
      <li class="bold"><a href="#" class="waves-effect waves-orange">Обзор</a></li>
      <li class="bold"><a href="#" class="waves-effect waves-orange">Аналитика</a></li>
      <li class="bold active"><a href="#" class="waves-effect waves-orange">История</a></li>
      <li class="bold"><a href="#" class="waves-effect waves-orange">Добавить заказ</a></li>
      <li class="bold "><a href="#" class="waves-effect waves-orange">Ассортимент</a></li>
      <li class="bold last"><a class="waves-effect waves-orange" @click="logout">Выйти</a></li>
    </ul>
    <!--CONTENT-->
    <main class="content">
      <slot />
    </main>

    <div id="order-list" class="modal modal-fixed-footer">
      <div class="modal-content">
        <h4 class="mb1">Заказ №5</h4>
        <table class="highlight">
          <thead>
            <tr>
              <th>Название</th>
              <th>Количество</th>
              <th>Цена</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Alvin</td>
              <td>3</td>
              <td>$0.87</td>
            </tr>
          </tbody>
        </table>
        <div class="order-summary">
          <p>Общая стоимость <strong>22 231 руб.</strong></p>
        </div>
      </div>
      <div class="modal-footer">
        <button class="modal-action waves-effect waves-black btn-flat">Закрыть</button>
      </div>
    </div>

    <!--Floating button-->
    <div class="fixed-action-btn" @click="getUser">
      <a class="btn-floating btn-large red">
        <i class="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a class="btn-floating green"><i class="material-icons">assignment</i></a>
        </li>
        <li>
          <a class="btn-floating blue"><i class="material-icons">list</i></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { auth } from '@/store/modules/auth/index'

@Component
class DefaultLayout extends Vue {
  auth = auth.context(this.$store)
  getUser(): void {
    this.auth.actions.getProfile().then(response => console.log(response))
  }
  logout(): void {
    this.auth.actions.logout().then(() => this.$router.push({ name: 'login' }))
  }
}
export default DefaultLayout
</script>
