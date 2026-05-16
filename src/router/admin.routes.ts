export const adminRoutes = [
  {
    path: '/admin',
    component: () => import('@/views/admin/AdminLayout.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'admin-dashboard',
        component: () => import('@/components/Admin/Dashboard.vue')
      },
      // Grupo de Registro
      {
        path: 'register-clients',
        name: 'register-clients',
        component: () => import('@/components/Admin/Register/RegisterClients.vue')
      },
      {
        path: 'register-staff',
        name: 'register-staff',
        component: () => import('@/components/Admin/Register/RegisterStaff.vue')
      },
      // Grupo de Vistas/Usuarios
      {
        path: 'view-clients',
        name: 'view-clients',
        component: () => import('@/components/Admin/Views/ViewClients.vue')
      },
      {
        path: 'view-staff',
        name: 'view-staff',
        component: () => import('@/components/Admin/Views/ViewStaff.vue')
      },
      // Pagos y Configuración
      {
        path: 'payments',
        name: 'payments',
        component: () => import('@/components/Admin/Payments.vue')
      },
      {
        path: 'pricing',
        name: 'pricing-management',
        component: () => import('@/components/Admin/ConfigAdmin/PricingManagement.vue')
      },
      {
        path: 'fees',
        name: 'fees-management',
        component: () => import('@/components/Admin/ConfigAdmin/FeesManagement.vue')
      },
      // Bitácora
      {
        path: 'attendance',
        name: 'attendance-log',
        component: () => import('@/components/Admin/Bitacora/AttendanceLog.vue')
      },
      {
        path: 'debtors',
        name: 'debtors-list',
        component: () => import('@/components/Admin/Bitacora/DebtorsList.vue')
      },
      {
        path: 'renewals',
        name: 'renewals',
        component: () => import('@/components/Admin/Bitacora/Renewals.vue')
      },
      {
        path: 'revenue',
        name: 'revenue-log',
        component: () => import('@/components/Admin/Bitacora/RevenueLog.vue')
      },
      // Ajustes generales
      {
        path: 'settings',
        name: 'admin-settings',
        component: () => import('@/components/Admin/Settings.vue')
      }
    ]
  }
]