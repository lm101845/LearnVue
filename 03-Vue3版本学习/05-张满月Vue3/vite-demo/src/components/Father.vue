<!--
 * @Author liming
 * @Date 2022/12/5 23:01
-->
<template>
  <WaterFall :list="list"></WaterFall>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import WaterFall from './WaterFall.vue';
const list = [
  {
    height: 300,
    background: 'red'
  },
  {
    height: 400,
    background: 'pink'
  },
  {
    height: 500,
    background: 'blue'
  },
  {
    height: 200,
    background: 'green'
  },
  {
    height: 300,
    background: 'gray'
  },
  {
    height: 400,
    background: '#CC00FF'
  },
  {
    height: 200,
    background: 'black'
  },
  {
    height: 100,
    background: '#996666'
  },
  {
    height: 500,
    background: 'skyblue'
  },
  {
    height: 300,
    background: '#993366'
  },
  {
    height: 100,
    background: '#33FF33'
  },
  {
    height: 400,
    background: 'skyblue'
  },
  {
    height: 200,
    background: '#6633CC'
  },
  {
    height: 300,
    background: '#666699'
  },
  {
    height: 300,
    background: '#66CCFF'
  },
  {
    height: 300,
    background: 'skyblue'
  },
  {
    height: 200,
    background: '#CC3366'
  },
  {
    height: 200,
    background: '#CC9966'
  },
  {
    height: 200,
    background: '#FF00FF'
  },
  {
    height: 500,
    background: '#990000'
  },
  {
    height: 400,
    background: 'red'
  },
  {
    height: 100,
    background: '#999966'
  },
  {
    height: 200,
    background: '#CCCC66'
  },
  {
    height: 300,
    background: '#FF33FF'
  },
  {
    height: 400,
    background: '#FFFF66'
  },
  {
    height: 200,
    background: 'red'
  },
  {
    height: 100,
    background: 'skyblue'
  },
  {
    height: 200,
    background: '#33CC00'
  },
  {
    height: 300,
    background: '#330033'
  },
  {
    height: 100,
    background: '#0066CC'
  },
  {
    height: 200,
    background: 'skyblue'
  },
  {
    height: 100,
    background: '#006666'
  },
  {
    height: 200,
    background: 'yellow'
  },
  {
    height: 300,
    background: 'yellow'
  },
  {
    height: 100,
    background: '#33CCFF'
  },
  {
    height: 400,
    background: 'yellow'
  },
  {
    height: 400,
    background: 'yellow'
  },
  {
    height: 200,
    background: '#33FF00'
  },
  {
    height: 300,
    background: 'yellow'
  },
  {
    height: 100,
    background: 'green'
  }

]
</script>

<style  lang='less'>
#app,
html,
body {
  height: 100%;
}

* {
  padding: 0;
  margin: 0;
}
</style>
