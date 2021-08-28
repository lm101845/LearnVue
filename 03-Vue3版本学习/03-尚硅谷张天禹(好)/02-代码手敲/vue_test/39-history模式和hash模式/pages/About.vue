<!--
 * @Author: liming
 * @Date: 2021-08-23 20:00:24
 * @LastEditTime: 2021-08-27 16:50:13
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
    // console.log("About组件即将被销毁了！");
  },
  mounted() {
    // console.log("About组件挂载完毕了");
    // window.aboutRoute = this.$route;
    // window.aboutRouter = this.$router;
    // aboutRoute === homeRoute     false
    // aboutRouter === homeRouter     true
    // console.log("About", this.$route);
  },
  //   通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("About-----beforeRouteEnter");
    // 如果不调用next(),没有放行，那么就没法执行下一步了
    if (to.meta.isAuth) {
      //判断是否需要鉴权——更好的写法
      // 你先符合前面的额条件我才判断
      //   if (localStorage.getItem("school") === "atguigu2") {
      if (localStorage.getItem("school") === "atguigu") {
        // 如果进来了，并且学校名对了，那么也放行
        // document.title = to.meta.title || "硅谷系统";

        next();
      } else {
        alert("学校名不对，无无权限查看！");
      }
    } else {
      //如果第一个if判断没有进来，则放行
      // document.title = to.meta.title || "硅谷系统";
      next();
    }
  },
  //   通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log("About--------beforeRouteLeave", to, from);
    // document.title = to.meta.title || "硅谷系统";
    next();
  },
};
</script>
