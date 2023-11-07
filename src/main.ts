import './assets/main.css'
import 'vuetify/styles'
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