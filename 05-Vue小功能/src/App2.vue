<!--
 * @Author: liming
 * @Date: 2021-10-08 09:29:57
 * @LastEditTime: 2021-10-09 13:50:10
 * @FilePath: \07-Vue小功能\src\App.vue
-->
<template>
  <div id="app">
    <ul class="tab-title">
      <li
          v-for="(item,index) in tabTitle"
          :key="index" @click="change(index)"
          class="tab-title-list"
          :class="{'active': selectIndex === index}">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'App',
    data() {
      return {
        tabTitle:['我的客户','全行客户'],
        selectIndex:0
      }
    },
    methods:{
      change(index){
        console.log(index,'点击了index')
        this.selectIndex = index;
      },
    }
  }
</script>

<style lang="less" scoped>
.tab-title{
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: pink;
  font-size: 18px;
  font-weight: 500;
  color: #222E44;
  font-family: PingFangSC-Medium;
.tab-title-list{
  flex: 1;
  font-size: 18px;
  &:first-child{
    height: 38px;
    line-height: 38px;
    background: grey;
  }
  &:last-child{
    height: 44px;
  }
}
.active{
  color: #fff;
  height: 36px;
  line-height: 36px;
  background-image: linear-gradient(224deg, #86A8FF 0%, #5774EC 100%);
  border-radius: 6px 6px 26px 0px;
}
}
</style>
