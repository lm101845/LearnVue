<!--
 * @Author liming
 * @Date 2022/12/9 14:34
-->
<template>
<h2>孙子</h2>
  <div class="box"></div>
  <hr>
  <button @click="change">修改颜色</button>
</template>

<script setup lang="ts">
import {inject, Ref} from "vue";

const color = inject<Ref<string>>('color')

const change = ()=>{
  color!.value = 'yellow'
}
</script>


<style scoped>
.box{
  width: 50px;
  height:50px;
  border: 1px solid #ccc;
  background:v-bind(color)
}
</style>
