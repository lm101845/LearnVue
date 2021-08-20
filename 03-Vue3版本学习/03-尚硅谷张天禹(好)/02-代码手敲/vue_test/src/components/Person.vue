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
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <!-- <li v-for="p in $store.state.personList" :key="p.id">{{ p.name }}</li> -->
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    // personList() {
    //   return this.$store.state.personList;
    // },
    ...mapState(["personList", "sum"]),
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("ADD_PERSON", personObj);
      console.log(personObj);
      this.name = "";
    },
  },
};
</script>

<style></style>
