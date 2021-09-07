<!--
 * @Author: liming
 * @Date: 2021-09-07 08:50:25
 * @LastEditTime: 2021-09-07 08:50:25
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\components\Son.vue
-->
<template>
  <div class="son">
    <h3>我是App组件(孙),{{ car.name }}--{{ car.price }}</h3>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "Son",
  setup() {
    let car = inject("car");
    // 【上面】提供的是car，你这边呼唤到的就是car
    console.log(car);
    // 这里的car还是那种响应式的car
    return { car };
  },
};
</script>

<style>
.son {
  background-color: orange;
  padding: 10px;
}
</style>
