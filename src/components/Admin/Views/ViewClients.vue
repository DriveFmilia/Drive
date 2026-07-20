<template>
  <HeadingAdmin>
    <main class="main-content">
      <header class="header-section">
        <h1 class="main-title">Usuarios</h1>
      
        <div class="actions-bar">
            <select class="status-select" v-model="selectedMembership">
                <option value="">Mensualidad (Todas)</option>
                <option value="Mensual">Mensual</option>
                <option value="Quincenal">Quincenal</option>
            </select>
            <select class="status-select" v-model="selectedStatus">
                <option value="">Status (Todos)</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
                <!--<option value="Pendiente">Pendiente</option>
                <option value="Próximo a vencer">Próximo a vencer</option>-->
            </select>
            <button class="btn-bulk" @click="goToEmail()">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              Correo Masivo
            </button>
            <input type="text" class="search-input" placeholder="Buscar usuario..." v-model="searchQuery" >
        </div>
        </header>
                

      <!-- VISTA ESCRITORIO -->
      <div class="table-container desktop-only">
        <table class="user-table">
          <thead>
            <tr><th>Foto</th><th>Nombre</th><th>Correo</th><th>Celular</th><th>Status</th><th>Acciones</th></tr>
          </thead>
          <tbody>
            <tr v-for="user in filteredUsers" :key="user.id">
              <td><div class="avatar-small"></div></td>
              <td class="text-bold">{{user.name}}</td>
              <td>{{user.email}}</td>
              <td>{{user.phone}}</td>
              <td><span :class="['status-badge', getStatusClass(user.status)]">{{ user.status }}</span></td>
              <td class="actions-cell">
                <button class="icon-btn" title="Email" @click="goToEmail(user.id)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></button>
                <button class="icon-btn" @click="openWhatsApp(user.phone)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 5.6 8.5 8.5 0 0 1-7.6-5.6 8.38 8.38 0 0 1-.9-3.8A8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z"/><path d="M9 12l2 2 4-4"/></svg></button>
                <button class="icon-btn" title="QR" @click="openQR(user)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h6v6H3V3zm0 12h6v6H3v-6zM15 3h6v6h-6V3z"/><path d="M15 15h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm4 0h2v2h-2zm0-4h2v2h-2zm-2-2h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2z"/></svg></button>
                <button class="icon-btn" title="Editar" @click="goToEdit(user.id)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
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
              <div class="top-row">
                <div class="text-bold name-text">{{ user.name }}</div>
                <span :class="['status-badge', getStatusClass(user.status)]">{{ user.status }}</span>
              </div>
              <!-- Separamos claramente el correo y teléfono con clases propias -->
              <div class="card-meta">
                <div class="meta-item">{{ user.email }}</div>
                <div class="meta-item">{{ user.phone }}</div>
              </div>
            </div>
          </div>
          <div class="card-actions">
            <button class="icon-btn" title="Email" @click="goToEmail(user.id)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></button>
            <button class="icon-btn" @click="openWhatsApp(user.phone)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 5.6 8.5 8.5 0 0 1-7.6-5.6 8.38 8.38 0 0 1-.9-3.8A8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z"/><path d="M9 12l2 2 4-4"/></svg></button>
          <button class="icon-btn"@click="openQR(user)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h6v6H3V3zm0 12h6v6H3v-6zM15 3h6v6h-6V3z"/><path d="M15 15h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm4 0h2v2h-2zm0-4h2v2h-2zm-2-2h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2z"/></svg></button>
            <button class="icon-btn" @click="goToEdit(user.id)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
            <button class="icon-btn" @click="confirmDelete(user)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
          </div>
        </div>
      </div>
        <!-- Modal QR -->
      <ModalComponent :isOpen="showQR" @close="showQR = false">
        <h2 style="color: #1c4fd6; margin-bottom: 20px; font-family: 'Oswald', sans-serif; font-size: 1.3rem; text-transform: uppercase;">Código QR de Acceso</h2>
        
        <div class="qr-wrapper">
            <img src="../../../assets/qr.png" alt="QR" class="qr-image" />
        </div>
        
        <p style="color:#aaa; font-size:0.9rem; margin: 20px 0;">
            Muestra este código en la entrada para que los socios registren su asistencia.
        </p>
        
        <button class="btn-bulk" style="width:100%; display: flex; justify-content: center; align-items: center;">Descargar para Imprimir</button>
      </ModalComponent>
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
  </HeadingAdmin>
</template>

<style scoped>
.main-content { padding: 40px; }
.header-section { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
.main-title { font-family: 'Anton', sans-serif; font-size: 2.2rem; color: #fff; margin: 0; }


.actions-bar { display: flex; gap: 15px; align-items: center; }
.search-input, .status-select { background: #1a1a1a; border: 1px solid #444; padding: 10px 16px; border-radius: 8px; color: #fff; }
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
.desktop-only { display: block; }
.mobile-only { display: none; }

.modal-overlay { position: fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); display:flex; justify-content:center; align-items:center; z-index:1000; }
.modal-content { background:#111; padding:25px; border-radius:15px; width:90%; max-width:400px; text-align:center; position:relative; border: 1px solid #333; }
.close-btn { position:absolute; top:10px; right:15px; background:none; border:none; color:#fff; font-size:24px; cursor:pointer; }
@media (max-width: 768px) {
  .desktop-only { display: none; }
  .mobile-only { display: block; }
  .header-section { flex-direction: column; align-items: stretch; gap: 15px; }

  .search-input { 
    order: -1; 
    width: 100%; 
  }

  .status-select { 
    width: 100%; 
    order: 0;
  }  
  .actions-bar { 
    display: flex; 
    flex-direction: column; /* Cambiamos a columna para apilar */
    gap: 10px; 
    width: 100%; 
  }

  .user-card { 
    padding: 20px; 
    margin-bottom: 20px;
  }

  .card-info { 
    width: 100%; 
    padding-left: 5px; /* Evita que el texto pegue con el avatar */
  }
  .card-header { 
    display: flex; 
    align-items: center; /* Centramos verticalmente */
    gap: 15px; 
    margin-bottom: 20px; 
  }
  .card-meta { 
    display: flex; 
    flex-direction: column; /* Apilamos correo y teléfono */
    gap: 5px;
    margin-top: 8px;
    font-size: 0.85rem;
  }

  .card-actions { 
    justify-content: space-around; 
    padding-top: 15px;
  }
  
  .status-badge {
    margin: 8px 0; 
    display: inline-block;
  }
  .avatar-small {
    min-width: 40px; 
    height: 40px;
  }
  .btn-bulk { 
    width: 100%;
    justify-content: center; 
    padding: 10px 5px;
  }

  .search-input { 
    grid-column: span 2; 
    width: 100%; 
  }
  .top-row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 10px;
  }
  .meta-item {
    font-size: 0.85rem;
    color: #aaa;
    margin-bottom: 4px;
    word-break: break-all; 
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
    margin-top: 5px;
    align-self: flex-start;
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
  .status-badge {
    padding: 2px 10px;
    border-radius: 20px;
    font-size: 0.7rem;
    border: 1px solid;
    font-weight: 500;
  }

  /* Colores dinámicos */
  .status-green { background: rgba(6, 78, 59, 0.4); color: #34d399; border-color: #064e3b; }
  .status-red { background: rgba(153, 27, 27, 0.4); color: #f87171; border-color: #7f1d1d; }
  .status-orange { background: rgba(180, 83, 9, 0.4); color: #fbbf24; border-color: #78350f; }
  .status-yellow { background: rgba(161, 161, 35, 0.4); color: #fef08a; border-color: #854d0e; }
  .status-default { background: #333; color: #fff; border-color: #555; }


.text-bold { font-weight: 600; color: #fff; }

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
import HeadingAdmin from '../HeadingAdmin.vue';
import ModalComponent from '../../Modals/ModalComponent.vue';

import { useRouter } from 'vue-router';


// Función para navegación a correos
const goToEmail = (userId = null) => {
  if (userId) {
    // Si pasas un ID, vas al correo de un usuario específico
    router.push(`/admin/mail/${userId}`);
  } else {
    // Si no, vas al correo masivo
    router.push('/admin/bulk-email');
  }
};

const selectedMembership = ref(''); 
const selectedStatus = ref(''); 
const searchQuery = ref(''); // 1. Nuevo estado para el buscador

const filteredUsers = computed(() => {
  return users.value.filter(user => {
    // Filtros existentes
    const matchMembership = selectedMembership.value ? user.mensualidad === selectedMembership.value : true;
    const matchStatus = selectedStatus.value ? user.status === selectedStatus.value : true;
    
    // 2. Nuevo filtro de búsqueda
    const term = searchQuery.value.toLowerCase();
    const matchSearch = user.name.toLowerCase().includes(term) || 
                        user.email.toLowerCase().includes(term) ||
                        user.phone.toLowerCase().includes(term) ||
                        user.mensualidad.toLowerCase().includes(term) ||
                        user.status.toLowerCase().includes(term) || 
                        user.id.toString().includes(term);

    
    return matchMembership && matchStatus && matchSearch;
  });
});

const selectStatus = (status) => {
  if (status === 'Activo') return 'debt-active';
  if (status === 'Inactivo') return 'debt-inactive';
  if (status === 'Pendiente') return 'debt-pending';
  if (status === 'Próximo a vencer') return 'debt-warning';
  return 'debt-default';
};

const router = useRouter();
const showQR = ref(false);
const showDelete = ref(false);
const selectedUser = ref(null);
const getStatusClass = (status) => {
  const classes = {
    'Activo': 'status-green',
    'Inactivo': 'status-red',
    'Pendiente': 'status-orange',
    'Próximo a vencer': 'status-yellow'
  };
  return classes[status] || 'status-default';
};

const users = ref([
  { id: 1, name: 'Maria Luis Ramires Sanchez', email: 'Maria.luis@example.com', expirationDate: '18/03/2026', status: 'Activo', phone: '+52 481 123 4321' , mensualidad: 'Mensual' },
  { id: 2, name: 'Francisco Luis Ramires Sanchez', email: 'Francisco.luis@example.com', expirationDate: '18/03/2026', status: 'Inactivo', phone: '+52 481 123 4321' , mensualidad: 'Quincenal' },
  { id: 3, name: 'Luis Ramires Sanchez', email: 'Luis.luis@example.com', expirationDate: '18/03/2026', status: 'Activo', phone: '+52 481 123 4321' , mensualidad: 'Mensual' },
  { id: 4, name: 'Jose Luis Ramires Sanchez', email: 'Jose.luis@example.com', expirationDate: '18/03/2026', status: 'Inactivo', phone: '+52 481 123 4321' , mensualidad: 'Quincenal' },
  { id: 5, name: 'Mario Luis Ramires Sanchez', email: 'Mario.luis@example.com', expirationDate: '18/03/2026', status: 'Activo', phone: '+52 481 123 4321' , mensualidad: 'Mensual' },
  { id: 6, name: 'Jesus Luis Ramires Sanchez', email: 'Jesus.luis@example.com', expirationDate: '18/03/2026', status: 'Inactivo', phone: '+52 481 123 4321' , mensualidad: 'Quincenal' },
  { id: 7, name: 'Ana Luis Ramires Sanchez', email: 'Ana.luis@example.com', expirationDate: '18/03/2026', status: 'Activo', phone: '+52 481 123 4321' , mensualidad: 'Mensual' },
  { id: 8, name: 'Carlos Luis Ramires Sanchez', email: 'Carlos.luis@example.com', expirationDate: '18/03/2026', status: 'Activo', phone: '+52 481 123 4321' , mensualidad: 'Quincenal' },
]);


const openQR = (user) => { selectedUser.value = user; showQR.value = true; };
const confirmDelete = (user) => { selectedUser.value = user; showDelete.value = true; };

const goToEdit = (id) => router.push(`/admin/editar-usuario/${id}`);
const openWhatsApp = (phone) => window.open(`https://wa.me/${phone.replace(/\D/g, '')}`, '_blank');
</script>