<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
/* Reset global para que el diseño premium ocupe todo el espacio */
body {
  margin: 0;
  padding: 0;
  background-color: #0f172a; /* Color base oscuro */
  color: white;
  overflow-x: hidden;
}

/* Opcional: Personalizar el scrollbar para que se vea Pro */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #0f172a;
}
::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #334155;
}
</style>