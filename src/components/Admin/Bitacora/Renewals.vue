<template>
  <HeadingAdmin>
    <main class="main-content">
      <header class="header-section">
        <h1 class="main-title">Renovaciones</h1>
      
        <div class="actions-bar">
            <!--<select class="status-select" v-model="selectedMembership">
                <option value="">Mensualidad (Todas)</option>
                <option value="Mensual">Mensual</option>
                <option value="Quincenal">Quincenal</option>
            </select>
            <select class="status-select" v-model="selectedStatus">
                <option value="">Status (Todos)</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Inactivo">Inactivo</option>
            </select>
            <button class="btn-bulk">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            Correo Masivo
            </button>-->
            <input type="text" class="search-input" placeholder="Buscar usuario..." v-model="searchQuery" >
        
            
        </div>
        </header>
                

      <!-- VISTA ESCRITORIO -->
      <div class="table-container desktop-only">
        <table class="user-table">
          <thead>
            <tr><th>Foto</th><th>Nombre</th><th>Correo</th><th>Vencimiento</th><th>Adeudo</th><th>Acciones</th></tr>
          </thead>
          <tbody>
            <tr v-for="user in filteredUsers" :key="user.id">
              <td><div class="avatar-small"></div></td>
              <td class="text-bold">{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.expiredDate }}</td>
              <td><span class="status-badge" :class="getDebtClass(user.status)">{{ user.debt }}</span></td>
              <td class="actions-cell">
                <!--<button class="icon-btn" title="Email"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></button>
                <button class="icon-btn" title="WhatsApp" @click="openWhatsApp('+524811243421')"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 5.6 8.5 8.5 0 0 1-7.6-5.6 8.38 8.38 0 0 1-.9-3.8A8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z"/><path d="M9 12l2 2 4-4"/></svg></button>
                <button class="icon-btn" title="QR" @click="openQR(user)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h6v6H3V3zm0 12h6v6H3v-6zM15 3h6v6h-6V3z"/><path d="M15 15h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm4 0h2v2h-2zm0-4h2v2h-2zm-2-2h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2z"/></svg></button>
                <button class="icon-btn" title="Pago" @click="goToPayments(user.id)"> <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect x="2" y="6" width="20" height="12" rx="2" ry="2"/><circle cx="12" cy="12" r="3"/> <path d="M12 9v6M10.5 10.5h3M10.5 13.5h3"/> <path d="M6 3h14c1.1 0 2 .9 2 2v10"/> </svg></button>-->
                <button class="icon-btn" title="Editar" @click="goToEdit(user.id)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/><polyline points="12 11 12 16 16 16"/><path d="M8 12l4-4 4 4"/></svg></button>
                <button class="icon-btn" title="Eliminar" @click="confirmDelete(user)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
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
                <span class="status-badge" :class="getDebtClass(user.status)">{{ user.debt }}</span>
              </div>
              
              <div class="card-meta">
                    {{user.email}} <br> 
                    <span style="color: yellow;">Vence:</span> {{user.expiredDate}} <br>
              </div>
              <div class="card-actions">
                <!--<button class="icon-btn"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></button>
                <button class="icon-btn" @click="openWhatsApp(user.phone)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 5.6 8.5 8.5 0 0 1-7.6-5.6 8.38 8.38 0 0 1-.9-3.8A8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z"/><path d="M9 12l2 2 4-4"/></svg></button>
              <button class="icon-btn"@click="openQR(user)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h6v6H3V3zm0 12h6v6H3v-6zM15 3h6v6h-6V3z"/><path d="M15 15h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm4 0h2v2h-2zm0-4h2v2h-2zm-2-2h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2z"/></svg></button>-->
                  <button class="icon-btn" title="Editar" @click="goToEdit(user.id)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/><polyline points="12 11 12 16 16 16"/><path d="M8 12l4-4 4 4"/></svg></button>
                  <button class="icon-btn" @click="confirmDelete(user)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal Eliminar -->
      <ModalComponent :isOpen="showDelete" @close="showDelete = false">
        <h2 style="color:#fff">¿Eliminar usuario?</h2>
        <p style="color:#aaa; margin:20px 0;">¿Deseas eliminar a {{ selectedUser?.name }} permanentemente?</p>
        <div style="display:flex; gap:10px;">
          <button @click="showDelete = false" style="flex:1; padding:10px; background:#333; border:none; color:white; border-radius:8px; cursor:pointer;">Cancelar</button>
          <button style="flex:1; padding:10px; background:#ef4444; border:none; color:white; border-radius:8px; cursor:pointer;">Confirmar</button>
        </div>
      </ModalComponent>

    </main>
  </HeadingAdmin>
</template>

<style scoped>
.main-content { padding: 40px; }
.header-section { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
.main-title { font-family: 'Anton', sans-serif; font-size: 2.2rem; color: #fff; margin: 0; }


.actions-bar { display: flex; gap: 15px; align-items: center; }
.search-input, .status-select { background: #1a1a1a; border: 1px solid #444; padding: 10px 16px; border-radius: 8px; color: #fff; }

.badges-row {
    display: flex;
    gap: 8px;
    margin: 8px 0;
}

.badges-row .status-badge, 
.badges-row .status-badge2 {
    font-size: 0.75rem; /* Un poco más pequeño para que quepan bien */
    padding: 2px 8px;
}

.card-meta { 
    font-size: 0.8rem; 
    color: #888; 
    line-height: 1.4;
}

.phone-text { color: #aaa; }
.btn-bulk {
  background: #111; 
  border: 1px solid #333; 
  padding: 10px 20px;
  border-radius: 8px;
  color: #fff; 
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  white-space: nowrap;
}

.btn-bulk svg { color: #3b82f6; }

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

.desktop-only { display: block; }
.mobile-only { display: none; }

.modal-overlay { position: fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); display:flex; justify-content:center; align-items:center; z-index:1000; }
.modal-content { background:#111; padding:25px; border-radius:15px; width:90%; max-width:400px; text-align:center; position:relative; border: 1px solid #333; }
.close-btn { position:absolute; top:10px; right:15px; background:none; border:none; color:#fff; font-size:24px; cursor:pointer; }
/* Colores para el adeudo según estatus */
.debt-pending { color: #f59e0b; border: 1px solid #92400e; background: rgba(245, 158, 11, 0.1); }
.debt-inactive { color: #ef4444; border: 1px solid #991b1b; background: rgba(239, 68, 68, 0.1); }
.debt-default { color: #40c467; border: 1px solid #144e06; background: rgba(8, 78, 6, 0.1); }

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

.text-bold { font-weight: 600; color: #fff; }
.status-badge2 { background: rgba(78, 53, 6, 0.4); color: #d3ae34; padding: 2px 10px; border-radius: 20px; font-size: 1.0rem; border: 1px solid #4e4706; }

.status-badge { 
    padding: 2px 10px; 
    border-radius: 20px; 
    font-size: 1.0rem; 
    border: 1px solid transparent; /* Base transparente */
}
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
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import HeadingAdmin from '../HeadingAdmin.vue';
import ModalComponent from '../../Modals/ModalComponent.vue';

const router = useRouter();
const showQR = ref(false);
const showDelete = ref(false);
const selectedUser = ref(null);

const selectedMembership = ref(''); 
const selectedStatus = ref(''); 

const searchQuery = ref('');

const filteredUsers = computed(() => {
  return users.value.filter(user => {
    const matchMembership = selectedMembership.value ? user.mensualidad === selectedMembership.value : true;
    const matchStatus = selectedStatus.value ? user.status === selectedStatus.value : true;
    
    // Filtro de búsqueda (nombre, email o deuda)
    const term = searchQuery.value.toLowerCase();
    const matchSearch = 
      user.name.toLowerCase().includes(term) || 
      user.email.toLowerCase().includes(term) ||
      user.debt.toLowerCase().includes(term) ||
      user.phone.toLowerCase().includes(term) ||
      user.mensualidad.toLowerCase().includes(term) ||
      user.status.toLowerCase().includes(term) ||
      user.expiredDate.toLowerCase().includes(term)  ||
      user.id.toString().includes(term);
    
    return matchMembership && matchStatus && matchSearch;
  });
});


// Función para obtener la clase dinámica
const getDebtClass = (status) => {
  if (status === 'Pendiente') return 'debt-pending';
  if (status === 'Inactivo') return 'debt-inactive';
  return 'debt-default';
};
const users = ref([
  { id: 1, name: 'Jesus Luis Ramires Sanchez', email: 'jesusluis@gmail.com', expiredDate: '18/03/2026', mensualidad: 'Mensual', debt: '$ 600.00', status: 'Inactivo', phone: '+52 481 123 4321' },
  { id: 2, name: 'Armando Luis Ramires Sanchez', email: 'jesusluis@gmail.com', expiredDate: '18/03/2026', mensualidad: 'Mensual', debt: '$ 700.00', status: 'Inactivo', phone: '+52 481 123 4321' },
  { id: 3, name: 'Luis Luis Ramires Sanchez', email: 'jesusluis@gmail.com', expiredDate: '18/03/2026', mensualidad: 'Mensual', debt: '$ 900.00', status: 'Inactivo', phone: '+52 481 123 4321' },
  { id: 4, name: 'Francisco Luis Ramires Sanchez', email: 'jesusluis@gmail.com', expiredDate: '18/03/2026', mensualidad: 'Quincenal', debt: '$ 500.00', status: 'Inactivo', phone: '+52 481 123 4321' },
  { id: 5, name: 'Jorge Luis Ramires Sanchez', email: 'jesusluis@gmail.com', expiredDate: '18/03/2026', mensualidad: 'Quincenal', debt: '$ 800.00', status: 'Inactivo', phone: '+52 481 123 4321' },
  { id: 6, name: 'Maria Luis Ramires Sanchez', email: 'jesusluis@gmail.com', expiredDate: '18/03/2026', mensualidad: 'Quincenal', debt: '$ 500.00', status: 'Inactivo', phone: '+52 481 123 4321' },
  { id: 7, name: 'Fernando Luis Ramires Sanchez', email: 'jesusluis@gmail.com', expiredDate: '18/03/2026', mensualidad: 'Quincenal', debt: '$ 800.00', status: 'Inactivo', phone: '+52 481 123 4321' },
  { id: 8, name: 'Erick Luis Ramires Sanchez', email: 'jesusluis@gmail.com', expiredDate: '18/03/2026', mensualidad: 'Quincenal', debt: '$ 500.00', status: 'Inactivo', phone: '+52 481 123 4321' },
      
]);

const openQR = (user) => { selectedUser.value = user; showQR.value = true; };
const confirmDelete = (user) => { selectedUser.value = user; showDelete.value = true; };
const goToPayments = (id) => router.push(`/admin/pay/${id}`);
const goToEdit = (id) => router.push(`/admin/recovery/${id}`);
const openWhatsApp = (phone) => window.open(`https://wa.me/${phone.replace(/\D/g, '')}`, '_blank');
</script>