<template>
  <HeadingAdmin>
    <main class="main-content">
      <div class="profile-card">
        <!-- Sección Izquierda: Título y Avatar -->
        <div class="profile-section">
          <h1 class="main-title">Registra a tu <br> <span class="highlight">Personal</span></h1>
          
          <div class="avatar-wrapper">
            <div class="avatar-circle" @click="$refs.fileInput.click()">
              <svg viewBox="0 0 24 24" fill="white"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            <button class="avatar-action btn-camera" @click="$refs.fileInput.click()">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            </button>
            <input type="file" ref="fileInput" accept="image/*" style="display: none" @change="handleFileChange" />
          </div>
        </div>

        <!-- Columna Derecha: Formularios -->
        <div class="forms-wrapper">
          <div class="login-card">
            <h3 class="section-title">Datos del empleado</h3>
            <div class="form-grid">
              <div class="input-group"><label>CURP</label><input type="text"></div>
              <div class="input-group"><label>Nombres</label><input type="text"></div>
              <div class="input-group"><label>Apellido Paterno</label><input type="text"></div>
              <div class="input-group"><label>Apellido Materno</label><input type="text"></div>
              <div class="input-group"><label>Fecha de Nacimiento</label><input type="date"></div>
              <div class="input-group"><label>Celular</label><input type="text" placeholder="+52"></div>
              <div class="input-group"><label>Facebook</label><input type="text"></div>
              <div class="input-group"><label>Instagram</label><input type="text"></div>
              <div class="input-group"><label>TikTok</label><input type="text"></div>
              <div class="input-group"><label>Otras app</label><input type="text"></div>
            </div>
          </div>

          <div class="login-card">
            <h3 class="section-title">Credenciales y Rol</h3>
            <div class="form-grid">
              <div class="input-group">
                <label>Rol en el sistema</label>
                <select class="custom-select"><option>Seleccionar</option></select>
              </div>
              <div class="input-group"><label>Correo electrónico</label><input type="email"></div>
              <div class="input-group"><label>Especialidad</label><input type="text"></div>
            </div>
          </div>

          <div class="login-card">
            <h3 class="section-title">Horario de trabajo</h3>
            <div class="form-grid">
              <div class="input-group"><label>Entrada</label><input type="time"></div>
              <div class="input-group"><label>Salida</label><input type="time"></div>
            </div>
          </div>

          <button class="btn-primary">Finalizar registro</button>
        </div>
      </div>
    </main>
  </HeadingAdmin>
</template>

<script setup>
import { ref } from 'vue';
import HeadingAdmin from '../HeadingAdmin.vue';

const fileInput = ref(null);
const handleFileChange = (e) => { console.log(e.target.files[0]); };
</script>

<style scoped>
/* Importación de fuentes y estilos base idénticos al de Clientes */
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;700;800&family=Oswald:wght@400;700&display=swap');

.main-content { display: flex; justify-content: center; width: 100%; padding: 40px clamp(16px, 3vw, 40px); box-sizing: border-box; }
.highlight { color: #3b82f6; }
.profile-card { 
  display: grid; 
  grid-template-columns: 320px auto; 
  gap: 30px; 
  width: 100%; 
  max-width: 1100px;
  margin: 0 auto;   
  align-items: start; 
  justify-content: center; 
}

.profile-section { 
  background: rgba(18, 18, 18, 0.7); 
  padding: 40px 20px; 
  border-radius: 24px; 
  border: 1px solid rgba(255, 255, 255, 0.09);
  display: flex; flex-direction: column; align-items: center; text-align: center;
}
.forms-wrapper { display: flex; flex-direction: column; gap: 20px; width: 100%; max-width: 700px; }
.login-card { background: rgba(18, 18, 18, 0.7); padding: 40px; border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.12); margin-bottom: 0; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.input-group { display: flex; flex-direction: column; gap: 8px; }

.main-title { font-family: 'Anton', sans-serif; font-size: 2rem; color: #fff; margin: 0 0 20px 0; line-height: 1.1; text-transform: uppercase; }
.section-title { font-family: 'Oswald', sans-serif; color: #5b8bf0; font-size: 14px; margin-bottom: 15px; text-transform: uppercase; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 8px; }
label { font-family: 'Oswald', sans-serif; color: #fff; font-size: 14px; font-weight: 500; }

input, .custom-select { 
  background: #141414; border: 1.5px solid rgba(255, 255, 255, 0.12); border-radius: 12px; color: #fff; padding: 10px 14px; width: 100%; box-sizing: border-box; 
}

.avatar-circle { width: 140px; height: 140px; background: #141414; border-radius: 50%; border: 4px solid #3b82f6; display: flex; align-items: center; justify-content: center; }
.avatar-wrapper { position: relative; margin-bottom: 20px; }
.avatar-action { position: absolute; width: 45px; height: 45px; border-radius: 50%; background: #2bacf1cb; border: 2px solid #000; cursor: pointer; bottom: 0; right: 0; display: flex; align-items: center; justify-content: center; }

.btn-primary { width: 100%; padding: 16px; background: #1c4fd6; color: white; border: none; border-radius: 12px; font-family: 'Oswald', sans-serif; font-weight: 700; cursor: pointer; text-transform: uppercase; }
.icon-svg { width: 24px; cursor: pointer; }


.avatar-action svg {
  width: 24px;  
  height: 24px;
  
}

.btn-primary {
  width: 100%;
  padding: 16px;
  background: #1c4fd6;
  color: white;
  border: none;
  border-radius: 12px;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}


.avatar-action:active {
  transform: scale(0.9);
}

@media (hover: hover) {
  .btn-primary:hover {
    transform: scale(1.02); 
  }
}

.btn-primary:active {
  transform: scale(0.95);
}
.avatar-action {
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.2s;
  touch-action: manipulation;
}


@media (max-width: 1024px) { .profile-card { grid-template-columns: 1fr; } }
@media (max-width: 768px) { 
  .profile-card { grid-template-columns: 1fr; }
  .form-grid { grid-template-columns: 1fr; } 
}
</style>