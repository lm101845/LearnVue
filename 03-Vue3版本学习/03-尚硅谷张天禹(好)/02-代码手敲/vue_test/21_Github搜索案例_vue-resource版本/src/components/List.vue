<!--
 * @Author: liming
 * @Date: 2021-08-18 00:57:29
 * @LastEditTime: 2021-08-18 02:36:17
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\components\List.vue
-->
<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <!-- 如果users.length长度为0，那就是没有用户，那我就没有必要去展示了 -->
    <div
      v-show="info.users.length"
      class="card"
      v-for="user in info.users"
      :key="user.login"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用!</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">加载中...</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">请求出错了{{ info.errMsg }}~</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      //   // 你这4个东西得随着请求的发送而不断的发生变化——在Search组件里面在合适的时候，你得去操作这4个东西
      //   //完善：此时一个users已经不够了
      //   isFirst: true,
      //   //是否为初次展示
      //   isLoading: false,
      //   //是否处于加载中
      //   errMsg: "",

      //   //到底是哪个组件需要这一堆用户呢？——很明显是List组件
      //   //人家明显需要拿着这一堆用户遍历生成这一堆列表
      //   users: [
      //     //这里我们不写伪造的数据了
      //     // 这一堆用户数据来自哪里呢？当然是拿着关键字发请求
      //     // 接口地址：
      //   ],

      info: {
        //   使用info包裹起来
        isFirst: true,
        isLoading: false,
        errMsg: "",
        users: [],
      },
    };
  },
  //   使用全局事件总线，List接收数据，Search提供数据
  mounted() {
    // this.$bus.$on("updateListData", (isFirst, isLoading, errMsg, users) => {
    this.$bus.$on("updateListData", (dataObj) => {
      //   console.log(dataObj);
      //这个回调直接写就要写箭头函数
      //   console.log("我是List组件，收到了数据", users);
      //   this.isFirst = isFirst;
      //   this.isLoading = isLoading;
      //   this.errMsg = errMsg;
      //   this.users = users;
      //   此时不存更待何时？？
      //   缺点：代码过于冗余
      //   优化代码
      //   this._data = dataObj;
      //但是这么写就把响应式给搞丢了，不能这么写
      //   在Vue里面我们不会直接操作this._data的
      //   console.log(this);
      //   也可以不这么写
      //   this.isFirst = dataObj.isFirst;
      //   this.isLoading = dataObj.isLoading;
      //   this.errMsg = dataObj.errMsg;
      //   this.users = dataObj.users;

      //   这么写最好了
      //   this.info = dataObj;
      //   这样可以做到批量替换——前提是上面也得改
      this.info = { ...this.info, ...dataObj };
      //   这样写可以把丢掉的isLoading也给补上
      //   通过字面量的形式去合并一下对象
      //   console.log(this);
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
