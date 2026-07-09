<script setup lang="ts">
import { useReveal } from '../useReveal';

const { el, revealed } = useReveal();
</script>

<template>
  <section id="beneficios" ref="el" class="benefits-wrapper">
    <div class="container">
      <h2 class="main-title" :class="{ revealed }">
        ALGUNOS DE NUESTROS<br /><span class="text-accent">BENEFICIOS</span>
      </h2>

      <div class="benefits-grid">
        <div class="benefit-card" :class="{ revealed }" style="transition-delay:0s">
          <h3 class="card-title">Gestión integral de pagos</h3>
          <p class="card-text">Controla ingresos, saldos pendientes y deudores automáticamente, con recordatorios inteligentes para tu flujo de caja.</p>
        </div>

        <div class="benefit-card highlighted" :class="{ revealed }" style="transition-delay:0.1s">
          <h3 class="card-title">Acceso inteligente y seguro</h3>
          <p class="card-text">Asistencia facial y códigos QR aseguran que solo ingresen quienes deben, sin brechas de seguridad.</p>
        </div>

        <div class="benefit-card" :class="{ revealed }" style="transition-delay:0.2s">
          <h3 class="card-title">Inteligencia artificial</h3>
          <p class="card-text">Reportes al instante con el Asistente IA — tu información a una pregunta de distancia, sin menús complejos.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.benefits-wrapper {
  scroll-margin-top: 84px;
  padding: clamp(60px, 9vw, 110px) clamp(20px, 5vw, 60px);
  background: #121212;
  font-family: 'Inter', sans-serif;
}

.container { max-width: 1300px; margin: 0 auto; }

.main-title {
  font-family: 'Anton', sans-serif;
  font-size: clamp(1.9rem, 5vw, 3.4rem);
  line-height: 0.95;
  text-transform: uppercase;
  margin: 0 0 50px;
  color: #f5f5f4;
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.main-title.revealed { opacity: 1; transform: translateY(0); }

.text-accent { color: #3a6bd6; }

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 22px;
}

.benefit-card {
  background: #1b1b1b;
  color: #f5f5f4;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: clamp(28px, 3vw, 38px) clamp(24px, 3vw, 32px);
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.6s ease;
}

.benefit-card.revealed { opacity: 1; }
.benefit-card:hover { transform: translateY(-6px); }

.benefit-card.highlighted {
  background: #1c4fd6;
  color: #ffffff;
  border-color: transparent;
}

.card-title {
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 14px;
}

.card-text {
  font-size: 14.5px;
  line-height: 1.65;
  color: rgba(245, 245, 244, 0.62);
  margin: 0;
}

.benefit-card.highlighted .card-text { color: rgba(255, 255, 255, 0.82); }

@media (max-width: 1024px) {
  .container { text-align: center; }
}
</style>
