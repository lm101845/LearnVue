<!--
 * @Author liming
 * @Date 2022/12/19 11:22
-->
<template>
  <div>
    <h1>我是A</h1>
    <button @click="emit">emit发射</button>
  </div>
</template>

<script setup lang="ts">
import {getCurrentInstance} from "vue";

const instance = getCurrentInstance();
const emit = ()=>{
  instance?.proxy?.$Bus.emit('zidingyishijianming','传递的参数')
  instance?.proxy?.$Bus.emit('apple','mitt参数')
}
</script>

<style scoped>

</style>
