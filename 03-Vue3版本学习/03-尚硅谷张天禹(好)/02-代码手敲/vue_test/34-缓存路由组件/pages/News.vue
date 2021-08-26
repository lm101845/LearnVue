<!--
 * @Author: liming
 * @Date: 2021-08-23 21:09:40
 * @LastEditTime: 2021-08-26 04:05:57
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\pages\News.vue
-->
<template>
  <ul>
    <li>news001<input type="text" /></li>
    <li>news002<input type="text" /></li>
    <li>news003<input type="text" /></li>
    <!-- 路由更改，组件销毁，input里面的东西也就消失了 -->
  </ul>
</template>

<script>
export default {
  name: "News",
  //   name: "Peiqi",
  beforeDestroy() {
    console.log("News组件即将被销毁了！");
  },
};
</script>
