<!--
 * @Author: liming
 * @Date: 2021-10-04 20:23:32
 * @LastEditTime: 2021-10-04 20:40:26
 * @FilePath: \01-VueRouter\01-官方文档\01-基础\src\pages\User.vue
-->
<template>
  <div>
    <h2>我是User的内容</h2>
    <!-- 一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。
    于是，我们可以更新 User 的模板，输出当前用户的 ID： -->
    <div>动态路由匹配拿到params：{{$route.params}}</div>
    <div>动态路由匹配拿到具体的id属性：{{$route.params.id}}</div>
  </div>
</template>

  <script>
  export default {
    name: "User",
  }
  </script>