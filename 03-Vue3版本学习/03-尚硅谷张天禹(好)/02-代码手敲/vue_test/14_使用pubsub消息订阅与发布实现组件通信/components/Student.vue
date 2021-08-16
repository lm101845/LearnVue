<!--
 * @Author: liming
 * @Date: 2021-08-04 00:22:35
 * @LastEditTime: 2021-08-16 22:20:57
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\components\Student.vue
-->
<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  methods: {
    //   Student是提供消息的一方，是发布消息的
    sendStudentName() {
      //   this.$bus.$emit("hello", this.name);
      //   点击按钮后就会发布消息
      pubsub.publish("hello", 666);
      //发送消息名为hello的消息，并且携带的数据为666
    },
  },
};
</script>

<style scoped lang="less">
.student {
  background-color: orange;
  padding: 5px;
  margin-top: 30px;
}
</style>
