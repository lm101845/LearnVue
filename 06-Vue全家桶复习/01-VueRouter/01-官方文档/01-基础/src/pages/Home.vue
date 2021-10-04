<!--
 * @Author: liming
 * @Date: 2021-10-04 20:15:55
 * @LastEditTime: 2021-10-04 20:21:57
 * @FilePath: \01-VueRouter\01-官方文档\01-基础\src\pages\Home.vue
-->
<template>
  <h2>我是Home组件</h2>
</template>

<script>
export default {
    name:'Home',
    computed:{
        username(){
            // 我们很快就会看到 `params` 是什么
            return this.$route.params.username
        }
    },
    methods:{
        goBack(){
            window.history.length > 1?this.$router.go(-1):this.$router.push('/')
        }
    }
}
</script>

<style>

</style>