<template>
  <HeadingAdmin>
    <main class="main-content">
      <!-- Columna Izquierda -->
      <div class="profile-section">
        <h1 class="main-title">Jesus Luis <br> <span class="highlight">Ramires</span></h1>
        <div class="avatar-circle">
          <svg viewBox="0 0 24 24" fill="white"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
        </div>
        <div class="status-badge">Pendiente</div>
        <p class="user-id">ID: GymPer001</p>
      </div>

      <!-- Columna Derecha -->
      <div class="right-column">
        <div class="input-group search-bar-half">
          <label>Buscar Cliente</label>
          <input type="text" placeholder="Buscar...">
        </div>

        <div class="login-card">
          <div class="form-grid">
            <div class="input-group"><label>Próximo Corte</label><input type="date"></div>
            <div class="input-group"><label>Nuevo Corte</label><input type="date"></div>
          </div>

          <div class="header-row">
            
            <div class="input-group2"><label>Estado de Cuenta</label></div>
            <button class="btn-promos" @click="goToPromos" type="button">
              <svg viewBox="0 0 24 24" fill="currentColor" style="width: 16px;">
                <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
              </svg>
              Promos
            </button>
          </div>
          
          <div class="styled-box">
            <span class="amount-val">$ 450.00</span>
            <div class="recargo-container">
              <span class="red">+ $50 Recargo</span>
              <span class="mensual-text">Mensual</span>
            </div>
          </div>

          <div class="input-group"><label>Monto a Recibir</label></div>
          <div class="input-with-symbol">
            <span class="symbol">$</span>
            <input type="number" v-model="montoRecibir" placeholder="0.00">
          </div>
          
          <div style="margin-top: 25px;">
            <button class="btn-primary" :disabled="isButtonDisabled" :class="{ 'disabled': isButtonDisabled }">Confirmar Pago</button>
          </div>
          
          <button class="btn-secondary" style="margin-top: 10px;">
            <svg viewBox="0 0 24 24" fill="currentColor" class="btn-icon"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
            Descargar Recibo
          </button>
        </div>
      </div>
    </main>
  </HeadingAdmin>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'; 
import HeadingAdmin from '../HeadingAdmin.vue';

const montoRecibir = ref(null);
const isButtonDisabled = computed(() => !montoRecibir.value || montoRecibir.value <= 100);

const router = useRouter(); 

const goToPromos = () => {
  router.push('/admin/promos'); // Ajusta esta ruta a la que tengas en tu router/index.js
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;700;800&family=Oswald:wght@400;700&display=swap');


.main-content { display: flex; align-items: center; justify-content: center; gap: 300px; padding: 40px; min-height: 80vh; }
.profile-section { display: flex; flex-direction: column; align-items: center; text-align: center; }
.main-title { font-family: 'Anton', sans-serif; font-size: 3.5rem; color: #fff; margin: 0 0 20px 0; line-height: 1.1; }
.highlight { color: #3b82f6; }
.avatar-circle { width: 250px; height: 250px; background: #000; border-radius: 50%; border: 4px solid #3b82f6; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
.status-badge { background: #ffa704; padding: 8px 30px; border-radius: 20px; font-weight: 700; font-family: 'Oswald', sans-serif; font-size: 1.1rem; color: #000; }
.user-id { margin-top: 15px; color: #94a3b8; font-weight: 600; font-family: 'Inter', sans-serif; font-size: 1.2rem; }

.right-column { display: flex; flex-direction: column; gap: 20px; width: 100%; max-width: 420px; }
.search-bar-half { width: 50%; align-self: flex-end; }
.login-card { background: rgba(18, 18, 18, 0.7); backdrop-filter: blur(20px); padding: 25px; border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.12); }
.header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }


.btn-promos { background: transparent; border: 1px solid #3b82f6; color: #3b82f6; border-radius: 20px; padding: 4px 12px; display: flex; align-items: center; gap: 6px; font-family: 'Oswald', sans-serif; cursor: pointer; transition: 0.3s; }
.btn-primary { width: 100%; padding: 14px; background: #1c4fd6; color: white; border: none; border-radius: 12px; font-family: 'Oswald', sans-serif; font-weight: 700; cursor: pointer; }
.btn-primary.disabled { background: #444; cursor: not-allowed; }
.btn-secondary { width: 100%; padding: 14px; background: transparent; border: 1px solid #3b82f6; color: #3b82f6; border-radius: 12px; font-family: 'Oswald', sans-serif; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; }


.input-with-symbol { display: flex; align-items: center; background: #141414; border: 1px solid #333; border-radius: 8px; padding: 0 15px; }
.input-with-symbol .symbol { color: #fff; font-size: 1.2rem; font-weight: bold; margin-right: 8px; }
.input-with-symbol input { background: transparent; border: none; padding: 15px 0; font-size: 1.2rem; color: #fff; width: 100%; outline: none; }
.input-group { display: flex; flex-direction: column; gap: 8px; margin-bottom: 15px; }
.input-group label { font-family: 'Oswald', sans-serif; color: #fff; font-size: 14px; }
.input-group2 {  display: flex; flex-direction: column;  margin-bottom: 0px; }
.input-group2 label { font-family: 'Oswald', sans-serif; color: #fff; font-size: 14px; }
.header-row { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  margin-bottom: 10px; 
}
input:not(.input-with-symbol input) { background: #141414; border: 1px solid #333; border-radius: 8px; color: #fff; padding: 10px; font-family: 'Inter', sans-serif; outline: none; }
.styled-box { background: #141414; border: 1px solid #333; border-radius: 8px; padding: 12px; display: flex; align-items: center; justify-content: space-between; color: #fff; margin-bottom: 20px; }
.amount-val { font-size: 1.8rem; font-weight: 800; }
.recargo-container { display: flex; flex-direction: column; align-items: flex-end; }
.red { color: #dc2626; font-weight: 700; font-size: 0.9rem; }
.mensual-text { font-family: 'Oswald', sans-serif; font-size: 0.9rem; color: #fff; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.btn-icon { width: 18px; height: 18px; }

.btn-primary, 
.btn-secondary, 
.btn-promos {
  transition: transform 0.2s ease, background 0.3s, border 0.3s;
}

@media (hover: hover) {
  .btn-primary:hover:not(:disabled), 
  .btn-secondary:hover, 
  .btn-promos:hover {
    transform: scale(1.05);
  }
}

.btn-primary:active:not(:disabled), 
.btn-secondary:active, 
.btn-promos:active {
  transform: scale(0.95);
}

.btn-primary:disabled {
  transform: none !important;
}


@media (max-width: 768px) {
  .main-content { flex-direction: column; gap: 20px; padding: 15px; }
  .main-title { font-size: 2.0rem; }
  .avatar-circle { width: 100px; height: 100px; }
  .status-badge { font-size: 0.9rem; padding: 5px 20px; }
  .user-id { font-size: 1rem; }
  
  .styled-box { padding: 8px 12px; }
  .amount-val { font-size: 1.3rem; }
  .red { font-size: 0.75rem; } 
  .mensual-text { font-size: 0.75rem; }

  .btn-promos { 
    padding: 2px 8px; 
    font-size: 0.75rem; 
  }
  .btn-promos svg { width: 12px !important; }

  .right-column { width: 100%; }
  .search-bar-half { width: 100%; align-self: center; }
  .form-grid { grid-template-columns: 1fr; }
  .form-grid .input-group,
  .form-grid .input-group input {
    width: 100%;
  }
}
</style>