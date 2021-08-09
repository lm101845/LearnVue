/*
 * @Author: liming
 * @Date: 2021-08-03 09:55:48
 * @LastEditTime: 2021-08-03 18:08:39
 * @FilePath: \04-尚硅谷张天禹\02-代码手敲\vue_test\src\main.js
 */

/**
 *该文件是整个项目的入口文件
 */

//引入Vue
// import Vue from "vue/dist/vue";
// 引入完整版的Vue路径是这样写的

import Vue from "vue";
//这个引入的是残缺版的Vue(没有模版解析器的Vue)
// Vue里面有2个组成部分：一个是核心功能，一个是模版解析器

//引入App组件，它是所有组件的父组件
import App from "./App.vue";

//关闭Vue的生产提示
Vue.config.productionTip = false;
/* 
	关于不同版本的Vue：
	
		1.vue.js与vue.runtime.xxx.js的区别：
				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
				(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
			render函数接收到的createElement函数去指定具体内容。
*/

//创建Vue实例对象----vm
new Vue({
  //下面这行代码一会解释，完成了这个功能：将App组件放入容器中
  el: "#app",
  //这样挂载也是可以的
  // 写法1：
  // render: (h) => h(App)

  //写法1完整版：
  //注意：render函数要有返回值，并且这个函数还可以接收参数
  // render(a) {
  //     console.log('render',typeof a,'========',a);
  //     return null
  // }

  //   render(createElement) {
  // createElement这个参数是一个函数，它的作用是可以创建一个具体的元素，编写具体的内容
  //因为render函数里面我没有用到this,所以可以把这个函数写成箭头函数，更清爽
  //     return createElement("h1", "你好啊");
  //     },

  //   render:createElement=>createElement('h1','你好啊')
  // render: q => q('h1', '你好啊')
  render: (h) => h(App),
  // 如果你使用的是app组件，就不用写什么内容了,而且App是个变量，不用写引号

  // 写法2：
  //   template: `<App></App>`,
  // template:`<h1>你好啊</h1>`
  // 注册了App组件
  //   components: { App },
  //报错：You are using the runtime-only build of Vue where the template compiler is not available.
  //Either pre- compile the templates into render functions, or use the compiler - included build.

  //翻译成人话：你正在使用运行时版本的Vue，它没有模版解析器来解析template,所以会报错。
  //它给你指了2条路：要么你把需要编译的模版交给render函数，或者请你使用包含编译器的版本(即完整版的Vue)
  //再次翻译：你引入的不是一个完整的Vue，引入的是一个残缺的Vue，它没有模版解析器这个功能

  //装修——铺瓷砖
  // 第一种：
  // 买瓷砖(Vue核心) + 【买】工人(模版解析器) ====> 铺好的瓷砖 + 工人
  // 第二种：
  // 买瓷砖(Vue核心) + 【雇】工人(模版解析器) ====> 铺好的瓷砖

  //使用精简版Vue好处1：可以节省一些内存
  //使用精简版Vue好处2：模版解析器本身也不应该出现在webpack打包文件中

  //疑问：App.vue里面不也有template吗？那我没有模版解析器不是废了吗？
  //回答：这种标签里面的template，Vue专门给你找了一个库叫vue-template-compiler,专门用来解决这个
}); /*.$mount('#app')*/
