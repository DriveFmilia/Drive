<template>
  <teleport to="body">
    <div v-if="isOpen" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content">
        <button class="close-btn" @click="$emit('close')">×</button>
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<script setup>
defineProps({ isOpen: Boolean });
defineEmits(['close']);
</script>

<style scoped>
.modal-overlay { 
  position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
  background: rgba(0, 0, 0, 0.85); display: flex; 
  justify-content: center; align-items: center; z-index: 2000; 
  backdrop-filter: blur(4px);
}
.modal-content { 
  background: #0f0f0f; padding: 30px; border-radius: 16px; 
  width: 90%; max-width: 400px; text-align: center; 
  position: relative; border: 1px solid #333; 
}
.close-btn { 
  position: absolute; top: 15px; right: 15px; background: none; 
  border: none; color: #888; font-size: 28px; cursor: pointer; 
}
.close-btn:hover { color: #fff; }
</style>