/*
 * @Author: liming
 * @Date: 2021-10-04 20:15:55
 * @LastEditTime: 2021-10-04 20:49:42
 * @FilePath: \01-VueRouter\01-官方文档\01-基础\src\router\index.js
 */

// 该文件专门用于创建整个应用的路由器

import VueRouter from 'vue-router'
// VueRouter可以当成构造函数去用

//引入组件

import About from "../pages/About";
import Home from "../pages/Home";
import User from '../pages/User'

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
            name:'home',
            path: "/home",
            component: Home,
            //但是这么写会报错，因为About和Home没有定义——所以需要引入组件
        },
        {
            //动态路径参数 以冒号开头
            // 现在呢，像 /user/foo 和 /user/bar 都将映射到相同的路由。
            // path: '/user/:id',
            path: '/user/:id/post/:post_id',
            component: User
        }
    ],
});




