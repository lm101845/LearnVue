<!--
 * @Author: liming
 * @Date: 2021-08-23 20:00:35
 * @LastEditTime: 2021-08-23 20:55:03
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\pages\Home.vue
-->
<template>
  <h2>我是Home的内容</h2>
</template>

<script>
export default {
  name: "Home",
  beforeDestroy() {
    // 注意：不用的路由组件或者说当你切换切走了的路由组件，它是被【销毁】了！！!
    // 所有组件在即将销毁之前都会调用这个钩子
    console.log("Home组件即将被销毁了！");
  },
  mounted() {
    console.log("Home组件挂载完毕了");
    console.log("Home组件中的this", this);
    // 里面多了两个东西,$route和$router
    // $route:有很多，每个组件都有$route这个属性，并且每个组件都不一样
    // $router:只有一个，整个应用的路由器，哪怕你写了800个路由规则，最终$router只有一个，都交给一个$router路由器进行统一管理
    window.homeRoute = this.$route;
    window.homeRouter = this.$router;
  },
};
</script>
