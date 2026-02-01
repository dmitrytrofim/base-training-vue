import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/index.css'
import '@/assets/scss/index.scss'
import '@/assets/javascript/index.js'
import '@/assets/typescript/index.ts'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
