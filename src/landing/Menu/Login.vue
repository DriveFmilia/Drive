<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import logo from '@/assets/icono.png';

const router = useRouter();

const email = ref('');
const password = ref('');
const loginError = ref(null);
const isLoading = ref(false);

const handleLogin = () => {
  isLoading.value = true;
  loginError.value = null;

  setTimeout(() => {
    const mail = email.value.toLowerCase();
    if (mail.includes('admin') || mail.includes('dueño') || mail.includes('staff') || mail.includes('cliente')) {
      router.push('/dashboard');
    } else {
      loginError.value = "Credenciales incorrectas";
      isLoading.value = false;
    }
  }, 1000);
};
</script>

<template>
  <!-- Fondo Claro Profesional (Gris azulado ultra suave) -->
  <div class="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc] p-4 md:p-8 relative font-sans selection:bg-blue-100">
    
    <!-- Header Logo -->
    <div class="absolute top-6 left-6 md:top-10 md:left-10 flex items-center gap-2">
      <img :src="logo" alt="The Gym" class="w-10 h-10 object-contain">
      <span class="text-[#1e293b] font-bold tracking-tight text-lg uppercase italic">The Gym</span>
    </div>

    <!-- Card Principal Blanca y Elegante -->
    <div class="w-full max-w-md bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 transition-all">
        
        <!-- Encabezado -->
        <div class="mb-10">
          <h1 class="text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight mb-2">
            Inicia<span class="text-blue-600 font-medium">Sesión</span>
          </h1>
          <p class="text-slate-500 text-sm font-medium">Gestiona tu gimnasio</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
            
            <!-- Campo Usuario -->
            <div class="space-y-2">
                <label class="text-[11px] uppercase tracking-wider text-slate-400 font-bold ml-1">Usuario</label>
                <div class="relative">
                  <input 
                    v-model="email"
                    type="email" 
                    placeholder="correo@ejemplo.com" 
                    required
                    class="w-full bg-slate-50 text-slate-900 py-4 px-5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 focus:outline-none transition-all placeholder:text-slate-300 text-sm"
                  >
                  <i class="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 ph ph-envelope-simple"></i>
                </div>
            </div>

            <!-- Campo Contraseña -->
            <div class="space-y-2">
                <div class="flex justify-between items-center px-1">
                  <label class="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Contraseña</label>
                  <router-link to="/auth/recover" class="text-[11px] text-blue-600 hover:underline font-bold">¿Olvidaste la clave?</router-link>
                </div>
                <div class="relative">
                  <input 
                    v-model="password"
                    type="password" 
                    placeholder="••••••••" 
                    required
                    class="w-full bg-slate-50 text-slate-900 py-4 px-5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 focus:outline-none transition-all placeholder:text-slate-300 text-sm"
                  >
                  <i class="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 ph ph-lock-simple"></i>
                </div>
            </div>

            <!-- Error -->
            <transition name="fade">
              <div v-if="loginError" class="bg-red-50 text-red-500 text-[11px] font-bold py-2 px-4 rounded-lg border border-red-100 text-center uppercase tracking-wide">
                {{ loginError }}
              </div>
            </transition>

            <!-- Botón Ingresar -->
            <button 
                type="submit"
                :disabled="isLoading"
                class="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-slate-200 flex justify-center items-center gap-2 group active:scale-[0.98]"
            >
                <span v-if="!isLoading" class="uppercase tracking-widest text-xs">Entrar al Sistema</span>
                <i v-else class="ph ph-circle-notch animate-spin text-lg"></i>
                <i v-if="!isLoading" class="ph ph-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
            </button>
        </form>

        <!-- Divisor sutil -->
        <div class="relative my-8 text-center">
            <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-slate-100"></div></div>
            <span class="relative bg-white px-4 text-[10px] text-slate-300 font-bold uppercase tracking-[0.2em]">O</span>
        </div>
        
        <!-- Registrar Gimnasio -->
        <router-link to="/auth/register"
            class="w-full flex justify-center items-center gap-2 bg-white text-blue-600 text-xs font-bold py-4 px-6 rounded-xl border border-blue-100 hover:bg-blue-50 transition-all active:scale-[0.98]">
            <i class="ph ph-plus-circle font-bold"></i>
            Registrar Gimnasio
        </router-link>
    </div>

    <!-- Footer Copyright -->
    <div class="mt-12">
      <p class="text-slate-400 font-medium tracking-[0.2em] text-[10px] uppercase">
        © 2026 The Gym Software — v2.0
      </p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css');

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Limpieza de autocompletado en navegadores */
input:-webkit-autofill {
  -webkit-text-fill-color: #0f172a;
  -webkit-box-shadow: 0 0 0px 1000px #f8fafc inset;
}
</style>