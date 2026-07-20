<template>
  <HeadingAdmin>
    <NotificationSystem ref="toastRef" />
    <main class="main-content">
      <header class="header-section">
        <h1 class="main-title">Personal</h1>
      
        <div class="actions-bar">
            <select class="status-select" v-model="selectedRoleFilter">
              <option value="Todos">Todos los roles</option>
              <option value="Recepcionista">Recepcionista</option>
              <option value="Entrenador">Entrenador</option>
              <option value="Administrador">Administrador</option>
            </select>
            <button class="btn-bulk" @click="activeModal = 'enviomasivo'">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              Correo Masivo
            </button>
            <input type="text"  class="search-input" placeholder="Buscar usuario..." v-model="searchQuery">
        </div>
        </header>
                

      <!-- VISTA ESCRITORIO -->
      <div class="table-container desktop-only">
        <table class="user-table">
          <thead>
            <tr><th>Foto</th><th>Nombre</th><th>Correo</th><th>Celular</th><th>Rol Sistema</th><th>Acciones</th></tr>
          </thead>
          <tbody>
            <tr v-for="user in filteredUsers" :key="user.id">
              <td><div class="avatar-small"></div></td>
              <td class="text-bold">{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.phone }}</td>
              
              <td><span :class="['status-badge', getRoleClass(user.role)]">{{ user.role }}</span></td>
              <td class="actions-cell">
                <button class="icon-btn" title="Email" @click="activeModal = 'enviocorreo'"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></button>
                <button class="icon-btn" title="WhatsApp" @click="openWhatsApp('user.phone')"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 5.6 8.5 8.5 0 0 1-7.6-5.6 8.38 8.38 0 0 1-.9-3.8A8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z"/><path d="M9 12l2 2 4-4"/></svg></button>
                <!--<button class="icon-btn" title="QR" @click="openQR(user)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h6v6H3V3zm0 12h6v6H3v-6zM15 3h6v6h-6V3z"/><path d="M15 15h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm4 0h2v2h-2zm0-4h2v2h-2zm-2-2h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2z"/></svg></button>-->
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
                    
                </div>
                <div>
                    <span :class="['status-badge', getRoleClass(user.role)]">{{ user.role }}</span>
                </div>
                <div class="card-meta">
                    <span>{{ user.email }}</span>
                    <span>{{ user.phone }}</span>
                </div>
            </div>
            </div>
          <div class="card-actions">
            <button class="icon-btn" title="Email" @click="activeModal = 'enviocorreo'"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></button>
            <button class="icon-btn" @click="openWhatsApp(user.phone)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 5.6 8.5 8.5 0 0 1-7.6-5.6 8.38 8.38 0 0 1-.9-3.8A8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z"/><path d="M9 12l2 2 4-4"/></svg></button>
            <!-- <button class="icon-btn" @click="openQR(user)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h6v6H3V3zm0 12h6v6H3v-6zM15 3h6v6h-6V3z"/><path d="M15 15h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm4 0h2v2h-2zm0-4h2v2h-2zm-2-2h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2z"/></svg></button>-->
            <button class="icon-btn" @click="goToEdit(user.id)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
            <button class="icon-btn" @click="confirmDelete(user)"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
          </div>
        </div>
      </div>
        <!-- Modal QR -->
      <ModalComponent :isOpen="showQR" @close="showQR = false">
        <h2 style="color:#fff; margin-bottom: 20px;">Código QR de Acceso</h2>
        
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
        <transition name="pop">
      <div v-if="activeModal === 'enviomasivo'" class="modal-wrapper" @click.self="activeModal = null">
        <CorreoMasivo @close="activeModal = null" />
      </div>
    </transition>  
        <transition name="pop">
      <div v-if="activeModal === 'enviocorreo'" class="modal-wrapper" @click.self="activeModal = null">
        <EnvioCorreo @close="activeModal = null" />
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

  
  .actions-bar { 
    display: flex; 
    flex-direction: column; /* Cambiamos a columna para apilar */
    gap: 10px; 
    width: 100%; 
  }
  .status-badge {
    margin: 8px 0; /* Separa el badge del nombre y el email */
    display: inline-block;
  }
  .avatar-small {
    min-width: 40px; 
    height: 40px;
  }
  .status-select { 
    width: 100%; 
    padding: 10px 8px; 
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
    gap: 4px;
  }
  .card-meta {
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: 0.85rem;
    word-break: break-all; /* Fuerza el corte en palabras muy largas como el email */
  }
  .card-info { 
    flex: 1; 
    min-width: 0; /* IMPORTANTE: permite que el flex-item se encoja */
    overflow: hidden; /* Evita que el contenido desborde */
  }

  .name-text {
    font-size: 1rem;
    line-height: 1.3;
    white-space: normal;
    display: block; /* Cambiado de -webkit-box a block para mayor control */
  }
  .search-input { 
    order: -1; 
    width: 100%; 
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
  .status-badge {
    padding: 2px 10px;
    border-radius: 20px;
    font-size: 0.7rem;
    border: 1px solid;
    font-weight: 500;
  }

/* Colores específicos para ROLES */
    .role-recepcionista { background: rgba(16, 185, 129, 0.2); color: #34d399; border-color: #059669; }
    .role-entrenador { background: rgba(59, 130, 246, 0.2); color: #60a5fa; border-color: #2563eb; }
    .role-admin { background: rgba(168, 85, 247, 0.2); color: #c084fc; border-color: #9333ea; }
    .role-default { background: #333; color: #fff; border-color: #555; }

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
import { ref, computed, reactive  } from 'vue';
import { useRouter } from 'vue-router';
import HeadingAdmin from '../HeadingAdmin.vue';
import ModalComponent from '../../Modals/ModalComponent.vue';
import CorreoMasivo from '../Componets/Bulk-Email.vue';
import EnvioCorreo from '../Componets/Mail.vue';
import NotificationSystem from '../../Modals/NotificationSystem.vue'; 

const activeModal = ref(null);

const router = useRouter();
const showQR = ref(false);
const showDelete = ref(false);
const selectedUser = ref(null);
const selectedRoleFilter = ref('Todos');

const searchQuery = ref('');
const filteredUsers = computed(() => {
  // Primero filtramos por rol
  let result = selectedRoleFilter.value === 'Todos' 
    ? users.value 
    : users.value.filter(user => user.role === selectedRoleFilter.value);

  // Luego filtramos por el texto de búsqueda (nombre o correo)
  if (searchQuery.value) {
    const term = searchQuery.value.toLowerCase();
    result = result.filter(user => 
      user.name.toLowerCase().includes(term) || 
      user.email.toLowerCase().includes(term) ||
      user.phone.toLowerCase().includes(term) ||
      user.role.toLowerCase().includes(term)

    );
  }
  return result;
});

const goToEmail = (userId = null) => {
  if (userId) {
    // Si pasas un ID, vas al correo de un usuario específico
    router.push(`/admin/mail/${userId}`);
  } else {
    // Si no, vas al correo masivo
    router.push('/admin/bulk-email');
  }
};
const users = ref([
  { id: 1, name: 'Armando Luis Ramires Sanchez', email: 'Armandoluis@gmail.com', phone: '+52 481 1265412', role: 'Recepcionista' },
  { id: 2, name: 'Francisco Luis Ramires Sanchez', email: 'Francisco.luis@example.com', phone: '+52 4811 243422', role: 'Entrenador' },
  { id: 3, name: 'Maria Luis Ramires Sanchez', email: 'Maria.luis@example.com', phone: '+52 4811 243423', role: 'Recepcionista' },
  { id: 4, name: 'Jorge Luis Ramires Sanchez', email: 'Jorge.luis@example.com', phone: '+52 4811 243424', role: 'Entrenador' },
  { id: 5, name: 'Mario Luis Ramires Sanchez', email: 'Mario.luis@example.com', phone: '+52 4811 243425', role: 'Recepcionista' },
  { id: 6, name: 'Luis Ramires Sanchez', email: 'Luis.ramires@example.com', phone: '+52 4811 243426', role: 'Recepcionista' },
       
]);

const getRoleClass = (role) => {
  const classes = {
    'Recepcionista': 'role-recepcionista',
    'Entrenador': 'role-entrenador',
    'Administrador': 'role-admin'
  };
  return classes[role] || 'role-default';
};


const openQR = (user) => { selectedUser.value = user; showQR.value = true; };
const confirmDelete = (user) => { selectedUser.value = user; showDelete.value = true; };

const goToEdit = (id) => router.push(`/admin/editar-staff/${id}`);
const openWhatsApp = (phone) => window.open(`https://wa.me/${phone.replace(/\D/g, '')}`, '_blank');
</script>