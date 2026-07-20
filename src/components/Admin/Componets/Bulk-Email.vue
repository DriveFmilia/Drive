<template>
  <div class="form-panel glass-effect">
    <NotificationSystem ref="toastRef" />
    
    <div class="panel-header">
      <h2 class="form-title">ENVÍO MASIVO</h2>
      <button class="close-x" @click="$emit('close')">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>
    
    <div class="form-body">
      <div class="input-group">
        <label>Asunto</label>
        <input type="text" v-model="emailForm.asunto" class="custom-input" placeholder="Ej. Promoción especial">
      </div>

      <div class="input-group">
        <label>Destinatarios</label>
        <textarea v-model="emailForm.destinatarios" class="custom-input" rows="2" placeholder="ejemplo@mail.com"></textarea>
      </div>

      <div class="toolbar">
        <button @click="execCommand('bold')"><b>B</b></button>
        <button @click="execCommand('italic')"><i>I</i></button>
        <button @click="$refs.fileInput.click()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M21 15l-5-5L5 21"/></svg>
        </button>
        <input type="file" ref="fileInput" @change="handleImage" style="display: none" accept="image/*">
      </div>

      <div ref="editor" class="custom-input editor-area" contenteditable="true" @input="updateContent"></div>

      <button class="btn-send" @click="sendEmail">Enviar Correo</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import NotificationSystem from '../../Modals/NotificationSystem.vue';

const toastRef = ref(null);
const editor = ref(null);
const emailForm = reactive({ asunto: '', destinatarios: '', mensaje: '' });

const execCommand = (cmd) => {
  document.execCommand(cmd, false, null);
  editor.value.focus();
};

const updateContent = (e) => { emailForm.mensaje = e.target.innerHTML; };

const handleImage = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (ev) => {
      document.execCommand('insertImage', false, ev.target.result);
      toastRef.value.notify('Imagen añadida', 'success');
    };
    reader.readAsDataURL(file);
  }
};

const sendEmail = () => {
  if (!emailForm.asunto || !emailForm.mensaje) {
    toastRef.value.notify('Completa asunto y mensaje', 'error');
    return;
  }
  toastRef.value.notify('Correo enviado masivamente', 'success');
};
</script>

<style scoped>
.form-panel { 
  background: #121212; border: 1px solid rgba(255, 255, 255, 0.09); 
  color: #f5f5f4; border-radius: 24px; padding: 24px; 
  width: 95%; max-width: 440px; max-height: 90vh; overflow-y: auto; 
}
.panel-header { display: flex; justify-content: space-between; margin-bottom: 20px; }
.form-title { font-family: 'Oswald', sans-serif; color: #1c4fd6; font-size: 1.2rem; }
.input-group { margin-bottom: 15px; }
.input-group label { font-family: 'Oswald', sans-serif; font-size: 11px; text-transform: uppercase; display: block; margin-bottom: 5px; }
.custom-input { background: #1a1a1a; border: 1px solid #333; color: white; padding: 10px; border-radius: 12px; width: 100%; box-sizing: border-box; }
.toolbar { display: flex; gap: 8px; margin-bottom: 10px; padding: 5px; background: #1a1a1a; border: 1px solid #333; border-radius: 8px; }
.toolbar button { background: none; border: 1px solid #444; color: white; padding: 4px 10px; border-radius: 6px; cursor: pointer; }
.editor-area { min-height: 120px; outline: none; overflow-y: auto; text-align: left; }
.btn-send { background: #1c4fd6; color: white; border: none; border-radius: 12px; height: 45px; width: 100%; margin-top: 15px; font-family: 'Oswald'; cursor: pointer; }

@media (max-width: 480px) {
  .form-panel { padding: 16px; }
  .toolbar { gap: 4px; }
  .btn-send { height: 40px; }
}
</style>