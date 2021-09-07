<!--
 * @Author: liming
 * @Date: 2021-08-28 18:26:54
 * @LastEditTime: 2021-09-07 08:45:30
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\App.vue
-->
<template>
  <div class="app">
    <h3>我是App组件(祖)</h3>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  readonly,
  isRef,
  isReactive,
  isReadonly,
  isProxy,
} from "vue";
// provide是一个函数，直接调用即可
export default {
  name: "App",
  setup() {
    let car = reactive({ name: "奔驰", price: "40W" });
    let sum = ref(0);
    let car2 = readonly(car);

    console.log(isRef(sum));
    console.log(isReactive(car));
    console.log(isReadonly(car2));
    console.log(isProxy(car));
    console.log(isProxy(car2));
    // readonly的的确确修饰的是一个响应式的数据，但它给你返回的依然是一个代理的对象(但是你改不了)，依然是响应式的类型
    console.log(isProxy(sum)); //false
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
