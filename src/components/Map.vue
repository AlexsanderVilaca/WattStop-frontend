<template>
<div>
    <div id="mapContainer"/>
</div>
</template>
    
<script setup lang="ts">
import { onMounted } from 'vue'
import L from 'leaflet'

/* onMouted precisa do async senão ele chama o método antes de
    renderizar a tela e aí dá pau pq o html que ele "injeta"
    o mapa ainda não existe
*/
onMounted(async () => {
const map = L.map('mapContainer').setView([-26.8560346, -49.239189], 5)
    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution:
        '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)
})
</script>
    
<style scoped>
#mapContainer {
    width: 100vw;
    height: calc(100vh - 50px);
}
</style>  