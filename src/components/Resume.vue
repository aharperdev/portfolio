<script setup lang="ts">
import {
  faAngular,
  faGithub,
  faLinkedin,
  faLinux,
  faNodeJs,
  faReact,
  faVuejs,
  type IconDefinition
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faCodeBranch, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

type Route = {
  to: string
  text: string
  icon?: IconDefinition
}

const routes: Route[] = [
  {
    to: '/',
    text: 'Experiencia'
    // icon: faUser
  },
  {
    to: '/projects',
    text: 'Proyectos'
    // icon: faCodeBranch
  }
]
</script>

<template>
  <div class="d-flex flex-column flex-center bg-primary overflow-hidden text-center h-100 w-100">
    <div class="d-flex flex-column align-items-center">
      <img
        class="profile-pic mb-3"
        src="https://avatars.githubusercontent.com/u/24919733"
        alt="avatar"
      />

      <div class="d-sm-inline pb-3 d-md-none">
        <h4>Andre Gaete Barra</h4>
        <h6>Fullstack Developer</h6>
      </div>
    </div>
    <div class="flex-grow-1 d-md-flex d-none flex-column justify-content-between">
      <div class="text-end d-flex flex-column">
        <hr class="d-sm-inline d-md-none" />
        <!-- <h5>Habilidades</h5>
        <ul class="list-unstyled ps-1">
          <li class="d-flex gap-2 align-items-center">
            <FontAwesomeIcon :icon="faAngular" size="lg"></FontAwesomeIcon>
            <div class="d-flex flex-column w-100">
              <span>Angular</span>
              <div style="height: 10px" class="progress-bar bg-light rounded-1">
                <div class="progress bg-secondary rounded-0" style="width: 80%"></div>
              </div>
            </div>
          </li>
          <li class="d-flex gap-2 align-items-center">
            <FontAwesomeIcon :icon="faVuejs" size="lg"></FontAwesomeIcon>
            <div class="d-flex flex-column w-100">
              <span>Vue</span>
              <div style="height: 10px" class="progress-bar bg-light rounded-1">
                <div class="progress bg-secondary rounded-0" style="width: 60%"></div>
              </div>
            </div>
          </li>
          <li class="d-flex gap-2 align-items-center">
            <FontAwesomeIcon :icon="faReact" size="lg"></FontAwesomeIcon>
            <div class="d-flex flex-column w-100">
              <span>React</span>
              <div style="height: 10px" class="progress-bar bg-light rounded-1">
                <div class="progress bg-secondary rounded-0" style="width: 40%"></div>
              </div>
            </div>
          </li>

          <li class="d-flex gap-2 align-items-center">
            <FontAwesomeIcon :icon="faCog" size="lg"></FontAwesomeIcon>
            <div class="d-flex flex-column w-100">
              <span>Testing Automatizado</span>
              <div style="height: 10px" class="progress-bar bg-light rounded-1">
                <div class="progress bg-secondary rounded-0" style="width: 72%"></div>
              </div>
            </div>
          </li>

          <li class="d-flex gap-2 align-items-center">
            <FontAwesomeIcon :icon="faNodeJs" size="lg"></FontAwesomeIcon>
            <div class="d-flex flex-column w-100">
              <span>Node</span>
              <div style="height: 10px" class="progress-bar bg-light rounded-1">
                <div class="progress bg-secondary rounded-0" style="width: 56%"></div>
              </div>
            </div>
          </li>

          <li class="d-flex gap-2 align-items-center">
            <FontAwesomeIcon :icon="faLinux" size="lg"></FontAwesomeIcon>
            <div class="d-flex flex-column w-100">
              <span>GNU/Linux</span>
              <div style="height: 10px" class="progress-bar bg-light rounded-1">
                <div class="progress bg-secondary rounded-0" style="width: 76%"></div>
              </div>
            </div>
          </li>

          <li class="d-flex gap-2 align-items-center">
            <div class="d-flex flex-column w-100">
              <span>Ingles</span>
              <div style="height: 10px" class="progress-bar bg-light rounded-1">
                <div class="progress bg-secondary rounded-0" style="width: 60%"></div>
              </div>
            </div>
          </li>
        </ul> -->
        <RouterLink
          v-for="route in routes"
          :to="route.to"
          :class="{
            'text-decoration-underline': $route.path === route.to
          }"
          class="fs-3 my-0 py-0 px-2 ps-3 rounded-start-1 text-light"
        >
          <FontAwesomeIcon v-if="route.icon" :icon="route.icon" size="2xs"></FontAwesomeIcon>
          {{ route.text }}</RouterLink
        >
      </div>
      <div class="p-4">
        <hr />
        <div class="d-flex justify-content-around">
          <a href="https://github.com/Locksdn">
            <FontAwesomeIcon :icon="faGithub" size="2x"></FontAwesomeIcon>
          </a>
          <a href="https://www.linkedin.com/in/sebastian-gaeteb/">
            <FontAwesomeIcon :icon="faLinkedin" size="2x"></FontAwesomeIcon>
          </a>
          <a href="mailto:dandrebarra@gmail.com">
            <FontAwesomeIcon :icon="faEnvelope" size="2x"></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.info i {
  padding: 0px 10px;
}

li {
  padding: 5px 10px;
}

.progress {
  animation: progress 1.6s;
}

@keyframes progress {
  from {
    width: 0;
  }
}

.profile-pic {
  height: 300px;
}

@media (max-width: 768px) {
  .profile-pic {
    border-radius: 50%;
  }
}

@media (min-width: 768px) {
  .profile-pic {
    margin-top: 0;
    border-radius: 0;
  }
}
</style>
