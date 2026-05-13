import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Main from '../landing/Main.vue'

// router/index.ts
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',    
      name: 'home',
      component: Main, 
    },
    {
      path: '/login', 
      name: 'login',
      component: Login,
    },
  ],
})
export default router