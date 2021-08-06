//引入Vue
import Vue from 'vue';
//引入App.vue
import App from './App'

//全局引入混合
// 此时所有的组件都用到了混合
import { hunhe, hunhe2 } from './mixin'
Vue.mixin(hunhe)
Vue.mixin(hunhe2)
//关闭Vue的生产提示
Vue.config.productionTip = false
//创建vm
new Vue({
    el: '#app',
    render:h=>h(App)
})