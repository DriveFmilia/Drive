<template>
  <div class="dashboard-wrapper" :class="{ 'sidebar-open': isSidebarOpen }">
    <transition name="fade">
      <div v-if="isSidebarOpen" class="sidebar-overlay" @click="toggleSidebar"></div>
    </transition>

    <aside class="sidebar-container">
      <Sidebar />
    </aside>

    <div class="main-layout">
      <nav class="top-nav">
        <div class="nav-left">
          <button class="toggle-btn" @click="toggleSidebar" aria-label="Abrir menú" title="Abrir menú">
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

          <button class="nav-action-btn glass-effect notification" title="Notificaciones">
            <span class="dot"></span>
            <svg viewBox="0 0 24 24" class="svg-icon"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
          </button>
        </div>
      </nav>

      <main class="dashboard-content">
        <div class="gym-brand-card">
          <h1 class="gym-name-display">ULTRA FITNESS CENTER</h1>
          <p class="gym-subtitle">Sistema de Gestión de Alto Rendimiento</p>
        </div>

        <div class="attendance-methods">
          <button class="attendance-btn glass-effect" @click="openCamera('facial')">
            <svg class="svg-btn" viewBox="0 0 24 24"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/></svg>
            <span>Asistencia Facial</span>
          </button>
          <button class="attendance-btn glass-effect" @click="openCamera('scanner')">
            <svg class="svg-btn" viewBox="0 0 24 24"><path d="M4 4h7V11H4V4M13 4h7V11h-7V4M4 13h7v7H4v-7M13 13h3v2h-3v-2M18 13h2v2h-2v-2M13 15h2v2h-2v-2M15 18h2v2h-2v-2M18 18h2v2h-2v-2M13 18h2v2h-2v-2M18 15h2v2h-2v-2z"/></svg>
            <span>Escáner QR</span>
          </button>
        </div>

        <div class="action-buttons-container">
          <button class="action-card primary" @click="activeModal = 'add-schedule'">
            <div class="action-icon">
               <svg viewBox="0 0 24 24" class="svg-btn"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
            </div>
            <div class="card-info">
              <span class="main-text">Añadir Horario</span>
              <span class="sub-text">Gestión de turnos</span>
            </div>
          </button>

          <button class="action-card secondary" @click="activeModal = 'view-schedule'">
            <div class="action-icon">
               <svg viewBox="0 0 24 24" class="svg-btn"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
            </div>
            <div class="card-info">
              <span class="main-text">Ver Horario</span>
              <span class="sub-text">Lunes a Domingo</span>
            </div>
          </button>
        </div>
      </main>
      
      <transition name="pop">
        <div v-if="activeModal" class="modal-wrapper" @click.self="closeModal">
          
          <div v-if="activeModal === 'facial' || activeModal === 'scanner'" class="camera-panel glass-effect">
            <div class="panel-header">
              <h3>{{ activeModal === 'facial' ? 'Escaneo Facial' : 'Escaneando QR' }}</h3>
              <button class="close-panel" @click="closeModal">&times;</button>
            </div>
            
            <div class="camera-container">
              <video ref="videoPlayer" autoplay playsinline class="video-feed"></video>
              <div v-if="activeModal === 'facial'" class="face-overlay"></div>
              <div v-if="activeModal === 'scanner'" class="qr-overlay">
                <div class="scanner-line"></div>
              </div>
            </div>

            <div class="panel-footer">
              <p v-if="activeModal === 'facial'">Coloca tu rostro dentro del círculo</p>
              <p v-else>Centra el código QR en el recuadro</p>
              <button class="action-btn-full" @click="closeModal">Cancelar</button>
            </div>
          </div>

          <div v-if="activeModal === 'qr'" class="custom-panel glass-effect">
            <div class="panel-header">
              <h3>Código QR de Acceso</h3>
              <button class="close-panel" @click="activeModal = null">&times;</button>
            </div>
            <div class="panel-body qr-view">
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
            <div class="panel-body web-view">
              <div class="web-preview">
                 <svg viewBox="0 0 24 24" class="large-svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H9v-2h6v2zm4-4H5V6h14v8z"/></svg>
              </div>
              <p>Gestiona la apariencia pública de tu gimnasio desde aquí.</p>
              <button class="action-btn-full outline">Visitar Sitio Público</button>
              <button class="action-btn-full">Configurar landing page</button>
            </div>
          </div>

          <div v-if="activeModal === 'add-schedule'" class="form-panel glass-effect">
            <div class="panel-header">
              <h2 class="form-title">Nueva Actividad</h2>
            </div>
            <div class="form-body">
              <div class="input-group">
                <label>Dia de la Semana</label>
                <select class="custom-select">
                  <option>Seleccionar día...</option>
                  <option>Lunes</option>
                  <option>Martes</option>
                  <option>Miercoles</option>
                  <option>Jueves</option>
                  <option>Viernes</option>
                  <option>Sabado</option>
                  <option>Domingo</option>
                </select>
              </div>
              <div class="input-group">
                <label>Nombre de Actividad</label>
                <input type="text" placeholder="Ej. Crossfit" class="custom-input">
              </div>
              <div class="time-row">
                <div class="input-group">
                  <label>Inicio</label>
                  <div class="time-box">8:00 AM</div>
                </div>
                <div class="input-group">
                  <label>Fin</label>
                  <div class="time-box">9:00 AM</div>
                </div>
              </div>
            </div>
            <div class="panel-footer-btns">
              <button class="btn-cancel" @click="closeModal">CANCELAR</button>
              <button class="btn-save">GUARDAR</button>
            </div>
          </div>

          <div v-if="activeModal === 'view-schedule'" class="table-panel glass-effect">
            <div class="panel-header2">
              <h3>Horario Semanal</h3>
              <button class="close-x" @click="closeModal">&times;</button>
            </div>
            <div class="table-container">
              <table class="schedule-table">
                <thead>
                  <tr>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miercoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                    <th>Sabados</th>
                    <th>Domingo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="i in 5" :key="i">
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </transition>
    </div>
  </div>
</template>


<style scoped>
@import '../../assets/Admin/Dashoard.css';
</style>

<script setup>
import { ref, onBeforeUnmount } from 'vue';
import Sidebar from '../../components/Admin/Sidebar.vue';

const isSidebarOpen = ref(false);
const activeModal = ref(null);
const videoPlayer = ref(null);
let stream = null;

const toggleSidebar = () => { isSidebarOpen.value = !isSidebarOpen.value; };

// Lógica de Cámara
const openCamera = async (type) => {
  activeModal.value = type;
  try {
    // Pequeño delay para asegurar que el ref del video esté disponible tras el v-if
    setTimeout(async () => {
      stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: type === 'scanner' ? 'environment' : 'user' } 
      });
      if (videoPlayer.value) {
        videoPlayer.value.srcObject = stream;
      }
    }, 100);
  } catch (err) {
    console.error("Error al acceder a la cámara: ", err);
    alert("No se pudo acceder a la cámara. Verifica los permisos.");
    activeModal.value = null;
  }
};

const closeModal = () => {
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
  }
  activeModal.value = null;
};

onBeforeUnmount(() => closeModal());
</script>