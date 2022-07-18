<!--
 * @Author: liming
 * @Date: 2021-09-23 15:14:28
 * @LastEditTime: 2021-10-08 09:45:45
 * @FilePath: \Demo\src\views\fuzzyquery\fuzzyQuery.vue
-->
<template>
  <div class="wrapper">
    <el-input clearable placeholder="请输入" suffix-icon="el-icon-search" v-model="searchMsg" size="mini" @input="handleSearch(searchMsg)"></el-input>
    <el-checkbox-group v-model="checkList">
      <div v-for="(item, index) in filterMsg" :key="index">
        <el-checkbox :label="item">{{ item.name }}</el-checkbox>
      </div>
    </el-checkbox-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        searchMsg: "",
        checkList: [],
        filterMsg: []
      };
    },
    mounted() {
      this.allMsg = [
        { name: "myhua", id: 1 },
        { name: "mp3", id: 2 },
        { name: "hello", id: 3 },
        { name: "world", id: 4 },
        { name: "warm weather", id: 5 },
        { name: "m3", id: 6 },
        { name: "hahaha", id: 7 }
      ];
      this.filterMsg = this.allMsg;
    },
    methods: {
      // 搜索方法
      //   精准查询
      //   handleSearch(queryString) {
      //     this.filterMsg = [];
      //     this.allMsg.map(item => {
      //       if (item.name.indexOf(queryString) !== -1) {
      //         this.filterMsg.push(item);
      //       }
      //     });
      //   }
      //模糊查询
      handleSearch(queryString) {
        let queryStringArr = queryString.split("");
        let str = "(.*?)";
        this.filterMsg = [];
        let regStr = str + queryStringArr.join(str) + str;
        let reg = RegExp(regStr, "i"); // 以mh为例生成的正则表达式为/(.*?)m(.*?)h(.*?)/i
        this.allMsg.map(item => {
          if (reg.test(item.name)) {
            this.filterMsg.push(item);
          }
        });
      }
    }
  };
</script>
