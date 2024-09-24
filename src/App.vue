<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <main class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-lg-3 info text-center p-3">
        <img
          class="profile-pic mb-2"
          src="https://avatars.githubusercontent.com/u/24919733"
          alt=""
          srcset=""
        />
        <h4>Sebastian Gaete</h4>
        <h6>Estudiante de Tecnico Universitario en Informatica</h6>
        <hr />
        <div class="skills">
          <h5>Habilidades en:</h5>
          <ul>
            <li>HTML y CSS</li>
            <li>Javascript</li>
            <li>Python</li>
            <li>Ingles Avanzado C1</li>
            <li>Java</li>
            <li>Linux</li>
            <li>Photoshop</li>
          </ul>
        </div>
        <hr />
        <a href="https://github.com/Locksdn"><i class="fab fa-github fa-2x"></i></a>
        <a href="https://www.linkedin.com/in/sebastian-gaeteb/"
          ><i class="fab fa-linkedin fa-2x"></i
        ></a>
        <a href="mailto:sebastiangaeteb@gmail.com"><i class="fas fa-envelope fa-2x"></i></a>

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
      <div class="col-md-9 col-lg-9 content p-3">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
