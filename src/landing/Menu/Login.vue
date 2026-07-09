<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Logo from '@/landing/logo.vue';

const router = useRouter();
const email = ref('');
const password = ref('');
const showPassword = ref(false);


const handleLogin = () => {
  const userEmail = email.value.toLowerCase().trim();
  const userPass = password.value;

  if (userPass === '123') {
    switch (userEmail) {
      case 'admin@gmail.com':
        router.push({ name: 'admin-dashboard' }); 
        break;
      case 'dueño@gmail.com':
        console.log('Accediendo como Dueño');
        break;
      case 'recepcionista@gmail.com':
        console.log('Accediendo como Recepcionista');
        break;
      case 'cliente@gmail.com':
        console.log('Accediendo como Cliente');
        break;
      default:
        alert('Usuario no reconocido');
    }
  } else {
    alert('Contraseña incorrecta');
  }
};
</script>

<template>
  <div class="login-page">
    <header class="top-bar">
      <router-link :to="{ name: 'home' }" class="top-brand">
        <logo />
        <span class="logo-text-sm">FitManage Pro</span>
      </router-link>
    </header>

    <main class="login-container">
      <div class="login-card">
        <div class="card-header">
          <h1 class="title">
            Inicia <span class="highlight-text">Sesión</span>
          </h1>
          <p class="subtitle">Gestiona tu gimnasio de forma inteligente</p>
        </div>

        <form @submit.prevent="handleLogin" class="login-form">
          <div class="input-group">
            <label for="email">Correo Electrónico</label>
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
            <div class="label-row">
              <label for="password">Contraseña</label>
              <router-link :to="{ name: 'recover-password' }" class="forgot-link">¿Olvidaste tu contraseña?</router-link>
            </div>
            <div class="input-wrapper">
              <input 
                id="password"
                :type="showPassword ? 'text' : 'password'" 
                placeholder="Ingresa tu contraseña" 
                v-model="password" 
                required 
              />
              <button 
                type="button" 
                class="toggle-password-btn" 
                @click="showPassword = !showPassword"
              >
                <svg v-if="!showPassword" class="lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <svg v-else class="lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </button>
            </div>
          </div>

          <button type="submit" class="btn-primary">
            Entrar al Sistema
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>

          <div class="divider">
            <span>¿Eres nuevo?</span>
          </div>

          <router-link to="/Record" class="btn-secondary">Registrar tu Gimnasio</router-link>
        </form>
      </div>
    </main>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700;800&display=swap');

.login-page {
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

.login-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
}

.login-card {
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

.login-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.input-group { 
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label-row { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
}

label { 
  font-weight: 700; 
  font-size: 0.85rem; 
  color: #ffffff; 
}

.forgot-link { 
  font-size: 0.8rem; 
  color: #60a5fa; 
  font-weight: 700; 
  text-decoration: none;
  transition: color 0.2s ease;
}

.forgot-link:hover {
  color: #93c5fd;
  text-decoration: underline;
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
  font-weight: 400;
}

.input-icon, .lock-icon {
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

input:focus ~ .input-icon,
input:focus ~ .toggle-password-btn .lock-icon {
  color: #3b82f6;
}

.toggle-password-btn {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 52px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
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
  .login-card {
    padding: 35px 25px;
  }
  .title { 
    font-size: 2.2rem; 
  }
}
</style>