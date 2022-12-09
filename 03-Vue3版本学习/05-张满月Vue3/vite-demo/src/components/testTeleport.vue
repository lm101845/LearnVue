<!--
 * @Author liming
 * @Date 2022/12/9 9:19
-->
<template>
<div class="parent">
  <h1>嗨嗨我是父级</h1>
  <Teleport to="body">
    <A></A>
  </Teleport>
</div>
</template>

<script setup lang="ts">
import A from './A.vue'
</script>
white-space: normal;word-wrap: break-word;
<style scoped>
*{
  margin: 0;
  padding: 0;
}

.parent{
  background-color: yellow;
  height: 50vh;
  position: relative;
}
</style>
