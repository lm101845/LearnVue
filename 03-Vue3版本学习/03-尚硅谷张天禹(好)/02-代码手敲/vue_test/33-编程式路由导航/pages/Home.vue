<!--
 * @Author: liming
 * @Date: 2021-08-23 20:00:35
 * @LastEditTime: 2021-08-26 02:56:47
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\pages\Home.vue
-->
<template>
  <!-- <h2>我是Home的内容</h2> -->
  <h2>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- <a class="list-group-item active" href="./home-news.html">News</a> -->
          <!-- 把a标签全部变成router-link,把href全部变成to-->
          <!-- 注意： to="/news"不对！！！to="/home/news"这样写才对！！！-->
          <!-- 总结：你的路由是二级路由或者子级路由，你就必须得带着它父亲的路径！！！ -->
          <!-- 注意 to="home/news"不对！！！to="/home/news"对！！！不要忘了前面也要加斜杠！！！-->
          <router-link class="list-group-item" active-class="active" to="/home/news"
            >News</router-link
          >
        </li>

        <li>
          <!-- <a class="list-group-item" href="./home-message.html">Message</a> -->
          <router-link class="list-group-item" active-class="active" to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <!-- ？？？？？？？ -->
      <!-- 等着你去点 -->
      <router-view></router-view>
    </div>
  </h2>
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
