import { createApp } from 'vue'
import App from './App.vue'
import i18n from './plugins/i18n'
import { setupPrimeVue } from './plugins/primevue'

/* PrimeVue icons */
import 'primeicons/primeicons.css'

/* PrimeFlex utilities */
import 'primeflex/primeflex.css'

const app = createApp(App)
app.use(i18n)
setupPrimeVue(app)
app.mount('#app')

