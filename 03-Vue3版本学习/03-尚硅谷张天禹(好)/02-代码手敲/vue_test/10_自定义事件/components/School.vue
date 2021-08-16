<!--
 * @Author: liming
 * @Date: 2021-08-04 00:22:35
 * @LastEditTime: 2021-08-16 13:42:06
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\components\School.vue
-->
<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>
export default {
  name: "School",
  //   使用props来声明接收这个函数
  props: ["chuangetSchoolName"],
  //第二步：确认转账，已阅读转账消息(要和第一步里面的转账消息要一致)
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  methods: {
    sendSchoolName() {
      this.chuangetSchoolName(this.name);
      //【转账消息】作为一个媒介，所以这里的函数名是转账消息名
    },
  },
};
</script>

<style scoped lang="css">
/* 你在这些组件里写的样式，最终都是汇总到一起的 */
/* 既然它们汇总到一起，就会出现一个问题：【类名冲突 】 */
/* 但是写了scoped样式就有了作用域了，就解决这个问题了 */
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>
