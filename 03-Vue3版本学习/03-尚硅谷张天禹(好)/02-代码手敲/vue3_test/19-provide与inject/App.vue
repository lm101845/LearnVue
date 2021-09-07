<!--
 * @Author: liming
 * @Date: 2021-08-28 18:26:54
 * @LastEditTime: 2021-09-07 08:45:30
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\App.vue
-->
<template>
  <div class="app">
    <h3>我是App组件(祖),{{ name }}--{{ price }}</h3>
    <Child />
  </div>
</template>

<script>
import { reactive, toRefs, provide } from "vue";
// provide是一个函数，直接调用即可
import Child from "./components/Child";
export default {
  name: "App",
  components: { Child },
  setup() {
    let car = reactive({ name: "奔驰", price: "40W" });
    provide("car", car); //给自己的【后代】组件(儿子，孙子都行)传递数据
    // return { car };
    return { ...toRefs(car) };
    // 我想把汽车里面的属性全都拆分后一个一个传，使用toRefs
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
