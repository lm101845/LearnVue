/*
 * @Author: liming
 * @Date: 2021-08-03 09:55:48
 * @LastEditTime: 2021-08-18 22:07:51
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\main.js
 */
//引入Vue
import Vue from 'vue';
//引入App.vue
import App from './App'

import vueResource from 'vue-resource'
// 引入vue-resource【插件】——第一步

//关闭Vue的生产提示
Vue.config.productionTip = false

Vue.use(vueResource)
// 使用插件——第二步
// 此时你整个Vue实例(包括vm,vc身上都多了一个东西)

//创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    }
})


 