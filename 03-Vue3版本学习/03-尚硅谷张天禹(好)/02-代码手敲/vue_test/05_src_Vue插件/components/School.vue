<!--
 * @Author: liming
 * @Date: 2021-08-04 00:22:35
 * @LastEditTime: 2021-08-04 03:18:28
 * @FilePath: \04-尚硅谷张天禹\02-代码手敲\vue_test\src\components\School.vue
-->
<template>
  <div>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校名称：{{ name | mySlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="test">点我测试一下hello方法</button>
  </div>
</template>

<script>
//引入一个hunhe
//这里是局部混合，还可以全局混合(在main.js里面引入)
// import { hunhe, hunhe2 } from "../mixin";
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷学校水电费",
      address: "北京",
    };
  },
  methods: {
    test() {
      this.hello();
    },
  },
};
</script>

<style></style>
