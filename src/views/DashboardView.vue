<template>
  <v-app full-height>
    <v-navigation-drawer 
      class="grey-darken-4"
      theme="dark"
      app
      v-model="drawerState"
      >
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


        <v-list-item prepend-icon="mdi-map-search" title="Mapa" value="btnMapa" @click="handleSubmitMapa()"></v-list-item>
        <v-list-item prepend-icon="mdi-account-supervisor" title="Administração" value="btnAdministracao" @click="handleSubmitAdm()"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="Conta" value="btnConta" @click="handleSubmitConta()"></v-list-item>
        <v-list-item prepend-icon="mdi-information" title="Sobre" value="btnSobre" @click="handleSubmitSobre()"></v-list-item>
      </v-list>

      
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block
         @click="handleSubmitLogoff()"
         color="light-green-accent-3"
        >
        Logoff
        </v-btn>
      </div>
    </template>
    </v-navigation-drawer>

    <v-app-bar 
      id="v-app-bar"
      color="grey-darken-4"
    >
      <v-app-bar-nav-icon
        @click="toggleState()"
        color="light-green-accent-3"
      >
      <v-icon>{{ drawerState ? "mdi-menu-open" : "mdi-menu-close" }}</v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-title>WattStop</v-app-bar-title>
      <span id="name-span">
      Bem vindo(a) {{ getUserName() }}
      </span>
      <v-avatar
              size="large"
              class="mr-5"
              color="light-green-accent-3"
      >
      <span class="text-uppercase">{{ getUserInitials() }}</span>
      </v-avatar>
    </v-app-bar>

    <!-- <v-main class="d-flex align-center justify-center" style="min-height: 300px;"> -->
    <v-main>
      <router-view
        v-slot="{ Component }"
      >
      <transition 
        name="scale"
      >
      <component :is="Component" />
    </transition>
      </router-view>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router';
import { getUserName } from '@/stores/user';
import { getUserInitials } from '@/stores/user';
import { deleteCookie } from '@/services/cookie-handler';

const drawerState = ref(true)

const toggleState = () => drawerState.value = !drawerState.value;

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
  deleteCookie("WATTSTOP_TOKEN");
  router.push('login');
}

const rotas = [
  { path: '/dashboard', name: 'Mapa' },
  { path: '/jurema', name: 'Administração' },
  { path: '/ehaconta', name: 'Conta' },
  { path: '/about', name: 'Sobre' },
]
</script>
<style scoped>
#v-app-bar {
  padding-right: 0px;
}

#name-span {
  margin-right: 10px;
}
</style>