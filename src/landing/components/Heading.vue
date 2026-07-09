<script setup lang="ts">
import { ref } from 'vue';
import Logo from '../logo.vue';

const isMenuOpen = ref(false);

const NAV_LINKS = [
  { id: 'sobre-nosotros', label: 'Sobre nosotros' },
  { id: 'beneficios', label: 'Beneficios' },
  { id: 'roles', label: 'Roles' },
  { id: 'mensualidades', label: 'Mensualidades' },
];

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
  <header class="nav-wrapper">
    <div class="nav-container">

      <div class="logo-section" @click="scrollToSection('sobre-nosotros')">
        <Logo />
        <span class="logo-text">FITMANAGE <span class="text-accent">PRO</span></span>
      </div>

      <nav class="desktop-links">
        <button v-for="link in NAV_LINKS" :key="link.id" @click="scrollToSection(link.id)" class="nav-link">
          {{ link.label }}
        </button>
      </nav>

      <div class="auth-actions">
        <router-link to="/login" class="login-link">Iniciar sesión</router-link>
        <router-link to="/Record" class="register-btn">Registrar Gym</router-link>
      </div>

      <button class="mobile-toggle" aria-label="Abrir menú" @click="toggleMenu">
        <div :class="['hamburger', { 'is-active': isMenuOpen }]">
          <span></span><span></span><span></span>
        </div>
      </button>
    </div>

    <Transition name="slide">
      <div v-if="isMenuOpen" class="mobile-menu">
        <button v-for="link in NAV_LINKS" :key="link.id" @click="scrollToSection(link.id)" class="mobile-link">
          {{ link.label }}
        </button>
        <hr class="divider" />
        <router-link to="/login" @click="isMenuOpen = false" class="m-login">Iniciar sesión</router-link>
        <router-link to="/Record" @click="isMenuOpen = false" class="m-register">Registrar tu Gimnasio</router-link>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.nav-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: rgba(10, 10, 10, 0.82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  font-family: 'Inter', sans-serif;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 60px);
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.logo-text {
  font-family: 'Anton', sans-serif;
  font-size: 19px;
  letter-spacing: 0.3px;
  line-height: 1;
  white-space: nowrap;
  color: #f5f5f4;
}

.text-accent {
  color: #1c4fd6;
}

.desktop-links {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-link {
  font-family: 'Oswald', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: rgba(245, 245, 244, 0.62);
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 0;
  transition: color 0.25s;
}

.nav-link:hover {
  color: #f5f5f4;
}

.auth-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.login-link {
  font-family: 'Oswald', sans-serif;
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: #f5f5f4;
  text-transform: uppercase;
  text-decoration: none;
}

.register-btn {
  background: #1c4fd6;
  color: #ffffff;
  font-family: 'Oswald', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.25s ease;
}

.register-btn:hover {
  background: #123ba0;
  transform: translateY(-2px);
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #f5f5f4;
  margin: 6px 0;
  transition: 0.25s;
}

.hamburger.is-active span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.hamburger.is-active span:nth-child(2) { opacity: 0; }
.hamburger.is-active span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

.mobile-menu {
  position: fixed;
  top: 84px;
  left: 0;
  width: 100%;
  height: calc(100vh - 84px);
  background: rgba(8, 8, 8, 0.99);
  z-index: 99;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  overflow-y: auto;
}

.mobile-link {
  text-align: left;
  font-family: 'Oswald', sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #f5f5f4;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 6px 0;
  width: 100%;
}

.m-login, .m-register {
  font-family: 'Oswald', sans-serif;
  text-decoration: none;
}

.m-login {
  font-size: 16px;
  font-weight: 700;
  color: rgba(245, 245, 244, 0.85);
}

.m-register {
  background: #1c4fd6;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 16px;
  border-radius: 10px;
  text-align: center;
}

.slide-enter-active, .slide-leave-active { transition: all 0.3s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-15px); }

@media (max-width: 960px) {
  .desktop-links, .auth-actions { display: none; }
  .mobile-toggle { display: block; }
}
</style>
