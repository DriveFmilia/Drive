<template>
  <div class="schedule-panel">
    <div class="panel-header">
      <h3 class="title">Horario Semanal</h3>
      <button class="close-btn" @click="$emit('close')">✕</button>
    </div>

    
    <div class="mobile-only">
      <div class="mobile-nav">
        <div class="tabs-container">
          <button v-for="(day, index) in days" :key="index"
                  :class="['tab', { active: activeDay === index }]"
                  @click="activeDay = index">
            {{ day }}
          </button>
        </div>
      </div>
      <div class="schedule-content">
        <div v-for="hour in hours" :key="hour" class="row">
          <span class="hour">{{ hour }}</span>
          <div class="slot">Disponible</div>
        </div>
      </div>
    </div>

    
    <div class="desktop-only">
      <table class="desktop-table">
        <thead>
          <tr>
            <th></th>
            <th v-for="day in days" :key="day">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="hour in hours" :key="hour">
            <td class="hour-cell">{{ hour }}</td>
            <td v-for="day in days" :key="day">
              <div class="slot-desktop">Disponible</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const hours = ['08:00', '09:00', '10:00', '11:00', '12:00'];
const activeDay = ref(0);
defineEmits(['close']);
</script>

<style scoped>
.schedule-panel {
  background: #121212;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 32px;
  width: 95%;
  max-width: 1000px;
  color: white;
}


.mobile-only { display: block; }
.desktop-only { display: none; }

@media (min-width: 768px) {
  .mobile-only { display: none; }
  .desktop-only { display: block; }
}


.mobile-nav { width: 100%; overflow-x: auto; margin-bottom: 20px; padding-bottom: 5px; scrollbar-width: none;  -ms-overflow-style: none; }
.mobile-nav::-webkit-scrollbar { display: none; }
.tabs-container { display: flex; gap: 8px; }
.tabs-container { display: flex; gap: 8px; }
.tab { background: #1a1a1a; border: none; color: #64748b; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; white-space: nowrap; }
.tab.active { background: #1c4fd6; color: white; }
.row { display: flex; align-items: center; gap: 15px; margin-bottom: 10px; }
.slot { background: #1a1a1a; padding: 15px; border-radius: 12px; flex-grow: 1; text-align: center; color: #475569; }


.desktop-table { width: 100%; border-collapse: separate; border-spacing: 10px; }
th { color: #94a3b8; font-family: 'Oswald'; padding-bottom: 15px; text-align: center; }
.hour-cell { font-family: 'Oswald'; font-weight: bold; color: #fff; }
.slot-desktop { background: #1a1a1a; padding: 15px; border-radius: 8px; text-align: center; color: #475569; font-size: 0.8rem; border: 1px solid rgba(255,255,255,0.03); }

.panel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.title { font-family: 'Oswald', sans-serif; margin: 0; }
.close-btn { background: #1a1a1a; border: none; color: #fff; padding: 8px 12px; border-radius: 8px; cursor: pointer; }
</style>