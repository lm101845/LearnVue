<!--
 * @Author: liming
 * @Date: 2021-08-20 10:18:14
 * @LastEditTime: 2021-08-20 10:18:14
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\components\Person.vue
-->
<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: blue">Count组件求和为:{{ sum }}</h3>
    <h3>列表中第一个人的名字是：{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <ul>
      <!-- <li v-for="p in $store.state.personList" :key="p.id">{{ p.name }}</li> -->
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      //   return this.$store.state.personList;
      return this.$store.state.personAbout.personList;
    },
    // ...mapState(["personList", "sum"]),
    sum() {
      //   return this.$store.state.sum;
      return this.$store.state.countAbout.sum;
      //现在state身上没有sum了，只有countAbout和personAbout了
    },
    firstPersonName() {
      //   return this.$store.getters.personAbout.firstPersonName;
      return this.$store.getters["personAbout / firstPersonName"];
      //   报错：拿不到personAbout
      //   如果不用set...这种方式而是像这样自己写，就稍微麻烦一点
    },
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      //   this.$store.commit("personAbout", "ADD_PERSON", personObj);
      //   不能这样写，这样写无效：unknown mutation type: personAbout
      this.$store.commit("personAbout/ADD_PERSON", personObj);
      //别人就是这样设计API的
      //   console.log(personObj);
      console.log(this.$store);
      this.name = "";
    },
    addWang() {
      const personObj = { id: nanoid(), name: this.name };
      //   要写业务逻辑，所以写dispatch
      //   this.$store.dispatch("addPersonWang", personObj);
      // 报错
      this.$store.dispatch("personAbout/addPersonWang", personObj);
      this.name = "";
    },
  },
};
</script>

<style></style>
