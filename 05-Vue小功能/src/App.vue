<!--
 * @Author: liming
 * @Date: 2021-10-08 09:29:57
 * @LastEditTime: 2021-10-09 13:50:10
 * @FilePath: \07-Vue小功能\src\App.vue
-->
<template>
  <div id="app">
    <div class="over-ellipsis">
      <span ref="overEllipsis">{{ text }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'App',
    data() {
      return {
        text: 'xxxxx'
      }
    },
    mounted() {
      console.log('overEllipsis', this.$refs.overEllipsis.getClientRects())
    }
  }
</script>

<style>
</style>
