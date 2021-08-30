<!--
 * @Author: liming
 * @Date: 2021-08-28 18:26:54
 * @LastEditTime: 2021-08-30 09:07:33
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\App.vue
-->
<template>
  <h1>一个人的信息——Vue3写法</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>工作种类：{{ job.type }}</h3>
  <h3>工作薪水：{{ job.salary }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    let name = ref("张三");
    let age = ref(18);
    let job = ref({
      // name,age,job都属于【引用对象】，我们以后简称为ref对象
      //   js中操作数据需要【value】
      // 而模版中读取数据则不需要【.value】，它帮我们做好了
      type: "前端工程师",
      salary: "30k",
      //   对象类型的数据：内部"求助"了Vue3中的一个新函数——reactive函数(Proxy)
      //   reactive函数里面已经写了Proxy函数了，所以内部求助一下就行了
    });
    function changeInfo() {
      name.value = "李四";
      age.value = 27;
      //   想得到谁，就要【.value】
      //   job.value.type.value = "UI设计师";
      //   最后的value写多了，只要写一个value就可以了——只是拿到第一层的时候【.value】就行了
      //   对象类型，底层用的是【Proxy】来进行响应式
      //   【Proxy】是window里面自带的，是ES6里面新的东西
      //   defineProperty：数据劫持才是响应式的根基
      console.log(job.value);
      job.value.type = "UI设计师";
      job.value.salary = "60K";
      //我不管你里面的数据藏的有多深，里面嵌套多少层，我都能保证你里面是响应式的
    }
    return {
      name,
      age,
      changeInfo,
      job,
    };
  },
};
</script>

<style></style>
