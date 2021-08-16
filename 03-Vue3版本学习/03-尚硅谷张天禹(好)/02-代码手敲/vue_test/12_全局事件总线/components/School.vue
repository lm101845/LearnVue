<!--
 * @Author: liming
 * @Date: 2021-08-04 00:22:35
 * @LastEditTime: 2021-08-16 20:03:40
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\components\School.vue
-->
<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  mounted() {
    // console.log("School", window.x);
    // console.log("School", this.x);
    // console.log("School", this.$on);
    // 为什么组件实例对象就能调用到$on、$off、$emit呢？？因为它们都在Vue的原型对象上
    // this.x.$on("hello", (data) => {
    this.$bus.$on("hello", (data) => {
      // 之前说过，这里要写成箭头函数
      console.log("我是School组件，我收到了数据", data);
      //这样写没用，x虽然所有人都能看到，但是x的原型是一个Object,它的原型上没有$on,$off,$emit等

      //建议：最好在这个组件销毁之前，给这个组件的hello事件进行【解绑】
    });
  },
  beforeDestroy() {
    this.$bus.$off("hello");
  },
};
</script>

<style scoped lang="css">
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>
