/*
 * @Author: liming
 * @Date: 2021-09-23 15:05:01
 * @LastEditTime: 2021-09-30 16:52:45
 * @FilePath: \Demo\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
