<template>
  <section class="roles-wrapper">
    <div class="container">
      <div class="header">
        <h2 class="main-title">ROLES <span class="text-accent">AGREGADOS</span></h2>
        <p class="subtitle">
          Una estructura diseñada para optimizar la operación, conectar a tu equipo 
          y mejorar la experiencia de cada miembro.
        </p>
      </div>

      <div class="roles-grid">
        <!-- Administrador -->
        <div class="role-card glass">
          <div class="card-content">
            <div class="role-header">
              <h3 class="role-name">Administrador</h3>
              <svg class="role-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <ul class="role-list">
              <li>Registro (Clientes o roles)</li>
              <li>Gestión Usuarios</li>
              <li>Pagos</li>
              <li>Configuraciones</li>
              <li>Bitácoras</li>
              <li>IA integrada</li>
            </ul>
          </div>
          
        </div>

        <!-- Recepcionista -->
        <div class="role-card glass">
          <div class="card-content">
            <div class="role-header">
              <h3 class="role-name">Recepcionista</h3>
              <svg class="role-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <ul class="role-list">
              <li>Registro Clientes</li>
              <li>Gestión Usuarios</li>
              <li>Pagos</li>
              <li>Recordatorios</li>
              <li>Estadísticas</li>
            </ul>
          </div>
        </div>

        <!-- Entrenador -->
        <div class="role-card glass">
          <div class="card-content">
            <div class="role-header">
              <h3 class="role-name">Entrenador</h3>
              <svg class="role-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"/><path d="M2 20h20"/><path d="M14 12v.01"/><path d="M10 12v.01"/><path d="M10 16v.01"/><path d="M14 16v.01"/><path d="M10 8v.01"/><path d="M14 8v.01"/>
              </svg>
            </div>
            <ul class="role-list">
              <li>Gestión de Rutinas</li>
              <li>Seguimiento de Progreso</li>
              <li>Control de Clases</li>
              <li>Tips y Consejos</li>
            </ul>
          </div>
        </div>

        <!-- Clientes -->
        <div class="role-card glass">
          <div class="card-content">
            <div class="role-header">
              <h3 class="role-name">Clientes</h3>
              <svg class="role-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <ul class="role-list">
              <li>Perfil Personal</li>
              <li>Entrenamientos</li>
              <li>Rachas y Logros</li>
              <li>Estadísticas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;700&display=swap');


.roles-wrapper {
  background: linear-gradient(180deg, #0a1945 0%, #2e3b5e 50%, #7d889b 100%);
  padding: 100px 0;
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;
}

.header {
  text-align: center;
  margin-bottom: 60px;
}


.main-title {
  font-family: 'Archivo Black', sans-serif;
  font-size: clamp(2.5rem, 6vw, 6rem);
  text-transform: uppercase;
  color: white;
  margin: 0;
}

.text-accent {
  color: rgba(255, 255, 255, 0.4); 
}

.subtitle {
  color: white;
  max-width: 650px;
  margin: 20px auto 0;
  opacity: 0.9;
}

.roles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}


.role-card {
  background: rgba(3, 5, 31, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 520px;
  transition: all 0.4s ease;
}


.role-card.glass-premium {
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(168, 85, 247, 0.6); /* Borde púrpura sutil */
}

.role-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.18);
}

.role-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.role-name {
  font-family: 'Archivo Black', sans-serif;
  font-size: 1.2rem;
  color: white;
  margin: 0;
}

.role-svg {
  width: 24px;
  height: 24px;
  color: white;
  opacity: 0.8;
}

.role-list {
  list-style: none;
  padding: 0;
}

.role-list li {
  margin-bottom: 15px;
  color: white;
  display: flex;
  align-items: center;
  font-size: 1rem;
  opacity: 0.9;
}

.role-list li::before {
  content: "✓";
  margin-right: 12px;
  font-weight: bold;
}

/* Botones con el nuevo estilo */
.action-btn {
  background: white;
  color: #1a2a5a;
  border: none;
  padding: 14px;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  text-transform: uppercase;
  font-size: 0.85rem;
}

.action-btn.accent {
  background: #a855f7;
  color: white;
}

.action-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
</style>