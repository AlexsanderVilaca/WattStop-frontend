<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import router from './router';

const isLogged = () => true /* mock da função para verificar se o usuário está logado */

onMounted(async () => {
  if(isLogged()) {
    router.push('/');
  } else {
    router.push('login')
  }
})

</script>
<template>
<router-view v-slot="{ Component }">
      <component :is="Component" />
  </router-view>
</template>
  
<style scoped>

</style>
