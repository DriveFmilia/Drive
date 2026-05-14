<template>
  <section class="benefits-wrapper">
    <div class="container">
      <div class="header">
        <h2 class="main-title">
          ALGUNOS DE <br />
          <span class="text-accent">NUESTROS BENEFICIOS</span>
        </h2>
      </div>

      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="card-content">
            <h3 class="card-title">Gestión integral de pagos</h3>
            <p class="card-text">
              Controla ingresos, saldos pendientes y deudores de forma automática. 
              Incluye recordatorios inteligentes para asegurar tu flujo de caja.
            </p>
          </div>
          <div class="card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
        </div>

        <div class="benefit-card highlighted">
          <div class="card-content">
            <h3 class="card-title">Acceso inteligente y seguro</h3>
            <p class="card-text">
              Seguridad sin brechas, accesos bajo control. Implementamos asistencia 
              facial y códigos QR para asegurar que solo ingresen quienes deben.
            </p>
          </div>
          <div class="card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
        </div>

        <div class="benefit-card">
          <div class="card-content">
            <h3 class="card-title">Inteligencia Artificial</h3>
            <p class="card-text">
              Tu información a una pregunta de distancia. Con el Asistente Personalizado con IA, 
              obtén reportes en segundos sin navegar por menús complejos.
            </p>
          </div>
          <div class="card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;600;700&display=swap');

.benefits-wrapper {
  background: linear-gradient(180deg, #211049 0%, #8485c4 50%, #ffffff 100%);
  padding: 120px 0;
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 4%;
}

.header {
  margin-bottom: 80px;
}

.main-title {
  font-family: 'Archivo Black', sans-serif;
  font-size: clamp(2.5rem, 4vw, 5rem);
  line-height: 0.9;
  text-transform: uppercase;
  color: white;
  margin: 0;
}

.text-accent {
  color: #a68ab8;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 25px;
  align-items: stretch;
}

.benefit-card {
  background: rgba(33, 16, 73, 0.4);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  padding: 45px 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.4s ease;
  color: white;
}

.benefit-card:hover {
  transform: translateY(-10px);
  background: rgba(33, 16, 73, 0.6);
  border-color: rgba(255, 255, 255, 0.4);
}

.benefit-card.highlighted {
  background: #ffffff;
  color: #211049;
  border: none;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.benefit-card.highlighted .card-text {
  color: #4b5563;
}

.card-title {
  font-weight: 700;
  font-size: 1.6rem;
  margin-bottom: 20px;
  line-height: 1.2;
}

.card-text {
  line-height: 1.7;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 400;
}

.benefit-card.highlighted .card-text {
  color: #374151;
}

.card-icon {
  margin-top: 40px;
  align-self: flex-end;
  opacity: 0.8;
}

.benefit-card.highlighted .card-icon {
  color: #211049;
  opacity: 1;
}

@media (max-width: 1024px) {
  .header {
    text-align: center;
  }
  .benefits-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>