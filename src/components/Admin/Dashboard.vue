<template>
  <HeadingAdmin>

    <div class="main-layout">

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
      
      <NotificationsPanel 
        :is-open="isNotificationsOpen" 
        :notifications="notifications" 
        @close="isNotificationsOpen = false"
      />

      <transition name="pop">
        <div v-if="activeModal" class="modal-wrapper" @click.self="closeModal">
          
          <AddScheduleModal v-if="activeModal === 'add-schedule'" @close="closeModal" />
          <ViewScheduleModal v-if="activeModal === 'view-schedule'" @close="closeModal" />

          <div v-if="activeModal === 'facial' || activeModal === 'scanner'" class="camera-panel glass-effect">
            <div class="panel-header">
              <h3>{{ activeModal === 'facial' ? 'Escaneo Facial' : 'Escaneando QR' }}</h3>
              <button class="close-panel" @click="closeModal">&times;</button>
            </div>
            <div class="camera-container">
              <video ref="videoPlayer" autoplay playsinline class="video-feed"></video>
              <div v-if="activeModal === 'facial'" class="face-overlay"></div>
              <div v-if="activeModal === 'scanner'" class="qr-overlay"><div class="scanner-line"></div></div>
            </div>
            <div class="panel-footer">
              <p v-if="activeModal === 'facial'">Coloca tu rostro dentro del círculo</p>
              <p v-else>Centra el código QR en el recuadro</p>
              <button class="action-btn-full outline" @click="closeModal">Cancelar</button>
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
        </div>
      </transition>
    </div>
  </HeadingAdmin>
</template>


<script setup>
import { ref, onBeforeUnmount } from 'vue';
import Sidebar from '../../components/Admin/Sidebar.vue';
import NotificationsPanel from './Notifications/NotificationsPanel.vue';
import AddScheduleModal from '../Modals/AddScheduleModal.vue';
import ViewScheduleModal from '../Modals/ViewScheduleModal.vue';
import HeadingAdmin from './HeadingAdmin.vue';


const isSidebarOpen = ref(false);
const isNotificationsOpen = ref(false);
const activeModal = ref(null);
const videoPlayer = ref(null);
let stream = null;

const notifications = ref([
  { id: 1, title: 'Carlos Atleta', message: 'Cliente inactivo por 29 días', time: 'hace 7 días', read: false },
  { id: 2, title: 'Sofia Runner', message: 'Cliente inactivo por 26 días', time: 'hace 7 días', read: false },
  { id: 3, title: 'Pedro Crossfit', message: 'Cliente inactivo por 25 días', time: 'hace 7 días', read: false }
]);

const toggleSidebar = () => { isSidebarOpen.value = !isSidebarOpen.value; };

const openCamera = async (type) => {
  activeModal.value = type;
  try {
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

<style scoped>
@import '../../assets/Admin/Dashoard.css';
</style>