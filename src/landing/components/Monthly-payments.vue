<script setup lang="ts">
import { useReveal } from '../useReveal';

const { el, revealed } = useReveal();
</script>

<template>
  <section id="mensualidades" ref="el" class="pricing-wrapper">
    <div class="container">
      <div class="header" :class="{ revealed }">
        <h2 class="main-title">MENSUALIDADES</h2>
        <p class="subtitle">Planes flexibles diseñados para adaptarse al crecimiento de tu centro deportivo.</p>
      </div>

      <div class="pricing-grid">
        <div class="pricing-card" :class="{ revealed }">
          <div>
            <div class="plan-name">Básica</div>
            <div class="price"><span class="currency">$</span><span class="amount">650</span></div>
            <div class="feature">Control total de pagos</div>
            <div class="feature">Sin IA integrada</div>
            <div class="feature">Sin gestión de roles</div>
            <div class="feature">Soporte estándar</div>
          </div>
          <button class="plan-btn">Seleccionar</button>
        </div>

        <div class="pricing-card featured" :class="{ revealed }">
          <div>
            <div class="badge">Más popular</div>
            <div class="plan-name">Pro</div>
            <div class="price"><span class="currency">$</span><span class="amount">2,100</span></div>
            <div class="feature">Todo lo de Básica</div>
            <div class="feature">Gestión de roles</div>
            <div class="feature">Estadísticas avanzadas</div>
            <div class="feature">Recordatorios automáticos</div>
          </div>
          <button class="plan-btn primary">Seleccionar Pro</button>
        </div>

        <div class="pricing-card" :class="{ revealed }">
          <div>
            <div class="plan-name">Elite</div>
            <div class="price"><span class="currency">$</span><span class="amount">6,500</span></div>
            <div class="feature">Control total + IA</div>
            <div class="feature">Todos los roles</div>
            <div class="feature">Nutriólogo integrado</div>
            <div class="feature">Soporte 24/7 prioritario</div>
          </div>
          <button class="plan-btn">Obtener todo</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-wrapper {
  scroll-margin-top: 84px;
  padding: clamp(60px, 9vw, 110px) clamp(20px, 5vw, 60px);
  background: #121212;
  font-family: 'Inter', sans-serif;
}

.container { max-width: 1200px; margin: 0 auto; }

.header {
  text-align: center;
  margin-bottom: 50px;
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.header.revealed { opacity: 1; transform: translateY(0); }

.main-title {
  font-family: 'Anton', sans-serif;
  font-size: clamp(1.9rem, 6vw, 3.6rem);
  text-transform: uppercase;
  margin: 0;
  color: #f5f5f4;
}

.subtitle {
  font-size: 15px;
  color: rgba(245, 245, 244, 0.62);
  max-width: 560px;
  margin: 14px auto 0;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: 22px;
  align-items: stretch;
}

.pricing-card {
  background: #0a0a0a;
  border: 2px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 32px 28px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #f5f5f4;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.6s ease;
}

.pricing-card.revealed { opacity: 1; }
.pricing-card:hover { transform: translateY(-6px); }

.pricing-card.featured {
  background: #1b1b1b;
  border: 2px solid #1c4fd6;
  transform: scale(1.03);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.4);
}

.pricing-card.featured:hover { transform: scale(1.03) translateY(-6px); }

.badge {
  display: inline-block;
  background: #1c4fd6;
  color: #ffffff;
  font-family: 'Oswald', sans-serif;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding: 5px 11px;
  border-radius: 5px;
  margin-bottom: 14px;
}

.plan-name {
  font-family: 'Oswald', sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.price {
  display: flex;
  align-items: flex-start;
  gap: 4px;
  margin-bottom: 22px;
}

.currency { font-size: 20px; font-weight: 700; margin-top: 5px; }

.amount {
  font-family: 'Anton', sans-serif;
  font-size: clamp(2.6rem, 6vw, 3.2rem);
  line-height: 1;
}

.feature {
  font-size: 13.5px;
  color: rgba(245, 245, 244, 0.62);
  margin-bottom: 12px;
  display: flex;
  gap: 9px;
}

.feature::before { content: "✓"; color: #3a6bd6; font-weight: 700; }

.plan-btn {
  margin-top: 22px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f5f5f4;
  text-align: center;
  padding: 15px;
  border-radius: 12px;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  cursor: pointer;
  min-height: 48px;
  transition: background 0.25s;
}

.plan-btn:hover { background: rgba(255, 255, 255, 0.06); }

.plan-btn.primary { background: #1c4fd6; border: none; color: #ffffff; }
.plan-btn.primary:hover { background: #123ba0; }

@media (max-width: 1024px) {
  .pricing-card.featured { transform: none; }
  .pricing-card.featured:hover { transform: translateY(-6px); }
}
</style>
