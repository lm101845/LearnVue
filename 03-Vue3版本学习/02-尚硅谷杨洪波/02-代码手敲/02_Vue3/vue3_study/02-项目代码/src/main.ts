/*
 * @Author: liming
 * @Date: 2021-08-02 16:04:30
 * @LastEditTime: 2021-08-02 16:11:55
 * @FilePath: \02_Vue3\vue3_study\src\main.ts
 */
//程序的主入口文件，ts文件，是main.ts
//引入createApp函数，创建对应的应用，产生应用的实例对象
import { createApp } from 'vue'
//引入App组件(所有组件的父级组件)
import App from './App.vue'
//创建App应用返回对应的实例对象，调用mount方法进行挂载
createApp(App).mount('#app')
