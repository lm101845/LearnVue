<!--
 * @Author liming
 * @Date 2022/12/9 14:34
-->
<template>
<h1>父亲</h1>
  <label for="">
    <input type="radio" v-model="colorVal" value="red" name="color">
    红色
  </label>
  <label for="">
    <input type="radio" v-model="colorVal" value="green" name="color">
    绿色
  </label> <label for="">
    <input type="radio" v-model="colorVal" value="blue" name="color">
    蓝色
  </label>
  <div class="box"></div>
  <hr>
  <Zi></Zi>
</template>

<script setup lang="ts">
import Zi from './Zi.vue'
import {provide, ref} from "vue";
const colorVal = ref<string>('red')
provide('color',colorVal)
</script>

<style scoped>
.box{
  width: 50px;
  height:50px;
  border: 1px solid #ccc;
  background:v-bind(colorVal)
}
</style>
