<template>
  <div class="home">
     <l-map v-model="zoom" v-model:zoom="zoom" :center="[39.02777480385033, -105.53715747829405]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <!-- <l-marker
        v-for="provider in providers"
        :key="provider.address"
        :lat-lng="[provider.location.latitude, provider.location.longitude]"
      >
        <l-icon
          icon-url="https://cdn.frankerfacez.com/static/emoji/images/twemoji/1f489.png"
          :icon-size="[45, 45]"
        />
        <l-popup>
          <h1>{{provider.name}}</h1>
          <h3>{{provider.address}}</h3>
          <div v-html="cleanupDescription(provider)"></div>
        </l-popup>
      </l-marker> -->
    </l-map>
<br/><br/>
<div class="d-flex flex-column text-center">
    <h1>
        Integrantes
    </h1>
    <p>
        Alexsander Vilaça Rodrigues - 081200032<br />
        Daniel Oliveira Dias - 081200022<br />
        Marcus Augusto Casé Nutti - 081200027<br />
    </p>
  </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>
