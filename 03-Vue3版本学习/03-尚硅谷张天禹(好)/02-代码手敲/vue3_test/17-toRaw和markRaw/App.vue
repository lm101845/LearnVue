<!--
 * @Author: liming
 * @Date: 2021-08-28 18:26:54
 * @LastEditTime: 2021-08-30 10:17:35
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\App.vue
-->
<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <Demo v-if="isShowDemo" />
  <!-- 这里很有意思，我是给的组件加的v-if,也就意味着，v-if所对应的表达式为假，那么这个组件直接卸载了-->
  <!-- 我每一次点击按钮都伴随着Demo组件的挂载和卸载 -->
</template>

<script>
import { ref } from "vue";
import Demo from "./components/Demo";

export default {
  name: "App",
  components: { Demo },
  setup() {
    let isShowDemo = ref(true);
    return {
      isShowDemo,
    };
  },
};
</script>

<style></style>
