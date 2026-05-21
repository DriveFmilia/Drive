<script setup lang="ts">
import { reactive, ref } from 'vue';
import Logo from '@/landing/logo.vue';

const allDays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
const fileInput = ref<HTMLInputElement | null>(null);
const previewImage = ref<string | null>(null);

const form = reactive({
  nombreGimnasio: '',
  curp: '', nombres: '', apellidoP: '', apellidoM: '',
  fechaNac: '', celular: '', 
  entidad: 'SLP', municipio: '', cp: '', colonia: '', calle: '', numExt: '', numInt: '',
  selectedDays: [] as string[],
  precioMes: '', precioSem: '',
  email: '', password: '', confirmPassword: ''
});

const toggleDay = (day: string) => {
  const index = form.selectedDays.indexOf(day);
  if (index > -1) form.selectedDays.splice(index, 1);
  else form.selectedDays.push(day);
};

const triggerFileInput = () => fileInput.value?.click();
const onFileSelected = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) previewImage.value = URL.createObjectURL(file);
};

const handleRegister = () => console.log('Registro:', form);
</script>

<template>
  <div class="register-page">
    <header class="top-bar">
      <router-link :to="{ name: 'home' }" class="top-brand">
        <Logo />
        <span class="logo-text-sm">FitManage Pro</span>
      </router-link>
    </header>

    <main class="main-content">
      <div class="register-card">
        <div class="header-section">
          <h1 class="title">Registra tu <span class="highlight-text">Gimnasio</span></h1>
          <p class="subtitle">Únete a nuestra red de gestión fitness inteligente</p>
        </div>

        <form @submit.prevent="handleRegister" class="register-form">
          <div class="layout-grid">
            
            <div class="form-column">
              <h3 class="section-divider">Imagen del Gimnasio</h3>
              <div class="profile-upload-container">
                <div class="image-preview" @click="triggerFileInput">
                  <img v-if="previewImage" :src="previewImage" class="profile-img" />
                  <div v-else class="upload-placeholder">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                    <span>Subir logotipo</span>
                  </div>
                </div>
                <input type="file" ref="fileInput" @change="onFileSelected" accept="image/*" style="display: none" />
                <p class="upload-info">Haz clic para añadir una imagen representativa</p>
              </div>

              <h3 class="section-divider">Datos del Gimnasio</h3>
              <div class="form-grid-single">
                <div class="input-group">
                  <label for="nombreGimnasio">Nombre del Gimnasio</label>
                  <input id="nombreGimnasio" type="text" v-model="form.nombreGimnasio" placeholder="Ej. Iron Fitness Center" required />
                </div>
              </div>

              <h3 class="section-divider">Datos del Administrador</h3>
              <div class="form-grid-single">
                <div class="input-group">
                  <label for="curp">CURP</label>
                  <input id="curp" type="text" v-model="form.curp" placeholder="ABCD123456HDFR01" required />
                </div>
                <div class="input-group">
                  <label for="nombres">Nombre(s)</label>
                  <input id="nombres" type="text" v-model="form.nombres" placeholder="Ingresa tus nombres" required />
                </div>
                <div class="form-row">
                  <div class="input-group">
                    <label for="apellidoP">Apellido Paterno</label>
                    <input id="apellidoP" type="text" v-model="form.apellidoP" placeholder="Paterno" required />
                  </div>
                  <div class="input-group">
                    <label for="apellidoM">Apellido Materno</label>
                    <input id="apellidoM" type="text" v-model="form.apellidoM" placeholder="Materno" required />
                  </div>
                </div>
                <div class="form-row">
                  <div class="input-group">
                    <label for="fechaNac">Fecha de Nacimiento</label>
                    <input id="fechaNac" type="date" v-model="form.fechaNac" required />
                  </div>
                  <div class="input-group">
                    <label for="celular">Teléfono Celular</label>
                    <input id="celular" type="tel" v-model="form.celular" placeholder="Ej. 4811234567" required />
                  </div>
                </div>
              </div>

              <h3 class="section-divider">Cuenta de Acceso</h3>
              <div class="form-grid-single">
                <div class="input-group">
                  <label for="email">Correo electrónico</label>
                  <input id="email" type="email" v-model="form.email" placeholder="admin@gimnasio.com" required />
                </div>
                <div class="form-row">
                  <div class="input-group">
                    <label for="password">Contraseña</label>
                    <input id="password" type="password" v-model="form.password" placeholder="••••••••" required />
                  </div>
                  <div class="input-group">
                    <label for="confirmPassword">Confirmar Contraseña</label>
                    <input id="confirmPassword" type="password" v-model="form.confirmPassword" placeholder="••••••••" required />
                  </div>
                </div>
              </div>
            </div>

            <div class="form-column">
              <h3 class="section-divider">Ubicación del Gimnasio</h3>
              <div class="form-grid-single">
                <div class="form-row">
                  <div class="input-group">
                    <label for="entidad">Entidad</label>
                    <div class="select-wrapper">
                      <select id="entidad" v-model="form.entidad" required>
                        <option value="SLP">San Luis Potosí</option>
                      </select>
                    </div>
                  </div>
                  <div class="input-group">
                    <label for="municipio">Municipio</label>
                    <input id="municipio" type="text" v-model="form.municipio" placeholder="Municipio" required />
                  </div>
                </div>

                <div class="form-row">
                  <div class="input-group">
                    <label for="colonia">Colonia</label>
                    <input id="colonia" type="text" v-model="form.colonia" placeholder="Colonia" required />
                  </div>
                  <div class="input-group">
                    <label for="cp">Código Postal</label>
                    <input id="cp" type="text" v-model="form.cp" placeholder="C.P." required />
                  </div>
                </div>

                <div class="input-group">
                  <label for="calle">Calle</label>
                  <input id="calle" type="text" v-model="form.calle" placeholder="Nombre de la calle" required />
                </div>

                <div class="form-row">
                  <div class="input-group">
                    <label for="numExt">Num. Exterior</label>
                    <input id="numExt" type="text" v-model="form.numExt" placeholder="Ext." required />
                  </div>
                  <div class="input-group">
                    <label for="numInt">Num. Interior</label>
                    <input id="numInt" type="text" v-model="form.numInt" placeholder="Int. (Opcional)" />
                  </div>
                </div>
              </div>

              <h3 class="section-divider">Configuración de Operación</h3>
              <div class="form-grid-single">
                <div class="input-group">
                  <label>Días de apertura</label>
                  <div class="days-container">
                    <button 
                      type="button" 
                      v-for="day in allDays" 
                      :key="day" 
                      class="day-chip"
                      :class="{ active: form.selectedDays.includes(day) }"
                      @click="toggleDay(day)"
                    >
                      {{ day }}
                    </button>
                  </div>
                </div>

                <div class="form-row mt-5">
                  <div class="input-group">
                    <label class="label-help" for="precioMes">
                      Mensualidad ($)
                      <div class="help-icon">?
                        <span class="tooltip">Este es el precio fijo que se tomará en cuenta para los pagos mensuales del sistema.</span>
                      </div>
                    </label>
                    <input id="precioMes" type="number" v-model="form.precioMes" placeholder="0.00" required />
                  </div>
                  <div class="input-group">
                    <label class="label-help" for="precioSem">
                      Semanal ($)
                      <div class="help-icon">?
                        <span class="tooltip">Precio fijo establecido para los accesos semanales.</span>
                      </div>
                    </label>
                    <input id="precioSem" type="number" v-model="form.precioSem" placeholder="0.00" required />
                  </div>
                </div>
              </div>

              <div class="actions-section">
                <button type="submit" class="btn-primary">
                  Registrar Gimnasio
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
                <div class="footer-link">
                  ¿Ya tienes cuenta? <router-link :to="{ name: 'login' }">Inicia Sesión</router-link>
                </div>
              </div>
            </div>

          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700;800&display=swap');

.register-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #06090bd2 0%, #b4e9ff8e 50%, #1a262c65 100%);
  font-family: 'Inter', sans-serif;
  padding: 0 20px 60px 20px;
  color: #ffffff;
  box-sizing: border-box;
}

.top-bar {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 0;
}

.top-brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.top-brand:hover {
  opacity: 0.85;
}

.logo-text-sm {
  font-family: 'Archivo Black', sans-serif;
  font-size: 1.1rem;
  color: #ffffff;
  letter-spacing: -0.5px;
}

.main-content {
  display: flex;
  justify-content: center;
  width: 100%;
}

.register-card {
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  width: 100%;
  max-width: 1140px;
  padding: 45px;
  border-radius: 24px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.header-section {
  text-align: left;
  margin-bottom: 35px;
  border-left: 5px solid #3b82f6;
  padding-left: 18px;
}

.title {
  font-family: 'Archivo Black', sans-serif;
  font-size: 2.5rem;
  margin: 0;
  color: #ffffff;
  letter-spacing: -1.5px;
  line-height: 1.1;
}

.highlight-text {
  color: #3b82f6;
}

.subtitle {
  font-weight: 400;
  color: #e2e8f0;
  margin: 6px 0 0 0;
  font-size: 0.95rem;
}

.layout-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 45px;
  align-items: start;
}

.form-column {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.profile-upload-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  background: rgba(0, 0, 0, 0.2);
  padding: 16px 20px;
  border-radius: 16px;
  border: 1.5px dashed rgba(255, 255, 255, 0.2);
  transition: all 0.2s ease;
}

.profile-upload-container:hover {
  border-color: #3b82f6;
  background: rgba(0, 0, 0, 0.3);
}

.image-preview {
  width: 80px;
  height: 80px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: transform 0.2s ease;
  flex-shrink: 0;
}

.image-preview:hover {
  transform: scale(1.03);
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.upload-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #cbd5e1;
  gap: 4px;
  text-align: center;
}

.upload-placeholder span {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
}

.upload-info {
  font-size: 0.85rem;
  font-weight: 400;
  color: #e2e8f0;
  margin: 0;
  line-height: 1.4;
}

.days-container {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 4px;
}

.day-chip {
  padding: 8px 14px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #ffffff;
}

.day-chip:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}

.day-chip.active {
  background: #3b82f6;
  color: #ffffff;
  border-color: #3b82f6;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.label-help {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.help-icon {
  width: 16px;
  height: 16px;
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: 700;
  cursor: help;
  position: relative;
}

.tooltip {
  visibility: hidden;
  width: 200px;
  background: #1e293b;
  color: #ffffff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 12px;
  position: absolute;
  z-index: 50;
  bottom: 135%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.15s ease;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.3;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.help-icon:hover .tooltip {
  visibility: visible;
  opacity: 1;
}

.section-divider {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  color: #3b82f6;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding-bottom: 6px;
  margin: 24px 0 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.form-grid-single {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.mt-5 { margin-top: 5px; }

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-group label {
  font-weight: 700;
  font-size: 0.85rem;
  color: #ffffff;
}

input, select {
  width: 100%;
  padding: 11px 14px;
  background: rgba(15, 23, 42, 0.6);
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  color: #ffffff;
  box-sizing: border-box;
  transition: all 0.2s ease;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1);
  opacity: 0.6;
  cursor: pointer;
}

input:focus, select:focus {
  outline: none;
  background: rgba(15, 23, 42, 0.8);
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3);
}

.select-wrapper { position: relative; }

.select-wrapper::after {
  content: '';
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  border: 5px solid transparent;
  border-top-color: rgba(255, 255, 255, 0.6);
  pointer-events: none;
}

select {
  appearance: none;
  -webkit-appearance: none;
  padding-right: 40px;
  cursor: pointer;
}

select option {
  background: #1e293b;
  color: #ffffff;
}

.actions-section {
  margin-top: 40px;
}

.btn-primary {
  width: 100%;
  padding: 16px;
  background: #102f72;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-family: 'Archivo Black', sans-serif;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
}

.btn-primary:active {
  transform: translateY(1px);
}

.footer-link {
  text-align: center;
  margin-top: 18px;
  font-weight: 700;
  font-size: 0.9rem;
  color: #cbd5e1;
}

.footer-link a {
  color: #60a5fa;
  text-decoration: none;
}

.footer-link a:hover {
  text-decoration: underline;
}

@media (max-width: 960px) {
  .layout-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .register-card {
    padding: 30px 20px;
  }
  .header-section {
    text-align: center;
    border-left: none;
    padding-left: 0;
  }
  .title {
    font-size: 2.2rem;
  }
  .actions-section {
    margin-top: 25px;
  }
}

@media (max-width: 480px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .profile-upload-container {
    flex-direction: column;
    text-align: center;
  }
}
</style>