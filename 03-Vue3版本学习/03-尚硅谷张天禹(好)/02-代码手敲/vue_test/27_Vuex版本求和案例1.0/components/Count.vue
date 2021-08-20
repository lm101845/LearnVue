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
      //   用户选择的数字
      //   sum: 0,  //把这个sum=0带走，不能写在这里了
      //   当前的合
    };
  },
  methods: {
    increment() {
      //   this.sum += this.n;
      //   this.$store.dispatch("jia", this.n);
      this.$store.commit("JIA", this.n);
      //  里面没有进行逻辑操作，不需要服务员了——注意：里面的名字要是大写
      //   dispatch是分发，派遣的意思，是一个【函数】，调用的时候传2个参数(动作类型，值)
      //   dispatch：客人张嘴说要求(蛋炒饭，1份)
      //   dispatch这个函数是store身上的，而store是vm,vc身上的，所以要写this
      //   加几？我也不知道加几，我得看用户选的是几？所以用this.n

      //   可惜：你dispatch第一个参数是jia，但是actions对象里面没有与之对应的jia,所以报错
      //   所以这时候需要在actions里面写['jia:函数式']
    },
    decrement() {
      //   this.sum -= this.n;
      //   this.$store.dispatch("jian", this.n);
      this.$store.commit("JIAN", this.n);
      //  里面没有进行逻辑操作，不需要服务员了——注意：里面的名字要是大写
    },
    incrementOdd() {
      //   if (this.sum % 2) {
      //     this.sum += this.n;
      //   }

      //   if (this.$store.state.sum % 2) {
      //     this.$store.dispatch("jia", this.n);
      //   }

      //   我现在不想把if逻辑写在这里
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      //   setTimeout(() => {
      //     // this.sum += this.n;
      //     this.$store.dispatch("jia", this.n);
      //   }, 500);

      //   我不想把逻辑写在这里
      this.$store.dispatch("jiaWait", this.n);
    },
  },
  mounted() {
    console.log("Count", this);
    // 具体的组件里面也有store对象了
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
