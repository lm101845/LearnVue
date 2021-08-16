/*
 * @Author: liming
 * @Date: 2021-08-03 09:55:48
 * @LastEditTime: 2021-08-16 19:52:15
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\main.js
 */
//引入Vue
import Vue from 'vue';
//引入App.vue
import App from './App'

// window.x = { a: 1, b: 2 }
// 不管你用什么框架，都脱离不了window，都可以用
// 但是这样不太好，一般我们用框架的时候，一般不会在window上面放点啥

// 让所有的组件都能看得见(即让所有的vc都能看得见——我想到了Vue.component,在它的原型对象上放)
// VueComponent.prototype.x = { a: 1, b: 2 };
// 注意：引入了Vue以后才有了Vue，但是VueComponent是怎么出来的？？
// 如果你这么写就会报错：ReferenceError: VueComponent is not defined

//由于VueComponent.prototype.__proto__ === Vue.prototype,十分感谢它，我们可以把东西放到Vue的原型对象上
// Vue.prototype.x = {a:1, b: 2}
// const Demo = Vue.extend({})
// // 创建一个Demo组件，并且想把它当成一个傀儡在用
// // 这里的Demo就是VueComponent

// const d = new Demo()
// // 这里的d就是vc(组件的实例对象)，而vc是可以调用$on,$off,$emit的！！

// Vue.prototype.x = d

// 这个傀儡写的不太好，写下面
// 不仅仅vc可以调用$on,$off,$emit，vm也是可以的


//关闭Vue的生产提示
Vue.config.productionTip = false

// console.log(Vue.prototype);

//创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        // Vue.prototype.x = vm;
        // Vue.prototype.x = this;
        Vue.prototype.$bus = this;
        // 多么巧妙，this就是vm！！！
        // 安装全局事件总线
        // bus不仅有公交车的意思，还有总线的意思
        // bus前面加一个$主要是为了迎合Vue的设计
    }
})

// Vue.prototype.x = vm
// 但是这么写不对，你这么写有点晚了
// 必须42,43,44,45行代码写完了(const vm = ...)，你才能做这件事：Vue.prototype.x = vm
//但是这些代码走完了，意味这App组件都整个放到页面上去了，则意味着School组件里面的mounted都已经执行完了(错误也报完了)，此时你才出来，晚了！！！
 