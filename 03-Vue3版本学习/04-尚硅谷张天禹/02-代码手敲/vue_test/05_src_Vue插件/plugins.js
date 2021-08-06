/*
 * @Author: liming
 * @Date: 2021-08-04 16:05:26
 * @LastEditTime: 2021-08-04 16:30:25
 * @FilePath: \04-尚硅谷张天禹\02-代码手敲\vue_test\src\plugins.js
 */

//插件本质上就是一个对象
// const obj = {
export default {
  install(Vue, x, y, z) {
    console.log("我是一个插件", Vue);
    //这个插件是Vue帮你调用的
    //形参起个名字叫Vue
    console.log(x, y, z);

    //全局过滤器
    Vue.filter("mySlice", function(value) {
      return value.slice(0, 4);
    });

    //定义全局指令
    Vue.directive("fbind", {
      //指令与元素成功绑定时（一上来）
      bind(element, binding) {
        element.value = binding.value;
      },
      //指令所在元素被插入页面时
      inserted(element, binding) {
        element.focus();
      },
      //指令所在的模板被重新解析时
      update(element, binding) {
        element.value = binding.value;
      },
    });

    //定义混入
    Vue.mixin({
      data() {
        return {
          x: 100,
          y: 200,
        };
      },
    });

    //Vue往原型上添加一个方法(vm和vc就都能用了)
    //Vue原型上的方法vm和vc都能用
    Vue.prototype.hello = () => alert("你好啊");
  },
};

//游戏玩不明白用外挂
//1.开启外挂
//2.进入游戏

//使用Vue插件增强Vue功能
//1.应用插件
//2.创建vm实例
