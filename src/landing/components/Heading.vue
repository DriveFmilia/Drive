<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  isMenuOpen.value = false; 
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="nav-wrapper">
    <div class="nav-container">
      
      <div class="logo-section" @click="scrollToSection('hero')">
        <div class="logo-box">
          <img src="@/assets/logo.png" alt="Icono The Gym" class="logo-img" />
        </div>
        <span class="logo-text">THE GYM</span>
      </div>

      <div class="desktop-links">
        <button @click="scrollToSection('sobre-nosotros')" class="nav-link">Sobre nosotros</button>
        <button @click="scrollToSection('beneficios')" class="nav-link">Beneficios</button>
        <button @click="scrollToSection('roles')" class="nav-link">Roles</button>
        <button @click="scrollToSection('mensualidades')" class="nav-link">Mensualidades</button>
      </div>

      <div class="auth-actions">
        <router-link to="/Login" class="login-btn">LOGIN</router-link>
        <router-link to="/Record" class="register-btn">REGISTRAR GYM</router-link>
        
        <button class="mobile-toggle" @click="toggleMenu">
          <div :class="['hamburger', { 'is-active': isMenuOpen }]">
            <span></span><span></span><span></span>
          </div>
        </button>
      </div>
    </div>

    <Transition name="slide">
      <div v-if="isMenuOpen" class="mobile-menu">
        <div class="mobile-links">
          <button @click="scrollToSection('sobre-nosotros')">Sobre nosotros</button>
          <button @click="scrollToSection('beneficios')">Beneficios</button>
          <button @click="scrollToSection('roles')">Roles</button>
          <button @click="scrollToSection('mensualidades')">Mensualidades</button>
          <hr class="divider" />
          <button @click="scrollToSection('login')" class="m-login">Iniciar Sesión</button>
          <button @click="scrollToSection('registro')" class="m-register">Registrar tu Gimnasio</button>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@600;800&display=swap');

.nav-wrapper {
  --nav-bg: rgba(10, 15, 18, 0.9);
  --accent-blue: #3b82f6;
  --accent-hover: #2563eb;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: var(--nav-bg);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  font-family: 'Inter', sans-serif;
}

.nav-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.logo-box {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.logo-section:hover .logo-box {
  transform: scale(1.1);
}

.logo-text {
  font-family: 'Archivo Black', sans-serif;
  font-size: 1.25rem;
  color: white;
  letter-spacing: -1px;
}

.desktop-links {
  display: flex;
  gap: 32px;
}

.nav-link {
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s;
}

.nav-link:hover {
  color: var(--accent-blue);
}

.auth-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.login-btn {
  font-weight: 800;
  font-size: 0.8rem;
  color: white;
  letter-spacing: 1px;
  transition: color 0.3s;
}

.login-btn:hover {
  color: var(--accent-blue);
}

.register-btn {
  background: white;
  color: black;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 800;
  font-size: 0.75rem;
  transition: all 0.3s;
}

.register-btn:hover {
  background: var(--accent-blue);
  color: white;
  transform: translateY(-2px);
}

.mobile-toggle {
  display: none;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: white;
  margin: 5px 0;
  transition: 0.3s;
}

.mobile-menu {
  position: fixed;
  top: 75px;
  left: 0;
  width: 100%;
  height: calc(100vh - 75px);
  background: #0a0f12;
  padding: 2rem;
  z-index: 99;
}

.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.mobile-links button {
  text-align: left;
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
}

.mobile-links button:active {
  color: var(--accent-blue);
}

.m-register {
  color: var(--accent-blue) !important;
}

.divider {
  border: none;
  border-top: 1px solid rgba(255,255,255,0.1);
  margin: 10px 0;
}

.slide-enter-active, .slide-leave-active { 
  transition: opacity 0.3s, transform 0.3s; 
}
.slide-enter-from, .slide-leave-to { 
  opacity: 0; 
  transform: translateY(-10px); 
}

@media (max-width: 1024px) {
  .desktop-links, .login-btn, .register-btn {
    display: none;
  }
  .mobile-toggle {
    display: block;
  }
}
</style>