/*
 * @Author: liming
 * @Date: 2021-09-23 15:05:01
 * @LastEditTime: 2021-10-09 13:49:21
 * @FilePath: \07-Vue小功能\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
