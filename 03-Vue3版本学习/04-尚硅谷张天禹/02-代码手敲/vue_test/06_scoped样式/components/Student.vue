<!--
 * @Author: liming
 * @Date: 2021-08-04 00:22:35
 * @LastEditTime: 2021-08-04 03:15:27
 * @FilePath: \04-尚硅谷张天禹\02-代码手敲\vue_test\src\components\Student.vue
-->
<template>
  <!-- <div class="test"> -->
  <div class="demo">
    <h2 class="qwe">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
};
</script>

<style scoped lang="less">
/* 在Vue里面你不仅仅可以用css来写样式，还可以用css预处理器,比如less,sass,stylus等来写样式 */
// 但是Vue脚手架处理不了less，需要安装一个less-loader来处理
//注意：Vue脚手架是依托于webpack的，现在webpack的最高版本是5，但是vue官方依托的webpack脚手架版本是4.46【官方求稳】，就出现了兼容性问题了
// 所以你不要直接安装最新版的less-loader，要安装低版本的less-loader即可(建议安装7版本的——最新版的都是10了)
.demo {
  background-color: orange;
  .qwe {
    font-size: 40px;
  }
}
</style>
