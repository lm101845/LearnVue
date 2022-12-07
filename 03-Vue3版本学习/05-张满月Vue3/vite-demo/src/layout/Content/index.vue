<!--
 * @Author liming
 * @Date 2022/12/5 20:54
-->
<template>
  <div class="content">
    <Dialog>
<!--      <template v-slot>-->
<!--        <div>我是默认插槽，很灵活的插槽</div>-->
<!--      </template>-->

<!--      <template v-slot:header>-->
      <!--v-slot:可以简写为#-->
      <template #header>
        <div>我是头部的具名插槽，我有名字</div>
      </template>

<!--      <template v-slot:main>-->
<!--        <div>我是中间的具名插槽，我有名字</div>-->
<!--      </template>-->

      <!--这是作用域插槽,父组件里面可以拿到子组件的值-->
      <template v-slot="{data,index}">
<!--        <div>{{data.name}}&#45;&#45;{{data.age}}&#45;&#45;{{index}}</div>-->
        <div>{{data}}--{{index}}</div>
      </template>


      <template v-slot:footer>
        <div>我是底部的具名插槽，我有名字</div>
      </template>


    </Dialog>
  </div>
</template>

<script setup lang="ts">
import Dialog from '../../components/dialog/index.vue'
</script>

<style scoped>

</style>
