import './assets/styles/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { setupPinia } from '@/configs/pinia.config.ts'

const app = createApp(App)
app.use(router)

setupPinia(app)

app.mount('#app')
