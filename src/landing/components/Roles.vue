<script setup lang="ts">
import { useReveal } from '../useReveal';

const { el, revealed } = useReveal();

const ROLES = [
  {
    name: 'Administrador',
    items: ['Registro de clientes y roles', 'Gestión de usuarios', 'Pagos', 'Bitácoras', 'IA integrada'],
  },
  {
    name: 'Recepcionista',
    items: ['Registro clientes', 'Gestión de usuarios', 'Pagos', 'Recordatorios', 'Estadísticas'],
  },
  {
    name: 'Entrenador',
    items: ['Gestión de rutinas', 'Seguimiento de progreso', 'Control de clases', 'Tips y consejos'],
  },
  {
    name: 'Clientes',
    items: ['Perfil personal', 'Entrenamientos', 'Rachas y logros', 'Estadísticas'],
  },
];
</script>

<template>
  <section id="roles" ref="el" class="roles-wrapper">
    <div class="container">
      <div class="header" :class="{ revealed }">
        <h2 class="main-title">ROLES <span class="text-accent">AGREGADOS</span></h2>
        <p class="subtitle">Una estructura diseñada para optimizar la operación, conectar a tu equipo y mejorar la experiencia de cada miembro.</p>
      </div>

      <div class="roles-grid">
        <div
          v-for="(role, i) in ROLES"
          :key="role.name"
          class="role-card"
          :class="{ revealed }"
          :style="{ transitionDelay: `${i * 0.08}s` }"
        >
          <div class="role-header">
            <div class="role-name">{{ role.name }}</div>
            <div class="role-dot"></div>
          </div>
          <div v-for="item in role.items" :key="item" class="role-item">
            <span class="check">✓</span>{{ item }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.roles-wrapper {
  scroll-margin-top: 84px;
  padding: clamp(60px, 9vw, 110px) clamp(20px, 5vw, 60px);
  background: #0a0a0a;
  font-family: 'Inter', sans-serif;
}

.container { max-width: 1400px; margin: 0 auto; }

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
  font-size: clamp(1.9rem, 5.5vw, 3.6rem);
  text-transform: uppercase;
  margin: 0;
  color: #f5f5f4;
}

.text-accent { color: #3a6bd6; }

.subtitle {
  font-size: 15px;
  color: rgba(245, 245, 244, 0.62);
  max-width: 600px;
  margin: 14px auto 0;
}

.roles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
  gap: 20px;
}

.role-card {
  background: #121212;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 28px 24px;
  min-height: 300px;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.6s ease;
}

.role-card.revealed { opacity: 1; }
.role-card:hover { transform: translateY(-6px); }

.role-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.role-name {
  font-family: 'Oswald', sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: #f5f5f4;
}

.role-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #3a6bd6;
  flex: none;
}

.role-item {
  font-size: 13.5px;
  color: rgba(245, 245, 244, 0.62);
  margin-bottom: 12px;
  display: flex;
  gap: 9px;
}

.check {
  color: #3a6bd6;
  font-weight: 700;
}

@media (max-width: 1024px) {
  .header { text-align: center; }
}
</style>
