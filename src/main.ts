import './assets/main.css'
import './assets/charging-station.svg'
import 'vuetify/styles'
import "leaflet/dist/leaflet.css";
import 'vuetify/dist/vuetify.min.css'; //estilos do Vuetify
import '@mdi/font/css/materialdesignicons.css'; //ícones do Material Design Icons
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'
import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App)
            .use(createPinia())
            .use(router)
            .use(vuetify)
            .mount('#app')