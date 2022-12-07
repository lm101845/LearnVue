import { createApp } from 'vue'
import App from './App.vue'
import Card from './components/Card.vue'
export const app = createApp(App);
//可以将它注册为一个全局组件，
app.component('GlobalCard', Card)
app.mount('#app')
