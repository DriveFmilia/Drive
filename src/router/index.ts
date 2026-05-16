import { createRouter, createWebHistory } from 'vue-router'
import { adminRoutes } from './admin.routes' 
import Login from '../landing/Menu/Login.vue'
import Main from '../landing/Main.vue'
import RecoverPassword from '@/landing/Menu/Recover-password.vue'
import Record from '@/landing/Menu/Record.vue'

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
    {
      path: '/RecoverPassword',
      name: 'recover-password',
      component: RecoverPassword,
    },
    {
      path: '/Record',
      name: 'record',
      component: Record,
    },
    
    ...adminRoutes, 
  ],
})

export default router