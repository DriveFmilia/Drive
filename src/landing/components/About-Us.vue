<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentView = ref<'web' | 'mobile'>('web');
</script>

<template>
  <section class="hero-wrapper">
    <div class="container">
      <div class="hero-grid">
        
        <div class="content-left">
          <div class="badge">SISTEMA INTEGRAL DE GESTIÓN</div>
          
          <h1 class="main-title">
            EL FUTURO <br />
            <span class="text-accent">DEL FITNESS</span>
          </h1>

          <p class="description">
            La plataforma ideal para gestionar tu gimnasio de forma inteligente. Centraliza el control de pagos, asistencias, recargos automáticos y optimiza tus flujos de trabajo integrando herramientas para entrenadores, recepcionistas y administradores.
          </p>

          <div class="pricing-info">
            Pruébalo ahora con 2 semanas gratuitas. Plan definitivo por solo $650/mes.
          </div>

          <div class="action-group">
            <button @click="router.push('/Record')" class="btn-main">
              EMPEZAR AHORA
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </button>
            <button @click="router.push('/login')" class="btn-staff">
              ACCESO STAFF
            </button>
          </div>
        </div>

        <div class="content-right">
          <div class="preview-box">
            
            <div class="view-selector">
              <button 
                @click="currentView = 'web'" 
                :class="['tab-btn', { active: currentView === 'web' }]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
                Vista Web
              </button>
              <button 
                @click="currentView = 'mobile'" 
                :class="['tab-btn', { active: currentView === 'mobile' }]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>
                Vista Móvil
              </button>
            </div>

            <div class="display-area">
              <Transition name="fade-scale" mode="out-in">
                
                <div v-if="currentView === 'web'" key="web" class="mockup-container">
                  <div class="mockup-header">
                    <div class="dots">
                      <span class="dot-red"></span>
                      <span class="dot-amber"></span>
                      <span class="dot-green"></span>
                    </div>
                    <div class="mockup-url">fitmanage.pro/dashboard</div>
                  </div>
                  <div class="mockup-body">
                    <img src="../assets/fondo.jpg" alt="Dashboard Web Preview" class="web-preview-img" />
                  </div>
                </div>

                <div v-else key="mobile" class="phone-container">
                  <div class="phone-island"></div>
                  <div class="phone-volume-btn"></div>
                  <div class="phone-power-btn"></div>
                  
                  <div class="phone-screen">
                    <img src="../assets/imagen2.png" alt="App Atleta Preview" class="phone-preview-img" />
                  </div>
                </div>

              </Transition>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-wrapper {
  min-height: 100vh;
  background: linear-gradient(180deg, #06090b 0%, #111a1e 50%, #1a262c 100%);
  display: flex;
  align-items: center;
  color: white;
  font-family: 'Inter', sans-serif;
  overflow: hidden;
  padding: 140px 0 80px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px; 
  align-items: center;
}

.badge {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(166, 210, 235, 0.1);
  border: 1px solid rgba(166, 210, 235, 0.2);
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  color: #a6d2eb;
}

.main-title {
  font-family: 'Archivo Black', sans-serif;
  font-size: clamp(2.5rem, 4.5vw, 5.5rem);
  line-height: 0.95;
  margin-bottom: 1.8rem;
  text-transform: uppercase;
  letter-spacing: -2px;
}

.text-accent {
  color: #a6d2eb;
  background: linear-gradient(45deg, #a6d2eb, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  font-size: clamp(1rem, 1.1vw, 1.2rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
  max-width: 620px;
  margin-bottom: 1.8rem;
}

.pricing-info {
  font-size: 0.95rem;
  color: #a6d2eb;
  font-weight: 700;
  margin-bottom: 2.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: inline-block;
  padding: 14px 20px;
  border-radius: 8px;
  max-width: 620px;
}

.action-group {
  display: flex;
  gap: 16px;
}

.btn-main {
  background: white;
  color: #06090b;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.25s ease;
  font-size: 0.95rem;
  border: none;
  cursor: pointer;
}

.btn-main:hover {
  background: #a6d2eb;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(166, 210, 235, 0.2);
}

.btn-staff {
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 800;
  background: #11181c;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.25s ease;
}

.btn-staff:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-3px);
}

.content-right {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.preview-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 650px;
}

.view-selector {
  display: flex;
  gap: 8px;
  background: rgba(17, 24, 28, 0.8);
  padding: 6px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 24px;
  backdrop-filter: blur(8px);
}

.tab-btn {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  padding: 10px 18px;
  font-size: 0.85rem;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tab-btn:hover {
  color: white;
}

.tab-btn.active {
  background: #a6d2eb;
  color: #06090b;
  box-shadow: 0 4px 12px rgba(166, 210, 235, 0.2);
}

.display-area {
  width: 100%;
  height: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mockup-container {
  background: #090d11;
  border-radius: 16px;
  width: 100%;
  height: 480px;
  box-shadow: 0 40px 80px rgba(0,0,0,0.6);
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.05);
  display: flex;
  flex-direction: column;
}

.mockup-header {
  background: rgba(0,0,0,0.3);
  padding: 14px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgba(255,255,255,0.03);
}

.dots { display: flex; gap: 6px; }
.dots span { width: 8px; height: 8px; border-radius: 50%; }
.dot-red { background: #ff5f56; }
.dot-amber { background: #ffbd2e; }
.dot-green { background: #27c93f; }

.mockup-url {
  font-size: 11px;
  color: rgba(255,255,255,0.3);
  background: rgba(0,0,0,0.3);
  padding: 4px 12px;
  border-radius: 4px;
  flex: 1;
}

.mockup-body {
  flex: 1;
  background: #090d11;
  overflow: hidden;
}

.web-preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.phone-container {
  position: relative;
  width: 255px;
  height: 510px;
  background: #090d11;
  border-radius: 42px;
  padding: 10px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8), 0 0 50px rgba(166, 210, 235, 0.15);
  border: 4px solid #232e35;
  outline: 1px solid rgba(255, 255, 255, 0.1);
  animation: floatingPhone 7s ease-in-out infinite;
}

.phone-island {
  position: absolute;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  width: 75px;
  height: 15px;
  background: black;
  border-radius: 20px;
  z-index: 10;
}

.phone-volume-btn {
  position: absolute;
  left: -7px;
  top: 90px;
  width: 3px;
  height: 35px;
  background: #232e35;
  border-radius: 3px 0 0 3px;
}

.phone-power-btn {
  position: absolute;
  right: -7px;
  top: 110px;
  width: 3px;
  height: 45px;
  background: #232e35;
  border-radius: 0 3px 3px 0;
}

.phone-screen {
  width: 100%;
  height: 100%;
  border-radius: 34px;
  overflow: hidden;
  background: #111a1e;
  border: 1px solid rgba(0, 0, 0, 0.5);
}

.phone-preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

@keyframes floatingPhone {
  0% {
    transform: translateY(0px) rotate3d(1, 1, 1, 0deg);
  }
  25% {
    transform: translateY(-8px) rotate3d(1, 2, 1, 4deg);
  }
  50% {
    transform: translateY(4px) rotate3d(-1, 1, 1, -2deg);
  }
  75% {
    transform: translateY(-6px) rotate3d(1, -1, 1, 3deg);
  }
  100% {
    transform: translateY(0px) rotate3d(1, 1, 1, 0deg);
  }
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}

.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-20px);
}

@media (max-width: 1200px) {
  .hero-wrapper { padding: 120px 0 60px 0; }
  .hero-grid { 
    grid-template-columns: 1fr; 
    text-align: center;
    gap: 50px;
  }
  .content-left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .description { text-align: center; }
  .content-right { justify-content: center; }
  .action-group { width: 100%; max-width: 340px; }
  .btn-main, .btn-staff { width: 100%; }  
  .display-area { height: 540px; }
  .mockup-container { height: 420px; }
}

@media (max-width: 480px) {
  .action-group { flex-direction: column; }
}
</style>