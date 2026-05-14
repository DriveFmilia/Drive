<template>
  <div class="recovery-page">
    <router-link :to="{ name: 'home' }" class="top-brand">
      <div class="logo-circle-sm">
        <img src="@/assets/logo.png" alt="Logo" class="logo-img-sm" />
      </div>
      <span class="logo-text-sm">The Gym</span>
    </router-link>

    <main class="recovery-container">
      <div class="recovery-card">
        <h1 class="title">
          Recuperar <span class="highlight-text">Acceso</span>
        </h1>
        <p class="subtitle">Ingresa tus datos para verificar tu identidad.</p>

        <form @submit.prevent="handleRecovery" class="recovery-form">
          <div class="input-group">
            <label>Correo electrónico</label>
            <div class="input-wrapper">
              <input type="email" placeholder="Correo@ejemplo.com" v-model="email" required />
              <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
          </div>

          <div class="input-group">
            <label>Fecha de Nacimiento</label>
            <div class="input-wrapper" @click="showDatePicker">
              <input 
                type="date" 
                ref="dateInput"
                v-model="birthDate" 
                required 
              />
              <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
          </div>

          <button type="submit" class="btn-primary">Mandar instrucciones</button>

          <div class="divider">
            <span>ó</span>
          </div>

          <router-link :to="{ name: 'login' }" class="btn-secondary">
            Inicia Sesión
          </router-link>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const birthDate = ref('');
const dateInput = ref<HTMLInputElement | null>(null);

const showDatePicker = () => {
  if (dateInput.value) {
    dateInput.value.showPicker();
  }
};

const handleRecovery = () => {
  console.log('Recovery:', email.value, birthDate.value);
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;600;800&display=swap');

.recovery-page {
  min-height: 100vh;
  background: linear-gradient(45deg, #7794b6, #dffaff);
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  position: relative;
}

.top-brand {
  position: absolute;
  top: 25px;
  left: 25px;
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  z-index: 10;
}

.logo-circle-sm {
  background: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-img-sm { width: 35px; filter: invert(1); }

.logo-text-sm {
  font-family: 'Archivo Black', sans-serif;
  font-size: 1.1rem;
  font-style: italic;
  color: #000;
}

.recovery-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.recovery-card {
  background: white;
  width: 100%;
  max-width: 600px;
  padding: 60px 80px;
  border-radius: 28px;
  box-shadow: 0 15px 50px rgba(0,0,0,0.1);
  text-align: center;
}

.title {
  font-family: 'Archivo Black', sans-serif;
  font-size: 2.8rem;
  color: #000;
  letter-spacing: -2px;
  white-space: nowrap;
  margin-bottom: 10px;
}

.highlight-text {
  color: #2c3e50;
  background: linear-gradient(to bottom, #2c3e50, #4a6fa5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 45px;
  color: #333;
}

.input-group {
  margin-bottom: 25px;
  text-align: left;
}

label {
  font-weight: 800;
  font-size: 0.95rem;
  margin-bottom: 10px;
  display: block;
  color: #000;
}

.input-wrapper { 
  position: relative;
}

input {
  width: 100%;
  padding: 18px;
  padding-right: 50px;
  background: #f8f9fa;
  border: 1px solid #bbb;
  border-radius: 12px;
  font-size: 1.1rem;
  color: #000;
  box-sizing: border-box;
}

input[type="date"] {
  min-height: 60px;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 0;
  width: 30px;
  height: 100%;
  opacity: 0;
}

.input-icon {
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  width: 22px;
  color: #000;
  pointer-events: none;
}

.btn-primary {
  width: 100%;
  padding: 20px;
  background: #8e8e8e;
  color: #000;
  border: none;
  border-radius: 15px;
  font-family: 'Archivo Black', sans-serif;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 15px;
}

.divider {
  margin: 35px 0;
  border-top: 2px solid #eee;
  position: relative;
}

.divider span {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 0 15px;
  font-weight: 800;
  color: #000;
}

.btn-secondary {
  display: block;
  width: 100%;
  padding: 18px;
  background: white;
  color: #000;
  text-decoration: none;
  border: 2px solid #000;
  border-radius: 15px;
  font-family: 'Archivo Black', sans-serif;
  font-size: 1.1rem;
  text-align: center;
}

@media (max-width: 600px) {
  .top-brand {
    position: absolute;
    top: 15px;
    left: 15px;
    width: auto;
  }

  .recovery-container {
    padding: 15px;
    align-items: flex-start;
    padding-top: 85px;
  }

  .recovery-card {
    padding: 30px 20px;
    max-width: 100%;
    border-radius: 20px;
  }

  .title {
    font-size: 2.2rem;
    white-space: normal;
    line-height: 1.1;
  }

  input {
    padding: 14px;
    font-size: 1rem;
    min-height: 50px !important;
  }

  .btn-primary, .btn-secondary {
    padding: 15px;
    font-size: 1rem;
  }
}
</style>