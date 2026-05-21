<template>
  <div class="recovery-page">
    <header class="top-bar">
      <router-link :to="{ name: 'home' }" class="top-brand">
        <logo />
        <span class="logo-text-sm">FitManage Pro</span>
      </router-link>
    </header>

    <main class="recovery-container">
      <div class="recovery-card">
        <div class="card-header">
          <h1 class="title">
            Recuperar <span class="highlight-text">Acceso</span>
          </h1>
          <p class="subtitle">Ingresa tus datos para verificar tu identidad</p>
        </div>

        <form @submit.prevent="handleRecovery" class="recovery-form">
          <div class="input-group">
            <label for="email">Correo electrónico</label>
            <div class="input-wrapper">
              <input 
                id="email"
                type="email" 
                placeholder="correo@ejemplo.com" 
                v-model="email" 
                required 
              />
              <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
          </div>

          <div class="input-group">
            <label for="birthDate">Fecha de Nacimiento</label>
            <div class="input-wrapper" @click="showDatePicker">
              <input 
                id="birthDate"
                type="date" 
                ref="dateInput"
                v-model="birthDate" 
                required 
              />
              <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
          </div>

          <button type="submit" class="btn-primary">
            Mandar instrucciones
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>

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
import Logo from '@/landing/logo.vue';

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
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700;800&display=swap');

.recovery-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #06090bd2 0%, #b4e9ff8e 50%, #1a262c65 100%);
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
}

.top-bar {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;
}

.top-brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-text-sm {
  font-family: 'Archivo Black', sans-serif;
  font-size: 1.1rem;
  color: #ffffff;
  letter-spacing: -0.5px;
}

.recovery-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
}

.recovery-card {
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  width: 100%;
  max-width: 440px; 
  padding: 50px;
  border-radius: 24px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.card-header {
  text-align: center;
  margin-bottom: 35px;
}

.title {
  font-family: 'Archivo Black', sans-serif;
  font-size: 2.5rem;
  color: #ffffff;
  letter-spacing: -1.5px;
  line-height: 1.1;
  margin: 0 0 8px 0;
}

.highlight-text { 
  color: #3b82f6; 
}

.subtitle { 
  font-weight: 400; 
  font-size: 0.95rem; 
  color: #e2e8f0;
  margin: 0;
}

.recovery-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.input-group { 
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label { 
  font-weight: 700; 
  font-size: 0.85rem; 
  color: #ffffff; 
}

.input-wrapper { 
  position: relative; 
}

input {
  width: 100%;
  padding: 14px 48px 14px 16px;
  background: rgba(15, 23, 42, 0.6);
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
  box-sizing: border-box;
  transition: all 0.2s ease;
}

input:focus {
  outline: none;
  background: rgba(15, 23, 42, 0.8);
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3);
}

input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1);
  opacity: 0.6;
  cursor: pointer;
}

.input-icon {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: #94a3b8;
  pointer-events: none;
  transition: color 0.2s ease;
}

input:focus ~ .input-icon {
  color: #3b82f6;
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

.divider { 
  margin: 20px 0; 
  border-top: 1px solid rgba(255, 255, 255, 0.15); 
  position: relative; 
  text-align: center;
}

.divider span { 
  position: absolute; 
  top: -10px; 
  left: 50%; 
  transform: translateX(-50%); 
  background: #1e293b;
  padding: 2px 14px; 
  font-weight: 700; 
  font-size: 0.8rem;
  color: #cbd5e1; 
  border-radius: 20px;
}

.btn-secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  text-decoration: none;
  border: 1.5px solid rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  font-family: 'Archivo Black', sans-serif;
  font-size: 0.95rem;
  box-sizing: border-box;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #3b82f6;
  color: #3b82f6;
}

@media (max-width: 480px) {
  .recovery-card {
    padding: 35px 25px;
  }
  .title { 
    font-size: 2.2rem; 
  }
}
</style>