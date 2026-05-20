<template>
  <div class="logo-circle-sm">
    <img src="@/assets/icono2.png" alt="Logo" class="logo-img-sm" />
  </div>
</template>

<style scoped>
.logo-circle-sm {
  background: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  overflow: hidden; 
}

.logo-img-sm { 
  width: 30px; 
  height: auto;
  object-fit: contain;
  filter: invert(1); 
}
</style>