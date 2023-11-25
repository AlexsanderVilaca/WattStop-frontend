<!-- MapComponent.vue -->
<template>
    <v-container>
        <div id="map"></div>
    </v-container>
</template>
<script lang="ts">
import { onMounted } from 'vue';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';

const initializeMap = () => {
    // leaflet.map('map').setView([51.505, -0.09], 13);

    var map = leaflet.map('map').setView([53, 12], 5);

// Style URL format in XYZ PNG format; see our documentation for more options
    leaflet.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors',
}).addTo(map);

};
</script>
<style scoped>
#map {
    height: 200px; /* Defina a altura conforme necessário */
}
</style>