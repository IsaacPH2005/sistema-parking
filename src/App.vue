<script setup>
import { RouterLink, RouterView } from 'vue-router'

import NavBar from './layout/NavBar.vue';
</script>

<template>
  <div id="app">
    <NavBar />
    <main class="container-fluid px-4 py-3">
      <router-view />
    </main>
  </div>
</template>

<style scoped>

</style>
