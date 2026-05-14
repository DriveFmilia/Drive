<template>
  <section class="pricing-wrapper">
    <div class="container">
      <div class="header">
        <h2 class="main-title">MENSUALIDADES</h2>
        <p class="subtitle">Planes flexibles diseñados para adaptarse al crecimiento de tu centro deportivo.</p>
      </div>

      <div class="pricing-grid">
        <!-- Mensualidad Básica -->
        <div class="pricing-card">
          <div class="card-content">
            <h3 class="plan-name">Mensualidad Básica</h3>
            <div class="price">
              <span class="currency">$</span>
              <span class="amount">650</span>
            </div>
            <ul class="features-list">
              <li>Control total de pagos</li>
              <li>Sin IA integrada</li>
              <li>Sin gestión de roles</li>
              <li>Soporte estándar</li>
            </ul>
          </div>
          <button class="plan-btn">Seleccionar</button>
        </div>

        <!-- Mensualidad Pro -->
        <div class="pricing-card featured">
          <div class="card-content">
            <h3 class="plan-name">Mensualidad Pro</h3>
            <div class="price">
              <span class="currency">$</span>
              <span class="amount">2100</span>
            </div>
            <ul class="features-list">
              <li>Todo lo de Básica</li>
              <li>Gestión de Roles</li>
              <li>Estadísticas avanzadas</li>
              <li>Recordatorios automáticos</li>
            </ul>
          </div>
          <button class="plan-btn">Seleccionar Pro</button>
        </div>

        <!-- Mensualidad Elite -->
        <div class="pricing-card">
          <div class="card-content">
            <h3 class="plan-name">Mensualidad Elite</h3>
            <div class="price">
              <span class="currency">$</span>
              <span class="amount">6500</span>
            </div>
            <ul class="features-list">
              <li>Control total + IA</li>
              <li>Todos los Roles</li>
              <li>Nutriólogo integrado</li>
              <li>Soporte 24/7 prioritario</li>
            </ul>
          </div>
          <button class="plan-btn">Obtener Todo</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;600;800&display=swap');

.pricing-wrapper {
  background: linear-gradient(90deg, #98a7c0 0%, #3e7187 100%);
  padding: 60px 0;
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.main-title {
  font-family: 'Archivo Black', sans-serif;
  font-size: clamp(2rem, 8vw, 5rem);
  color: white;
  text-transform: uppercase;
  margin: 0;
  line-height: 1.1;
}

.subtitle {
  color: white;
  opacity: 0.9;
  margin: 15px auto 0;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  max-width: 600px;
}

.pricing-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  align-items: stretch;
}

@media (min-width: 992px) {
  .pricing-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
}

.pricing-card {
  background: rgba(30, 58, 95, 0.4);
  backdrop-filter: blur(15px);
  border: 2px solid #a855f7;
  border-radius: 30px;
  padding: 30px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 450px;
  transition: transform 0.3s ease, background 0.3s ease;
}


.pricing-card.premium {
  border: 2px solid #a855f7;
  background: rgba(30, 58, 95, 0.4);
}


@media (hover: hover) {
  .pricing-card:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.15);
  }
  .pricing-card.premium {
    transform: scale(1.05);
  }
}

.plan-name {
  font-family: 'Archivo Black', sans-serif;
  font-size: 1.25rem;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.price {
  margin-bottom: 25px;
  display: flex;
  align-items: flex-start;
}

.currency {
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 8px;
  margin-right: 4px;
}

.amount {
  font-size: clamp(3rem, 10vw, 4.5rem);
  font-weight: 800;
  line-height: 1;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
}

.features-list li {
  margin-bottom: 12px;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  opacity: 0.95;
  text-align: left;
}

.features-list li::before {
  content: "✓";
  margin-right: 10px;
  color: #fff;
  font-weight: bold;
}

.plan-btn {
  width: 100%;
  background: #a855f7;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 15px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  text-transform: uppercase;
}

.pricing-card.premium .plan-btn {
  background: #a855f7;
  color: white;
}

.plan-btn:active {
  transform: scale(0.98);
}
</style>