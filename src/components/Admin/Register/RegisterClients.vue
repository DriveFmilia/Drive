<template>
  <HeadingAdmin>
    <main class="main-content">
      <div class="profile-card">
        <!-- Sección Perfil -->
        <div class="profile-section">
          <h1 class="main-title">Registra tus <br> <span class="highlight">Clientes</span></h1>
          <div class="avatar-wrapper">
            <div class="avatar-circle">
              <svg viewBox="0 0 24 24" fill="white"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            <button class="avatar-action btn-camera" @click="$refs.fileInput.click()">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            </button>
            <input type="file" ref="fileInput" accept="image/*" style="display: none" />
          </div>
        </div>
        

        <!-- Columna Derecha: Formularios -->
          <div class="forms-wrapper">
          <div class="login-card">
            <h3 class="section-title">Datos Personales</h3>
            <div class="form-grid">
              <div class="input-group"><label>Nombres</label><input type="text"></div>
              <div class="input-group"><label>Apellido Paterno</label><input type="text"></div>
              <div class="input-group"><label>Apellido Materno</label><input type="text"></div>
              <div class="input-group"><label>Fecha de Nacimiento</label><input type="date"></div>
              <div class="input-group"><label>Celular</label><input type="text" placeholder="+52"></div>
              <div class="input-group"><label>Correo electrónico</label><input type="email"></div>
            </div>
          </div>

            <!-- Registro Físico y Membresía -->
            <div class="login-card">
              <h3 class="section-title">Registro de Físico</h3>
              <div class="form-grid">
                <div class="input-group"><label>Peso (Kg)</label><input type="text"></div>
                <div class="input-group"><label>Altura (cm)</label><input type="text"></div>
              </div>
            </div>
              
              <div class="login-card">
                <h3 class="section-title">Datos de Membresía</h3>
                <div class="membership-header">
                  <div class="toggle-group-small">
                    <button type="button" class="btn-toggle-small active">Mes</button>
                    <button type="button" class="btn-toggle-small">Semana</button>
                  </div>
                  <div class="actions-group">
                    <!-- Botón de Ayuda -->
                    <button type="button" class="action-btn" title="Ayuda" @click="goToCorte">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                    </button>
                    
                    <!-- Botón de Documentación -->
                    <button type="button" class="action-btn" title="Documentación" @click="goToHelp">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="form-grid">
                  <div class="input-group"><label>Inscripción</label><input type="date"></div>
                  <div class="input-group"><label>Fecha Corte</label><input type="date"></div>
                </div>
              </div>
              
              <button class="btn-primary">Finalizar Registro</button>
            </div>
        </div>
    </main>
  </HeadingAdmin>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // 1. Importa useRouter
import HeadingAdmin from '../HeadingAdmin.vue';
const router = useRouter();

const goToHelp = () => {
  router.push('/admin/help'); 
};

const goToCorte = () => {
  router.push('/admin/cut'); // Ajusta a tu ruta real
};
const fileInput = ref(null);
const handleFileChange = (e) => { console.log(e.target.files[0]); };
const openCamera = async () => { 
  try { await navigator.mediaDevices.getUserMedia({ video: true }); alert("Cámara activa"); } 
  catch(e) { alert("Error al acceder a la cámara"); } 
};
</script>

<style scoped>
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

.actions-group { display: flex; gap: 10px; }

.action-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #3b82f6;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: transform 0.2s, background 0.2s;
}

.action-btn:hover {
  background: #2563eb;
  transform: scale(1.1);
}

.action-btn svg {
  width: 20px;
  height: 20px;
}

.profile-section { 
  background: rgba(18, 18, 18, 0.7); 
  padding: 40px 20px; 
  border-radius: 24px; 
  border: 1px solid rgba(255, 255, 255, 0.09);
  display: flex; flex-direction: column; align-items: center; text-align: center;
}
.forms-wrapper { 
  display: flex; 
  flex-direction: column; 
  gap: 20px; 
  width: 100%; 
  max-width: 700px; 
}
.login-card { 
  background: rgba(18, 18, 18, 0.7); 
  padding: 40px; 
  border-radius: 24px; 
  border: 1px solid rgba(255, 255, 255, 0.12); 
  margin-bottom: 20px;
}
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.input-group { display: flex; flex-direction: column; gap: 8px; }
/* Tipografía y otros elementos */
.main-title { font-family: 'Anton', sans-serif; font-size: 2rem; color: #fff; margin: 0 0 20px 0; line-height: 1.1; text-transform: uppercase; }
.section-title { font-family: 'Oswald', sans-serif; color: #5b8bf0; font-size: 14px; margin-bottom: 15px; text-transform: uppercase; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 8px; }

label { font-family: 'Oswald', sans-serif; color: #f5f5f4; font-size: 11px; font-weight: 700; }
input { 
  background: #141414; 
  border: 1.5px solid rgba(255, 255, 255, 0.12); 
  border-radius: 12px; 
  color: #fff; 
  padding: 10px 14px; 
  width: 100%; 
  box-sizing: border-box; 
}
.input-group label { font-family: 'Oswald', sans-serif; font-size: 14px; color: #fff; letter-spacing: 0.5px; font-weight: 500; }

/* Avatar */
.avatar-circle { width: 140px; height: 140px; background: #141414; border-radius: 50%; border: 4px solid #3b82f6; display: flex; align-items: center; justify-content: center; }
.avatar-wrapper { position: relative; margin-bottom: 20px; }
.avatar-action { position: absolute; width: 45px; height: 45px; border-radius: 50%; background: #2bacf1cb; border: 2px solid #000; cursor: pointer; bottom: 0; right: 0; display: flex; align-items: center; justify-content: center; }


/* Membresía */
.membership-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
.toggle-group-small { display: flex; gap: 5px; background: rgba(255,255,255,0.1); padding: 4px; border-radius: 8px; }
.btn-toggle-small { padding: 4px 16px; border: none; color: white; border-radius: 6px; cursor: pointer; font-size: 0.8rem; background: transparent; }
.btn-toggle-small.active { background: #3b82f6; }
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
@media (min-width: 1440px) { .profile-card { max-width: 1600px; gap: 60px; } }



@media (max-width: 768px) {
.avatar-action {
    width: 35px;
    height: 35px;
  }
  
  .avatar-action:active {
    transform: scale(0.9);
  }
  

  .main-content {
    padding: 10px;
    width: 100%;
  }

  .profile-card { grid-template-columns: 1fr; } /* Apila todo en una columna */
  .form-grid { grid-template-columns: 1fr; }   /* Los inputs ahora van uno debajo de otro */
  .profile-section { width: 100%; box-sizing: border-box; }



  .rg-grid { 
    grid-template-columns: 1fr; 
    gap: 15px; 
  }

  .login-card { 
    width: 100%;
    box-sizing: border-box; 
    margin-bottom: 10px;
    padding: 15px;
  }

  .avatar-action {
    width: 35px; /* Tamaño reducido de 50px a 35px */
    height: 35px;
  }
  .avatar-circle {
    width: 120px;
    height: 120px;
  }
}
</style>