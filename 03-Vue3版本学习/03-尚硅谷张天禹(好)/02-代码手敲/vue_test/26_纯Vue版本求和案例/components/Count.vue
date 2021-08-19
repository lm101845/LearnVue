<!--
 * @Author: liming
 * @Date: 2021-08-18 22:30:29
 * @LastEditTime: 2021-08-19 08:40:54
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\components\Count.vue
-->
<template>
  <div>
    <h3>当前求和为:{{ sum }}</h3>
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
      //   用户选择的数字
      sum: 0,
      //   当前的合
    };
  },
  methods: {
    increment() {
      this.sum += this.n;
    },
    decrement() {
      this.sum -= this.n;
    },
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += this.n;
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.n;
      }, 500);
    },
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
