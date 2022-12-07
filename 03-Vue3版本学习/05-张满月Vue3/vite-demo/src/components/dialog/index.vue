<!--
 * @Author liming
 * @Date 2022/12/7 18:38
-->
<template>
<div>
  <header class="header">
    <slot></slot>
    <slot name="header"></slot>
  </header>

  <main class="main">
<!--    <slot name="main"></slot>-->
    <div v-for="(item,index) in data">
      <slot :data="item" :index="index"></slot>
      <!--这个可以把值传到外面去-->
    </div>

  </main>

  <footer class="footer">
    <slot name="footer"></slot>
  </footer>

</div>
</template>

<script setup lang="ts">
import {reactive} from "vue";

type names = {
  name:string
  age:number
}

const data = reactive<names[]>([
  {
    name:"孙悟空",
    age:500
  },
  {
    name:"猪八戒",
    age:300
  },
  {
    name:"沙和尚",
    age:200
  },
  {
    name:"唐僧",
    age:36
  },
])
</script>

<style scoped lang="less">
  .header {
    height: 200px;
    background: red;
    color: #fff;
  }

  .main {
    height: 300px;
    background: green;
    color: #fff;
  }

  .footer {
    height: 200px;
    background: blue;
    color: #fff;
  }
</style>
