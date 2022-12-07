<!--
 * @Author liming
 * @Date 2022/12/7 16:17
-->
<template>
  <div class="tree" v-for="item in data" @click.stop="clickTap(item,$event)">
    <input v-model="item.checked" type="checkbox">
    <span>{{item.name}}</span>
    <Tree v-if="item?.children?.length" :data="item?.children"/>
    <!--直接拿这个组件名，做递归-->
  </div>
</template>

<script setup lang="ts">
interface Tree {
  name: string
  checked: boolean
  children?: Tree[]
}
defineProps<{
  data?:Tree[]
}>()

const clickTap = (item:Tree,e:any)=>{
  console.log(item,e.target)
}
</script>



<style scoped lang="less">
.tree{
  margin-left: 10px;
}
</style>
