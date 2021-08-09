<!--
 * @Author: liming
 * @Date: 2021-08-04 00:22:35
 * @LastEditTime: 2021-08-04 03:18:28
 * @FilePath: \04-尚硅谷张天禹\02-代码手敲\vue_test\src\components\School.vue
-->
<template>
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
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
      name: "尚硅谷",
      address: "北京",
      x: 666,
      //混合和这里打架了，还是以我这里的为主
    };
  },
  //   mixins: [hunhe, hunhe2],
  //   mounted() {
  //     console.log("你好啊！！！！！！！！！！！生命周期钩子函数不以任何人为主，都体现");
  //     // 生命周期钩子函数不以任何人为主，都体现
  //   },
  //   就算只有一个混合也必须要写在一个数组里面
};
</script>

<style></style>
