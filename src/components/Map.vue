<template>
<div>
    <div id="mapContainer"/>
</div>
</template>
    
<script setup lang="ts">
import { onMounted } from 'vue'
import L from 'leaflet'
import { getPontosRecarga } from '@/services/wattstop'


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

    const pontosRecarga = await getPontosRecarga();

    for (let ponto of pontosRecarga) {
        const coordernadas = ponto.localizacao.split(',')

        console.log(ponto)

        const popupContent = 
            "<h2>" + ponto.empresa.nome + "</h2>" + 
            "<p>" + "Tipo Carregador: " + ponto.tipoCarregador + "</p>" +
            "<p>" + "Contato: " + ponto.empresa.email + "</p>" +
            "<p>" + "Contato: " + ponto.empresa.cnpj + "</p>"

        L.marker([coordernadas[0],coordernadas[1]])
            .addTo(map)
            .bindPopup(popupContent);    
    }
})

</script>
    
<style scoped>
#mapContainer {
    width: inherit;
    height: calc(100vh - 70px); /* height: calc(100vh - 50px); */
}
</style>  