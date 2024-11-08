<script setup lang="ts">
import {
  faAngular,
  faGithub,
  faLinkedin,
  faLinux,
  faNodeJs,
  faPython,
  faReact,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faCog, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <div class="d-flex flex-column flex-center bg-primary overflow-hidden text-center h-100 w-100">
    <div class="d-flex flex-column align-items-center">
      <img
        class="profile-pic mb-3"
        src="https://avatars.githubusercontent.com/u/24919733"
        alt="avatar"
      />

      <div class="d-sm-inline d-md-none">
        <h4>Andre Gaete Barra</h4>
        <h6>Fullstack Developer</h6>
      </div>
    </div>
    <div class="px-3 pb-5 flex-grow-1 d-flex flex-column justify-content-between">
      <div class="text-start">
        <hr class="d-sm-inline d-md-none" />
        <h5>Habilidades</h5>
        <ul class="list-unstyled ps-1">
          <li class="d-flex gap-2 align-items-center">
            <FontAwesomeIcon :icon="faAngular" size="lg"></FontAwesomeIcon>
            <div class="d-flex flex-column w-100">
              <span>Angular</span>
            </div>
          </li>
          <li class="d-flex gap-2 align-items-center">
            <FontAwesomeIcon :icon="faVuejs" size="lg"></FontAwesomeIcon>
            <div class="d-flex flex-column w-100">
              <span>Vue</span>
            </div>
          </li>
          <li class="d-flex gap-2 align-items-center">
            <FontAwesomeIcon :icon="faReact" size="lg"></FontAwesomeIcon>
            <div class="d-flex flex-column w-100">
              <span>React</span>
            </div>
          </li>

          <li class="d-flex gap-2 align-items-center">
            <FontAwesomeIcon :icon="faCog" size="lg"></FontAwesomeIcon>
            <div class="d-flex flex-column w-100">
              <span>Testing Automatizado</span>
            </div>
          </li>

          <li class="d-flex gap-2 align-items-center">
            <FontAwesomeIcon :icon="faNodeJs" size="lg"></FontAwesomeIcon>
            <div class="d-flex flex-column w-100">
              <span>Node</span>
            </div>
          </li>

          <!-- python -->
          <li class="d-flex gap-2 align-items-center">
            <FontAwesomeIcon :icon="faPython" size="lg"></FontAwesomeIcon>
            <div class="d-flex flex-column w-100">
              <span>Python</span>
            </div>
          </li>

          <li class="d-flex gap-2 align-items-center">
            <FontAwesomeIcon :icon="faLinux" size="lg"></FontAwesomeIcon>
            <div class="d-flex flex-column w-100">
              <span>GNU/Linux</span>
            </div>
          </li>

          <li class="d-flex gap-2 align-items-center">
            <FontAwesomeIcon :icon="faLanguage" size="lg"></FontAwesomeIcon>
            <div class="d-flex flex-column w-100">
              <span>Ingles C1</span>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <hr />
        <div class="d-flex justify-content-around">
          <a href="https://github.com/aharperdev">
            <FontAwesomeIcon :icon="faGithub" size="2x"></FontAwesomeIcon>
          </a>
          <a href="https://www.linkedin.com/in/dandrebarra/">
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
