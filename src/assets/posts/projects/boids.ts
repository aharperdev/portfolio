import type { Post } from '@/components/Post.vue'

export const BoidsProject: Post = {
  title: 'Quadtrees',
  tags: [
    { text: 'Javascript', className: 'js' },
    { text: 'p5.js', className: 'text-white p5' }
  ],
  links: [
    {
      text: 'Github',
      url: 'https://github.com/Locksdn/p5-quadtrees',
      icon: 'fa-brands fa-square-github'
    },
    { text: 'Live demo', url: 'https://locksdn.github.io/p5-quadtrees/' }
  ],
  content: `
  <p class="card-text">
    Pruebas con
    <a href="https://es.wikipedia.org/wiki/Quadtree">Arboles Cuartenarios</a>
    y sus distintos usos, como
    <a href="https://es.wikipedia.org/wiki/Comportamiento_de_bandada">Boids</a> o
    <a href="#">Simulaciones de Gravedad</a>.
  </p>
  <div class="container-fluid">
    <div class="row g-2">
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
  `
}
