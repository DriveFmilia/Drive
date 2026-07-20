<template>
  <div class="form-panel glass-effect">
    <div class="panel-header">
      <h2 class="form-title">Ayuda: Cortes</h2>
      <button class="close-x" @click="$emit('close')">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
    
    <div class="form-body">
      <p class="help-text">
        Por defecto, el corte es el día de inscripción. Con el icono del calendario puede crear reglas: defina un rango de días y el día de corte que aplicará.
      </p>
    </div>
  </div>
</template>

<style scoped>
.form-panel { 
  background: #121212; 
  border: 1px solid rgba(255, 255, 255, 0.09); 
  color: #f5f5f4; 
  border-radius: 24px; 
  padding: 32px; 
  width: 92%; 
  max-width: 440px; 
}
.panel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.form-title { font-family: 'Oswald', sans-serif; font-size: 1.3rem; color: #1c4fd6; margin: 0; }
.help-text { font-family: 'Inter', sans-serif; font-size: 0.95rem; line-height: 1.6; color: #d1d5db; margin: 0; }
.close-x { background: none; border: none; color: #fff; cursor: pointer; display: flex; align-items: center; }
</style>