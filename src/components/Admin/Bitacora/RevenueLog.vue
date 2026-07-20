<template>
  <HeadingAdmin>
    <NotificationSystem ref="toastRef" />
    <main class="main-content">
      <header class="header-section">
        <h1 class="main-title">Ingresos</h1>
      
        <div class="actions-bar">
            <select class="status-select" v-model="selectedMembership">
                <option value="">Mensualidad (Todas)</option>
                <option value="Mensual">Mensual</option>
                <option value="Quincenal">Quincenal</option>
            </select>
            <button class="btn-bulk"  @click="activeModal = 'ganancias'">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
                <div class="btn-text-wrapper">
                    <span class="btn-label">Ingresos Totales</span>
                    <!-- Aquí se muestra la suma dinámica y formateada -->
                    <span class="highlight-text">{{ formatCurrency(totalIncome) }}</span>
                </div>
            </button>
            <input type="text" class="search-input" placeholder="Buscar usuario..." v-model="searchQuery" >
        
            
        </div>
        </header>
                

      <!-- VISTA ESCRITORIO -->
      <div class="table-container desktop-only">
        <table class="user-table">
          <thead>
            <tr><th>Foto</th><th>Nombre</th><th>Correo</th><th>Fecha a Vencer</th><th>Membresia</th><th>Monto</th></tr>
          </thead>
          <tbody>
            <tr v-for="user in filteredUsers" :key="user.id">
              <td><div class="avatar-small"></div></td>
              <td class="text-bold">{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.expirationDate }}</td>
              <td><span :class="['status-badge2', getMembershipClass(user.membership)]">{{ user.membership }}</span></td>
              
              <td><span class="status-badge">{{ user.amount }}</span></td>
              <td class="actions-cell">
                <!--<button class="icon-btn" title="Email"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></button>
                <button class="icon-btn" title="WhatsApp" @click="openWhatsApp('+524811243421')"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 5.6 8.5 8.5 0 0 1-7.6-5.6 8.38 8.38 0 0 1-.9-3.8A8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z"/><path d="M9 12l2 2 4-4"/></svg></button>
                <button class="icon-btn" title="QR" @click="openQR(user)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h6v6H3V3zm0 12h6v6H3v-6zM15 3h6v6h-6V3z"/><path d="M15 15h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm4 0h2v2h-2zm0-4h2v2h-2zm-2-2h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2z"/></svg></button>
                <button class="icon-btn" title="Pago" @click="goToPayments(user.id)"> <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect x="2" y="6" width="20" height="12" rx="2" ry="2"/><circle cx="12" cy="12" r="3"/> <path d="M12 9v6M10.5 10.5h3M10.5 13.5h3"/> <path d="M6 3h14c1.1 0 2 .9 2 2v10"/> </svg></button>
                <button class="icon-btn" title="Editar" @click="goToEdit(user.id)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                <button class="icon-btn" title="Eliminar" @click="confirmDelete(user)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- VISTA MÓVIL -->
      <div class="mobile-only">
        <div v-for="user in filteredUsers" :key="user.id" class="user-card">
          <div class="card-header">
            <div class="avatar-small"></div>
            <div class="card-info">
              <div class="text-bold name-text">{{ user.name }}</div>
              
              <!-- Fila con membresía y monto juntos -->
              <div class="badges-row">
                
                <span :class="['status-badge2', getMembershipClass(user.membership)]">{{ user.membership }}</span>
                <span class="status-badge">{{ user.amount }}</span>
              </div>
              
              <div class="card-meta">
                  {{ user.email }} <br> 
                  <span class="phone-text">{{ user.phone }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal Eliminar -->
      <ModalComponent :isOpen="showDelete" @close="showDelete = false">
        <h2 style="color:#fff">¿Eliminar usuario?</h2>
        <p style="color:#aaa; margin:20px 0;">¿Deseas eliminar a {{ selectedUser?.name }} temporalmente?</p>
        <div style="display:flex; gap:10px;">
          <button @click="showDelete = false" style="flex:1; padding:10px; background:#333; border:none; color:white; border-radius:8px; cursor:pointer;">Cancelar</button>
          <button style="flex:1; padding:10px; background:#ef4444; border:none; color:white; border-radius:8px; cursor:pointer;">Confirmar</button>
        </div>
      </ModalComponent>

    </main>
      <transition name="pop">
      <div v-if="activeModal === 'ganancias'" class="modal-wrapper" @click.self="activeModal = null">
        <Ganancias @close="activeModal = null" />
      </div>
    </transition>  
  </HeadingAdmin>
</template>

<style scoped>
.main-content { padding: 40px; }
.header-section { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
.main-title { font-family: 'Anton', sans-serif; font-size: 2.2rem; color: #fff; margin: 0; }

.modal-wrapper {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}
.actions-bar { display: flex; gap: 15px; align-items: center; }
.search-input, .status-select { background: #1a1a1a; border: 1px solid #444; padding: 10px 16px; border-radius: 8px; color: #fff; }

.badges-row {
    display: flex;
    gap: 8px;
    margin: 8px 0;
}

.badges-row .status-badge, 


.card-meta { 
    font-size: 0.8rem; 
    color: #888; 
    line-height: 1.4;
}
.membership-purple { background: rgba(126, 34, 206, 0.2); color: #c084fc; border-color: #6b21a8; }
.membership-orange { background: rgba(194, 65, 12, 0.2); color: #fb923c; border-color: #9a3412; }
.membership-pink   { background: rgba(190, 24, 93, 0.2); color: #f472b6; border-color: #9d174d; }

/* Mantén los anteriores */
.membership-red   { background: rgba(153, 27, 27, 0.2); color: #f87171; border-color: #7f1d1d; }
.membership-blue  { background: rgba(30, 64, 175, 0.2); color: #60a5fa; border-color: #1e3a8a; }
.membership-green { background: rgba(6, 78, 59, 0.2); color: #34d399; border-color: #064e3b; }
.membership-default { background: #333; color: #fff; border-color: #555; }
.desktop-only { display: block; }
.mobile-only { display: none; }

.phone-text { color: #aaa; }
.btn-bulk { 
    background: #1a1a1a; 
    border: 1px solid #333; 
    padding: 8px 20px; 
    border-radius: 8px; 
    color: #fff; 
    display: flex; 
    align-items: center; 
    gap: 12px; 
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-bulk:hover {
    border-color: #588ef2;
    background: #222;
}

.btn-text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.1;
}

.btn-label { 
    font-size: 0.7rem; 
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #888; 
    font-weight: 600; 
}

.highlight-text { 
    font-size: 1.05rem; 
    font-weight: 700; 
    color: #588ef2; 
}
.badges-row .status-badge2 {
    font-size: 0.75rem; /* Un poco más pequeño para que quepan bien */
    padding: 2px 8px;
}

.desktop-only { display: block; }
.mobile-only { display: none; }

.modal-overlay { position: fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); display:flex; justify-content:center; align-items:center; z-index:1000; }
.modal-content { background:#111; padding:25px; border-radius:15px; width:90%; max-width:400px; text-align:center; position:relative; border: 1px solid #333; }
.close-btn { position:absolute; top:10px; right:15px; background:none; border:none; color:#fff; font-size:24px; cursor:pointer; }
@media (max-width: 768px) {
  .desktop-only { display: none; }
  .mobile-only { display: block; }
  .header-section { flex-direction: column; align-items: stretch; gap: 15px; }

  .actions-bar { 
    display: flex; 
    flex-direction: column; /* Cambiamos a columna para apilar */
    gap: 10px; 
    width: 100%; 
  }
  .search-input { 
    order: -1; 
    width: 100%; 
  }

  .status-select { 
    width: 100%; 
    order: 0;
  }  
  .btn-bulk { 
    width: 100%;
    order: 1;
    justify-content: center;
    padding: 12px;
  }
    
    .btn-text-wrapper {
        align-items: center; /* Centrado en móvil como pediste */
    }

  

  .top-row {
    display: flex;
    flex-direction: column; 
    align-items: flex-start;
    gap: 4px;
  }

  .name-text {
    font-size: 1rem;
    line-height: 1.3;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .status-badge {
    align-self: flex-start; 
    font-size: 0.65rem;
  }

}

.table-container { background: #0f0f0f; border-radius: 12px; border: 1px solid #222; overflow: hidden; }
.user-table { width: 100%; border-collapse: collapse; color: #e5e5e5; }
.user-table th { padding: 20px; text-align: left; font-family: 'Oswald', sans-serif; font-size: 0.9rem; text-transform: uppercase; color: #aaa; }
.user-table td { padding: 18px 20px; border-top: 1px solid #1a1a1a; }
.actions-cell { display: flex; gap: 12px; }
.user-card { background: #0f0f0f; padding: 15px; border-radius: 12px; border: 1px solid #222; margin-bottom: 15px; }
.card-header { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 15px; }
.card-info { flex: 1; }
.card-meta { font-size: 0.85rem; color: #aaa; margin-top: 4px; }
.card-actions { border-top: 1px dashed #333; padding-top: 15px; display: flex; justify-content: space-between; }
.icon-btn { background: transparent; border: none; cursor: pointer; color: #888; padding: 4px; }
.avatar-small { width: 40px; height: 40px; background: #333; border-radius: 50%; }
.status-badge { background: rgba(8, 78, 6, 0.4); color: #40c467; padding: 2px 10px; border-radius: 20px; font-size: 1.0rem; border: 1px solid #144e06; }
.text-bold { font-weight: 600; color: #fff; }
.status-badge2 {  padding: 2px 10px; border-radius: 20px; font-size: 1.0rem; border: 1px solid  }

.btn-bulk, 
.icon-btn, 
.modal-content button {
  transition: transform 0.2s ease, background 0.3s, border 0.3s;
}

@media (hover: hover) {
  .btn-bulk:hover, 
  .icon-btn:hover, 
  .modal-content button:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
}
.btn-bulk:active, 
.icon-btn:active, 
.modal-content button:active {
  transform: scale(0.95);
}


</style>

<script setup>
import { ref, computed, reactive  } from 'vue';
import { useRouter } from 'vue-router';
import HeadingAdmin from '../HeadingAdmin.vue';
import ModalComponent from '../../Modals/ModalComponent.vue';
import Ganancias from '../Componets/Earnings.vue';
import NotificationSystem from '../../Modals/NotificationSystem.vue'; 

const activeModal = ref(null);

const router = useRouter();
const showQR = ref(false);
const showDelete = ref(false);
const selectedUser = ref(null);
const selectedMembership = ref(''); 
const selectedStatus = ref(''); 

const searchQuery = ref(''); // 1. Nueva variable reactiva

const filteredUsers = computed(() => {
  return users.value.filter(user => {

    const matchMembership = selectedMembership.value ? user.mensualidad === selectedMembership.value : true;
    
    // 2. Nuevo filtro de búsqueda
    const term = searchQuery.value.toLowerCase();
    const matchSearch = 
      user.name.toLowerCase().includes(term) || 
      user.email.toLowerCase().includes(term) ||
      user.membership.toLowerCase().includes(term) ||
      user.amount.toLowerCase().includes(term) ||
      user.mensualidad.toLowerCase().includes(term) || 
      user.phone.toLowerCase().includes(term) ||
      user.expirationDate.toLowerCase().includes(term) ||
      user.id.toString().includes(term);
    
    return matchMembership && matchSearch;
  });
});
const users = ref([
  { id: 1, name: 'Jesus Luis Ramires Sanchez', email: 'jesusluis@gmail.com', expirationDate: '18/03/2026', membership: '1 Mes', amount: '$ 900.00', mensualidad: 'Mensual', phone: '+52 481 123 4321' },
  { id: 2, name: 'Maria Luis Ramires Sanchez', email: 'jesusluis@gmail.com', expirationDate: '18/03/2026', membership: '2 Meses', amount: '$ 500.00', mensualidad: 'Quincenal', phone: '+52 481 123 4321' },
  { id: 3, name: 'Erick Luis Ramires Sanchez', email: 'jesusluis@gmail.com', expirationDate: '18/03/2026', membership: '4 Meses', amount: '$ 500.00', mensualidad: 'Mensual', phone: '+52 481 123 4321' },
  { id: 4, name: 'Luis Luis Ramires Sanchez', email: 'jesusluis@gmail.com', expirationDate: '18/03/2026', membership: '6 Meses', amount: '$ 800.00', mensualidad: 'Quincenal', phone: '+52 481 123 4321' },
  { id: 5, name: 'Fernando Luis Ramires Sanchez', email: 'jesusluis@gmail.com', expirationDate: '18/03/2026', membership: '2 Meses', amount: '$ 500.00', mensualidad: 'Mensual', phone: '+52 481 123 4321' },
  { id: 6, name: 'Mario Luis Ramires Sanchez', email: 'jesusluis@gmail.com', expirationDate: '18/03/2026', membership: '3 Meses', amount: '$ 500.00', mensualidad: 'Quincenal', phone: '+52 481 123 4321' },
  { id: 7, name: 'Jorge Luis Ramires Sanchez', email: 'jesusluis@gmail.com', expirationDate: '18/03/2026', membership: '5 Meses', amount: '$ 500.00', mensualidad: 'Mensual', phone: '+52 481 123 4321' },
  { id: 8, name: 'Francisco Luis Ramires Sanchez', email: 'jesusluis@gmail.com', expirationDate: '18/03/2026', membership: '1 Mes', amount: '$ 500.00', mensualidad: 'Quincenal', phone: '+52 481 123 4321' }
    
]);

const totalIncome = computed(() => {
  return filteredUsers.value.reduce((sum, user) => {
    // Elimina el signo '$', espacios y convierte a número
    const amountValue = parseFloat(user.amount.replace(/[^0-9.]/g, '')) || 0;
    return sum + amountValue;
  }, 0);
});

// Función para mostrar el formato de moneda
const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format(value);
};

const goToIncomeDetails = () => {
  router.push('/admin/earnings'); // Cambia esta ruta por la que definiste en tu router
};
const getMembershipClass = (membership) => {
  const classes = {
    '1 Mes': 'membership-red',
    '2 Meses': 'membership-blue',
    '3 Meses': 'membership-green',
    '4 Meses': 'membership-purple',
    '5 Meses': 'membership-orange',
    '6 Meses': 'membership-pink'
  };
  // Si no encuentra la coincidencia, devuelve el default
  return classes[membership] || 'membership-default';
};
const openQR = (user) => { selectedUser.value = user; showQR.value = true; };
const confirmDelete = (user) => { selectedUser.value = user; showDelete.value = true; };
const goToPayments = (id) => router.push(`/admin/pay/${id}`);
const goToEdit = (id) => router.push(`/admin/editar-usuario/${id}`);
const openWhatsApp = (phone) => window.open(`https://wa.me/${phone.replace(/\D/g, '')}`, '_blank');
</script>