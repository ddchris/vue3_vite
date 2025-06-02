import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

import VueVirtualScroller from 'vue3-virtual-scroller'

app.use(VueVirtualScroller)
app.mount('#app')
