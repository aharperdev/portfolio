<script setup lang="ts"></script>

<template>
  <h2>Proyectos</h2>
  <div class="projects container-fluid">
    <div class="row justify-content-center">
      <div class="col-lg-12">
        <div class="card mb-2">
          <div class="card-header p-0 d-flex">
            <div class="p-2 js">Javascript</div>
            <div class="p-2 p5 text-white">p5.js</div>
          </div>
          <div class="card-body">
            <h4 class="card-title">Quadtrees</h4>
            <p class="card-text">
              Pruebas con
              <a href="https://es.wikipedia.org/wiki/Quadtree">Arboles Cuartenarios</a>
              y sus distintos usos, como
              <a href="https://es.wikipedia.org/wiki/Comportamiento_de_bandada">Boids</a> o
              <a href="#">Simulaciones de Gravedad</a>.
            </p>
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6 text-center pt-2">
                  <h6>Query segun region</h6>
                  <iframe
                    width="215px"
                    height="215px"
                    scrolling="no"
                    src="https://locksdn.github.io/p5-quadtrees/"
                    frameborder="0"
                  ></iframe>
                </div>
                <div class="col-lg-6 text-center pt-2">
                  <h6>Boids</h6>
                  <iframe
                    width="215px"
                    height="215px"
                    scrolling="no"
                    src="https://locksdn.github.io/p5-quadtrees/Boids/boids.html"
                    frameborder="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer d-flex flex-row justify-content-evenly">
            <a href="https://github.com/Locksdn/p5-quadtrees" class="p-2">
              <i class="fab fa-github-square"></i>
              Github
            </a>
            <a href="https://locksdn.github.io/p5-quadtrees/" class="p-2">Demo</a>
          </div>
        </div>
      </div>

      <div class="col-lg-12">
        <div class="card mb-2">
          <div class="card-header p-0 d-flex flex-row">
            <div class="p-2 laravel">Laravel</div>
            <div class="p-2 js">Javascript</div>
            <div class="p-2 mysql">MySQL</div>
          </div>
          <div class="card-body">
            <h4 class="card-title">Panel de Administracion</h4>
            <p>
              Aplicacion Web de administracion de entidades en Laravel realizada como trabajo final
              para Diseño y Programación Orientada a la Web.
            </p>
            <img class="img-fluid p-3" src="@/assets/img/screenshot_2.png" alt="screenshot" />
            <p>Se administran 4 entidades: Autor, Libro, Editorial y Ejemplar.</p>
            <img class="img-fluid p-3" src="@/assets/img/screenshot.png" alt="screenshot" />
          </div>
          <div class="card-footer d-flex flex-row justify-content-evenly">
            <a href="https://github.com/Locksdn/usm-progweb-final" class="p-2">
              <i class="fab fa-github-square"></i>
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
