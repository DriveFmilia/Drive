<template>
  <HeadingAdmin>
    <NotificationSystem ref="toastRef" />
    <main class="main-content">
      <header class="header-section">
        <h1 class="main-title">Asistencia  <span class="highlight"> Semanal </span></h1>
      
        <div class="actions-bar">
            <select class="status-select" v-model="selectedDay">
                <option value="">Dia Semanal (Todas)</option>
                <option value="Lunes">Lunes</option>
                <option value="Martes">Martes</option>
                <option value="Miercoles">Miercoles</option>
                <option value="Jueves">Jueves</option>
                <option value="Viernes">Viernes</option>
                <option value="Sabado">Sabado</option>
                <option value="Domingo">Domingo</option>
            </select>
            <button class="btn-bulk"  @click="activeModal = 'asistencias'">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                    <path d="M18 20V10M12 20V4M6 20v-6"/>
                </svg>
                <div class="btn-text-wrapper">
                    <span class="btn-label">Reportes</span>
                    <span class="highlight-text-custom">Ver Gráfica</span>
                </div>
            </button>
            <input type="text" class="search-input" placeholder="Buscar usuario..." v-model="searchQuery" >
        
            
        </div>
        </header>
                

      <!-- VISTA ESCRITORIO -->
      <div class="table-container desktop-only">
        <table class="user-table">
          <thead>
            <tr><th>Foto</th><th>Nombre</th><th>Correo</th><th>Membresia</th><th>Fecha a Vencer</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr v-for="user in filteredUsers" :key="user.id">
              <td><div class="avatar-small"></div></td>
              <td class="text-bold">{{ user.name }}</td>
              <td>{{ user.email }}</td>
                <td><span :class="['status-badge2', getMembershipClass(user.membership)]">{{ user.membership }}</span></td>
              
              <td>{{ user.expirationDate }}</td>
              <td><span :class="['status-badge', getStatusClass(user.status)]">{{ user.status }}</span></td>
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
              <div class="name-text">{{ user.name }}</div>
              
              <div class="badges-row">
                <span :class="['status-badge2', getMembershipClass(user.membership)]">{{ user.membership }}</span>
                <span :class="['status-badge', getStatusClass(user.status)]">{{ user.status }}</span>
              </div>
              
              <div class="card-meta">
                <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ user.email }}</div>
                <div>{{ user.phone }}</div>
                <div class="card-meta">
                    {{user.email}} <br> 
                    <span style="color: yellow;">Vence:</span> {{user.expirationDate}} <br>
              </div>
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
      <div v-if="activeModal === 'asistencias'" class="modal-wrapper" @click.self="activeModal = null">
        <Asistencias @close="activeModal = null" />
      </div>
    </transition>  
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
.highlight { color: #3b82f6; }
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

.highlight-text-custom { 
    font-size: 1.05rem; 
    font-weight: 700; 
    color: #34d399; /* Verde esmeralda para resaltar */
}
/* Nuevos colores dinámicos */
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

  .user-card { 
    background: #0f0f0f; 
    padding: 16px; 
    border-radius: 12px; 
    border: 1px solid #222; 
    margin-bottom: 12px; 
  }

  .card-header { 
    display: flex; 
    align-items: flex-start; /* Alinea todo arriba */
    gap: 12px; 
  }

  .avatar-small { 
    min-width: 40px; /* Asegura que no se deforme */
    height: 40px; 
    background: #333; 
    border-radius: 50%; 
  }

  .card-info { 
    flex: 1; 
    min-width: 0; /* Necesario para que el texto largo no desborde */
  }

  .name-text {
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 8px;
    line-height: 1.2;
    /* Permite el quiebre de línea si es muy largo */
    word-wrap: break-word;
  }

  .badges-row {
    display: flex;
    gap: 6px;
    margin-bottom: 10px;
    flex-wrap: wrap; 
  }

  .card-meta { 
    font-size: 0.85rem; 
    color: #aaa; 
    line-height: 1.4;
  }
  
  .top-row {
    display: flex;
    flex-direction: column; 
    align-items: flex-start;
    gap: 4px;
  }

  .badges-row {
    display: flex;
    gap: 6px;
    margin-bottom: 8px;
    flex-wrap: wrap; /* Permite que si hay muchos badges bajen de línea */
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

  /* Colores dinámicos */
  .status-green { background: rgba(6, 78, 59, 0.4); color: #34d399; border-color: #064e3b; }
  .status-red { background: rgba(153, 27, 27, 0.4); color: #f87171; border-color: #7f1d1d; }
  .status-orange { background: rgba(180, 83, 9, 0.4); color: #fbbf24; border-color: #78350f; }
  .status-yellow { background: rgba(161, 161, 35, 0.4); color: #fef08a; border-color: #854d0e; }
  .status-default { background: #333; color: #fff; border-color: #555; }
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

</style>

<script setup>
import { ref, computed, reactive  } from 'vue';
import { useRouter } from 'vue-router';
import HeadingAdmin from '../HeadingAdmin.vue';
import ModalComponent from '../../Modals/ModalComponent.vue';
import Asistencias from '../Componets/Attendance.vue';
import NotificationSystem from '../../Modals/NotificationSystem.vue'; 

const activeModal = ref(null);

const router = useRouter();
const showQR = ref(false);
const showDelete = ref(false);
const selectedUser = ref(null);
const selectedRoleFilter = ref('Todos');

const searchQuery = ref('');
const selectedMembership = ref(''); 
const selectedDay = ref('');
const filteredUsers = computed(() => {
  return users.value.filter(user => {
    // Filtros de los selects
    const matchMembership = selectedMembership.value ? user.mensualidad === selectedMembership.value : true;
    const matchStatus = selectedDay.value ? user.dia === selectedDay.value : true;
    
    // Filtro del buscador (busca por nombre o correo)
    const term = searchQuery.value.toLowerCase();
    const matchSearch = user.name.toLowerCase().includes(term) || 
                        user.email.toLowerCase().includes(term) ||
                        user.phone.toLowerCase().includes(term) ||
                        user.mensualidad.toLowerCase().includes(term) ||
                        user.status.toLowerCase().includes(term) || 
                        user.expirationDate.toLowerCase().includes(term) ||
                        user.id.toString().includes(term);
    
    // Retorna true solo si pasa los tres filtros
    return matchMembership && matchStatus && matchSearch;
  });
});


// Agrega esta función
const goToCharts = () => {
  router.push('/admin/graph'); // Ajusta la ruta a la que definiste en tu archivo router/index.js
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
const users = ref([
    { id: 1, name: 'Maria Luis Ramires Sanchez', email: 'Maria.luis@example.com', expirationDate: '18/03/2026', status: 'Activo', phone: '+52 481 123 4321' , mensualidad: 'Mensual',  membership: '2 Meses', dia: 'Lunes' },
  { id: 2, name: 'Francisco Luis Ramires Sanchez', email: 'Francisco.luis@example.com', expirationDate: '18/03/2026', status: 'Pendiente', phone: '+52 481 123 4321' , mensualidad: 'Quincenal', membership: '1 Mes', dia: 'Martes' },
  { id: 3, name: 'Luis Ramires Sanchez', email: 'Luis.luis@example.com', expirationDate: '18/03/2026', status: 'Activo', phone: '+52 481 123 4321' , mensualidad: 'Mensual', membership: '4 Meses', dia: 'Miércoles' },
  { id: 4, name: 'Jose Luis Ramires Sanchez', email: 'Jose.luis@example.com', expirationDate: '18/03/2026', status: 'Inactivo', phone: '+52 481 123 4321' , mensualidad: 'Quincenal', membership: '1 Mes', dia: 'Jueves' },
  { id: 5, name: 'Mario Luis Ramires Sanchez', email: 'Mario.luis@example.com', expirationDate: '18/03/2026', status: 'Pendiente', phone: '+52 481 123 4321' , mensualidad: 'Mensual', membership: '3 Meses', dia: 'Viernes' },
  { id: 6, name: 'Jesus Luis Ramires Sanchez', email: 'Jesus.luis@example.com', expirationDate: '18/03/2026', status: 'Inactivo', phone: '+52 481 123 4321' , mensualidad: 'Quincenal', membership: '1 Mes', dia: 'Sábado' },
  { id: 7, name: 'Ana Luis Ramires Sanchez', email: 'Ana.luis@example.com', expirationDate: '18/03/2026', status: 'Activo', phone: '+52 481 123 4321' , mensualidad: 'Mensual', membership: '2 Meses', dia: 'Martes' },
  { id: 8, name: 'Carlos Luis Ramires Sanchez', email: 'Carlos.luis@example.com', expirationDate: '18/03/2026', status: 'Pendiente', phone: '+52 481 123 4321' , mensualidad: 'Quincenal', membership: '1 Mes', dia: 'Lunes' },
    
]);
const getStatusClass = (status) => {
  const classes = {
    'Activo': 'status-green',
    'Inactivo': 'status-red',
    'Pendiente': 'status-orange',
    'Próximo a vencer': 'status-yellow'
  };
  return classes[status] || 'status-default';
};
const openQR = (user) => { selectedUser.value = user; showQR.value = true; };
const confirmDelete = (user) => { selectedUser.value = user; showDelete.value = true; };
const goToPayments = (id) => router.push(`/admin/pay/${id}`);
const goToEdit = (id) => router.push(`/admin/editar-usuario/${id}`);
const openWhatsApp = (phone) => window.open(`https://wa.me/${phone.replace(/\D/g, '')}`, '_blank');
</script>