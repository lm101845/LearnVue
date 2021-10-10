/*
 * @Author: liming
 * @Date: 2021-08-03 09:55:48
 * @LastEditTime: 2021-10-10 15:09:01
 * @FilePath: \01-基础\src\main.js
 */

// 引入Vue
import Vue from 'vue'
// 引入App.vue
import App from './App'

// 引入VueRouter——它是一个插件库，需要use一下
import VueRouter from 'vue-router'

// 引入路由器(一个应用有一个路由器就够了)
// 因为是index.js,所以后面的可以不写
import router from './router'
// 应用插件
Vue.use(VueRouter)

// 关闭Vue的生产提示
Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  render: (h) => h(App),
  // router: "hello",
  // 你引用了vue-router之后，它就有一个全新的配置项了
  // 但是这里不能随便写：Error in beforeCreate hook: "TypeError: this._router.init is not a function"
  router
})
