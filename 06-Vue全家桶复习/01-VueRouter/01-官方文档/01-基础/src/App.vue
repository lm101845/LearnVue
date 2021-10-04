<!--
 * @Author: liming
 * @Date: 2021-10-04 20:15:55
 * @LastEditTime: 2021-10-04 20:43:13
 * @FilePath: \01-VueRouter\01-官方文档\01-基础\src\App.vue
-->
<template>
  <div>
    <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
    <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
    <!-- 现在呢，像 /user/foo 和 /user/bar 都将映射到相同的路由。 -->
    <!-- 注意：user和post名字不能乱写 -->
    <router-link class="list-group-item" active-class="active" to="/user/foo/post/789">User动态匹配参数之foo</router-link>
    <router-link class="list-group-item" active-class="active" to="/user/bar/post/456">User动态匹配参数之bar</router-link>
    <router-link class="list-group-item" active-class="active" to="/user/liming/post/123">User动态匹配参数之bar</router-link>
    <!-- 注意：不用的路由组件或者说当你切换切走了的路由组件，它是被【销毁】了！！！ -->
    <!-- 指定组件的呈现位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "App",
    //   注意：这里components是复数！！！少写一个s是不行的！！！！
    //   这里的Baner是一般组件，而About和Home是路由组件，它们不是一路人
  };
</script>

