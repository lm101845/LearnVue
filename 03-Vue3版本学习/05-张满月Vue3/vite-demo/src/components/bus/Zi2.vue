<!--
 * @Author liming
 * @Date 2022/12/13 8:17
-->
<template>
<div class="zi2">
  <h1>zi2组件</h1>
  {{Flag}}
</div>
</template>

<script setup lang="ts">
import Bus from '../../bus'
import {ref} from "vue";
let Flag = ref(false);
Bus.on('on-click',(flag:boolean)=>{
  Flag.value = flag;
})
// type Props = {
//   flag:boolean
// }
// defineProps<Props>()

</script>

<style scoped lang="less">
.zi2{
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>
