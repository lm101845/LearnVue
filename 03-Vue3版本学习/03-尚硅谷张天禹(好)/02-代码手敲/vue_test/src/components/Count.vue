<!--
 * @Author: liming
 * @Date: 2021-08-18 22:30:29
 * @LastEditTime: 2021-08-19 08:40:54
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\components\Count.vue
-->
<template>
  <div>
    <h3>当前求和为:{{ sum }}</h3>
    <!-- sum被剪贴走了，模版中的sum不能用了，没有这个数据了 -->
    <!-- <h3>当前求和为:{{ he }}</h3> -->
    <!-- <h3>当前求和为:{{ sum }}</h3> -->
    <!-- 使用计算属性，可以省略掉前面的$store.state -->
    <!-- <h3>当前求和放大10倍后为:{{ dahe }}</h3> -->
    <!-- <h3>当前求和放大10倍后为:{{ $store.getters.bigSum }}</h3> -->
    <h3>当前求和放大10倍后为:{{ bigSum }}</h3>
    <!-- <h3>我在{{ $store.state.school }},学习{{ $store.state.subject }}</h3> -->
    <!-- <h3>我在{{ xuexiao }},学习{{ xueke }}</h3> -->
    <!-- <h3>我在{{ school }},学习{{ subject }}</h3> -->
    <!-- <h3>我在{{ a.school }},学习{{ a.subject }}</h3> -->
    <!-- <h3>我在{{ countAbout.school }},学习{{ countAbout.subject }}</h3> -->
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <!-- 我们要想办法读取到state里面的sum,模版里面可以看到vc身上的所有东西，所以不用this的 -->
    <h3 style="color: red">Person组件的总人数是：{{ personList.length }}</h3>
    <!-- <h3 style="color: red">Person组件的总人数是：{{ personAbout.personList.length }}</h3> -->
    <select v-model.number="n">
      <!-- .number修饰符，将字符串转为number -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <!-- <button @click="increment">+</button> -->
    <button @click="increment(n)">+</button>
    <!-- 这里n在vc身上，是可以这么写的 -->
    <!-- Vue里面的语法，你不写小括号是可以的，但是不写小括号它依旧也是会传参数的，传的是event -->
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
// map有映射的意思，mapState：映射状态
// 这里老师开始给我们讲一些批量生成函数的方式了
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)——如果key和value都一致，就可以用数组的语法了
    // ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    ...mapMutations("countAbout", { increment: "JIA", decrement: "JIAN" }),
    // ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
    ...mapActions("countAbout", { incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
  },
  computed: {
    // ...mapGetters(["bigSum"]),
    ...mapGetters("countAbout", ["bigSum"]),
    // 就是一个数也要写成数组形式
    // ...mapState(["sum", "school", "subject", "personList"]),
    // ...mapState(["a", "b"]),
    // 数组里面的东西不能瞎写，写的必须要是store里面有的，没有的会显示undefined，单个undefined页面不显示，undefined.length则会报错
    // state里面现在没有["sum", "school", "subject", "personList"]，但是它有['a','b']
    // ...mapState(["countAbout", "personAbout"]),
    ...mapState("countAbout", ["sum", "school", "subject"]),
    ...mapState("personAbout", ["personList"]),
  },
  mounted() {
    // const x = mapState({
    //   sum: "sum",
    //   //   'he':'sum'
    //   // 一个对象里的key无论怎么写它都是字符串，其实完整写法是'he':'sum',
    //   school: "school",
    //   subject: "subject",
    //   //   注意：因为bigSum不是从state里面取数据的，所以不要写在mapState里面了
    // });
    // console.log(x);
    // console.log(...x);   //？报错了
    // console.log(...{ a: 1, b: 2 });  //？报错了
    // console.log(this.$store);
  },
};
</script>

<style lang="less">
div {
  margin-left: 20px;
  button {
    margin-right: 20px;
  }
}
</style>
