import './assets/styles/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { setupPinia } from '@/configs/pinia.config.ts'
import { setupVueQuery } from '@/configs/vue-query.config.ts'

const app = createApp(App)
app.use(router)

setupPinia(app)
setupVueQuery(app)

app.mount('#app')
