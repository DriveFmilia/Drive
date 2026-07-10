<template>
  <div class="app-wrapper" :class="{ 'sidebar-open': isSidebarOpen }">
    <transition name="fade">
      <div v-if="isSidebarOpen" class="sidebar-overlay" @click="toggleSidebar"></div>
    </transition>

    <Main/> 

    <main class="main-content">
      <div class="header-side">
        <h1 class="main-title">Registra tus <span class="highlight">Clientes</span></h1>
        <div class="hero-image-wrapper">
           <img src="@/assets/Contenido/icono.png" alt="Atletas" />
        </div>
      </div>

      <div class="login-card">
        <form @submit.prevent class="registration-form">
          <h3>Datos Personales</h3>
          
          <div class="avatar-group">
            <div class="avatar-item" @click="$refs.fileInput.click()">
              <div class="avatar-circle"><svg viewBox="0 0 24 24" fill="white"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>
              <span>Perfil</span>
              <input type="file" ref="fileInput" accept="image/*" style="display: none" @change="handleFileChange">
            </div>
            <div class="avatar-item" @click="openCamera">
              <div class="avatar-circle"><svg viewBox="0 0 24 24" fill="white"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></svg></div>
              <span>Asistencia</span>
            </div>
          </div>

          <div class="form-grid">
            <input type="text" placeholder="Nombres">
            <input type="text" placeholder="Apellido P">
            <input type="text" placeholder="Apellido M">
            <input type="date" placeholder="Fecha Nac">
            <input type="text" placeholder="+52 Celular">
            <input type="email" placeholder="Correo electrónico">
          </div>

          <h3 style="margin-top: 15px;">Datos de Membresía</h3>
          <div class="toggle-group-small">
            <button type="button" class="btn-toggle-small active">Mes</button>
            <button type="button" class="btn-toggle-small">Semana</button>
          </div>
          
          <div class="form-grid" style="margin-top: 10px;">
            <input type="number" placeholder="Peso Inicial (Kg)">
            <input type="date" placeholder="Inscripción">
          </div>
          
          <div class="corte-wrapper" style="margin-top: 10px; display: flex; align-items: center; gap: 8px;">
            <input type="date" placeholder="Fecha de Corte" style="flex: 1;">
            <div class="icon-svg"><svg viewBox="0 0 24 24" fill="#bae6fd"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg></div>
            <div class="icon-svg"><svg viewBox="0 0 24 24" fill="white"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg></div>
          </div>
          
          <button type="submit" class="btn-primary" style="margin-top: 20px;">Finalizar Registro</button>
        </form>
      </div>
    </main>

    <NotificationsPanel :is-open="isNotificationsOpen" :notifications="notifications" @close="isNotificationsOpen = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Main from '../Main.vue';

const fileInput = ref(null);
const isSidebarOpen = ref(false);
const isNotificationsOpen = ref(false);
const notifications = ref([{ id: 1, title: 'Sistema', message: 'Bienvenido', time: 'ahora', read: false }]);
const toggleSidebar = () => { isSidebarOpen.value = !isSidebarOpen.value; };

const handleFileChange = (e) => { console.log(e.target.files[0]); };
const openCamera = async () => { try { await navigator.mediaDevices.getUserMedia({ video: true }); alert("Cámara activa"); } catch(e) { alert("Error cámara"); } };
</script>

<style scoped>
@import '../../../assets/Admin/Main.css';
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');
.app-wrapper { min-height: 100vh; background: linear-gradient(180deg, #06090bd2 0%, #b4e9ff8e 50%, #1a262c65 100%); font-family: 'Inter', sans-serif; overflow-x: hidden; }

/* Nuevos elementos SVG */
.avatar-group { display: flex; justify-content: center; gap: 20px; margin-bottom: 15px; cursor: pointer; }
.avatar-item { display: flex; flex-direction: column; align-items: center; font-size: 0.8rem; color: white; }
.avatar-circle { width: 50px; height: 50px; background: #000; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 5px; border: 2px solid #3b82f6; padding: 10px; }
.icon-svg { width: 24px; height: 24px; cursor: pointer; }

/* Botones */
.toggle-group-small { display: flex; gap: 5px; width: fit-content; background: rgba(255,255,255,0.1); padding: 4px; border-radius: 8px; margin-bottom: 10px; }
.btn-toggle-small { padding: 4px 16px; border: none; color: white; border-radius: 6px; cursor: pointer; font-size: 0.85rem; background: transparent; }
.btn-toggle-small.active { background: #3b82f6; }

/* Base original */
.sidebar-container { width: 280px; height: 100vh; position: fixed; top: 0; left: 0; background: #0f172a; transform: translateX(-100%); transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); z-index: 3000; }
.sidebar-open .sidebar-container { transform: translateX(0); }
.top-nav { display: flex; justify-content: space-between; padding: 16px 24px; background: rgba(15, 23, 42, 0.2); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
.icon-btn { position: relative; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 12px; cursor: pointer; }
.svg-icon { width: 24px; height: 24px; fill: white; }
.dot { position: absolute; top: 5px; right: 5px; width: 8px; height: 8px; background: #ef4444; border-radius: 50%; }

/* REAJUSTE DE LAYOUT */
.main-content { display: flex; align-items: center; justify-content: center; gap: 5%; padding: 40px; min-height: 80vh; flex-direction: row; }
.header-side { flex: 1; display: flex; flex-direction: column; align-items: flex-start; }
.main-title { font-weight: 800; font-size: 3.5rem; color: #fff; line-height: 1.1; margin: 0; }
.highlight { color: #3b82f6; }
.hero-image-wrapper { width: 350px; margin-top: 20px; animation: float 3s ease-in-out infinite; }
.hero-image-wrapper img { width: 100%; height: auto; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.3)); }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
.login-card { background: rgba(15, 23, 42, 0.45); backdrop-filter: blur(20px); padding: 30px; border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.12); width: 100%; max-width: 420px; color: white; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
input { width: 100%; padding: 12px; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; color: white; }
.btn-primary { width: 100%; padding: 14px; background: #102f72; color: white; border: none; border-radius: 12px; font-weight: bold; cursor: pointer; }

/* RESPONSIVO */
@media (max-width: 992px) { 
  .main-content { flex-direction: column; gap: 40px; text-align: center; } 
  .header-side { align-items: center; }
  .hero-image-wrapper { display: none; } 
  .main-title { white-space: normal; font-size: 2.5rem; } 
}
@media (max-width: 480px) { .form-grid { grid-template-columns: 1fr; } }
</style>