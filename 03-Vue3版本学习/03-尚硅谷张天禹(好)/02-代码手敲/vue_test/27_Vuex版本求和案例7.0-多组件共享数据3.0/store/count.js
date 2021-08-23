/*
 * @Author: liming
 * @Date: 2021-08-20 23:33:55
 * @LastEditTime: 2021-08-20 23:35:52
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\store\count.js
 */
//求和功能相关的配置
// const countOptions = {
export default {
  namespaced: true,
  // 命名空间，默认为false,如果写了，之后就可以简写了
  actions: {
    // 上面这2个没有什么意义，拿过来就转发，类似服务员说你好，欢迎光临——完全可以把它们注释掉
    //上面的2个可以在组件里面直接跳过dispatch，直接用commit直接修改

    // 下面的2个还有点意义，里面还做了逻辑判断
    jiaOdd(context, value) {
      //在里面写If逻辑
      // 这里面上下文特别给力，你需要一个东西，你就可以在上下文里面去找，它就有
      console.log("上下文", context);
      // 这个时候可以把代码还能接着往下传给demo1
      if (context.state.sum % 2) {
        context.commit("JIA", value);
      }
    },

    // 因为业务逻辑过于复杂，所以jiaOdd、demo1,demo2这3个服务员同时在为你服务
    //   Vuex上面好像服务员只有一个，实际上服务员可能有一堆
    jiaWait(context, value) {
      setTimeout(() => {
        context.commit("JIA", value);
      }, 500);
    },
  },
  mutations: {
    JIA(state, value) {
      console.log("mutations中的JIA被调用了", state, value);
      // 因为是一个团队的出品，它检测数据改变的原理和Vue是一样的，getter和setter
      state.sum += value;
    },

    JIAN(state, value) {
      console.log("mutations中的JIAN被调用了", state, value);
      state.sum -= value;
    },
  },
  state: {
    sum: 0,
    school: "尚硅谷",
    subject: "前端",
  },
  getters: {
    //给放大十倍后的合取个名字
    // bigSum有一个参数是state
    bigSum(state) {
      //   注意：你在这里拿到的state，不是总的state，而是局部的state
      return state.sum * 10;
    },
  },
};

// export default countOptions;