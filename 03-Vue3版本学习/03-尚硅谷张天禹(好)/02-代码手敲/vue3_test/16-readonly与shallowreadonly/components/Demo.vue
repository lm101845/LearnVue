<!--
 * @Author: liming
 * @Date: 2021-09-05 13:24:33
 * @LastEditTime: 2021-09-07 00:08:38
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\components\Demo.vue
-->

<template>
  <h4>当前求和为：{{ sum }}</h4>
  <button @click="sum++">点我++</button>
  <hr />
  <h2>姓名：{{ name }}</h2>
  <h2>年龄{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}k</h2>
  <hr />
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { ref, reactive, toRefs, readonly, shallowReadonly } from "vue";
export default {
  name: "Demo",
  setup() {
    //   有时候我不希望别人修改sum,person,不希望它们有响应式
    let sum = ref(0);
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // person = readonly(person);
    person = shallowReadonly(person);
    // 这里有一个覆盖的操作，我先拿到person，然后使用readonly进行加工，加工出来的新person再覆盖掉上面的person
    // 此时这个person里面所有的东西都不允许修改

    // shallowReadonly是浅修改，姓名和年龄你别想改，但是薪资你可以改

    sum = readonly(sum);
    sum = shallowReadonly(sum);
    // 也可以用shallowReadonly，效果都是一样的，但没有必要，因为sum它是数字，没有层次可言

    // 用法：别人组件里的响应式数据，跟你说，你用可以，你千万别改，那你就用readonly或shallowReadonly修饰一下即可
    // 你把人家的数据拿过来，使用readonly或shallowReadonly加工一下，用那个新的。
    return {
      ...toRefs(person),
      sum,
    };
  },
};
</script>
