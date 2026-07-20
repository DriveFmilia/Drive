<template>
  <div class="form-panel glass-effect">
    <!-- Header igual al anterior -->
    <div class="panel-header">
      <h2 class="form-title">INGRESOS (ÚLTIMOS 12 MESES)</h2>
      <button class="close-x" @click="$emit('close')">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
    
    <div class="form-body">
      <!-- Gráfica optimizada -->
      <div class="chart-container">
        <div v-for="mes in dataIngresos" :key="mes.nombre" class="bar-col">
          <div class="bar-track">
            <div class="bar-fill" :style="{ height: mes.porcentaje + '%' }">
              <span class="tooltip">{{ mes.valor }}</span>
            </div>
          </div>
          <span class="month-label">{{ mes.nombre }}</span>
        </div>
      </div>

      <!-- Footer de promedio -->
      <div class="total-stats">
        <span class="label">Promedio mensual:</span>
        <span class="value">$12,450.00</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const dataIngresos = ref([
  { nombre: 'Ene', porcentaje: 35, valor: '9k' }, { nombre: 'Feb', porcentaje: 60, valor: '15k' },
  { nombre: 'Mar', porcentaje: 40, valor: '10k' }, { nombre: 'Abr', porcentaje: 85, valor: '21k' },
  { nombre: 'May', porcentaje: 55, valor: '13k' }, { nombre: 'Jun', porcentaje: 75, valor: '18k' },
  { nombre: 'Jul', porcentaje: 50, valor: '12k' }, { nombre: 'Ago', porcentaje: 30, valor: '7k' },
  { nombre: 'Sep', porcentaje: 65, valor: '16k' }, { nombre: 'Oct', porcentaje: 90, valor: '22k' },
  { nombre: 'Nov', porcentaje: 55, valor: '13k' }, { nombre: 'Dic', porcentaje: 70, valor: '17k' }
]);
</script>

<style scoped>
.form-panel { 
  background: #121212; border: 1px solid rgba(255, 255, 255, 0.1); 
  color: #fff; border-radius: 24px; padding: 24px; width: 95%; max-width: 450px; 
}
.panel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
.form-title { font-family: 'Oswald', sans-serif; font-size: 1.1rem; color: #fff; margin: 0; letter-spacing: 0.5px; }

/* Contenedor de gráfica responsivo */
.chart-container { 
  display: flex; justify-content: space-between; align-items: flex-end; 
  height: 180px; gap: 6px; margin-bottom: 20px;
}
.bar-col { display: flex; flex-direction: column; align-items: center; flex: 1; }
.bar-track { width: 100%; height: 140px; background: rgba(255,255,255,0.03); border-radius: 6px; position: relative; }
.bar-fill { 
  width: 100%; background: #1c4fd6; border-radius: 6px; 
  position: absolute; bottom: 0; transition: height 0.8s ease;
  box-shadow: 0 0 10px rgba(28, 79, 214, 0.3);
}
.month-label { font-size: 9px; color: #666; margin-top: 8px; font-family: 'Oswald'; text-transform: uppercase; }

/* Estilo del Promedio */
.total-stats { 
  background: #000; padding: 16px; border-radius: 12px; 
  display: flex; justify-content: space-between; align-items: center;
  border: 1px solid #222;
}
.total-stats .label { color: #888; font-size: 0.9rem; }
.total-stats .value { color: #588ef2; font-weight: bold; font-family: 'Oswald'; font-size: 1.2rem; }

@media (max-width: 480px) {
  .chart-container { height: 150px; gap: 4px; }
  .bar-track { height: 110px; }
  .month-label { font-size: 8px; }
  .form-panel { padding: 18px; }
}
.close-x { background: none; border: none; color: white; cursor: pointer; }
</style>