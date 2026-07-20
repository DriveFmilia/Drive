<template>
  <HeadingAdmin>
    
    <main class="main-content">
      
      <div class="header-section">
        <div>
          <h1 class="main-title">Configuración <span class="highlight">de la Página</span></h1>
          <p class="subtitle">Personaliza tu sitio web a tu manera.</p>
        </div>
        <button class="btn-primary" @click="guardarCambios">Guardar Cambios</button>
      </div>

      <!-- Sección General -->
      <section class="form-panel">
        <div class="panel-header"><h2>General</h2></div>
        <div class="config-row">
          <div><label>Notificaciones</label><p>Configura tus preferencias de notificación.</p></div>
          <input type="checkbox" v-model="settings.notificaciones" class="toggle-switch">
        </div>
        <div class="config-row">
          <div><label>Tutorial</label><p>Aprende a utilizar todas las funcionalidades.</p></div>
          <input type="checkbox" v-model="settings.tutorial" class="toggle-switch">
        </div>
      </section>

      <!-- Apariencia -->
      <section class="form-panel">
        <div class="panel-header"><h2>Apariencia</h2></div>
        
        <div class="config-row">
          <div><label>Tema de la Interfaz</label><p>Altera el color de tu sitio web</p></div>
          <div class="theme-controls">
            <div class="color-option"><span>Tablas</span><input type="color" v-model="settings.colors.tablas"></div>
            <div class="color-option"><span>Interfaz</span><input type="color" v-model="settings.colors.interfaz"></div>
            <div class="color-option"><span>Botones</span><input type="color" v-model="settings.colors.botones"></div>
          </div>
        </div>

        <div class="config-row">
          <div><label>Tamaño de Fuente</label><p>Selecciona el tamaño base.</p></div>
          <select v-model="settings.fontSize" class="font-select">
            <option value="12">Pequeña (12px)</option>
            <option value="14">Normal (14px)</option>
            <option value="16">Grande (16px)</option>
            <option value="18">Extra Grande (18px)</option>
          </select>
        </div>
      </section>

      <!-- Exportación -->
      <section class="form-panel">
        <div class="panel-header"><h2>Exportación de datos</h2></div>
        <div class="config-row">
          <div><label>Formato de exportación</label><p>Formato al descargar bitácoras.</p></div>
          <div class="export-actions">
            <button class="btn-export" @click="exportar('excel')">EXC</button>
            <button class="btn-export" @click="exportar('yml')">YML</button>
          </div>
        </div>
      </section>

      <transition name="fade">
        <div v-if="toast.visible" class="toast-notification">
          {{ toast.message }}
        </div>
      </transition>
    </main>
  </HeadingAdmin>
</template>

<script setup>
import { reactive } from 'vue';
import HeadingAdmin from './HeadingAdmin.vue';

const toast = reactive({ visible: false, message: '' });

const settings = reactive({
  notificaciones: false,
  // LEER el valor del localStorage al iniciar
  tutorial: localStorage.getItem('tutorialActivo') === 'true', 
  fontSize: 14,
  colors: { tablas: '#3b82f6', interfaz: '#1c4fd6', botones: '#ffffff' }
});

const showToast = (msg) => {
  toast.message = msg;
  toast.visible = true;
  setTimeout(() => { toast.visible = false; }, 3000);
};

// 1. Guardar cambios y manejar persistencia del tutorial
const guardarCambios = async () => {
  try {
    localStorage.setItem('tutorialActivo', settings.tutorial);
    localStorage.setItem('app-colors', JSON.stringify(settings.colors));
    localStorage.setItem('app-fontSize', settings.fontSize);
    // Guardar estado en localStorage para que el componente global HelpButton lo detecte
    aplicarEstilos();
    window.dispatchEvent(new Event('tutorial-updated'));

    console.log("Guardando configuración...", settings);
    
    if (settings.notificaciones) {
      await fetch('/api/notificaciones/activar', { method: 'POST' });
    }
  } catch (error) {
    console.error("Error al guardar:", error);
  }
  showToast("Configuración guardada exitosamente.");
};
const aplicarEstilos = () => {
  const root = document.documentElement;
  // Aplicar colores
  root.style.setProperty('--color-tablas', settings.colors.tablas);
  root.style.setProperty('--color-interfaz', settings.colors.interfaz);
  root.style.setProperty('--color-botones', settings.colors.botones);
  // Aplicar tamaño de fuente
  root.style.setProperty('--base-font-size', settings.fontSize + 'px');
};

// 2. Exportación
const exportar = async (tipo) => {
  try {
    const endpoint = tipo === 'excel' ? '/api/exportar/bitacoras' : '/api/exportar/basedatos';
    const response = await fetch(endpoint);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = tipo === 'excel' ? 'bitacora_completa.xlsx' : 'backup_db.yml';
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (error) {
    console.error(`Error al descargar ${tipo}:`, error);
  }
  showToast(`Descargando archivo ${tipo.toUpperCase()}...`);
};
</script>

<style scoped>
.main-content { padding: 40px; max-width: 900px; margin: 0 auto; color: #fff; }
.header-section { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 30px; }
.main-title { font-family: 'Oswald'; font-size: 2.5rem; margin: 0; }
.highlight { color: #3b82f6; }
.subtitle { color: #94a3b8; }

.toast-notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #3b82f6;
  color: white;
  padding: 15px 25px;
  border-radius: 8px;
  font-family: 'Oswald';
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
  z-index: 1000;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.5s; }
.fade-enter, .fade-leave-to { opacity: 0; }

.form-panel { background: #0f0f0f; border: 1px solid #333; border-radius: 12px; padding: 25px; margin-bottom: 20px; }
.panel-header h2 { font-family: 'Oswald'; font-size: 1.2rem; margin-bottom: 20px; border-bottom: 1px solid #333; padding-bottom: 10px; }

.config-row { display: flex; justify-content: space-between; align-items: center; padding: 15px 0; }
label { font-family: 'Oswald'; display: block; }
p { font-size: 0.85rem; color: #94a3b8; margin: 0; }

.theme-controls { display: flex; gap: 20px; font-family: 'Oswald'; }
.color-option { display: flex; flex-direction: column; align-items: center; gap: 5px; }

.font-select {
  background: #1a1a1a;
  color: white;
  border: 1px solid #444;
  padding: 8px 12px;
  border-radius: 6px;
  font-family: 'Oswald', sans-serif;
  cursor: pointer;
  outline: none;
}
.font-select:hover { border-color: #3b82f6; }

.btn-primary { background: #3b82f6; color: white; border: none; padding: 10px 25px; border-radius: 8px; font-weight: bold; cursor: pointer; }
.btn-export { background: #1a1a1a; color: white; border: 1px solid #444; padding: 8px 15px; border-radius: 6px; cursor: pointer; margin-left: 10px; }
@media (max-width: 680px) {
  .main-content { padding: 20px; }
  .main-title { 
    font-size: 1.8rem; /* Puedes ajustarlo a 1.6rem si aún lo quieres más pequeño */
    line-height: 1.1;  /* Ayuda a que no se separe tanto el texto */
  }
  /* Hacer que el header sea columna */
  .header-section { 
    flex-direction: column; 
    align-items: flex-start; 
    gap: 15px; 
  }
  
  .btn-primary { width: 100%; } /* Botón ocupa todo el ancho en móvil */

  .config-row { 
    display: flex;
    flex-direction: column; /* Apilar en vertical en móvil */
    align-items: flex-start; /* Alinear a la izquierda */
    gap: 15px;
    padding: 15px 0;
  }
  .toggle-switch {
    width: 40px; 
    height: 20px;
    flex-shrink: 0; /* Evita que el checkbox se encoja */
  }
  .config-row div {
    flex: 1;
    min-width: 0;
  }
  .theme-controls { 
    width: 100%; 
    justify-content: space-between; 
    gap: 10px;
  }

  .export-actions {
    display: flex;
    gap: 10px;
    width: 100%;
  }
  .btn-export { flex: 1; margin-left: 0; }
  .font-select { width: 100%; }
}
</style>
