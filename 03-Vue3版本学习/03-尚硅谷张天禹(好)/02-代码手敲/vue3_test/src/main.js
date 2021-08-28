/*
 * @Author: liming
 * @Date: 2021-08-28 18:26:54
 * @LastEditTime: 2021-08-28 19:11:58
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\main.js
 */
import { createApp } from 'vue'
// import Vue from 'vue';
// 引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数——无需通过new关键字调用
import App from './App.vue'

//创建应用实例对象——app(类似于之前Vue2中的vm,但app比vm更"轻")
// app没有vm身上有着那么多的属性和方法，那么重
const app = createApp(App)
console.log('@@@@',app);
app.mount('#app')

// setTimeout(() => {
//     app.unmount('#app')
// },1000)

// createApp(App).mount('#app')
// 工厂函数可以直接调用

// console.log('@@@',Vue);  //undefined   
//之前的写法现在行不通了——不兼容以前的写法了

// const vm = new Vue({
//     render:h=>h(App)
// })

// vm.$mount('#app')

// Uncaught TypeError: vue__WEBPACK_IMPORTED_MODULE_4__.default is not a constructor
