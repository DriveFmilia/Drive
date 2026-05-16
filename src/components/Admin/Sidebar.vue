<template>
  <div class="dashboard-wrapper">
    <div v-if="isSidebarOpen" class="sidebar-overlay" @click="toggleSidebar"></div>

    <nav :class="['sidebar', { 'sidebar-open': isSidebarOpen }]">
      <div class="sidebar-header">
        <div class="header-main">
          <svg class="icon-small" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5H7z" fill="currentColor"/></svg>
          <span class="gym-title">Nombre del Gym</span>
        </div>
  
      </div>

      <div class="menu-scroll">
        <router-link to="/admin/profile" class="nav-item">
          <div class="nav-content">
            <svg class="nav-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor"/></svg>
            <span class="nav-text">Perfil</span>
          </div>
        </router-link>

        <router-link to="/admin/dashboard" class="nav-item">
          <div class="nav-content">
            <svg class="nav-icon" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor"/></svg>
            <span class="nav-text">Inicio</span>
          </div>
        </router-link>

        <div class="nav-group" :class="{ 'is-open': openSection === 'registro' }">
          <div class="nav-item group-header" @click="toggleGroup('registro')">
            <div class="nav-content">
              <svg class="nav-icon" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor"/></svg>
              <span class="nav-text">Registro</span>
            </div>
            <svg class="arrow-icon" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5H7z" fill="currentColor"/></svg>
          </div>
          <div class="submenu">
            <router-link to="/admin/register-clients" class="sub-item">
              <svg class="sub-icon color-blue" viewBox="0 0 24 24"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/></svg>
              Registrar Clientes
            </router-link>
            <router-link to="/admin/register-staff" class="sub-item">
              <svg class="sub-icon color-purple" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/></svg>
              Registrar Personal
            </router-link>
          </div>
        </div>

        <div class="nav-group" :class="{ 'is-open': openSection === 'usuarios' }">
          <div class="nav-item group-header" @click="toggleGroup('usuarios')">
            <div class="nav-content">
              <svg class="nav-icon" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/></svg>
              <span class="nav-text">Usuarios</span>
            </div>
            <svg class="arrow-icon" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5H7z" fill="currentColor"/></svg>
          </div>
          <div class="submenu">
            <router-link to="/admin/view-clients" class="sub-item">
              <svg class="sub-icon color-gray" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/></svg>
              Ver Clientes
            </router-link>
            <router-link to="/admin/view-staff" class="sub-item">
              <svg class="sub-icon color-gray" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/></svg>
              Ver Personal
            </router-link>
          </div>
        </div>

        <router-link to="/admin/payments" class="nav-item">
          <div class="nav-content">
            <svg class="nav-icon" viewBox="0 0 24 24"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V7H12v9z" fill="currentColor"/></svg>
            <span class="nav-text">Pagos</span>
          </div>
        </router-link>

        <div class="nav-group" :class="{ 'is-open': openSection === 'admin' }">
          <div class="nav-item group-header" @click="toggleGroup('admin')">
            <div class="nav-content">
              <svg class="nav-icon" viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" fill="currentColor"/></svg>
              <span class="nav-text">Administración</span>
            </div>
            <svg class="arrow-icon" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5H7z" fill="currentColor"/></svg>
          </div>
          <div class="submenu">
            <router-link to="/admin/pricing" class="sub-item">
              <svg class="sub-icon color-blue" viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" fill="currentColor"/></svg>
              Precios y Promos
            </router-link>
            <router-link to="/admin/fees" class="sub-item">
              <svg class="sub-icon color-purple" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 1.9 1.55 3.28 3.5 3.71V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="currentColor"/></svg>
              Multas y Recargos
            </router-link>
          </div>
        </div>

        <div class="nav-group" :class="{ 'is-open': openSection === 'bitacora' }">
          <div class="nav-item group-header" @click="toggleGroup('bitacora')">
            <div class="nav-content">
              <svg class="nav-icon" viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" fill="currentColor"/></svg>
              <span class="nav-text">Bitácora</span>
            </div>
            <svg class="arrow-icon" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5H7z" fill="currentColor"/></svg>
          </div>
          <div class="submenu">
            <router-link to="/admin/revenue" class="sub-item">
              <svg class="sub-icon color-blue" viewBox="0 0 24 24"><path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" fill="currentColor"/></svg>
              Ingresos
            </router-link>
            <router-link to="/admin/debtors" class="sub-item">
              <svg class="sub-icon color-purple" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/></svg>
              Deudores
            </router-link>
            <router-link to="/admin/attendance" class="sub-item">
              <svg class="sub-icon color-blue" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" fill="currentColor"/></svg>
              Asistencias
            </router-link>
            <router-link to="/admin/renewals" class="sub-item">
              <svg class="sub-icon color-purple" viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" fill="currentColor"/></svg>
              Renovación
            </router-link>
          </div>
        </div>

        <router-link to="/admin/settings" class="nav-item">
          <div class="nav-content">
            <svg class="nav-icon" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" fill="currentColor"/></svg>
            <span class="nav-text">Configuración</span>
          </div>
        </router-link>
      </div>

      <div class="sidebar-footer">
        <button class="btn-logout">
          <svg class="logout-icon" viewBox="0 0 24 24"><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" fill="currentColor"/></svg>
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </nav>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isSidebarOpen = ref(true);
const openSection = ref<string | null>(null);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const toggleGroup = (section: string) => {
  openSection.value = openSection.value === section ? null : section;
};
</script>

<style scoped>
.icon-small {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}
.dashboard-wrapper {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(180deg, #bbdcf2 0%, #89a7c0 100%);
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}


.sidebar {
  width: 280px;
  background: #5d6d7e;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
  transition: all 0.3s ease;
  z-index: 1000;
  flex-shrink: 0;
}

.sidebar-header {
  padding: 16px 20px;
  background: #4a5764;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-main { display: flex; align-items: center; gap: 6px; cursor: pointer; }
.gym-title { font-weight: 600; font-size: 1.25rem; }
.toggle-sidebar-btn { background: none; border: none; color: white; cursor: pointer; }
.grid-icon { width: 22px; }

.menu-scroll { flex: 1; overflow-y: auto; padding: 10px 0; }


.nav-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 22px;
  color: #e2e8f0;
  text-decoration: none;
  cursor: pointer;
}
.nav-item:hover { background: rgba(255,255,255,0.1); color: white; }
.nav-content { display: flex; align-items: center; gap: 14px; }
.nav-text { font-weight: 600; font-size: 0.9rem; }
.nav-icon { width: 22px; height: 22px; }

.arrow-icon { width: 24px; transition: 0.3s; }
.is-open .arrow-icon { transform: rotate(180deg); }

.submenu { max-height: 0; overflow: hidden; background: rgba(0,0,0,0.1); transition: 0.3s; }
.is-open .submenu { max-height: 400px; }
.sub-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 20px 10px 52px;
  color: #cbd5e0;
  text-decoration: none;
  font-size: 0.85rem;
}

.sub-icon { width: 18px; }
.color-blue { fill: #60a5fa; }
.color-purple { fill: #a78bfa; }
.color-gray { fill: #94a3b8; }

.sidebar-footer { padding: 20px; border-top: 1px solid rgba(255,255,255,0.1); }
.btn-logout {
  width: 45%; background: transparent; border: none;
  display: flex; align-items: center; gap: 12px;
  color: #ff0000; font-weight: 700; cursor: pointer;
}


.main-content { flex: 1; display: flex; flex-direction: column; width: 100%; }

.top-bar {
  padding: 15px 25px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
}

.top-icons { display: flex; gap: 18px; }
.t-icon { width: 24px; fill: #4a5764; cursor: pointer; }

.dashboard-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 20px;
}

.brand-card {
  background: #6b7280;
  padding: 40px 80px;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  text-align: center;
}
.brand-card h1 { color: white; margin: 0; font-size: 2.2rem; }

.actions-container { display: flex; gap: 30px; }
.action-btn {
  width: 160px; height: 120px;
  background: #6b7280; border: none; border-radius: 12px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 12px; color: white; cursor: pointer; transition: 0.3s;
}
.action-btn:hover { transform: translateY(-5px); background: #4b5563; }
.act-svg { width: 35px; fill: #1e3a8a; } /* Azul oscuro */
.action-btn span { font-weight: 800; font-size: 0.9rem; }

/* RESPONSIVE MÓVIL */
.mobile-toggle { display: none; }

@media (max-width: 900px) {
  .sidebar {
    position: fixed;
    left: -280px;
  }
  .sidebar-open { left: 0; }
  
  .sidebar-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 999;
  }

  .mobile-toggle {
    display: block;
    background: none; border: none;
    color: #4a5764; cursor: pointer;
  }

  .top-bar { justify-content: space-between; }

  .brand-card { padding: 30px 40px; width: 90%; }
  .brand-card h1 { font-size: 1.6rem; }
  
  .actions-container { flex-direction: column; width: 100%; align-items: center; }
  .action-btn { width: 80%; height: 100px; }
}


.menu-scroll::-webkit-scrollbar { width: 4px; }
.menu-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; }
</style>