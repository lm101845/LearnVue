<!--
 * @Author: liming
 * @Date: 2021-08-28 18:26:54
 * @LastEditTime: 2021-09-07 08:45:30
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\App.vue
-->
<template>
  <div class="app">
    <h3>我是App组件</h3>
    <!-- <Child /> -->
    <Suspense>
      <template v-slot:default>
        <!-- 如果网速没问题，那么就正常显示 -->
        <Child />
      </template>

      <template v-slot:fallback>
        <!-- fallback表示退路，如果这个组件的展示出现了问题，就显示这个 -->
        <h3>稍等，加载中。。。</h3>
      </template>
    </Suspense>
    <!-- Suspense是内置组件，不需要单独引用，它本身也是由插槽实现的 -->
  </div>
</template>

<script>
// import Child from "./components/Child";
// 静态引入

import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import("./components/Child"));
// 动态引入——或者叫异步引入

export default {
  name: "App",
  components: { Child },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
