<!--
 * @Author: liming
 * @Date: 2021-08-23 20:33:46
 * @LastEditTime: 2021-08-26 03:06:20
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\components\Banner.vue
-->
<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <!-- 编程式路由导航，不借助router-link实现路由跳转，让路由跳转更加灵活 -->
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="testgo">测试go</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back() {
      console.log(this.$router);
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
    testgo() {
      this.$router.go(-2);
      //   go函数里面传数字，正数N表示前进N步，负数N表示后退N步。
    },
  },
};
</script>
