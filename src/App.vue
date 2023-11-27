<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import router from './router';
import { isAuthenticated } from '@/stores/user'
import Notify from './components/Notify.vue';

onMounted(async () => {
  if(isAuthenticated()) {
    router.push('dashboard');
  } else {
    router.push('login')
  }
})

</script>
<template>
  <Notify />
<router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
  
<style>
body {
  background: grey;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.1);
}

</style>
