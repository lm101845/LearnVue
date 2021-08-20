/*
 * @Author: liming
 * @Date: 2021-08-03 09:55:48
 * @LastEditTime: 2021-08-20 03:18:17
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\main.js
 */
// console.log(400);
// import test1 from './test1'
// console.log(100);
// console.log(200);
// import test2 from './test2'
// // 我其实没必要这样写，我只是想引入一下test1,参与一下代码的运行
// // import './test1'

// console.log(300);

// //它会把所有import语句都放到上面统一执行


//引入Vue
import Vue from 'vue';
//引入App.vue
import App from './App'

//引入Vuex——最终在index.js里面引入了
// import Vuex from 'vuex'
// 这个Vuex就是个名字，大小写都行，但是文档里是大写的，那我们也大写吧

//使用插件(Vuex是插件，需要use一下)
// Vue.use(Vuex)
//你use了Vuex，然后你创建vm的时候，你就可以传入store配置项了(在new Vue里面传)
// 因为模块化的愿意，Vue.use我不在这里写了，给它剪贴走 

// 使用插件后产生store，然后新建一个store文件夹，在里面创建store，最后再回来引入这个store
// 如果是index.js，则可以不用写了
// import store from './store/index.js'
import store from './store'
// 模块化理解：我引入了一个store模块，我必须要把这个store里面的代码执行完了，看他暴露了什么，我才能接入

//关闭Vue的生产提示
Vue.config.productionTip = false


//创建vm
/*const vm = */
new Vue({
    el: '#app',
    render: h => h(App),
    // store:'hello',
    // store:store,
    store,
    beforeCreate() {
        Vue.prototype.$bus = this;
    }
})

// console.log('vue实例', vm);
// vue实例身上里面有store

 