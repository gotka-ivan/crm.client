<template>
  <component :is="$route.meta.layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import authLayout from '@/layouts/auth.vue'
import defaultLayout from '@/layouts/default.vue'

@Component({
  components: { authLayout, defaultLayout }
})
class App extends Vue {}
export default App
</script>
