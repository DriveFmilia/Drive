import { createRouter, createWebHistory } from 'vue-router'
import { adminRoutes } from './admin.routes' 
import Login from '../landing/Menu/Login.vue'
import Main from '../landing/Main.vue'
import RecoverPassword from '@/landing/Menu/Recover-password.vue'
import Record from '@/landing/Menu/Record.vue'
import RecordClient from '@/components/Record/Record-Client.vue'
import RecoverPasswordClient  from '@/components/Record/Recover-password.vue'
import LoginClient  from '@/components/Login.vue'

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
      path: '/loginclient', 
      name: 'loginclient',
      component: LoginClient,
    },
    {
      path: '/RecoverPassword',
      name: 'recover-password',
      component: RecoverPassword,
    },
    {
      path: '/RecoverPasswordClient',
      name: 'recover-password-client',
      component: RecoverPasswordClient,
    },
    {
      path: '/Record',
      name: 'record',
      component: Record,
    },
    {
      path: '/RecordClient',
      name: 'recordclient',
      component: RecordClient,
    },
    
    ...adminRoutes, 
  ],
})

export default router