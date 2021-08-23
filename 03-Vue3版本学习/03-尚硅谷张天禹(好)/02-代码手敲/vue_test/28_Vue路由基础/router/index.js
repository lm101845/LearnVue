/*
 * @Author: liming
 * @Date: 2021-08-23 20:08:35
 * @LastEditTime: 2021-08-23 20:42:55
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\router\index.js
 */

// 该文件专门用于创建整个应用的路由器

import VueRouter from 'vue-router'
// VueRouter可以当成构造函数去用

//引入组件
// import About from '../components/About'
// import Home from '../components/Home'

import About from "../pages/About";
import Home from "../pages/Home";

// const router = new VueRouter({
export default new VueRouter({
    // 创建并暴露一个路由器
  // router:路由器
  // route:路由
  // routes:一堆路由
  // 路由就是一组key-value的对应关系
  routes: [
    // 在一堆路由里面就可以写一组一组{key-value}的路由了，每组路由就是一个一个的配置对象
    {
      path: "/about",
      component: About,
      // 如果你的路径是/about,我就给你看About这个组件
    },
    {
      path: "/home",
      component: Home,
    //但是这么写会报错，因为About和Home没有定义——所以需要引入组件
    },
  ],
});

// export default router


