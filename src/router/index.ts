import { createRouter, createWebHistory } from 'vue-router'
import Projects from '@/views/Projects.vue'
import Experience from '@/views/Experience.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Experience
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

export default router
