<template>
  <HeadingAdmin>
    <main class="main-content">
      <div class="search-bar-container">
      <div class="input-group search-small">
        <label>Buscar Cliente</label>
        <input type="text" placeholder="Buscar..." v-model="searchQuery" @keyup.enter="handleSearch">
      </div>
    </div>
      <div class="profile-card">
        <!-- Sección Perfil -->
        <div class="profile-section">
          <h1 class="main-title">Jose Luis <br> <span class="highlight">Ramires</span></h1>
          
          <div class="avatar-wrapper">
            <div class="avatar-circle">
              <svg viewBox="0 0 24 24" fill="white"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            
            <button class="avatar-action btn-stats" @click="goToStatistics">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            </button>
            
            <button class="avatar-action btn-camera" @click="triggerFileUpload">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            </button>
            <input type="file" ref="fileInput" @change="handleFileChange" accept="image/*" style="display: none" />
          </div>
          
          <p class="user-id">ID: GymPer001</p>
        </div>

        <!-- Columna Derecha -->
        <div class="forms-wrapper">
          <div class="rg-grid">
            <!-- Datos Personales -->
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

            <!-- Columna Derecha de tarjetas -->
            <div class="cards-side-column">
              <div class="login-card">
                <h3 class="section-title">Seguimiento Físico</h3>
                <div class="form-grid">
                  <div class="input-group"><label>Peso Inicial (Kg)</label><input type="text"></div>
                  <div class="input-group"><label>Altura Inicial (cm)</label><input type="text"></div>
                </div>
              </div>

              <div class="login-card">
                <h3 class="section-title">Información de Membresía</h3>
                <div class="form-grid">
                  <div class="input-group"><label>Sede</label><input type="text"></div>
                  <div class="input-group"><label>Status</label><input type="text"></div>
                </div>
              </div>
              
              <button class="btn-primary">Guardar Cambios</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </HeadingAdmin>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; 
import HeadingAdmin from '../HeadingAdmin.vue';

const router = useRouter(); 
const fileInput = ref(null); 
const searchQuery = ref('');

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    console.log("Buscando cliente:", searchQuery.value);
    // Ejemplo de redirección si buscas por ID o nombre
    // router.push({ name: 'profile', params: { id: searchQuery.value } });
  }
};
const goToStatistics = () => router.push({ name: 'statistics', params: { id: 'GymPer001' } });
const triggerFileUpload = () => fileInput.value.click(); 
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) console.log("Archivo seleccionado:", file.name);
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;700;800&family=Oswald:wght@400;700&display=swap');

.main-content { 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  width: 100%; 
  padding: 40px clamp(16px, 3vw, 40px); 
  box-sizing: border-box; 
}
.profile-card { display: grid; grid-template-columns: 320px 1fr; gap: 40px; width: 100%; max-width: 1400px; align-items: start; }

/* Perfil */
.profile-section { display: flex; flex-direction: column; align-items: center; text-align: center; background: rgba(18, 18, 18, 0.7); padding: 40px 20px; border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.09); }
.main-title { font-family: 'Anton', sans-serif; font-size: 2.5rem; color: #fff; margin: 0 0 20px 0; line-height: 1.1; text-transform: uppercase; }
.highlight { color: #3b82f6; }
.avatar-circle { width: 200px; height: 200px; background: #141414; border-radius: 50%; border: 4px solid #3b82f6; display: flex; align-items: center; justify-content: center; }
.avatar-wrapper { position: relative; margin-bottom: 20px; }
.avatar-action {
  position: absolute;
  width: 50px;  
  height: 50px; 
  border-radius: 50%;
  background: #2bacf1cb;
  border: 2px solid #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.2s;
  touch-action: manipulation;
}
.btn-stats { top: 0; left: 0; }
.btn-camera { bottom: 0; right: 0; }
.user-id { margin-top: 15px; color: #94a3b8; font-weight: 600; font-family: 'Inter', sans-serif; }

/* Formularios */
.search-bar-container { display: flex; justify-content: flex-end; margin-bottom: 20px; }
.search-small { width: 100%; max-width: 300px; }
.rg-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 20px; }
.login-card { background: rgba(18, 18, 18, 0.7); padding: 24px; border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.12); height: fit-content; margin-bottom: 20px; }
.section-title { font-family: 'Oswald', sans-serif; color: #5b8bf0; font-size: 13px; margin-bottom: 20px; text-transform: uppercase; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 8px; }

.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
.input-group { display: flex; flex-direction: column; gap: 8px; }
label { font-family: 'Oswald', sans-serif; color: #f5f5f4; font-size: 12.5px; font-weight: 700; }
input { background: #141414; border: 1.5px solid rgba(255, 255, 255, 0.12); border-radius: 12px; color: #fff; padding: 14px; font-family: 'Inter', sans-serif; width: 100%; box-sizing: border-box; }
input:focus { border-color: #3b82f6; outline: none; }

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

.search-bar-container-top {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 1400px; 
  margin: 0 auto 20px auto; 
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

  .profile-card { 
    grid-template-columns: 1fr; 
    gap: 15px; 
    padding: 0;
    width: 100%;
  }

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

  .form-grid { 
    grid-template-columns: 1fr; 
    gap: 10px; 
  }
  .avatar-action {
    width: 35px; /* Tamaño reducido de 50px a 35px */
    height: 35px;
  }
  .avatar-circle {
    width: 120px;
    height: 120px;
  }

  .search-bar-container {
    order: -1; 
    margin-bottom: 15px;
    width: 100%;
  }
  
  /* El profile-card va después */
  .profile-card {
    order: 0;
  }
  .search-small {
    width: 100%;
  }
}
</style>