<script setup lang="ts">
// Importamos los componentes de la carpeta landing según image_e73485.png
import Heading from '../landing/components/Heading.vue'
import AboutUs from '../landing/components/About-Us.vue'
import Benefits from '../landing/components/Benefits.vue'
import Roles from '../landing/components/Roles.vue'
import MonthlyPayments from '../landing/components/Monthly-payments.vue'
import Footer from '../landing/components/Footer.vue'
import Login from '@/components/Login.vue'
import Record from './Menu/Record.vue'
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="flex flex-col min-h-screen">

    <main class="flex-grow">
      <Login />
    </main>

  </div>
</template>