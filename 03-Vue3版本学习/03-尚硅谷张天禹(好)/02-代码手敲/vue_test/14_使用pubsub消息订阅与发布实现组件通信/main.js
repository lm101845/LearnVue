/*
 * @Author: liming
 * @Date: 2021-08-03 09:55:48
 * @LastEditTime: 2021-08-16 22:12:51
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\main.js
 */
//引入Vue
import Vue from 'vue';
//引入App.vue
import App from './App'



//关闭Vue的生产提示
Vue.config.productionTip = false

// console.log(Vue.prototype);

//创建vm
new Vue({
    el: '#app',
    render: h => h(App),
})

