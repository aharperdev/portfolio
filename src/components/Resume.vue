<script setup lang="ts">
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <div class="d-flex flex-column flex-center info text-center h-100 w-100">
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
        <h5>Habilidades en:</h5>
        <ul class="list-unstyled ps-1">
          <li>Angular/Vue/React</li>
          <li>Typescript</li>
          <li>Node</li>
          <li>Testing Automatizado</li>
          <li>Ingles Avanzado C1</li>
          <li>Linux</li>
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
