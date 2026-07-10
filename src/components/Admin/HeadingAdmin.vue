<template>

  <div class="app-wrapper" :class="{ 'sidebar-open': isSidebarOpen }">

    <!-- Overlay del menú -->

    <transition name="fade">

      <div v-if="isSidebarOpen" class="sidebar-overlay" @click="toggleSidebar"></div>

    </transition>



    <!-- Sidebar -->

    <aside class="sidebar-container">

      <Sidebar />

    </aside>



    <!-- Barra de navegación principal -->

    <nav class="top-nav">

      <!-- Sección izquierda: Menú -->

      <div class="nav-left">

        <button class="icon-btn" @click="toggleSidebar" aria-label="Menú">

          <svg viewBox="0 0 24 24" class="svg-icon">

            <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"/>

          </svg>

        </button>

      </div>



      <!-- Sección derecha: Notificaciones -->

      <div class="nav-right">

        <button class="icon-btn notification" @click="isNotificationsOpen = true">

          <span class="dot"></span>

          <svg viewBox="0 0 24 24" class="svg-icon">

            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>

          </svg>

        </button>

      </div>

    </nav>

    <main class="main-content">
      <slot />
    </main>

    <NotificationsPanel

      :is-open="isNotificationsOpen"

      :notifications="notifications"

      @close="isNotificationsOpen = false"

    />

  </div>

</template>



<script setup>

import { ref } from 'vue';

import Sidebar from './Sidebar.vue';

import NotificationsPanel from './Notifications/NotificationsPanel.vue';



const isSidebarOpen = ref(false);

const isNotificationsOpen = ref(false);



const notifications = ref([

  { id: 1, title: 'Sistema', message: 'Bienvenido al panel', time: 'ahora', read: false }

]);



const toggleSidebar = () => { isSidebarOpen.value = !isSidebarOpen.value; };

</script>


<style scoped>
@import '@/assets/Admin/HeadingAdmin.css';
</style>