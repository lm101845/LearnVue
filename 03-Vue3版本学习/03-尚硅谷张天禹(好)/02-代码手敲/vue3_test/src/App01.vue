<!--
 * @Author: liming
 * @Date: 2021-08-28 18:26:54
 * @LastEditTime: 2021-08-30 10:17:35
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\App.vue
-->
<template>
  <h1>一个人的信息——Vue3写法</h1>
  <h2 v-show="person.name">姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2 v-show="person.sex">性别：{{ person.sex }}</h2>
  <h3>工作种类：{{ person.job.type }}</h3>
  <h3>工作薪水：{{ person.job.salary }}</h3>
  <button @click="changeInfo">修改人的信息——使用ref</button>
  <br /><br />
  <hr />
  <h2>{{ person.job2 }}</h2>
  <h2>{{ person.job2.type }}</h2>
  <h2>{{ person.job2.salary }}</h2>
  <button @click="changeInfo2">修改人的信息——使用reactive</button>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteInfo">修改人的信息——使用reactive</button>
  <h3>测试的数据c:{{ person.job2.a.b.c }}</h3>
  <h3>爱好:{{ person.hobbies }}</h3>
</template>

<script>
// import { ref, reactive } from "vue";
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    //   傻傻的写法——这种写法，基本数据类型要用ref函数
    // let name = ref("张三");
    // let age = ref(18);
    // let job = ref({
    //   type: "前端工程师",
    //   salary: "30k",
    // });
    // let job2 = reactive({
    //   type: "后端工程师",
    //   salary: "40k",
    //   a: {
    //     b: {
    //       c: 1080,
    //     },
    //   },
    // });
    // let hobbies = reactive(["吃饭", "睡觉", "打豆豆"]);

    // 有套路的写法(在外面包一个对象)——这种写法，基本类型也不需要用ref函数了，直接用reactive函数即可
    // let person = {
    //   name = "张三",
    //   age = 18,
    //   job = {
    //     type: "前端工程师",
    //     salary: "30k",
    //   },
    //   job2 = {
    //     type: "后端工程师",
    //     salary: "40k",
    //     a: {
    //       b: {
    //         c: 1080,
    //       },
    //     },
    //   },
    //   hobbies =["吃饭", "睡觉", "打豆豆"]
    // };

    // let p = reactive(person)
    // 把person通过reactive函数加工后起个名字:p

    // 有套路的写法2.0(在外面包一个对象)——这种写法，基本类型也不需要用ref函数了，直接用reactive函数即可
    let person = reactive({
      // 数据
      name: "张三",
      age: 18,
      job: {
        type: "前端工程师",
        salary: "30k",
      },
      job2: {
        type: "后端工程师",
        salary: "40k",
        a: {
          b: {
            c: 1080,
          },
        },
      },
      hobbies: ["吃饭", "睡觉", "打豆豆"],
    });
    //方法
    function changeInfo() {
      person.name = "李四";
      person.age = 27;
      console.log(person.job);
      person.job.type = "UI设计师";
      person.job.salary = "60K";
    }

    function changeInfo2() {
      console.log(person.job2);
      person.job2.type = "召唤师";
      person.job2.salary = "100K";
      person.job2.a.b.c = "999";
      person.hobbies[0] = "喝水";
    }

    function addSex() {
      person.sex = "男";
    }

    function deleteInfo() {
      delete person.name;
    }
    return {
      //   name,
      //   age,
      //   job,
      //   job2,
      //   hobbies,
      changeInfo2,
      changeInfo,
      //   p,
      // 这个时候就只要交一个p就可以了，不用写name,age这么多东西了
      person,
      addSex,
      deleteInfo,
    };
  },
};
</script>

<style></style>
