import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/index.scss'
import 'tailwindcss/tailwind.css'

const app = createApp(App)
app.use(store)
  .use(router)
  .use(Antd)
  .mount('#app')
