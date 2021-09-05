<!--
 * @Author: liming
 * @Date: 2021-09-03 19:01:30
 * @LastEditTime: 2021-09-03 19:01:31
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\components\Demo.vue
-->
<template>
  <h1>一个人的信息——Vue3写法</h1>
  姓:<input type="text" v-model="person.firstName" />
  <br />
  名:<input type="text" v-model="person.lastName" />
  <br />
  <!-- <span>全名：{{ fullName }}</span> -->
  <span>全名：{{ person.fullName }}</span>
  <br />
  全名：<input type="text" v-model="person.fullName" />
  <!-- 这样写表明计算属性也是可以修改的！但是你下面的计算属性使用了简写的形式，所以会报错 -->
</template>

<script>
import { reactive, computed } from "vue";
//Vue3里面把computed变成了一个组合式的API,所以你需要引入
export default {
  name: "Demo",
  //   在Vue3里面是可以按照Vue2的套路来写计算属性的，虽然可以这么写，但是不建议这么写
  computed: {
    //   注意：你在Vue3里面！！最好不要写Vue2里面的代码！！！这样写不好！！！！！
    // fullName() {
    //   console.log(this);
    //   return this.person.firstName + "-" + this.person.lastName;
    //   //注意：在Vue2的配置里是可以看到Vue3的数据和方法的
    //   //   注意：this不能丢！！！！没有this是找不到person的！！！
    // },
  },
  setup() {
    let person = reactive({
      firstName: "张",
      lastName: "三",
    });

    //计算属性——这个是简写形式(没有考虑到计算属性被修改的情况)
    // person.fullName = computed(() => {
    //   return person.firstName + "-" + person.lastName;
    //   // 因为我是用reactive来定义person的，所以你可以随意的往person身上增删改查一个属性
    //   //   这样写有点怪，人有姓，人有名，这个全名也应该是这个person的一个属性才对
    //   // let fullName = computed(() => {
    //   // 这个计算属性的值不再是一个对象了，而是一个函数
    // });

    //计算属性——这个是完整写法(考虑读和写)
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        const nameArr = value.split("-");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });

    return {
      person,
      //   fullName,
    };
  },
};
</script>

<style></style>
