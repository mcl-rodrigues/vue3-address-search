<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <AppHeader />
    <main class="flex-fill d-flex align-items-center justify-content-center">
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>
