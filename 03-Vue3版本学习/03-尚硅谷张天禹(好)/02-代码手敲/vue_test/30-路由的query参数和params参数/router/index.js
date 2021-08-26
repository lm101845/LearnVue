/*
 * @Author: liming
 * @Date: 2021-08-23 20:08:35
 * @LastEditTime: 2021-08-26 01:06:25
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

// 子路由
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

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
      name: "guanyu",
      // 给路由起名字
      path: "/about",
      component: About,
      // 如果你的路径是/about,我就给你看About这个组件
    },
    {
      path: "/home",
      //但是这么写会报错，因为About和Home没有定义——所以需要引入组件
      component: Home,
      //   子路由——写成数组形式
      children: [
        {
          //   path: "/news",
          path: "news",
          // 注意：一级路由前面加斜杠/，而子路由就不要加斜杠了——底层遍历规则的时候已经给你加了斜杠了
          component: News,
        },
        {
          path: "message",
          // 注意：一级路由前面加斜杠/，而子路由就不要加斜杠了——底层遍历规则的时候已经给你加了斜杠了
          component: Message,
          children: [
            {
              name: "xiangqing",
              // path: 'detail',
              path: "detail/:id/:title",
              // 告诉路由写的params是哪个,我们管/:id叫占位符
              component: Detail,
            },
          ],
        },
      ],
    },
  ],
});

// export default router


