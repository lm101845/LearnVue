<!--
 * @Author: liming
 * @Date: 2021-10-08 09:29:57
 * @LastEditTime: 2021-10-09 13:50:10
 * @FilePath: \07-Vue小功能\src\App.vue
-->
<template>
  <div class="box">
    <div class="left" :class="{'active-left': selectIndex === 0}" @click="clickLeft">
      <span>我的客户</span>
      <div class="arc-left"></div>
    </div>
    <div class="right" :class="{'active-right': selectIndex === 1}" @click="clickRight">
      <span>全行客户</span>
    </div>

    <div class="triangle-45"></div>
    <div class="triangle-60"></div>
  </div>

</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        tabTitle: ['我的客户', '全行客户'],
        selectIndex: 0
      }
    },
    methods: {
      change(index) {
        console.log(index, '点击了index')
        this.selectIndex = index;
      },
      clickLeft() {
        this.selectIndex = 0;
      },
      clickRight() {
        this.selectIndex = 1;
      },
    }
  }
</script>

<style lang="less" scoped>
.box {
  display: flex;
  align-items: flex-end;
  width: 345px;
  margin: 0 auto;
  box-sizing: border-box;
  text-align: center;
  background-color: #ccc;
  //background-color: #fff;
  border: 1px solid #ccc;
}

.left {
  position: relative;
  width: 50%;
  height: 44px;
  line-height: 44px;
  display: inline-block;
  background: #fff;
  //border-radius: 10px 2px 38px 0px;
  //border-radius: 20% 0 135px 45px;
  //.arc-left{
  //  position: absolute;
  //  top: 0;
  //  right: 0;
  //  width: 0;
  //  height: 0;
  //  border-style: solid;
  //  border-width: 20px 0 0 40px;
  //  border-radius: 40px 0 0 0;
  //  border-color: transparent transparent transparent #000;
  //  z-index: 999;
  //}

  .arc-left{
    position: absolute;
    top: -6px;
    right: -19px;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 44px 20px 0 0;
    //border-radius: 0 0 0 0;
    border-color: #83A5FE transparent transparent blue;
    //border-color: blue grey yellow #fff;
    overflow: hidden;
    z-index: 999;
  }
}

.right {
  position: relative;
  width: 50%;
  height: 44px;
  line-height: 44px;
  display: inline-block;
  background: #FFFFFF;
  //border-radius: 10px 2px 38px 0px;
  //border-radius: 20% 0 135px 45px;
  //border-radius: 20% 0 135px 45px;
  //border-radius: 135px 45px 90px 90px;
}

.active-left {
  background-image: linear-gradient(224deg, #86A8FF 0%, #5774EC 100%);
  color: #fff;
  height: 38px;
  line-height: 38px;
}

.active-right {
  background-image: linear-gradient(224deg, #86A8FF 0%, #5774EC 100%);
  color: #fff;
  height: 38px;
  line-height: 38px;
}


/* 45度角的直角三角形 */
.triangle-45 {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 20px 20px 0 0;
  border-color: #000 transparent transparent transparent;
}

/* 60度角的直角三角形 */
.triangle-60 {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 32px 20px 0 0;
  border-color: #000 transparent transparent transparent;
}
</style>
