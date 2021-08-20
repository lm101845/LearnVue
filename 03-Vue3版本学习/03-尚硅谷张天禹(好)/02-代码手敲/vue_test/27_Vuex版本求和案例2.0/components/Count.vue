<!--
 * @Author: liming
 * @Date: 2021-08-18 22:30:29
 * @LastEditTime: 2021-08-19 08:40:54
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\components\Count.vue
-->
<template>
  <div>
    <!-- <h3>当前求和为:{{ sum }}</h3> -->
    <!-- sum被剪贴走了，模版中的sum不能用了，没有这个数据了 -->
    <h3>当前求和为:{{ $store.state.sum }}</h3>
    <h3>当前求和放大10倍后为:{{ $store.state.sum * 10 }}</h3>
    <h3>当前求和放大10倍后为:{{ dahe }}</h3>
    <h3>当前求和放大10倍后为:{{ $store.getters.bigSum }}</h3>
    <!-- 我们要想办法读取到state里面的sum,模版里面可以看到vc身上的所有东西，所以不用this的 -->
    <select v-model.number="n">
      <!-- .number修饰符，将字符串转为number -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
  computed: {
    dahe() {
      return this.$store.state.sum * 10;
      //   但是你在计算属性里面写，只有你这个组件可以复用
      //   计算属性跨组件就不能用了，只适用于当前组件
    },
  },
  mounted() {
    console.log(this.$store);
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
