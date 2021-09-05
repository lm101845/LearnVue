<!--
 * @Author: liming
 * @Date: 2021-09-05 13:24:33
 * @LastEditTime: 2021-09-05 16:17:17
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\components\Demo.vue
-->

<template>
  <!-- <h2>姓名：{{ person.name }}</h2>
  <h2>年龄{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}k</h2>
  <hr />
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button> -->

  <!-- 现在我的要求：让模版里的代码简单点，不要有这么多的【person.】 -->
  <!-- 为什么你在模版里面可以使用person，因为你下面return交出去了 -->
  <h4>这个人的所有信息：{{ person }}</h4>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄{{ age }}</h2>
  <!-- <h2>薪资：{{ salary }}k</h2> -->
  <h2>薪资：{{ job.j1.salary }}k</h2>
  <hr />
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <!-- <button @click="salary++">涨薪</button> -->
  <button @click="job.j1.salary++">涨薪</button>
  <!-- 这样写初次展示没有问题，但是功能废了，点击数据不变化了，丢了响应式了 -->
</template>

<script>
import { ref, reactive, toRef, toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // const name1 = person.name;
    // console.log("@@@@@", name1);

    // const name2 = toRef(person, "name");
    // toRef的作用：帮你把一个不是ref的东西，变成是ref的东西
    // 而且这个name2在模版中使用的时候，是不需要.value的(因为它是ref类型的值，不用.value)
    // console.log("####", name2);

    const x = toRefs(person);
    // toRef只能处理这个对象的一个属性，而toRefs能批量处理这个对象的所有属性——则你无需第二个参数，直接把第一个参数给它就行了
    console.log("****", x);
    return {
      //   name: "张三",
      //   age: 18,
      //   salary: 20,
      //   写法1：使用toRef
      //   name: toRef(person, "name"),
      //   age: toRef(person, "age"),
      //   salary: toRef(person.job.j1, "salary"),
      //   //   //   第一个参数你传一个对象就行
      person,
      //   //返回这个person的目的是为了验证一下你改的这个name不是原本person里面的name\
      //   //下面的这三个name,age,salary是person里面的3个属性，我拆散了分别往外交，
      //   //但是如果我person里面有100多个属性，我不能一个一个拆，我可以直接把person交出去
      //   写法2：错误写法(无法做到响应式)
      //   name: ref(person.name),
      //   age: ref(person.age),
      //   salary: ref(person.job.j1.salary),
      // 老师，看我这么写，牛不牛！！！
      //   老师：你这么写，没有报错，页面也能看到，但是人家点击按钮修改name的时候，人家改的根本就不是person里面的name！！！！！
      //   你改的是这个新弄出来的ref对象里面的person.name，数据分家了！！！！！！！！！！！！

      //   写法3：使用toRefs
      //升级版：有了toRef，还有它的升级版toRefs！！！
      ...toRefs(person),
    };
  },
};
</script>
