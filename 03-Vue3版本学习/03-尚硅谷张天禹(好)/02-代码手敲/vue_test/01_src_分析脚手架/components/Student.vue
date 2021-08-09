<template>
  <!-- template这个标签最终是不参与编译的 -->
  <div>
    <!-- 组件的理解: 用来实现局部(特定)功能效果的代码集合(html/css/js/image…..) -->
    <!-- 组件的解构 -->
    <h2>学生姓名{{ name }}</h2>
    <h2>学生年龄{{ age }}</h2>
  </div>
</template>

<script>
// 组件交互相关的代码
// const school = Vue.extend({
// export default Vue.extend({
// Vue.extend可以省略
export default {
  //模块化里面要暴露：一共有3种暴露方式
  name: "School",
  //name最好跟外面的组件名保持一致
  //name用于开发者工具上的组件名的呈现
  //如果你不写name的话，可能别人注册你这个组件的时候就随便给你这个组件起名字了
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
};

// export default school;
// 一般我们习惯用默认暴露
</script>

<style>
/* 组件的样式 */
</style>
