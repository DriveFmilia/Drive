<template>
  <div class="form-panel glass-effect">
    <NotificationSystem ref="toastRef" />
    
    <div class="panel-header">
      <h2 class="form-title">AGREGAR CORTE</h2>
      <button class="close-x" @click="$emit('close')">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>
    
    <div class="form-body">
      <div class="time-row">
        <div class="input-group">
          <label>Inicio</label>
          <select v-model="form.inicio" class="custom-select"><option v-for="n in 31" :key="n">{{n}}</option></select>
        </div>
        <div class="input-group">
          <label>Termino</label>
          <select v-model="form.termino" class="custom-select"><option v-for="n in 31" :key="n">{{n}}</option></select>
        </div>
        <div class="input-group">
          <label>Corte</label>
          <select v-model="form.corte" class="custom-select"><option v-for="n in 31" :key="n">{{n}}</option></select>
        </div>
      </div>
      
      <div class="payment-row">
        <div class="input-group" style="flex:1">
          <label>Tipo de Pago</label>
          <select v-model="form.tipo" class="custom-select"><option>Mensual</option><option>Quincenal</option></select>
        </div>
        <button class="btn-save" @click="addCorte">+</button>
      </div>

      <div class="saved-box">
        <div v-for="(item, index) in cortes" :key="index" class="saved-item">
          <span>{{item.inicio}}-{{item.termino}} | {{item.tipo}} | <span style="color:#fbbf24">Corte: {{item.corte}}</span></span>
          <button class="icon-del" @click="removeCorte(index)">X</button>
        </div>
      </div>

      <div class="calendar-grid">
        <div v-for="n in 31" :key="n" :class="['cal-day', getDayClass(n)]">{{ n }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import NotificationSystem from '../../Modals/NotificationSystem.vue';

const form = reactive({ inicio: 1, termino: 15, corte: 2, tipo: 'Mensual' });
const cortes = ref([]);
const toastRef = ref(null);

const addCorte = () => {
  // Validación: No repetir tipo, ni días de inicio, término o corte
  const isDuplicate = cortes.value.some(c => 
    c.tipo === form.tipo || 
    c.inicio == form.inicio || 
    c.termino == form.termino || 
    c.corte == form.corte
  );

  if (isDuplicate) {
    toastRef.value.notify('Error: Configuración ya existente', 'error');
    return;
  }
  
  cortes.value.push({ ...form });
  toastRef.value.notify('Corte guardado con éxito', 'success');
};

const removeCorte = (index) => cortes.value.splice(index, 1);

const getDayClass = (n) => {
  // 1. Prioridad: Día de corte
  const corteMatch = cortes.value.find(c => parseInt(c.corte) === n);
  if (corteMatch) return 'is-corte';
  
  // 2. Rango de pago
  const rangeMatch = cortes.value.find(c => n >= c.inicio && n <= c.termino);
  if (!rangeMatch) return 'default-bg';
  
  return rangeMatch.tipo === 'Mensual' ? 'mes' : 'quin';
};
</script>

<style scoped>
.form-panel { 
  background: #121212; 
  border: 1px solid rgba(255, 255, 255, 0.09); 
  color: #f5f5f4; 
  border-radius: 24px; 
  padding: 32px; 
  width: 95%; /* Ajuste para mejor aprovechamiento en móvil */
  max-width: 440px; 
  max-height: 90vh; /* Evita que el panel se salga de la pantalla */
  overflow-y: auto; /* Permite scroll interno si el contenido es largo */
}
.panel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.form-title { font-family: 'Oswald', sans-serif; font-size: 1.3rem; color: #1c4fd6; }

.time-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.payment-row { display: flex; gap: 10px; align-items: flex-end; margin-bottom: 15px; }

.custom-select { 
  background: #1a1a1a; 
  border: 1px solid rgba(255, 255, 255, 0.1); 
  color: white; 
  padding: 12px 8px; 
  border-radius: 12px; 
  width: 100%; 
  font-size: 14px; 
}
.saved-box { background: #000; padding: 15px; border-radius: 16px; border: 1px solid #333; margin: 20px 0; }
.saved-item { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; font-family: 'Oswald', sans-serif; }
.btn-save { background: #1c4fd6; color: white; border: none; border-radius: 12px; cursor: pointer; height: 45px; width: 50px; font-size: 20px; font-weight: bold; }
.calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px; margin-top: 15px; }
.cal-day { padding: 8px 2px; border-radius: 6px; text-align: center; font-size: 11px; font-weight: bold; font-family: 'Oswald'; color: #000; }
@media (max-width: 480px) {
  .form-panel { padding: 20px; }
  .form-title { font-size: 1.1rem; }
  
  /* Reducir tamaño de fuente en inputs y botones para evitar desbordamiento */
  .input-group label { font-size: 10px; }
  .custom-select { padding: 10px 5px; font-size: 12px; }
  
  /* Ajustar calendario para pantallas muy pequeñas */
  .cal-day { padding: 6px 1px; font-size: 10px; }
}
/* Colores */
.is-corte { background: #fbbf24 !important; color: #000 !important; font-weight: bold; }
.mes { background: #3b82f6; color: white; }
.quin { background: #22c55e; color: white; }
.default-bg { background: #333; color: #666; }
.icon-del { background: none; border: none; color: #ef4444; cursor: pointer; }
</style>