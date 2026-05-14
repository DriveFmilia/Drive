<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
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
            La Plataforma ideal para gestionar tu gimnasio, contando con la gestión de pagos, asistencias, recargos, IA, etc. 
            Además de contar con equipos de trabajos, recepcionista y entrenadores para tener una mejor gestión de su gimnasio.
          </p>

          <div class="pricing-info">
            Pruébalo ahora con 2 semanas gratuitas, finalizando la suscripción costo real $650.
          </div>

          <div class="action-group">
            <button @click="router.push('/registro')" class="btn-main">
              EMPEZAR AHORA
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </button>
            <button @click="router.push('/login')" class="btn-staff">
              ACCESO STAFF
            </button>
          </div>
        </div>

        <div class="content-right">
          <div class="mockup-container">
            <div class="mockup-header">
              <div class="dots">
                <span class="dot-red"></span>
                <span class="dot-amber"></span>
                <span class="dot-green"></span>
              </div>
              <div class="mockup-url">thegym-gestion.io/dashboard</div>
            </div>
            <div class="mockup-body">
              <div class="skeleton-content">
                <div class="s-chart"></div>
                <div class="s-lines">
                  <div class="s-line"></div>
                  <div class="s-line"></div>
                </div>
              </div>
              <span class="preview-label">VISTA PREVIA DEL PANEL</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Archivo+Black&display=swap');

.hero-wrapper {
  min-height: 100vh;
  background: linear-gradient(180deg, #000000 0%, #3a5d6c 60%, #a6d2eb 100%);
  display: flex;
  align-items: center;
  color: white;
  font-family: 'Inter', sans-serif;
  overflow: hidden;
  padding: 100px 0;
}

.container {
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 2%;
  width: 100%;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px; 
  align-items: center;
}

.badge {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  margin-bottom: 1.5rem;
  color: #a6d2eb;
  text-transform: uppercase;
}

.main-title {
  font-family: 'Archivo Black', sans-serif;
  font-size: clamp(3rem, 4vw, 7rem);
  line-height: 0.9;
  margin-bottom: 2rem;
  text-transform: uppercase;
  color: white;
}

.text-accent {
  color: #a6d2eb;
}

.description {
  font-size: 1.25rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: justify;
}

.pricing-info {
  font-size: 1.1rem;
  color: white;
  font-weight: 800;
  margin-bottom: 2.5rem;
  background: rgba(255, 255, 255, 0.1);
  display: inline-block;
  padding: 12px 20px;
  border-radius: 8px;
  max-width: 700px; 
  width: 100%;
}

.action-group {
  display: flex;
  gap: 20px;
}

.btn-main {
  background: white;
  color: #0a0f12;
  padding: 18px 36px;
  border-radius: 10px;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  font-size: 1rem;
  border: none;
}

.btn-main:hover {
  background: #a6d2eb;
  transform: translateY(-4px);
}

.btn-staff {
  padding: 18px 36px;
  border-radius: 10px;
  font-weight: 800;
  background: #11181c;
  color: white;
  border: 1px solid rgba(153, 153, 179, 0.1);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn-staff:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-4px);
}

.content-right {
  display: flex;
  justify-content: flex-end;
}

.mockup-container {
  background: #0d1117;
  border-radius: 20px;
  width: 100%;
  max-width: 800px;
  height: 550px;
  box-shadow: 0 50px 100px rgba(0,0,0,0.5);
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.05);
  display: flex;
  flex-direction: column;
}

.mockup-header {
  background: rgba(0,0,0,0.5);
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.dots { display: flex; gap: 8px; }
.dots span { width: 10px; height: 10px; border-radius: 50%; }
.dot-red { background: #ff5f56; }
.dot-amber { background: #ffbd2e; }
.dot-green { background: #27c93f; }

.mockup-url {
  font-size: 11px;
  color: #4b5563;
  background: rgba(0,0,0,0.4);
  padding: 5px 15px;
  border-radius: 6px;
  flex: 1;
}

.mockup-body {
  padding: 60px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
}

.skeleton-content {
  opacity: 0.03;
}

.s-chart {
  width: 100%;
  height: 200px;
  background: white;
  border-radius: 12px;
  margin-bottom: 25px;
}

.s-line {
  width: 100%;
  height: 12px;
  background: white;
  margin-bottom: 12px;
  border-radius: 6px;
}

.preview-label {
  font-family: 'Archivo Black', sans-serif;
  color: white;
  opacity: 0.08;
  font-size: 3.5rem;
  text-align: center;
  margin-top: auto;
  line-height: 1;
}


@media (max-width: 1200px) {
  .hero-wrapper {
    padding: 120px 0 60px 0; 
    min-height: auto;
  }
  .hero-grid { 
    grid-template-columns: 1fr; 
    text-align: center;
    gap: 40px;
  }
  .content-left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .description { 
    text-align: center; 
    font-size: 1.1rem;
  }
  .pricing-info {
    max-width: 100%;
    font-size: 1rem;
  }
  .content-right { 
    justify-content: center; 
    width: 100%;
  }
  .action-group { 
    flex-direction: column; 
    width: 100%; 
    max-width: 300px; 
    margin: 0 auto;  
    gap: 15px;

  }
  .btn-main, .btn-staff {
    width: 100%;    
    padding: 14px 24px; 
    font-size: 0.9rem; 
    justify-content: center; 
  }  
  .mockup-container { 
    height: 350px; 
    max-width: 100%;
  }
  .preview-label {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 2.5rem;
  }
  .badge {
    font-size: 0.6rem;
  }
  .btn-main, .btn-staff {
    padding: 15px 20px;
    font-size: 0.9rem;
  }
}
</style>