<!--
 * @Author: liming
 * @Date: 2021-08-23 20:00:24
 * @LastEditTime: 2021-09-21 11:42:55
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\pages\About.vue
-->
<template>
    <div>
        <h2>测试：{{title}}</h2>
    </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
        title: "初始数据",
    }
  },
  methods: {
      async test1(){
        //this.title = "修改后的数据"
        await this.test2()
      },
      test2() {
          return new Promise((resolve, reject) =>{
              resolve();
              this.title = "修改后的数据"
            }
          )
      }
  },
  async created() {
      await this.test1();
  },
};
</script>
