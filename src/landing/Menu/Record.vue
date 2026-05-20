<template>
  <div class="register-page">
    <router-link :to="{ name: 'home' }" class="top-brand">
      <div class="logo-circle-sm">
        <img src="@/assets/logo.png" alt="Logo" class="logo-img-sm" />
      </div>
      <span class="logo-text-sm">FitManage Pro</span>
    </router-link>

    <main class="main-content">
      <div class="register-card">
        <div class="header-section">
          <h1 class="title">Registra tu <span class="highlight-text">Gimnasio</span></h1>
          <p class="subtitle">Únete a nuestra red de gestión fitness</p>
        </div>

        <form @submit.prevent="handleRegister" class="register-form">
          <div class="layout-grid">
            
            <div class="left-column">
              <h3 class="section-divider">Foto de Perfil</h3>
              <div class="profile-upload-container">
                <div class="image-preview" @click="triggerFileInput">
                  <img v-if="previewImage" :src="previewImage" class="profile-img" />
                  <div v-else class="upload-placeholder">
                    <i class="fas fa-camera"></i>
                    <span>Seleccionar foto</span>
                  </div>
                </div>
                <input type="file" ref="fileInput" @change="onFileSelected" accept="image/*" style="display: none" />
                <p class="upload-info">Haz clic para seleccionar tu foto</p>
              </div>

              <h3 class="section-divider">Datos Personales</h3>
              <div class="form-grid-single">
                <div class="input-group">
                  <label>CURP</label>
                  <input type="text" v-model="form.curp" placeholder="ABCD123456HDFR01" required />
                </div>
                <div class="input-group">
                  <label>Nombres</label>
                  <input type="text" v-model="form.nombres" required />
                </div>
                <div class="form-row">
                  <div class="input-group">
                    <label>Apellido P.</label>
                    <input type="text" v-model="form.apellidoP" required />
                  </div>
                  <div class="input-group">
                    <label>Apellido M.</label>
                    <input type="text" v-model="form.apellidoM" required />
                  </div>
                </div>
                <div class="form-row">
                  <div class="input-group">
                    <label>Nacimiento</label>
                    <input type="date" v-model="form.fechaNac" required />
                  </div>
                  <div class="input-group">
                    <label>Celular</label>
                    <input type="tel" v-model="form.celular" placeholder="+52" required />
                  </div>
                </div>
              </div>
            </div>

            <div class="right-column">
              <h3 class="section-divider">Ubicación del Gimnasio</h3>
              <div class="form-grid-single">
                <div class="form-row">
                  <div class="input-group">
                    <label>Entidad</label>
                    <select v-model="form.entidad" required>
                      <option value="SLP">San Luis Potosí</option>
                    </select>
                  </div>
                  <div class="input-group">
                    <label>Municipio</label>
                    <input type="text" v-model="form.municipio" required />
                  </div>
                </div>

                <div class="form-row">
                  <div class="input-group">
                    <label>Colonia</label>
                    <input type="text" v-model="form.colonia" required />
                  </div>
                  <div class="input-group">
                    <label>Código Postal</label>
                    <input type="text" v-model="form.cp" required />
                  </div>
                </div>

                <div class="input-group">
                  <label>Calle</label>
                  <input type="text" v-model="form.calle" required />
                </div>

                <div class="form-row">
                  <div class="input-group">
                    <label>Num. Exterior</label>
                    <input type="text" v-model="form.numExt" required />
                  </div>
                  <div class="input-group">
                    <label>Num. Interior</label>
                    <input type="text" v-model="form.numInt" />
                  </div>
                </div>
              </div>

              <h3 class="section-divider">Configuración de Operación</h3>
              <div class="input-group">
                <label>Días de apertura (Selecciona los que apliquen)</label>
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

              <div class="form-row mt-15">
                <div class="input-group">
                  <label class="label-help">
                    Mensualidad ($)
                    <div class="help-icon">?
                      <span class="tooltip">Este es el precio fijo que se tomará en cuenta para los pagos mensuales del sistema.</span>
                    </div>
                  </label>
                  <input type="number" v-model="form.precioMes" required />
                </div>
                <div class="input-group">
                  <label class="label-help">
                    Semanal ($)
                    <div class="help-icon">?
                      <span class="tooltip">Precio fijo establecido para los accesos semanales.</span>
                    </div>
                  </label>
                  <input type="number" v-model="form.precioSem" required />
                </div>
              </div>

              <h3 class="section-divider">Cuenta de Acceso</h3>
              <div class="form-grid-single">
                <div class="input-group">
                  <label>Correo electrónico</label>
                  <input type="email" v-model="form.email" required />
                </div>
                <div class="form-row">
                  <div class="input-group">
                    <label>Contraseña</label>
                    <input type="password" v-model="form.password" required />
                  </div>
                  <div class="input-group">
                    <label>Confirmar</label>
                    <input type="password" v-model="form.confirmPassword" required />
                  </div>
                </div>
              </div>

              <button type="submit" class="btn-primary">Registrar Gimnasio</button>
              <div class="footer-link">
                ¿Ya tienes cuenta? <router-link :to="{ name: 'login' }">Inicia Sesión</router-link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const allDays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
const fileInput = ref<HTMLInputElement | null>(null);
const previewImage = ref<string | null>(null);

const form = reactive({
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;600;800&display=swap');

.register-page {
  min-height: 100vh;
  background: linear-gradient(45deg, #7794b6, #dffaff);
  font-family: 'Inter', sans-serif;
  padding: 60px 20px;
  color: #000;
}

.top-brand { position: absolute; top: 20px; left: 20px; display: flex; align-items: center; gap: 10px; text-decoration: none; }
.logo-circle-sm { background: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
.logo-img-sm { width: 25px; filter: invert(1); }
.logo-text-sm { font-family: 'Archivo Black', sans-serif; font-style: italic; color: #000; font-size: 1rem; }

.main-content { display: flex; justify-content: center; margin-top: 40px; }
.register-card { background: white; width: 100%; max-width: 1100px; padding: 45px; border-radius: 24px; box-shadow: 0 15px 40px rgba(0,0,0,0.1); }

.header-section { text-align: left; margin-bottom: 35px; border-left: 5px solid #4a6fa5; padding-left: 20px; }
.title { font-family: 'Archivo Black', sans-serif; font-size: 2.4rem; margin: 0; color: #000; }
.highlight-text { color: #4a6fa5; }
.subtitle { font-weight: 800; color: #666; margin-top: 8px; }

.layout-grid { display: grid; grid-template-columns: 1fr 1.3fr; gap: 50px; }

/* Upload Foto */
.profile-upload-container { display: flex; flex-direction: column; align-items: center; margin-bottom: 25px; background: #f8fafc; padding: 25px; border-radius: 20px; border: 2px dashed #cbd5e1; }
.image-preview { width: 140px; height: 140px; background: #e2e8f0; border-radius: 50%; overflow: hidden; cursor: pointer; display: flex; align-items: center; justify-content: center; border: 4px solid white; box-shadow: 0 5px 15px rgba(0,0,0,0.1); transition: transform 0.3s; }
.image-preview:hover { transform: scale(1.05); }
.profile-img { width: 100%; height: 100%; object-fit: cover; }
.upload-placeholder { display: flex; flex-direction: column; align-items: center; color: #64748b; }
.upload-placeholder i { font-size: 2.2rem; margin-bottom: 8px; }
.upload-placeholder span { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; }
.upload-info { font-size: 0.8rem; font-weight: 700; color: #4a6fa5; margin-top: 12px; }

/* Chips de Días */
.days-container { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
.day-chip { 
  padding: 8px 15px; 
  border: 1.5px solid #e2e8f0; 
  border-radius: 8px; 
  background: #f8fafc; 
  font-weight: 800; 
  font-size: 0.75rem; 
  cursor: pointer; 
  transition: all 0.2s; 
  color: #000;
}
.day-chip.active { background: #4a6fa5; color: white; border-color: #4a6fa5; box-shadow: 0 4px 10px rgba(74, 111, 165, 0.3); }

/* Label con Ayuda */
.label-help { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 0.8rem; color: #000; margin-bottom: 6px; }
.help-icon { 
  width: 18px; height: 18px; 
  background: #000; color: #fff; 
  border-radius: 50%; 
  display: flex; align-items: center; justify-content: center; 
  font-size: 0.7rem; cursor: help; position: relative; 
}
.tooltip { 
  visibility: hidden; width: 200px; background: #333; color: #fff; 
  text-align: center; border-radius: 6px; padding: 10px; 
  position: absolute; z-index: 10; bottom: 125%; left: 50%; 
  transform: translateX(-50%); opacity: 0; transition: opacity 0.3s; 
  font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 400; line-height: 1.2;
}
.help-icon:hover .tooltip { visibility: visible; opacity: 1; }

.section-divider { font-family: 'Archivo Black', sans-serif; font-size: 0.9rem; color: #4a6fa5; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; margin: 25px 0 15px; text-transform: uppercase; }
.form-grid-single { display: flex; flex-direction: column; gap: 18px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
.mt-15 { margin-top: 15px; }

.input-group label:not(.label-help) { font-weight: 800; font-size: 0.8rem; display: block; margin-bottom: 6px; color: #000; }
input, select { width: 100%; padding: 12px; background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 10px; font-weight: 600; color: #000; }
input:focus { border-color: #4a6fa5; outline: none; background: #fff; }

.btn-primary { width: 100%; padding: 18px; background: #000; color: #fff; border: none; border-radius: 12px; font-family: 'Archivo Black', sans-serif; font-size: 1.1rem; cursor: pointer; margin-top: 35px; }
.footer-link { text-align: center; margin-top: 20px; font-weight: 800; font-size: 0.9rem; }
.footer-link a { color: #4a6fa5; text-decoration: none; }

@media (max-width: 900px) {
  .layout-grid { grid-template-columns: 1fr; }
  .register-card { padding: 30px 20px; }
  .header-section { text-align: center; border-left: none; padding-left: 0; }
  .form-row { grid-template-columns: 1fr; }
}
</style>