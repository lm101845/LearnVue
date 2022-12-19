<!--
 * @Author liming
 * @Date 2022/12/13 8:12
-->
<template>
  <div class="zi">
    <button @click="emitFu">派发一个事件</button>
  </div>
</template>

<script setup lang="ts">
import Bus from '../../bus'
// const emit = defineEmits(['on-click'])
let flag = false;
const emitFu = ()=>{
  flag = !flag;
  // emit('on-click',flag)
  Bus.emit('on-click',flag)
}
</script>

<style scoped>
.zi{
  width: 200px;
  height: 200px;
  background-color: blue;
}
</style>
