<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Resume from './components/Resume.vue'
</script>

<template>
  <main class="container-fluid">
    <div class="row h-100">
      <div class="col-md-3 col-xl-2 p-0">
        <Resume></Resume>
      </div>
      <div class="col-md-9 col-xl-10 content bg-light">
        <div class="d-flex flex-column h-100 w-100">
          <div class="row px-5 py-4 bg-secondary">
            <div class="col-9"></div>
            <img
              class="col-3"
              src="@/assets/img/logo.svg"
              style="max-width: 250px"
              alt="Vue logo"
            />
          </div>
          <!-- <div class="d-flex">
            <RouterLink to="/home" class="mx-2">Home</RouterLink>
            <RouterLink to="/about" class="mx-2">About</RouterLink>
          </div> -->
          <RouterView />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
