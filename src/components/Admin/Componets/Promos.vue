<template>
  <div class="form-panel glass-effect">
    <NotificationSystem ref="toastRef" />
    
    <div class="panel-header">
      <h2 class="form-title">Seleccionar Oferta</h2>
      <button class="close-x" @click="$emit('close')">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>
    
    <div class="form-body">
      <div v-for="oferta in ofertas" :key="oferta.nombre" class="oferta-item" @click="seleccionar(oferta)">
        <div class="oferta-info">
          <!-- SVG de estrella/promo -->
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#ef4444">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span class="nombre-oferta">{{ oferta.nombre }}</span>
        </div>
        
        <div class="oferta-precio">
          <span class="precio">${{ oferta.precio }}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NotificationSystem from '../../Modals/NotificationSystem.vue';

const toastRef = ref(null);
const ofertas = ref([
  { nombre: '3 Meses', precio: 1200 },
  { nombre: '1 Semana', precio: 150 },
  { nombre: '12 Meses', precio: 4000 },
  { nombre: '1 Mes', precio: 650 }
]);

const seleccionar = (oferta) => {
  toastRef.value.notify(`Seleccionaste: ${oferta.nombre}`, 'success');
};
</script>

<style scoped>
.form-panel { 
  background: #121212; 
  border: 1px solid rgba(255, 255, 255, 0.09); 
  color: #f5f5f4; 
  border-radius: 24px; 
  padding: 20px; /* Reducido para móvil */
  width: 95%; 
  max-width: 440px; 
  margin: 10px auto; /* Centrado */
}
.panel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.form-title { font-family: 'Oswald', sans-serif; font-size: 1.2rem; color: #1c4fd6; }

.oferta-item { 
  background: rgba(255, 255, 255, 0.05); 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  padding: 14px 16px; 
  margin-bottom: 10px; 
  border-radius: 12px; 
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
}

.oferta-info { display: flex; align-items: center; gap: 10px; }
.nombre-oferta { font-family: 'Oswald', sans-serif; color: #fff; font-size: 0.95rem; }
.oferta-item:hover { background: rgba(255, 255, 255, 0.08); }

.oferta-precio { display: flex; align-items: center; gap: 15px; color: #10b981; font-weight: 700; font-family: 'Oswald'; }

.oferta-precio { display: flex; align-items: center; gap: 8px; color: #10b981; font-weight: 700; }
.precio { font-size: 1rem; }

.close-x { background: none; border: none; color: #fff; cursor: pointer; padding: 5px; }
@media (max-width: 380px) {
  .form-panel { padding: 15px; }
  .nombre-oferta { font-size: 0.85rem; }
  .precio { font-size: 0.9rem; }
}
</style>