<template>
  <v-app full-height>
    <v-navigation-drawer 
      class="bg-green-accent-1"
      theme="dark">
      <v-list
        density="comfortable"
        nav
      >

        <!-- <v-list-item v-for="rota in rotas" :key="rota.path" value="btn">
          <router-link :to="rota.path">
            <v-list-item-content>
              <v-list-item-title>{{ rota.name }}</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item> -->


        <v-list-item prepend-icon="mdi-view-dashboard" title="Mapa" value="btnMapa"><v-list-title @click="handleSubmitMapa()"></v-list-title> </v-list-item>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Administração" value="btnAdministracao" @click="handleSubmitAdm()"></v-list-item>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Conta" value="btnConta" @click="handleSubmitConta()"></v-list-item>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Sobre" value="btnSobre" @click="handleSubmitSobre()"></v-list-item>
      </v-list>

      
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block
         @click="handleSubmitLogoff()"
        >
        Logoff
        </v-btn>
      </div>
    </template>
    </v-navigation-drawer>

    <v-app-bar title="WattStop"></v-app-bar>

    <!-- <v-main class="d-flex align-center justify-center" style="min-height: 300px;"> -->
    <v-main>
      <router-view
        v-slot="{ Component }"
      >
      <component :is="Component" />
      </router-view>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">

import router from '@/router';
import AboutView from './AboutView.vue';

const handleSubmitMapa = () => {
  router.push('mapa')
}

const handleSubmitAdm = () => {
  router.push('adm')
}

const handleSubmitConta = () => {
  router.push('conta')
}

const handleSubmitSobre = () => {
  router.push('about')
}

const handleSubmitLogoff = () => {
  router.push('login')
}


const rotas = [
  { path: '/dashboard', name: 'Mapa' },
  { path: '/jurema', name: 'Administração' },
  { path: '/ehaconta', name: 'Conta' },
  { path: '/about', name: 'Sobre' },
]
</script>