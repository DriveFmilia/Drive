<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentView = ref<'web' | 'mobile'>('web');
</script>

<template>
  <section id="sobre-nosotros" class="hero-wrapper">
    <div class="glow"></div>
    <div class="container">
      <div class="hero-grid">

        <div class="content-left">
          <div class="badge">Sistema integral de gestión</div>

          <h1 class="main-title">
            EL FUTURO<br />
            <span class="text-accent">DEL FITNESS</span>
          </h1>

          <p class="description">
            La plataforma para gestionar tu gimnasio de forma inteligente: pagos, asistencias, recargos
            automáticos y herramientas para entrenadores, recepcionistas y administradores, todo en un solo lugar.
          </p>

          <div class="pricing-info">2 semanas gratis · Plan definitivo desde $650/mes</div>

          <div class="action-group">
            <button @click="router.push('/Record')" class="btn-main">
              Empezar ahora
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </button>
            <button @click="router.push('/login')" class="btn-staff">Acceso staff</button>
          </div>
        </div>

        <div class="content-right">
          <div class="preview-box">
            <div class="view-selector">
              <button @click="currentView = 'web'" :class="['tab-btn', { active: currentView === 'web' }]">Vista Web</button>
              <button @click="currentView = 'mobile'" :class="['tab-btn', { active: currentView === 'mobile' }]">Vista Móvil</button>
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
                    <img src="@/assets/fondo.jpg" alt="Dashboard Web Preview" class="web-preview-img" />
                  </div>
                </div>

                <div v-else key="mobile" class="phone-container">
                  <div class="phone-island"></div>
                  <div class="phone-screen">
                    <img src="@/assets/Contenido/imagen2.png" alt="App Móvil Preview" class="phone-preview-img" />
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
  scroll-margin-top: 84px;
  padding: clamp(60px, 9vw, 120px) clamp(20px, 5vw, 60px);
  position: relative;
  overflow: hidden;
  background: #0a0a0a;
  color: #f5f5f4;
  font-family: 'Inter', sans-serif;
  padding-top: calc(84px + clamp(60px, 9vw, 120px));
}

.glow {
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 640px;
  height: 640px;
  max-width: 140vw;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(28,79,214,0.35) 0%, rgba(28,79,214,0) 70%);
  filter: blur(10px);
  animation: pulseGlow 6s ease-in-out infinite;
  pointer-events: none;
}

@keyframes pulseGlow { 0%, 100% { opacity: 0.28; } 50% { opacity: 0.5; } }
@keyframes floatSlow { 0% { transform: translateY(0); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0); } }
@keyframes fadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }

.container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
}

.hero-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(460px, 100%), 1fr));
  gap: clamp(32px, 5vw, 60px);
  align-items: center;
}

.badge {
  display: inline-block;
  padding: 7px 16px;
  background: #161616;
  border: 1px solid rgba(28,79,214,0.4);
  border-radius: 6px;
  font-family: 'Oswald', sans-serif;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 1.4px;
  color: #4a7cf0;
  text-transform: uppercase;
  margin-bottom: 26px;
  animation: fadeUp 0.7s ease both;
  animation-delay: 0.05s;
}

.main-title {
  font-family: 'Anton', sans-serif;
  font-size: clamp(2.4rem, 6.5vw, 5.2rem);
  line-height: 0.95;
  text-transform: uppercase;
  letter-spacing: -1px;
  margin: 0 0 26px;
  animation: fadeUp 0.7s ease both;
  animation-delay: 0.15s;
}

.text-accent { color: #3a6bd6; }

.description {
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  line-height: 1.6;
  color: rgba(245,245,244,0.62);
  max-width: 560px;
  margin: 0 0 24px;
  animation: fadeUp 0.7s ease both;
  animation-delay: 0.25s;
}

.pricing-info {
  display: inline-block;
  font-family: 'Oswald', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #4a7cf0;
  background: #121212;
  border: 1px solid rgba(255,255,255,0.09);
  padding: 13px 18px;
  border-radius: 8px;
  margin-bottom: 34px;
  animation: fadeUp 0.7s ease both;
  animation-delay: 0.35s;
}

.action-group {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  animation: fadeUp 0.7s ease both;
  animation-delay: 0.45s;
}

.btn-main {
  background: #1c4fd6;
  color: #ffffff;
  font-family: 'Oswald', sans-serif;
  font-size: 14.5px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  padding: 17px 32px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 52px;
  transition: all 0.25s ease;
}

.btn-main:hover {
  background: #123ba0;
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(28,79,214,0.35);
}

.btn-staff {
  background: transparent;
  color: #f5f5f4;
  font-family: 'Oswald', sans-serif;
  font-size: 14.5px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  padding: 17px 32px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.12);
  cursor: pointer;
  min-height: 52px;
  transition: all 0.25s ease;
}

.btn-staff:hover { background: rgba(255,255,255,0.06); }

.content-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  animation: fadeUp 0.8s ease both;
  animation-delay: 0.3s;
}

.preview-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.view-selector {
  display: flex;
  gap: 6px;
  background: rgba(20,20,20,0.85);
  padding: 6px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.06);
  margin-bottom: 22px;
}

.tab-btn {
  background: transparent;
  color: rgba(245,245,244,0.65);
  border: none;
  padding: 10px 18px;
  font-family: 'Oswald', sans-serif;
  font-size: 13px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.tab-btn.active { background: #1c4fd6; color: #ffffff; }

.display-area {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mockup-container {
  background: #111111;
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 30px 70px rgba(0,0,0,0.55);
  width: 100%;
  max-width: 600px;
  animation: floatSlow 6.5s ease-in-out infinite;
}

.mockup-header {
  background: #1a1a1a;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.dots { display: flex; gap: 6px; }
.dots span { width: 9px; height: 9px; border-radius: 50%; }
.dot-red { background: #ff5f56; }
.dot-amber { background: #ffbd2e; }
.dot-green { background: #27c93f; }

.mockup-url {
  flex: 1;
  text-align: center;
  font-size: 11px;
  color: rgba(245,245,244,0.4);
}

.mockup-body { height: 380px; overflow: hidden; }

.web-preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.phone-container {
  width: 230px;
  height: 460px;
  background: #111111;
  border-radius: 38px;
  border: 4px solid #232323;
  padding: 10px;
  position: relative;
  box-shadow: 0 30px 60px rgba(0,0,0,0.6);
  animation: floatSlow 6.5s ease-in-out infinite;
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

.phone-screen {
  width: 100%;
  height: 100%;
  border-radius: 28px;
  overflow: hidden;
  background: #111a1e;
}

.phone-preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.fade-scale-enter-active, .fade-scale-leave-active { transition: all 0.4s ease; }
.fade-scale-enter-from { opacity: 0; transform: scale(0.94) translateY(14px); }
.fade-scale-leave-to { opacity: 0; transform: scale(0.96) translateY(-14px); }

@media (max-width: 1200px) {
  .hero-grid { text-align: center; }
  .content-left { display: flex; flex-direction: column; align-items: center; }
  .description { text-align: center; }
  .action-group { width: 100%; max-width: 340px; }
  .btn-main, .btn-staff { width: 100%; justify-content: center; }
}

@media (max-width: 480px) {
  .action-group { flex-direction: column; }
}
</style>
