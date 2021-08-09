<!--
 * @Author: liming
 * @Date: 2021-08-04 00:22:35
 * @LastEditTime: 2021-08-04 03:15:27
 * @FilePath: \04-尚硅谷张天禹\02-代码手敲\vue_test\src\components\Student.vue
-->
<template>
  <div>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
//这里是局部混合，还可以全局混合(在main.js里面引入)
// import { hunhe, hunhe2 } from "../mixin";
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  //   mixins: [hunhe, hunhe2],
};
</script>

<style></style>
