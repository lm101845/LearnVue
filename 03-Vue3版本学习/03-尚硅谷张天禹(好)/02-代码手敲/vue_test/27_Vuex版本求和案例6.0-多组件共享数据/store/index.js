/*
 * @Author: liming
 * @Date: 2021-08-19 19:27:47
 * @LastEditTime: 2021-08-20 10:39:32
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
    // 上面这2个没有什么意义，拿过来就转发，类似服务员说你好，欢迎光临——完全可以把它们注释掉
    //上面的2个可以在组件里面直接跳过dispatch，直接用commit直接修改

    // 下面的2个还有点意义，里面还做了逻辑判断
    jiaOdd(context, value) {
        //在里面写If逻辑
        // 这里面上下文特别给力，你需要一个东西，你就可以在上下文里面去找，它就有
        console.log("上下文", context);
        // 这个时候可以把代码还能接着往下传给demo1
        if (context.state.sum % 2) {
            context.commit('JIA', value)
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
    ADD_PERSON(state, value) {
        console.log("mutations中的ADD_PERSON被调用了");
        state.personList.unshift(value);
    }
};

//准备state——用于响应组件中的动作(最终做成的菜)
// 这个state相当于是数据源=========类似于Vue里面的data
const state = {
    sum: 0,
    school: '尚硅谷',
    subject: '前端',
    personList: [
        {id:'001',name:'张三'},
        {id:'002',name:'李四'},
    ]
};

// 准备getters用于将state中的数据源进行加工===============类似于Vue里面的computed
// 如果逻辑复杂并且还想复用，则推荐使用getters=====注意：要写返回值
const getters = {
    //给放大十倍后的合取个名字
    // bigSum有一个参数是state
    bigSum(state) {
        return state.sum * 10
    }
}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
    //getters是store里面的一个全新配置项，你得配置进来
});