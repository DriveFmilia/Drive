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



    <NotificationsPanel

      :is-open="isNotificationsOpen"

      :notifications="notifications"

      @close="isNotificationsOpen = false"

    />

  </div>

</template>



<script setup>

import { ref } from 'vue';

import Sidebar from '../Sidebar.vue';

import NotificationsPanel from '../Notifications/NotificationsPanel.vue';



const isSidebarOpen = ref(false);

const isNotificationsOpen = ref(false);



const notifications = ref([

  { id: 1, title: 'Sistema', message: 'Bienvenido al panel', time: 'ahora', read: false }

]);



const toggleSidebar = () => { isSidebarOpen.value = !isSidebarOpen.value; };

</script>



<style scoped>

.app-wrapper {

  min-height: 100vh;

  background: linear-gradient(180deg, #06090bd2 0%, #b4e9ff8e 50%, #1a262c65 100%);

}



/* Sidebar */

.sidebar-container {

  width: 280px;

  height: 100vh;

  position: fixed;

  top: 0;

  left: 0;

  background: #0f172a;

  transform: translateX(-100%);

  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  z-index: 3000;

}



.sidebar-open .sidebar-container { transform: translateX(0); }



.sidebar-overlay {

  position: fixed;

  inset: 0;

  background: rgba(0, 0, 0, 0.5);

  backdrop-filter: blur(4px);

  z-index: 2500;

}



/* Nav Bar mejorada */

.top-nav {

  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 16px 24px;

  background: rgba(15, 23, 42, 0.2);

  backdrop-filter: blur(10px);

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

}



.nav-left, .nav-right {

  display: flex;

  gap: 12px;

  align-items: center;

}



.icon-btn {

  background: rgba(255, 255, 255, 0.08);

  border: 1px solid rgba(255, 255, 255, 0.15);

  border-radius: 12px;

  padding: 12px;

  cursor: pointer;

  color: white;

  transition: all 0.2s ease;

}



.icon-btn:hover {

  background: rgba(255, 255, 255, 0.15);

  border-color: #3b82f6;

}



.svg-icon { width: 24px; height: 24px; fill: white; }



.notification { position: relative; }

.dot {

  position: absolute; top: 8px; right: 8px;

  width: 8px; height: 8px; background: #ef4444;

  border-radius: 50%; box-shadow: 0 0 8px #ef4444;

}



.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }

.fade-enter-from, .fade-leave-to { opacity: 0; }

</style>