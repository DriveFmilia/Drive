<script setup lang="ts">
// Importamos los componentes de la carpeta landing según image_e73485.png
import Heading from '../landing/components/Heading.vue'
import AboutUs from '../landing/components/About-Us.vue'
import Benefits from '../landing/components/Benefits.vue'
import Roles from '../landing/components/Roles.vue'
import MonthlyPayments from '../landing/components/Monthly-payments.vue'
import Footer from '../landing/components/Footer.vue'

// Función para el scroll suave interno
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Aquí colocamos el Heading que contiene tu Navbar -->
    <Heading @navigate="scrollToSection" />

    <!-- Secciones cargadas una tras otra para scroll vertical -->
    <main class="flex-grow">
      <section id="sobre-nosotros">
        <AboutUs />
      </section>

      <section id="beneficios">
        <Benefits />
      </section>

      <section id="roles">
        <Roles />
      </section>

      <section id="mensualidades">
        <MonthlyPayments />
      </section>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
/* Aseguramos que el scroll sea fluido en este contenedor */
section {
  scroll-margin-top: 80px; /* Ajusta esto según el alto de tu Navbar */
}
</style>