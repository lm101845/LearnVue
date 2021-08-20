/*
 * @Author: liming
 * @Date: 2021-08-19 19:27:47
 * @LastEditTime: 2021-08-20 05:55:20
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\store\index.js
 */

//一般我们的想法是，建立一个vuex文件夹，里面有一个store.js文件，存放Vuex有关代码
// 官方是这样命名vuex有关文件夹的：建立一个store文件夹，里面有一个index.js文件，存放vuex有关代码
// 见到了store就如果见到了vuex

//该文件用于创建Vuex中【最为核心的store】——幕后黑手，用户管理state,actions,mutations这三个【对象】

//把Vue.use(Vuex写到这里之后，还要引入Vue)
import Vue from "vue";

//引入Vuex
import Vuex from "vuex";
//准备actions——用于响应组件中的动作(服务员)

//使用插件(Vuex是插件，需要use一下)
Vue.use(Vuex);
//你use了Vuex，然后你创建vm的时候，你就可以传入store配置项了(在new Vue里面传)

const actions = {
  // jia: function () {
  //     console.log('actions中的jia被调用了');
  // }

  // 简写形式
  //   jia(miniStore, value) {
  //     console.log("actions中的jia被调用了", miniStore, value);
  //   },

  //   jia(context, value) {
  //     // context是上下文的意思
  //     // 我把你可能需要的东西都包成一个对象给你，这个对象就叫做上下文对象(是一个迷你版的store,里面的东西比原始的store少)
  //         // 这个上下文对象里面我们最想用的其实就是commit
  //         console.log("actions中的jia被调用了", context, value);
  //         // context.commit('jia', value)
  //         // 加几？我得看用户输入的是几？这里填value
  //         context.commit('JIA', value)
  //         // 一般我们这里写大写，已做区分，人家一看大写就知道了，是mutations里面的，小写的就是actions里面的
  //         // 因为mutations很厉害，他能直接帮你操作sum，所以给它大写，哈哈
  //     },

  //     jian(context, value) {
  //         console.log("actions中的jian被调用了", context, value);
  //         context.commit('JIAN',value)
  //     },

  // 上面这2个没有什么意义，拿过来就转发，类似服务员说你好，欢迎光临——完全可以把它们注释掉
  //上面的2个可以在组件里面直接跳过dispatch，直接用commit直接修改

  // 下面的2个还有点意义，里面还做了逻辑判断
  jiaOdd(context, value) {
    //在里面写If逻辑
    // 这里面上下文特别给力，你需要一个东西，你就可以在上下文里面去找，它就有
    console.log("上下文", context);
    console.log("这里面有很多行代码，功能也很复杂,处理了一些事情");
    // 这个时候可以把代码还能接着往下传给demo1
    context.dispatch("demo1", value);
    // if (context.state.sum % 2) {
    //     context.commit('JIA',value)
    // }
  },
  demo1(context, value) {
    console.log("这里面有很多行代码，功能也很复杂,处理了一些事情");
    context.dispatch("demo2", value);
  },
  demo2(context, value) {
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
};

//准备mutations——用于响应组件中的动作(后厨，真正做事的人)
// 业务逻辑和AJAX请求等都写在actions里，mutations里面不要写任何业务逻辑发发送AJAX请求了
// 你所有的要求可以直接跟服务员说，而不用直接跟后厨说
const mutations = {
  JIA(state, value) {
    console.log("mutations中的JIA被调用了", state, value);
    // 因为是一个团队的出品，它检测数据改变的原理和Vue是一样的，getter和setter
    state.sum += value;
  },

  JIAN(state, value) {
    console.log("mutations中的JIAN被调用了", state, value);
    state.sum -= value;
  },
};

//准备state——用于响应组件中的动作(最终做成的菜)
const state = {
  sum: 0,
};

// 这个store你得通过东西new出来
// const store = new Vuex({
// 注意：人家是这样设计的：new的不是Vuex，而是Vuex身上的Store构造函数
// const store = new Vuex.Store({
// //   actions: actions,
// //   mutations: mutations,
// //   state: state,
//   // 对象里的key和保存对应值的变量重名了，可以触发对象的简写形式
//   actions,
//   mutations,
//   state,
// });

// //暴露store
// export default store

//简写:创建并暴露store

export default new Vuex.Store({
  actions,
  mutations,
  state,
});
