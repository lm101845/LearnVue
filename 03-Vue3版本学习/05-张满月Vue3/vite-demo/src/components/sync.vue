<!--
 * @Author liming
 * @Date 2022/12/7 20:51
-->
<template>
  <div class="sync">
    <div class="sync-content">
      <div><img :src="data.url" alt=""></div>
      <div class="sync-pop">
        <div>{{data.name}}</div>
        <div>&nbsp;{{data.age}}</div>
      </div>
    </div>
    <hr>
    <div>{{data.desc}}</div>
  </div>
</template>

<script setup lang="ts">
interface Data{
  data:{
    name: string
    age: number
    url: string
    desc:string
  }
}

import {axios} from '../server/axios'
const {data} = await axios.get<Data>('./data.json')
//ES7之后，await可以单独用了
</script>

<style scoped>

</style>
