<!--
 * @Author: liming
 * @Date: 2021-05-25 18:19:59
 * @LastEditTime: 2021-05-27 12:54:51
 * @FilePath: \LearnVue\01-Vue3.x\02-李南江Vue3.x\02-代码手敲\vue3demo\src\App.vue
-->
<template>
  <div>
    <p>{{name}}</p>
    <button @click="myFn1">按钮 </button>

    <p>{{age}}</p>
    <button @click="myFn2">按钮 </button>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    name: 'App',
    data() {
      return {
        name: 'haha'
      }
    },
    methods: {
      myFn1() {
        alert('abc')
      }
    },
    setup() {
      let age = ref(18);
      function myFn2() {
        alert('vue3')
      }
      return { age, myFn2 }
    }
  }
</script>
