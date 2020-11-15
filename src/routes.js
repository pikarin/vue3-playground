import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/ButtonsShowcase.vue'),
  },
  {
    path: '/todoapp',
    name: 'todoapp',
    component: () => import('./pages/TodoAppShowcase.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
