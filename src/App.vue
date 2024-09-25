<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Resume from './components/Resume.vue'
</script>

<template>
  <main class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-lg-3 p-0">
        <Resume></Resume>
      </div>
      <div class="col-md-9 col-lg-9 content p-3">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
