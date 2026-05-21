<template>
  <div class="dashboard-wrapper">
    <transition name="fade">
      <div v-if="isSidebarOpen" class="sidebar-overlay" @click="toggleSidebar"></div>
    </transition>

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
              <span>Registrar Clientes</span>
            </router-link>
            <router-link to="/admin/register-staff" class="sub-item">
              <svg class="sub-icon color-purple" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/></svg>
              <span>Registrar Personal</span>
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
              <span>Ver Clientes</span>
            </router-link>
            <router-link to="/admin/view-staff" class="sub-item">
              <svg class="sub-icon color-gray" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/></svg>
              <span>Ver Personal</span>
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
              <span>Precios y Promos</span>
            </router-link>
            <router-link to="/admin/fees" class="sub-item">
              <svg class="sub-icon color-purple" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 1.9 1.55 3.28 3.5 3.71V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="currentColor"/></svg>
              <span>Multas y Recargos</span>
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
              <span>Ingresos</span>
            </router-link>
            <router-link to="/admin/debtors" class="sub-item">
              <svg class="sub-icon color-purple" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/></svg>
              <span>Deudores</span>
            </router-link>
            <router-link to="/admin/attendance" class="sub-item">
              <svg class="sub-icon color-blue" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" fill="currentColor"/></svg>
              <span>Asistencias</span>
            </router-link>
            <router-link to="/admin/renewals" class="sub-item">
              <svg class="sub-icon color-purple" viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" fill="currentColor"/></svg>
              <span>Renovación</span>
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

    <div class="main-content">
      <header class="top-bar">
        <button class="mobile-toggle" @click="toggleSidebar" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <div class="top-icons">
          </div>
      </header>

      <main class="dashboard-body">
        <div class="brand-card">
          <h1>ULTRA FITNESS CENTER</h1>
        </div>
        <div class="actions-container">
          <button class="action-btn">
            <span>Acción 1</span>
          </button>
          <button class="action-btn">
            <span>Acción 2</span>
          </button>
        </div>
      </main>
    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Variables de Color (Inspiradas en tus capturas) */
:origin {
  --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  --sidebar-bg: rgba(15, 23, 42, 0.45);
  --sidebar-border: rgba(255, 255, 255, 0.08);
  --nav-hover: rgba(255, 255, 255, 0.06);
  --active-blue: #3b82f6;
  --text-muted: #94a3b8;
}

.dashboard-wrapper {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(140deg, #070b12 0%, #111827 50%, #0b111e 100%);
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  color: #f8fafc;
}

/* --- SIDEBAR (Efecto Cristal Esmerilado) --- */
.sidebar {
  width: 280px;
  background: rgba(13, 20, 35, 0.65);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  flex-shrink: 0;
}

.sidebar-header {
  padding: 24px 20px;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.header-main { 
  display: flex; 
  align-items: center; 
  gap: 10px; 
}

.gym-title { 
  font-weight: 700; 
  font-size: 1.15rem; 
  letter-spacing: -0.02em;
  background: linear-gradient(to right, #ffffff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.icon-small {
  width: 20px;
  height: 20px;
  color: #3b82f6;
}

/* --- SCROLL MENU --- */
.menu-scroll { 
  flex: 1; 
  overflow-y: auto; 
  padding: 16px 12px; 
}

/* --- ITEMS DEL MENÚ --- */
.nav-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  color: #94a3b8;
  text-decoration: none;
  cursor: pointer;
  border-radius: 12px;
  margin-bottom: 4px;
  transition: all 0.2s ease;
}

.nav-item:hover { 
  background: rgba(255, 255, 255, 0.05); 
  color: #ffffff; 
}

/* Elemento Activo (Rutas activas de Vue Router automáticamente) */
.router-link-active.nav-item {
  background: rgba(59, 130, 246, 0.12);
  border: 1px solid rgba(59, 130, 246, 0.25);
  color: #3b82f6;
}

.router-link-active.nav-item .nav-icon {
  color: #3b82f6;
}

.nav-content { 
  display: flex; 
  align-items: center; 
  gap: 12px; 
}

.nav-text { 
  font-weight: 500; 
  font-size: 0.92rem; 
}

.nav-icon { 
  width: 20px; 
  height: 20px; 
  color: #64748b;
  transition: color 0.2s;
}

.nav-item:hover .nav-icon {
  color: #f1f5f9;
}

/* Flechas grupos */
.arrow-icon { 
  width: 18px; 
  height: 18px;
  color: #475569;
  transition: transform 0.25s ease; 
}
.is-open .arrow-icon { 
  transform: rotate(180deg); 
  color: #3b82f6;
}

/* --- SUBMENÚS DESPLEGABLES --- */
.submenu { 
  max-height: 0; 
  overflow: hidden; 
  background: rgba(0, 0, 0, 0.15); 
  border-radius: 8px;
  margin: 0 4px;
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
}

.is-open .submenu { 
  max-height: 300px; 
  margin-bottom: 8px;
  border: 1px solid rgba(255, 255, 255, 0.02);
}

.sub-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px 10px 44px;
  color: #64748b;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.sub-item:hover { 
  color: #ffffff; 
  background: rgba(255, 255, 255, 0.03);
}

.router-link-active.sub-item {
  color: #ffffff;
  font-weight: 600;
}

.sub-icon { 
  width: 16px; 
  height: 16px;
  opacity: 0.7;
}
.sub-item:hover .sub-icon {
  opacity: 1;
}

/* Variaciones de colores de tus SVGs originales */
.color-blue { fill: #3b82f6; }
.color-purple { fill: #a855f7; }
.color-gray { fill: #94a3b8; }

/* --- FOOTER / LOGOUT --- */
.sidebar-footer { 
  padding: 16px; 
  border-top: 1px solid rgba(255, 255, 255, 0.04); 
}

.btn-logout {
  width: 100%; 
  background: rgba(239, 68, 68, 0.06); 
  border: 1px solid rgba(239, 68, 68, 0.15);
  border-radius: 10px;
  padding: 12px;
  display: flex; 
  align-items: center; 
  justify-content: center;
  gap: 10px;
  color: #ef4444; 
  font-weight: 600; 
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-logout:hover {
  background: #ef4444;
  color: #ffffff;
  box-shadow: 0 8px 20px rgba(239, 68, 68, 0.25);
}

.logout-icon { 
  width: 18px; 
  height: 18px; 
}

/* --- ESTRUCTURA MAIN LAYOUT --- */
.main-content { 
  flex: 1; 
  display: flex; 
  flex-direction: column; 
  width: 100%; 
}

.top-bar {
  padding: 0 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.dashboard-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 24px;
}

/* Tarjeta Principal de marca (Simulando las fotos de referencia) */
.brand-card {
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 48px 64px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  text-align: center;
}
.brand-card h1 { 
  color: white; 
  margin: 0; 
  font-size: 2rem; 
  letter-spacing: 1px;
}

.actions-container { display: flex; gap: 24px; }

.action-btn {
  width: 160px; 
  height: 110px;
  background: rgba(255, 255, 255, 0.03); 
  border: 1px solid rgba(255, 255, 255, 0.08); 
  border-radius: 16px;
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
  gap: 12px; 
  color: white; 
  cursor: pointer; 
  transition: all 0.25s ease;
}

.action-btn:hover { 
  transform: translateY(-4px); 
  background: rgba(59, 130, 246, 0.1);
  border-color: #3b82f6;
  box-shadow: 0 10px 20px rgba(59, 130, 246, 0.15);
}

/* --- RESPONSIVO MÓVIL --- */
.mobile-toggle { display: none; }

@media (max-width: 900px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    transform: translateX(-100%);
  }
  .sidebar-open { 
    transform: translateX(0); 
    box-shadow: 20px 0 40px rgba(0,0,0,0.5);
  }
  
  .sidebar-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    z-index: 999;
  }

  .mobile-toggle {
    display: block;
    background: rgba(255,255,255,0.05); 
    border: 1px solid rgba(255,255,255,0.1);
    color: white; 
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
  }

  .top-bar { justify-content: space-between; }
  .brand-card { padding: 32px; width: 100%; }
  .brand-card h1 { font-size: 1.5rem; }
  .actions-container { flex-direction: column; width: 100%; }
  .action-btn { width: 100%; height: 80px; }
}

/* Animación de entrada de overlay */
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Custom Scrollbar */
.menu-scroll::-webkit-scrollbar { width: 5px; }
.menu-scroll::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
.menu-scroll::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }
</style>