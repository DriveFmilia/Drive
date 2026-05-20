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
          <img src="@/assets/Contenido/imagen2.png" alt="Icono The Gym" class="logo-img" />
        </div>
        <span class="logo-text">FitManage Pro</span>
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
        
        <button class="mobile-toggle" @click="toggleMenu" aria-label="Menu">
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
          <router-link to="/Login" @click="isMenuOpen = false" class="m-login">Iniciar Sesión</router-link>
          <router-link to="/Record" @click="isMenuOpen = false" class="m-register">Registrar tu Gimnasio</router-link>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@600;800&display=swap');

.nav-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: rgba(10, 15, 18, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  font-family: 'Inter', sans-serif;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
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
  background: white;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  padding: 6px;
  transition: transform 0.3s ease;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.logo-section:hover .logo-box {
  transform: scale(1.05);
}

.logo-text {
  font-family: 'Archivo Black', sans-serif;
  font-size: 1.3rem;
  color: white;
  letter-spacing: -0.5px;
}

.desktop-links {
  display: flex;
  gap: 32px;
}

.nav-link {
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.65);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #a6d2eb;
}

.auth-actions {
  display: flex;
  align-items: center;
  gap: 24px;
}

.login-btn {
  font-weight: 800;
  font-size: 0.8rem;
  color: white;
  letter-spacing: 1px;
  text-decoration: none;
  transition: color 0.3s;
}

.login-btn:hover {
  color: #a6d2eb;
}

.register-btn {
  background: white;
  color: black;
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 800;
  font-size: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.register-btn:hover {
  background: #a6d2eb;
  transform: translateY(-2px);
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: white;
  margin: 6px 0;
  transition: 0.3s ease;
}

/* Animación del botón hamburguesa */
.hamburger.is-active span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.hamburger.is-active span:nth-child(2) { opacity: 0; }
.hamburger.is-active span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

.mobile-menu {
  position: fixed;
  top: 75px;
  left: 0;
  width: 100%;
  height: calc(100vh - 75px);
  background: rgba(10, 15, 18, 0.98);
  backdrop-filter: blur(20px);
  padding: 2.5rem;
  z-index: 99;
}

.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.mobile-links button, .mobile-links a {
  text-align: left;
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  background: none;
  border: none;
  text-decoration: none;
}

.m-login { color: rgba(255,255,255,0.7) !important; }
.m-register { color: #a6d2eb !important; }

.divider {
  border: none;
  border-top: 1px solid rgba(255,255,255,0.1);
  margin: 8px 0;
}

.slide-enter-active, .slide-leave-active { transition: all 0.3s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-15px); }

@media (max-width: 1024px) {
  .desktop-links, .login-btn, .register-btn { display: none; }
  .mobile-toggle { display: block; }
}
</style>