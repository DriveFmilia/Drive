<template>
  <HeadingAdmin>
    <main class="main-content">
      <div class="header-side">
        <h1 class="main-title">Registra tu <span class="highlight">Personal</span></h1>
        <div class="hero-image-wrapper">
           <img src="@/assets/Contenido/icono.png" alt="Atletas" />
        </div>
      </div>

      <div class="login-card">
        <form @submit.prevent class="registration-form">
          <h3>Datos del empleado</h3>
          
          <div class="form-grid">
            <div class="input-group">
              <label>CURP</label>
              <input type="text">
            </div>
            <div class="input-group">
              <label>Nombres</label>
              <input type="text">
            </div>
            <div class="input-group">
              <label>Apellido p</label>
              <input type="text">
            </div>
            <div class="input-group">
              <label>Apellido m</label>
              <input type="text">
            </div>
            <div class="input-group">
              <label>Fecha nac</label>
              <input type="date">
            </div>
            <div class="input-group">
              <label>Celular</label>
              <input type="text" placeholder="+52">
            </div>
            <div class="input-group">
              <label>Facebook</label>
              <input type="text">
            </div>
            <div class="input-group">
              <label>Instagram</label>
              <input type="text">
            </div>
            <div class="input-group">
              <label>Tiktok</label>
              <input type="text">
            </div>
            <div class="input-group">
              <label>Otras app</label>
              <input type="text">
            </div>
          </div>

          <h3 style="margin-top: 20px;">Credenciales</h3>
          
          <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 20px;">
            <div class="avatar-circle" @click="$refs.fileInput.click()" style="cursor: pointer;">
              <svg viewBox="0 0 24 24" fill="white"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            <span style="font-size: 0.8rem; margin-top: 5px;">Perfil</span>
            <input type="file" ref="fileInput" accept="image/*" style="display: none" @change="handleFileChange">
          </div>
          
          <div class="form-grid">
            <div class="input-group">
              <label>Rol en el sistema</label>
              <select class="custom-select">
                <option>Seleccionar</option>
              </select>
            </div>
            <div class="input-group">
              <label>Correo electronico</label>
              <input type="email">
            </div>
            <div class="input-group">
              <label>Especialidad</label>
              <input type="text">
            </div>
            <div class="input-group">
              <label>Horario de trabajo</label>
              <select class="custom-select">
                <option>Seleccionar</option>
              </select>
            </div>
          </div>
          
          <button type="submit" class="btn-primary" style="margin-top: 25px;">Finalizar registro</button>
        </form>
      </div>
    </main>
  </HeadingAdmin>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;700;800&family=Oswald:wght@400;700&display=swap');

.app-wrapper { min-height: 100vh; background: #0a0a0a; font-family: 'Inter', sans-serif; overflow-x: hidden; color: #f5f5f4; }
.main-title { font-family: 'Anton', sans-serif; font-weight: 400; font-size: 3.5rem; color: #fff; white-space: nowrap; margin: 0; }
.highlight { color: #3b82f6; }
.login-card { background: rgba(18, 18, 18, 0.7); backdrop-filter: blur(20px); padding: 30px; border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.12); width: 100%; max-width: 420px; color: white; }
h3 { font-family: 'Oswald', sans-serif; font-size: 14px; color: #5b8bf0; text-transform: uppercase; letter-spacing: 0.6px; }
.input-group { display: flex; flex-direction: column; gap: 8px; }

.input-group label { font-family: 'Oswald', sans-serif; font-size: 14px; color: #fff; letter-spacing: 0.5px; font-weight: 500; }
input {width: 100%; padding: 10px 16px; background: #141414; border: 1.5px solid rgba(255, 255, 255, 0.12); border-radius: 8px; color: #f5f5f4;}
.btn-primary { width: 100%; padding: 16px; background: #1c4fd6; color: white; border: none; border-radius: 12px; font-family: 'Oswald', sans-serif; font-weight: 700; cursor: pointer; }
.sidebar-container { width: 280px; height: 100vh; position: fixed; top: 0; left: 0; background: #0f172a; transform: translateX(-100%); transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); z-index: 3000; }
.sidebar-open .sidebar-container { transform: translateX(0); }
select.custom-select { width: 100%; padding: 10px 16px; background: #141414; border: 1.5px solid rgba(255, 255, 255, 0.12); border-radius: 8px; color: #f5f5f4; -webkit-appearance: none; -moz-appearance: none; appearance: none; cursor: pointer; font-family: inherit; }
select.custom-select:focus { outline: none; border-color: #3b82f6;}

.top-nav { display: flex; justify-content: space-between; padding: 16px 24px; background: rgba(18, 18, 18, 0.7); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255, 255, 255, 0.09); }
.icon-btn { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 12px; padding: 12px; cursor: pointer; display: flex; transition: all 0.2s ease; }
.icon-btn:hover { background: rgba(255, 255, 255, 0.08); border-color: #1c4fd6; }
.svg-icon { width: 22px; height: 22px; fill: none; stroke: #f5f5f4; stroke-width: 2; }
.notification { position: relative; }
.dot { position: absolute; top: 10px; right: 10px; width: 8px; height: 8px; background: #1c4fd6; border-radius: 50%; box-shadow: 0 0 8px #1c4fd6; }


.main-content { display: flex; align-items: center; justify-content: center; gap: 400px; padding: 40px; min-height: 80vh; flex-wrap: wrap; }
.hero-image-wrapper { width: 350px; margin: 20px auto 0 auto; animation: float 3s ease-in-out infinite; }
.hero-image-wrapper img { width: 100%; height: auto; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.3)); }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.avatar-group { display: flex; justify-content: center; gap: 20px; margin-bottom: 15px; cursor: pointer; }
.avatar-item { display: flex; flex-direction: column; align-items: center; font-size: 0.8rem; color: white; }
.avatar-circle { width: 50px; height: 50px; background: #000; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 5px; border: 2px solid #3b82f6; padding: 10px; }
.icon-svg { width: 32px; height: 32px; min-width: 32px; cursor: pointer; display: flex; align-items: center; justify-content: center;}
.icon-svg svg { width: 24px;   height: 24px;  display: block;}
.toggle-group-small { display: flex; gap: 5px; width: fit-content; background: rgba(255,255,255,0.1); padding: 4px; border-radius: 8px; margin-bottom: 10px; }
.btn-toggle-small { padding: 4px 16px; border: none; color: white; border-radius: 6px; cursor: pointer; font-size: 0.85rem; background: transparent; }
.btn-toggle-small.active { background: #3b82f6; }
.sidebar-overlay {position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.5);  z-index: 2999; cursor: pointer;}
.sidebar-container { z-index: 3000;}
.corte-wrapper { margin-top: 10px; display: flex;  flex-direction: column;  gap: 10px;}

.membership-header {display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; gap: 10px;}

.icons-group { display: flex; gap: 8px; }
.toggle-group-small {margin-bottom: 0;}
@media (min-width: 481px) {.corte-wrapper { flex-direction: row; align-items: center;} .icons-group { justify-content: flex-start;}}

.icon-svg { width: 32px;height: 32px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;}
@media (max-width: 1200px) { .main-content { gap: 100px; } }
@media (max-width: 992px) { .hero-image-wrapper { display: none; } .main-content { gap: 40px; padding: 20px; } .main-title { white-space: normal; text-align: center; font-size: 2.5rem; } }
@media (max-width: 480px) { .form-grid { grid-template-columns: 1fr; } }
</style>

<script setup>
import { ref } from 'vue';
import HeadingAdmin from '../HeadingAdmin.vue';

const fileInput = ref(null);
const isSidebarOpen = ref(false);
const isNotificationsOpen = ref(false);
const notifications = ref([{ id: 1, title: 'Sistema', message: 'Bienvenido', time: 'ahora', read: false }]);
const toggleSidebar = () => { isSidebarOpen.value = !isSidebarOpen.value; };

const handleFileChange = (e) => { console.log(e.target.files[0]); };
const openCamera = async () => { try { await navigator.mediaDevices.getUserMedia({ video: true }); alert("Cámara activa"); } catch(e) { alert("Error cámara"); } };
</script>