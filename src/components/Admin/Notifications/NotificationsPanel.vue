<template>
  <transition name="slide-fade">
    <div v-if="isOpen" class="notifications-panel">
      
      <div v-if="currentView === 'list'" class="view-content">
        <div class="panel-header">
          <h3>Notificaciones</h3>
          <div class="header-actions">
            <button class="btn-pill" @click="$emit('mark-read')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Leídas
            </button>
            <button class="btn-icon" @click="currentView = 'settings'">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </button>
            <button class="btn-icon" @click="$emit('close')">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>
        <div class="notifications-list">
          <div v-for="item in notifications" :key="item.id" class="notif-card">
            <div class="notif-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path></svg></div>
            <div class="notif-content">
              <h4>{{ item.title }}</h4>
              <p>{{ item.message }}</p>
              <span class="timestamp">{{ item.time }}</span>
            </div>
            <div v-if="!item.read" class="dot-unread"></div>
          </div>
        </div>
      </div>

      <div v-else class="view-content">
        <div class="panel-header">
          <h3>Configuración</h3>
          <button class="btn-icon" @click="currentView = 'list'">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
        </div>
        <div class="notifications-list">
           <div class="settings-body">
              <p class="subtitle" style="margin-bottom: 20px;">Configura tus preferencias</p>
              <div v-for="item in allSettings" :key="item.label" class="notif-card">
                 <div class="notif-content">
                    <h4>{{ item.label }}</h4>
                    <p>{{ item.desc }}</p>
                 </div>
                 <input type="checkbox" class="toggle" v-model="item.value" />
              </div>
           </div>
        </div>
      </div>

    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{ isOpen: boolean, notifications: any[] }>();
const emit = defineEmits(['close', 'mark-read']);
const currentView = ref('list');

const allSettings = ref([
  { label: 'Mensajes', desc: 'Nuevos mensajes de chat', value: true },
  { label: 'Rutinas', desc: 'Planes de entrenamiento', value: true },
  { label: 'Agenda', desc: 'Citas y recordatorios', value: true },
  { label: 'Formularios', desc: 'Encuestas y mediciones', value: true },
  { label: 'Sistema', desc: 'Alertas del sistema', value: true }
]);

watch(() => props.isOpen, (val) => { if (val) currentView.value = 'list'; });
</script>

<style scoped>
/* ESTILOS ORIGINALES MANTENIDOS */
.notifications-panel { position: fixed; top: 80px; right: 20px; width: 350px; max-height: 80vh; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; display: flex; flex-direction: column; z-index: 2000; box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
.panel-header { padding: 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); }
.panel-header h3 { margin: 0; color: #fff; font-size: 1.1rem; }
.notifications-list { flex: 1; overflow-y: auto; padding: 10px; }
.notif-card { padding: 16px; display: flex; gap: 12px; border-radius: 12px; transition: 0.2s; cursor: pointer; position: relative; align-items: center; }
.notif-card:hover { background: rgba(255,255,255,0.05); }
.notif-icon { width: 40px; height: 40px; background: rgba(234, 179, 8, 0.1); color: #eab308; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
.notif-content { flex: 1; }
.notif-content h4 { margin: 0; font-size: 0.9rem; color: #fff; }
.notif-content p { margin: 4px 0; font-size: 0.8rem; color: #94a3b8; }
.timestamp { font-size: 0.7rem; color: #475569; }
.dot-unread { width: 8px; height: 8px; background: #3b82f6; border-radius: 50%; position: absolute; right: 16px; top: 16px; }
.header-actions { display: flex; align-items: center; gap: 8px; }
.btn-pill { padding: 6px 12px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; color: #fbbf24; display: flex; align-items: center; gap: 6px; font-size: 0.75rem; cursor: pointer; }
.btn-icon { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.05); border: none; color: #94a3b8; cursor: pointer; }
.btn-icon:hover { background: rgba(255,255,255,0.1); color: #fff; }
.toggle { cursor: pointer; }
.slide-fade-enter-active { transition: all 0.3s ease-out; }
.slide-fade-enter-from { opacity: 0; transform: translateY(-10px); }
</style>