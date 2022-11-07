
<template>
  <div>
    {{message}}
    <hr>
    {{num ? "我是小憨批" :"我是假的"}}
  </div>

</template>

<script setup lang="ts">
 const message:string = "我是真男人"
 const num:number = 0
</script>

<style scoped>

</style>
