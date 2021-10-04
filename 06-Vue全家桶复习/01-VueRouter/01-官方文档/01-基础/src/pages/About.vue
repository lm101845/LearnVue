<!--
 * @Author: liming
 * @Date: 2021-08-23 20:00:24
 * @LastEditTime: 2021-10-04 20:48:30
 * @FilePath: \01-VueRouter\01-官方文档\01-基础\src\pages\About.vue
-->
<template>
  <div>
    <h2>我是About的内容</h2>
    <button @click='go'>路由跳转</button>
  </div>
</template>

  <script>
  export default {
    name: "About",
    methods: {
      go() {
        console.log(this.$router)
        this.$router.push({
          name:'home',
          params: {
            name: 'word',
            age: 11
          }
        })
        console.log(this.$route.params.name);
        console.log(this.$route.params.age);
      }
    }
  }
  </script>

