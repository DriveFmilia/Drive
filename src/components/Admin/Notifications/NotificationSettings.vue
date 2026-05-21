<template>
  <div class="notifications-panel settings-panel">
    <div class="panel-header">
      <div class="header-title">
        <h3>Notificaciones</h3>
        <p class="subtitle">Configura tus preferencias</p>
      </div>
      <button class="btn-icon" @click="$emit('close')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>

    <div class="settings-body">
      
      <div class="setting-group">
        <label class="group-label">ESTADO</label>
        <div class="status-card">
          <span class="status-text">⚠️ Notificaciones no configuradas</span>
        </div>
        <div class="platform-info">🌐 Plataforma: web</div>
      </div>

      <div class="setting-group">
        <label class="group-label">PUSH NOTIFICATIONS</label>
        <div class="push-card">
          <div class="push-info">
            <span>Desactivadas</span>
            <p>Alertas cuando la app está cerrada</p>
          </div>
          <button class="btn-activate">Activar</button>
        </div>
      </div>

      <div class="setting-group">
        <label class="group-label">GENERAL</label>
        <div class="setting-item" v-for="item in generalSettings" :key="item.label">
          <div class="item-info">
            <span>{{ item.label }}</span>
            <p>{{ item.desc }}</p>
          </div>
          <input type="checkbox" class="toggle-switch" v-model="item.value" />
        </div>
      </div>

      <div class="setting-group">
        <label class="group-label">TIPOS DE NOTIFICACIÓN</label>
        <div class="setting-item" v-for="item in notificationTypes" :key="item.label">
          <div class="item-info">
            <span>{{ item.label }}</span>
            <p>{{ item.desc }}</p>
          </div>
          <input type="checkbox" class="toggle-switch" v-model="item.value" />
        </div>
      </div>
    </div>

    <div class="panel-footer">
      <button class="btn-close-settings" @click="$emit('close')">Cerrar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const generalSettings = ref([
  { label: 'In-App', desc: 'Campanita de notificaciones', value: true },
  { label: 'Sonido', desc: 'Al recibir notificación', value: true }
]);

const notificationTypes = ref([
  { label: 'Mensajes', desc: 'Nuevos mensajes de chat', value: true },
  { label: 'Rutinas', desc: 'Planes de entrenamiento', value: true },
  { label: 'Agenda', desc: 'Citas y recordatorios', value: true },
  { label: 'Formularios', desc: 'Encuestas y mediciones', value: true },
  { label: 'Sistema', desc: 'Alertas del sistema', value: true }
]);
</script>

<style scoped>
/* Estilos Principales */
.settings-panel {
  position: fixed; top: 80px; right: 20px; width: 350px; max-height: 85vh;
  background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px;
  display: flex; flex-direction: column; z-index: 2001;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.settings-body { padding: 20px; overflow-y: auto; }
.setting-group { margin-bottom: 24px; }
.group-label { font-size: 0.7rem; color: #64748b; font-weight: bold; margin-bottom: 12px; display: block; }

/* Tarjetas de estado y push */
.status-card, .push-card { 
  background: rgba(255,255,255,0.05); padding: 15px; border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.05); color: #94a3b8; font-size: 0.85rem;
}
.push-card { display: flex; justify-content: space-between; align-items: center; }
.platform-info { font-size: 0.75rem; color: #64748b; margin-top: 8px; }

/* Botón Activar */
.btn-activate { 
  background: #fbbf24; border: none; padding: 6px 16px; 
  border-radius: 8px; font-weight: bold; cursor: pointer; color: black;
}

/* Items Generales */
.setting-item { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
.item-info span { color: #fff; font-size: 0.9rem; }
.item-info p { color: #64748b; font-size: 0.75rem; margin: 0; }

/* Toggle Switch Dorado */
.toggle-switch {
  appearance: none; width: 40px; height: 22px; background: #334155;
  border-radius: 12px; position: relative; cursor: pointer; transition: 0.3s;
}
.toggle-switch:checked { background: #fbbf24; }
.toggle-switch::before {
  content: ''; position: absolute; width: 18px; height: 18px;
  background: white; border-radius: 50%; top: 2px; left: 2px; transition: 0.3s;
}
.toggle-switch:checked::before { transform: translateX(18px); }

.btn-close-settings { width: 100%; padding: 12px; background: #fbbf24; border: none; border-radius: 12px; color: black; font-weight: bold; cursor: pointer; }
</style>