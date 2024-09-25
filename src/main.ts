import 'bootstrap/dist/css/bootstrap.css'
import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faSquareGithub)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
