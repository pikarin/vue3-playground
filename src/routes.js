import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./components/ShowcaseButtons.vue'),
  },
  {
    path: '/todoapp',
    name: 'todoapp',
    component: () => import('./components/ShowcaseTodoApp.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
