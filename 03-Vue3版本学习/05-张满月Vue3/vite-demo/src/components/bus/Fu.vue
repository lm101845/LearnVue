<!--
 * @Author liming
 * @Date 2022/12/13 8:12
-->
<template>
  <div>
<!--    <Zi @on-click="getFlag"></Zi>-->
<!--    <Zi2 :flag="Flag"></Zi2>    -->

    <Zi></Zi>
    <Zi2></Zi2>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import Zi from './Zi.vue'
import Zi2 from './Zi2.vue'
// let Flag = ref(false)
// const getFlag = (params:boolean)=>{
//   Flag.value = params;
// }
</script>

<style scoped>

</style>
