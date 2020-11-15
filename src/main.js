import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './index.css'

import ShowcaseButtons from './components/ShowcaseButtons.vue'
import ShowcaseTodoApp from './components/ShowcaseTodoApp.vue'

// const ShowcaseButtons = () => import('./components/ShowcaseButtons')
// const ShowcaseTodoApp = () => import('./components/ShowcaseTodoApp')

const routes = [
  { path: '/', name: 'home', component: ShowcaseButtons },
  { path: '/todoapp', name: 'todoapp', component: ShowcaseTodoApp },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
