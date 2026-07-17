<template>
  <div class="app-wrapper" :class="{ 'sidebar-open': isSidebarOpen }">
    <transition name="fade">
      <div v-if="isSidebarOpen" class="sidebar-overlay" @click="toggleSidebar"></div>
    </transition>

    <aside class="sidebar-container">
      <Sidebar />
    </aside>

    <nav class="top-nav">
      <div class="nav-left">
        <button class="nav-action-btn glass-effect" @click="toggleSidebar" aria-label="Abrir menú">
          <svg viewBox="0 0 24 24" class="svg-icon">
            <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"/>
          </svg>
        </button>
        <button class="nav-action-btn glass-effect" @click="activeModal = 'website'" title="Ir al Sitio Web">
          <svg viewBox="0 0 24 24" class="svg-icon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
        </button>
      </div>

      <div class="nav-right">
        <button class="nav-action-btn glass-effect" @click="activeModal = 'qr'" title="QR del Gimnasio">
          <svg viewBox="0 0 24 24" class="svg-icon"><path d="M3 4.5V8h2V4.5A1.5 1.5 0 0 1 6.5 3H10V1H6.5A3.5 3.5 0 0 0 3 4.5zm14.5-3.5H14v2h3.5A1.5 1.5 0 0 1 19 4.5V8h2V4.5A3.5 3.5 0 0 0 17.5 1zM3 17.5V14h2v3.5A1.5 1.5 0 0 0 6.5 19H10v2H6.5A3.5 3.5 0 0 1 3 17.5zm18 0V14h-2v3.5a1.5 1.5 0 0 1-1.5 1.5H14v2h3.5a3.5 3.5 0 0 1 3.5-3.5zM7 7h4v4H7V7zm5-1h4v4h-4V6zM7 13h4v4H7v-4zm5 0h1v1h-1v-1zm1 1h1v1h-1v-1zm-1 1h1v1h-1v-1zm3-2h1v1h-1v-1zm-1 1h1v1h-1v-1zm1 1h1v1h-1v-1z"/></svg>
        </button>
        <button class="nav-action-btn glass-effect notification" @click="isNotificationsOpen = true" title="Notificaciones">
          <span class="dot"></span>
          <svg viewBox="0 0 24 24" class="svg-icon"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
        </button>
      </div>
    </nav>
    
    <div v-if="activeModal" class="modal-wrapper" @click.self="activeModal = null">
      <div v-if="activeModal === 'qr'" class="custom-panel glass-effect">
        <div class="panel-header">
          <h3>Código QR de Acceso</h3>
          <button class="close-panel" @click="activeModal = null">&times;</button>
        </div>
        <div class="panel-body">
          <div class="qr-container">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=ULTRAFITNESS" alt="QR Code">
          </div>
          <p>Muestra este código en la entrada para que los socios registren su asistencia.</p>
          <button class="action-btn-full">Descargar para Imprimir</button>
        </div>
      </div>

      <div v-if="activeModal === 'website'" class="custom-panel glass-effect">
        <div class="panel-header">
          <h3>Tu Sitio Web</h3>
          <button class="close-panel" @click="activeModal = null">&times;</button>
        </div>
        <div class="panel-body">
          <div class="web-preview">
            <svg viewBox="0 0 24 24" class="large-svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H9v-2h6v2zm4-4H5V6h14v8z"/></svg>
          </div>
          <p>Gestiona la apariencia pública de tu gimnasio desde aquí.</p>
          <button class="action-btn-full outline">Visitar Sitio Público</button>
          <button class="action-btn-full">Configurar landing page</button>
        </div>
      </div>
    </div>
    
  <main class="main-content-wrapper">
      <slot /> 
    </main>

    <NotificationsPanel :is-open="isNotificationsOpen" :notifications="notifications" @close="isNotificationsOpen = false" />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Oswald&display=swap');

.app-wrapper { min-height: 100vh; background: #0a0a0a; font-family: 'Inter', sans-serif; }

.sidebar-container { width: 280px; height: 100vh; position: fixed; top: 0; left: 0; background: #0f172a; transform: translateX(-100%); transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); z-index: 3000; }
.sidebar-open .sidebar-container { transform: translateX(0); }
.sidebar-overlay { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.5); z-index: 2999; cursor: pointer; }

.top-nav { 
  display: flex; justify-content: space-between; 
  padding: 12px 20px; background: #22212144; 
  border-bottom: 1px solid rgba(255, 255, 255, 0.09); 
}

.nav-left, .nav-right { display: flex; gap: 10px; align-items: center; }

.nav-action-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px; border-radius: 12px;
  cursor: pointer; display: flex; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-action-btn:hover { 
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.1); 
  border-color: #3b82f6; 
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}

.svg-icon { width: 24px; height: 24px; fill: #f5f5f4; pointer-events: none; }

.notification { position: relative; }
.dot { 
  position: absolute; top: 6px; right: 6px; 
  width: 7px; height: 7px; 
  background: #3b82f6; border-radius: 50%; 
}

.modal-wrapper {
  position: fixed; inset: 0; z-index: 4000;
  display: flex; align-items: center; justify-content: center;
  background: rgba(0, 0, 0, 0.8); backdrop-filter: blur(8px);
}

.custom-panel {
  background: #121212;
  border: 1px solid rgba(255, 255, 255, 0.09);
  color: #f5f5f4;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  width: 92%;
  max-width: 440px;
}

.panel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.panel-header h3 { font-family: 'Oswald', sans-serif; font-size: 1.3rem; margin: 0; color: #1c4fd6; }

.close-panel {
  background: rgba(255, 255, 255, 0.03);
  border: none; color: #f5f5f4;
  font-size: 1.6rem; width: 36px; height: 36px;
  border-radius: 12px; cursor: pointer;
  transition: all 0.2s ease;
}
.close-panel:hover { background: rgba(239, 68, 68, 0.1); color: #ef4444; }

.panel-body { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 24px; }
.qr-container { background: #f5f5f4; padding: 16px; border-radius: 16px; }
.qr-container img { width: 180px; height: 180px; display: block; }

.web-preview {
  width: 70px; height: 70px; background: rgba(255, 255, 255, 0.03);
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.web-preview:hover {
  transform: translateY(-8px);
  background: rgba(28, 79, 214, 0.2);
  border-color: rgba(28, 79, 214, 0.5);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}
.large-svg { width: 32px; fill: #f5f5f4; pointer-events: none; }

.panel-body p { color: rgba(245, 245, 244, 0.55); font-size: 0.95rem; line-height: 1.6; margin: 0; }

.action-btn-full {
  width: 100%; padding: 14px; border-radius: 12px; border: none;
  background: #1c4fd6; color: #ffffff;
  font-family: 'Oswald', sans-serif; font-size: 0.95rem;
  cursor: pointer; transition: all 0.2s ease;
}
.action-btn-full.outline {
  background: transparent; border: 1.5px solid rgba(255, 255, 255, 0.15);
  color: #f5f5f4; margin-top: 8px;
}
.action-btn-full:hover { background: #123ba0; transform: translateY(-1px); }
</style>

<script setup>
import { ref } from 'vue';
import Sidebar from './Sidebar.vue';
import NotificationsPanel from './Notifications/NotificationsPanel.vue';

const isSidebarOpen = ref(false);
const isNotificationsOpen = ref(false);
const activeModal = ref(null);
const notifications = ref([{ id: 1, title: 'Sistema', message: 'Bienvenido', time: 'ahora', read: false }]);
const toggleSidebar = () => { isSidebarOpen.value = !isSidebarOpen.value; };
</script>