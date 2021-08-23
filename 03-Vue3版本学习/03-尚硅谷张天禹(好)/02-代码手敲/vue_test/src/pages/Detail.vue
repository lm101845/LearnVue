<!--
 * @Author: liming
 * @Date: 2021-08-23 22:55:15
 * @LastEditTime: 2021-08-23 23:28:03
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\pages\Detail.vue
-->
<template>
  <div>
    <ul>
      <li>消息编号：{{ $route.query.id }}</li>
      <li>消息标题：{{ $route.query.title }}</li>
      <!-- 如何把传递过来的路径参数【?id=666&title=你好啊"】参数放到问号里面？？ -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log(this.$route);
    console.log(this.$route.query);
  },
};
</script>

<style></style>
