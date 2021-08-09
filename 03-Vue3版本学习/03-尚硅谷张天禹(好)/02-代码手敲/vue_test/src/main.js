/*
 * @Author: liming
 * @Date: 2021-08-03 09:55:48
 * @LastEditTime: 2021-08-04 17:46:55
 * @FilePath: \04-尚硅谷张天禹\02-代码手敲\vue_test\src\main.js
 */
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