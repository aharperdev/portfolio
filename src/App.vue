<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Resume from './components/Resume.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <main class="container-fluid">
    <div class="row h-100">
      <div class="col-12 col-md-3 col-xl-2 p-0 sidebar">
        <Resume></Resume>
      </div>
      <div class="col content bg-light">
        <div class="d-flex flex-column h-100 w-100">
          <div class="row px-5 pt-4 bg-secondary header">
            <div class="col-9 d-flex pb-0">
              <div class="d-flex flex-column justify-content-between">
                <div class="d-flex flex-column py-5">
                  <h1 class="lh-1 mb-0 fw-bold">Andre Gaete Barra</h1>
                  <span class="fs-4"> FullStack Developer </span>
                </div>
                <div class="d-flex">
                  <RouterLink
                    to="/"
                    preload="mount"
                    class="fs-2 mb-0 py-1 px-3 rounded-top-1"
                    :class="{ 'text-light': $route.path !== '/' }"
                    exact-active-class="bg-light text-secondary"
                  >
                    <FontAwesomeIcon :icon="faUser" size="2xs"></FontAwesomeIcon>
                    <span :class="{ 'd-none': $route.path !== '/' }" class="d-lg-inline ms-2"
                      >Experiencia</span
                    ></RouterLink
                  >
                  <RouterLink
                    to="/projects"
                    preload="mount"
                    class="fs-2 mb-0 py-1 px-3 rounded-top-1"
                    :class="{ 'text-light': $route.path !== '/projects' }"
                    exact-active-class="bg-light text-secondary"
                  >
                    <FontAwesomeIcon :icon="faCodeBranch" size="2xs"></FontAwesomeIcon>
                    <span
                      :class="{ 'd-none': $route.path !== '/projects' }"
                      class="d-lg-inline ms-2"
                      >Proyectos</span
                    ></RouterLink
                  >
                </div>
              </div>
            </div>
            <img
              class="col-3 align-self-end"
              src="@/assets/img/logo.svg"
              style="max-width: 250px"
              alt="Vue logo"
            />
          </div>

          <div class="overflow-scroll flex-grow-1">
            <RouterView class="h-100" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

@media (min-width: 768px) {
  .sidebar {
    max-width: 300px;
  }

  .header {
    height: 300px;
  }
}
</style>
