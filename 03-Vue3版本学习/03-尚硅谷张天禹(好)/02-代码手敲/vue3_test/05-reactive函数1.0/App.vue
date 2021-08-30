<!--
 * @Author: liming
 * @Date: 2021-08-28 18:26:54
 * @LastEditTime: 2021-08-30 09:59:52
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\App.vue
-->
<template>
  <h1>一个人的信息——Vue3写法</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>工作种类：{{ job.type }}</h3>
  <h3>工作薪水：{{ job.salary }}</h3>
  <button @click="changeInfo">修改人的信息——使用ref</button>
  <br /><br />
  <!-- <h2>不要给reactive传入基本类型的数据：{{ number }}</h2> -->
  <!-- 虽然可以在页面上显示，但是有警告：value cannot be made reactive: 666 -->
  <h2>{{ job2 }}</h2>
  <h2>{{ job2.type }}</h2>
  <h2>{{ job2.salary }}</h2>
  <button @click="changeInfo2">修改人的信息——使用reactive</button>
  <h3>测试的数据c:{{ job2.a.b.c }}</h3>
  <h3>爱好:{{ hobbies }}</h3>
</template>

<script>
import { ref, reactive } from "vue";
// vue3的特点是用点啥你都要去引入一下
export default {
  name: "App",
  setup() {
    let name = ref("张三");
    let age = ref(18);
    let job = ref({
      type: "前端工程师",
      salary: "30k",
    });
    // let number = reactive(666);
    // 强烈建议不要用reactive处理基本类型的数据！！！
    let job2 = reactive({
      type: "后端工程师",
      salary: "40k",
      a: {
        b: {
          c: 1080,
          //reactive处理对象类型的响应式的时候，是一个深层次的
        },
      },
    });
    // ref函数是个海王，基本类型和引用类型都可以处理
    // ref之所以能处理对象类型的响应式数据，是因为它也偷偷的求助了reactive函数
    // reactive函数比较专一，只能处理引用类型(如对象)的数据

    //reactive不仅可以处理对象形式的数据，还可以处理数组类型的数据
    // let hobbies = ["吃饭", "睡觉", "打豆豆"];
    // 我试了一下，直接写数组也是可以做到响应式的
    let hobbies = reactive(["吃饭", "睡觉", "打豆豆"]);
    function changeInfo() {
      name.value = "李四";
      age.value = 27;
      console.log(job.value);
      job.value.type = "UI设计师";
      job.value.salary = "60K";
    }

    function changeInfo2() {
      //换成reactive后，一切都变得简单多了
      console.log(job2);
      job2.type = "召唤师";
      job2.salary = "100K";
      job2.a.b.c = "999";
      hobbies[0] = "喝水";
      //   在Vue2里面直接通过索引是改不了的！！
      //   但是因为在Vue3里面使用了比较高大上的Proxy，所以这里是可以直接改的
    }
    return {
      name,
      age,
      changeInfo,
      job,
      //   number,
      job2,
      changeInfo2,
      hobbies,
    };
  },
};
</script>

<style></style>
