import 'vuetify/styles'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVuetify } from 'vuetify'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import MainVue from "./MainVue.vue"
import store from './store/index'
import routes from './routes.js'
import customLightTheme from '../plugins/colors.ts'

import axios from 'axios'
window.axios = axios
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import Chart from 'chart.js/auto'
window.Chart = Chart


const vuetify = createVuetify({
    theme: {
        defaultTheme: 'customLightTheme',
        themes: {
            customLightTheme
        }
    }
})


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes.routes,
})

createApp(MainVue).use(vuetify).use(autoAnimatePlugin).use(store).use(router).mount('#app');
