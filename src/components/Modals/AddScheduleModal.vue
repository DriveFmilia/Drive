<template>
  <div class="form-panel glass-effect">
    <div class="panel-header">
      <h2 class="form-title">Nueva Actividad</h2>
      <button class="close-x" @click="$emit('close')">&times;</button>
    </div>
    
    <div class="form-body">
      <div class="input-group">
        <label>Día de la Semana</label>
        <select class="custom-select">
          <option>Seleccionar día...</option>
          <option>Lunes</option>
          <option>Martes</option>
          <option>Miércoles</option>
          <option>Jueves</option>
          <option>Viernes</option>
          <option>Sábado</option>
          <option>Domingo</option>
        </select>
      </div>
      
      <div class="input-group">
        <label>Nombre de Actividad</label>
        <input type="text" placeholder="Ej. Crossfit" class="custom-input">
      </div>
      
      <div class="time-row">
        <div class="input-group">
          <label>Inicio</label>
          <div class="time-box">8:00 AM</div>
        </div>
        <div class="input-group">
          <label>Fin</label>
          <div class="time-box">9:00 AM</div>
        </div>
      </div>
    </div>

    <div class="panel-footer-btns">
      <button class="btn-cancel" @click="$emit('close')">CANCELAR</button>
      <button class="btn-save">GUARDAR</button>
    </div>
  </div>
</template>

<script setup>
defineEmits(['close']);
</script>

<style scoped>
.form-panel {
  background: #121212;
  border: 1px solid rgba(255, 255, 255, 0.09);
  color: #f5f5f4;
  border-radius: 24px;
  padding: 32px;
  width: 92%;
  max-width: 440px;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.5);
}

.panel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }

.form-title { 
  font-family: 'Oswald', sans-serif; 
  font-size: 1.3rem; 
  margin: 0; 
  color: #1c4fd6;
  text-transform: uppercase;
}

.close-x { 
  background: rgba(255, 255, 255, 0.03); 
  border: none; 
  color: #f5f5f4; 
  font-size: 1.6rem; 
  width: 40px; 
  height: 40px; 
  border-radius: 12px; 
  cursor: pointer; 
  transition: all 0.2s;
}
.close-x:hover { background: rgba(239, 68, 68, 0.1); color: #ef4444; }

.form-body { display: flex; flex-direction: column; gap: 20px; }

.input-group label { 
  font-family: 'Oswald', sans-serif; 
  font-size: 0.85rem; 
  color: rgba(245, 245, 244, 0.6);
  text-transform: uppercase;
}

.custom-select, .custom-input { 
  background: #1a1a1a; 
  border: 1px solid rgba(255, 255, 255, 0.1); 
  color: white; 
  padding: 14px; 
  border-radius: 12px; 
  width: 100%; 
}

.time-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

.time-box { 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  background: #1a1a1a; 
  border: 1px solid rgba(255, 255, 255, 0.1); 
  padding: 14px; 
  border-radius: 12px; 
  color: #f5f5f4;
}

.panel-footer-btns { display: flex; justify-content: flex-end; gap: 12px; margin-top: 28px; }

.btn-cancel { 
  background: transparent; 
  border: none; 
  color: #94a3b8; 
  cursor: pointer; 
  font-family: 'Oswald', sans-serif;
  transition: 0.2s;
}
.btn-cancel:hover { color: #f5f5f4; }

.btn-save { 
  background: #1c4fd6; 
  color: white; 
  padding: 12px 28px; 
  border: none; 
  border-radius: 12px; 
  cursor: pointer; 
  font-family: 'Oswald', sans-serif;
  transition: 0.2s;
}
.btn-save:hover { background: #123ba0; }
</style>