<template>
  <div class="login-page">
    <router-link :to="{ name: 'home' }" class="top-brand">
      <Logo />
      <span class="logo-text-sm">FitManage Pro</span>
    </router-link>

    <main class="login-container">
      <div class="login-card">
        <h1 class="title">
          Inicia <span class="highlight-text">Sesión</span>
        </h1>
        <p class="subtitle">Gestiona tu gimnasio</p>

        <form @submit.prevent="handleLogin" class="login-form">
          <div class="input-group">
            <label>Usuario</label>
            <div class="input-wrapper">
              <input type="email" placeholder="Correo@ejemplo.com" v-model="email" required />
              <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
          </div>

          <div class="input-group">
            <div class="label-row">
              <label>Contraseña</label>
              <router-link :to="{ name: 'recover-password' }" class="forgot-link">¿Olvidaste la clave?</router-link>
            </div>
            <div class="input-wrapper">
              <input type="password" placeholder="Contraseña" v-model="password" required />
              <div class="icons-right">
                <svg class="lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
            </div>
          </div>

          <button type="submit" class="btn-primary">Entrar al Sistema</button>

          <div class="divider">
            <span>ó</span>
          </div>

          <router-link to="/Record" class="btn-secondary">Registrar tu Gimnasio</router-link>
        </form>
      </div>
    </main>
  </div>
</template>



<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Logo from '@/components/Common/Logo.vue';

const router = useRouter();
const email = ref('');
const password = ref('');

const handleLogin = () => {
  const userEmail = email.value.toLowerCase().trim();
  const userPass = password.value;

  // Validación básica de credenciales
  if (userPass === '123') {
    switch (userEmail) {
      case 'admin@gmail.com':
        console.log('Accediendo como Administrador');
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
    
    // Feedback visual temporal
    alert(`Bienvenido: ${userEmail}`);
  } else {
    alert('Contraseña incorrecta');
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;600;800&display=swap');

.login-page {
  min-height: 100vh;
  background: linear-gradient(45deg, #7794b6, #dffaff);
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  position: relative;
}

.top-brand {
  position: absolute;
  top: 15px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  z-index: 20;
}

.logo-circle-sm {
  background: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.logo-img-sm { width: 30px; filter: invert(1); }

.logo-text-sm {
  font-family: 'Archivo Black', sans-serif;
  font-size: 1rem;
  font-style: italic;
  color: #000;
}

.login-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.login-card {
  background: white;
  width: 100%;
  max-width: 500px; 
  padding: 50px;
  border-radius: 24px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  margin-top: 40px;
}

.title {
  font-family: 'Archivo Black', sans-serif;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 5px;
  color: #000;
  letter-spacing: -2px;
  line-height: 1;
}

.highlight-text { color: #4a6fa5; }
.subtitle { text-align: center; font-weight: 800; font-size: 1rem; margin-bottom: 35px; color: #000; }
.input-group { margin-bottom: 20px; }
.label-row { display: flex; justify-content: space-between; align-items: center; }

label { 
  font-weight: 800; 
  font-size: 0.9rem; 
  margin-bottom: 6px; 
  display: block; 
  color: #000; 
}

.forgot-link { font-size: 0.75rem; color: #3b82f6; font-weight: 700; text-decoration: none; }
.input-wrapper { position: relative; }

input {
  width: 100%;
  padding: 14px;
  padding-right: 45px;
  background: #f9f9f9;
  border: 1.5px solid #eee;
  border-radius: 12px;
  color: #000;
  font-weight: 600;
  box-sizing: border-box;
}

input::placeholder {
  color: #888;
}

.input-icon, .lock-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  color: #000;
}

.btn-primary {
  width: 100%;
  padding: 16px;
  background: #000; 
  color: #fff;
  border: none;
  border-radius: 12px;
  font-family: 'Archivo Black', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
}

.divider { margin: 25px 0; border-top: 1px solid #eee; position: relative; }
.divider span { position: absolute; top: -11px; left: 50%; transform: translateX(-50%); background: white; padding: 0 10px; font-weight: 800; color: #000; }

.btn-secondary {
  display: block;
  width: 100%;
  padding: 14px;
  background: #fff;
  color: #000;
  text-decoration: none;
  border: 2px solid #000;
  border-radius: 12px;
  font-family: 'Archivo Black', sans-serif;
  font-size: 1rem;
  text-align: center;
}

@media (max-width: 600px) {
  .top-brand {
    top: 15px;
    left: 15px;
  }
  .login-card {
    padding: 30px 20px;
    margin-top: 60px; 
  }
  .title { font-size: 2.2rem; }
}
</style>