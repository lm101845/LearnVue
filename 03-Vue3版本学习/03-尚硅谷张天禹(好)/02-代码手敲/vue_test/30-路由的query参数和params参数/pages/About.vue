<!--
 * @Author: liming
 * @Date: 2021-08-23 20:00:24
 * @LastEditTime: 2021-08-23 20:56:34
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\pages\About.vue
-->
<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  beforeDestroy() {
    // 注意：不用的路由组件或者说当你切换切走了的路由组件，它是被【销毁】了！！!
    // 所有组件在即将销毁之前都会调用这个钩子
    console.log("About组件即将被销毁了！");
  },
  mounted() {
    console.log("About组件挂载完毕了");
    window.aboutRoute = this.$route;
    window.aboutRouter = this.$router;

    // aboutRoute === homeRoute     false
    // aboutRouter === homeRouter     true
  },
};
</script>
