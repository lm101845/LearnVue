<!--
 * @Author: liming
 * @Date: 2021-08-23 21:09:40
 * @LastEditTime: 2021-08-26 04:20:35
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\pages\News.vue
-->
<template>
  <ul>
    <li :style="{ opacity }">欢迎学习Vue</li>
    <li>news001<input type="text" /></li>
    <li>news002<input type="text" /></li>
    <li>news003<input type="text" /></li>
    <!-- 路由更改，组件销毁，input里面的东西也就消失了 -->
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      a: false,
      opacity: 1,
    };
  },
  //   mounted() {
  //     this.timer = setInterval(() => {
  //       console.log("@");
  //       this.opacity -= 0.01;
  //       if (this.opacity <= 0) this.opacity = 1;
  //     }, 16);
  //   },
  //   //   name: "Peiqi",
  //   beforeDestroy() {
  //     console.log("News组件即将被销毁了！");
  //     clearInterval(this.timer);
  //   },

  //   路由组件2个独有的生命周期钩子
  //   激活
  //   activated和deactivated对路由组件比mounted和beforeDestory更加有用
  activated() {
    //   其他组件————>News组件
    console.log("News组件被激活了");
    this.timer = setInterval(() => {
      console.log("@");
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  //   失活
  //  News组件————>其他组件
  deactivated() {
    console.log("News组件失活了");
    clearInterval(this.timer);
  },
};
</script>
