<!--
 * @Author: liming
 * @Date: 2021-08-18 00:57:21
 * @LastEditTime: 2021-08-18 00:57:21
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\components\Search.vue
-->
<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;
      <button @click="searchUsers">
        <!-- 使用v-model来获取用户输入 -->
        <!-- 按钮绑定点击事件，发一个请求 -->
        Search
      </button>
    </div>
  </section>
</template>

<script>
// 使用axios来发送请求
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      // 在发送请求之前需要更新List里面的数据
      //   this.$bus.$emit("updateListData", false, true, "", []);
      this.$bus.$emit("updateListData", {
        //这样写虽然长了一些，但是更加的语义化
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      //get请求
      //   axios.get("https://api.github.com/search/users?q=xxx");
      //   q=xxx是参数，你需要把xxx换成你想要搜索的名字
      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        //   ${this.keyWord}这个不是Vue的模版语法，而是模板字符串
        // 这个接口GitHub是想让所有人都能用的，所以你放心，服务端那边后端工程师肯定是通过cors的方式处理过跨域了的
        // 感概：cors来解决跨域才是一劳永逸的
        (response) => {
          //   console.log("请求成功了", response.data.items);
          //   当请求成功的时候，去触发emit事件，发射数据给List
          //   this.$bus.$emit("getUsers", response.data.items);
          //   this.$bus.$emit("updateListData", false, false, "", response.data.items);
          // 这种写法可以达到效果，但是别人看到这个代码别人是懵的，不知道true，false什么含义，代码没有语义化

          //   请求成功后更新List的数据
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: "",
            users: response.data.items,
          });
          //   isFirst第一次显示之后就总是false了，就不用再写了
          // errMsg必须要明确告诉是没有的，必须要写，因为以后可能错误信息有
        },
        (error) => {
          //   console.log("请求失败了", error.message);
          //   请求失败后更新List的数据
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: error,
            users: [],
            // 这里很重要，报错了的话一定要把用户给清空，否则这里残留着的是上一次搜索的用户
          });
        }
      );
    },
  },
};
</script>
