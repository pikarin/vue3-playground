import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/SearchSelectShowcase.vue'),
  },
  {
    path: '/todoapp',
    name: 'todoapp',
    component: () => import('./pages/TodoAppShowcase.vue'),
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: () => import('./pages/ButtonsShowcase.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
