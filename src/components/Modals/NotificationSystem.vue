<template>
  <div class="toast-container">
    <div v-for="toast in toasts" :key="toast.id" :class="['toast', toast.type]">
      {{ toast.message }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const toasts = ref([]);
const notify = (message, type = 'success') => {
  const id = Date.now();
  toasts.value.push({ id, message, type });
  setTimeout(() => toasts.value = toasts.value.filter(t => t.id !== id), 3000);
};
defineExpose({ notify });
</script>


<style scoped>
.toast-container { 
  position: fixed; 
  top: 20px; 
  right: 20px; 
  z-index: 9999; /* Asegúrate que esté por encima de todo */
}

.toast { 
  padding: 15px 25px; 
  margin-bottom: 10px; 
  border-radius: 12px; 
  color: white; 
  font-family: 'Oswald', sans-serif; 
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  animation: slideIn 0.3s ease-out;
}

.success { background: #22c55e; }
.error { background: #ef4444; }
.warning { background: #f59e0b; } /* ESTA ES LA QUE FALTABA */

@keyframes slideIn {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
</style>