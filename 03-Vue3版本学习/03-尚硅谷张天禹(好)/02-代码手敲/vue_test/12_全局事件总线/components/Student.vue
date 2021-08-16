<!--
 * @Author: liming
 * @Date: 2021-08-04 00:22:35
 * @LastEditTime: 2021-08-16 19:53:09
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
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  methods: {
    sendStudentName() {
      // 在School组件里面，你找了一个傀儡x，给它绑定了一个hello事件
      //   x就是要给老好人
      //   this.x.$emit("hello", 666);
      //   在老好人x身上通过$emit来提交hello这个事件
      this.$bus.$emit("hello", this.name);
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
