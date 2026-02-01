import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from '@/router/index'
import '@/assets/index.css'
import '@/assets/scss/index.scss'
import '@/assets/javascript/index.js'
import '@/assets/typescript/index.ts'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
