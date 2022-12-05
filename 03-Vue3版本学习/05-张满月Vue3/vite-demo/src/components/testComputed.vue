<!--
 * @Author liming
 * @Date 2022/12/5 7:21
-->
<template>
  姓：<input type="text" v-model="firstName">
  名：<input type="text" v-model="lastName">
  <hr>
  {{firstName}}--{{lastName}}
  <hr>
  {{fullName2}}
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
let firstName = ref("")
let lastName = ref("")
//计算属性写法1：
const fullName = computed(()=>{
  return firstName.value + '--' + lastName.value
})

//计算属性写法2：
const fullName2 = computed({
  get() {
    return firstName.value + '++' + lastName.value
  },
  set(){
    firstName.value + '**'+ lastName.value
  }
})
</script>

<style scoped>

</style>
