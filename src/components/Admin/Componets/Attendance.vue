<template>
  <div class="form-panel glass-effect">
    <div class="panel-header">
      <h2 class="form-title">ASISTENCIA (COMPARATIVA)</h2>
      <button class="close-x" @click="$emit('close')">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <div class="form-body">
      <!-- Comparativa Mes a Mes -->
      <div class="comparison-container">
        <!-- Mes anterior -->
        <div class="month-block">
          <span class="month-label">Mes Anterior</span>
          <div class="bars-wrapper">
            <div v-for="(day, index) in mesAnterior" :key="'prev-' + index" 
                 class="day-bar" :style="{ height: day.value + '%' }"></div>
          </div>
        </div>
        
        <!-- Mes actual -->
        <div class="month-block">
          <span class="month-label">Mes Actual</span>
          <div class="bars-wrapper active-month">
            <div v-for="(day, index) in mesActual" :key="'curr-' + index" 
                 class="day-bar" :style="{ height: day.value + '%' }"></div>
          </div>
        </div>
      </div>

      <div class="total-summary">
        <div class="summary-item">
          <span>Promedio:</span>
          <strong>14 asistencias</strong>
        </div>
        <div class="summary-item">
          <span>Total:</span>
          <strong>420</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const generarDatos = () => Array.from({ length: 30 }, () => ({ value: Math.floor(Math.random() * 80) + 20 }));
const mesAnterior = ref(generarDatos());
const mesActual = ref(generarDatos());
</script>

<style scoped>
.form-panel { background: #121212; border: 1px solid #333; color: white; border-radius: 24px; padding: 24px; width: 95%; max-width: 500px; }
.panel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
.form-title { font-family: 'Oswald'; font-size: 1.1rem; letter-spacing: 1px; }

/* Contenedor de comparación */
.comparison-container { display: flex; flex-direction: column; gap: 20px; }
.month-block { display: flex; flex-direction: column; gap: 8px; }
.month-label { font-size: 0.7rem; color: #888; text-transform: uppercase; letter-spacing: 0.5px; }

.bars-wrapper { 
  display: flex; align-items: flex-end; gap: 3px; 
  height: 80px; background: #0a0a0a; padding: 10px; 
  border-radius: 12px; border: 1px solid #222;
}
.active-month { border-color: #1c4fd6; } /* Resaltado para el mes actual */

.day-bar { 
  flex: 1; background: #555; border-radius: 2px; min-width: 4px; 
}
.active-month .day-bar { background: #3b82f6; }

/* Footer */
.total-summary { display: flex; justify-content: space-between; border-top: 1px solid #222; margin-top: 20px; padding-top: 20px; }
.summary-item span { font-size: 0.7rem; color: #888; display: block; }
.summary-item strong { font-family: 'Oswald'; font-size: 1.1rem; color: #fff; }

.close-x { background: none; border: none; color: white; cursor: pointer; }
</style>