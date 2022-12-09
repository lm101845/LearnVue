import { createApp } from 'vue'
import App from './App.vue'
import Card from './components/Card.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export const app = createApp(App);
app.use(ElementPlus)
//可以将它注册为一个全局组件，
app.component('GlobalCard', Card)
app.mount('#app')
