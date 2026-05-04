import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import VueMask from '@devindex/vue-mask'

const app = createApp(App)

app.use(router)

app.use(VueMask)

app.mount('#app')
