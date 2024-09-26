<script setup lang="ts">
import {
  faAngular,
  faGithub,
  faLinkedin,
  faLinux,
  faNodeJs,
  faReact,
  faVuejs
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
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
      <h4>Andre Gaete Barra</h4>
      <h6>Fullstack Developer</h6>
    </div>
    <div class="px-3 pb-5 flex-grow-1 d-flex flex-column justify-content-between">
      <div class="text-start">
        <hr />
        <h5>Habilidades</h5>
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
        </ul>
      </div>
      <div>
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
</style>
