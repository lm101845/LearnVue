//引入Vue
import Vue from 'vue';
//引入App.vue
import App from './App'
//关闭Vue的生产提示
Vue.config.productionTip = false
//创建vm
new Vue({
    el: '#app',
    render:h=>h(App)
})