<!--
 * @Author liming
 * @Date 2022/12/9 14:34
-->
<template>
<h2>儿子</h2>
  <div class="box"></div>
  <hr>
  <Sun></Sun>
</template>

<script setup lang="ts">
import Sun from './Sun.vue'
import {inject, Ref} from "vue";
const color = inject<Ref<string>>('color')
</script>


<style scoped>
.box{
  width: 50px;
  height:50px;
  border: 1px solid #ccc;
  background:v-bind(color)
}
</style>
