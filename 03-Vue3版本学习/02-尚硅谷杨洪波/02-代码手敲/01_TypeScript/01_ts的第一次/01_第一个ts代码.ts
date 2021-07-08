/*
 * @Author: liming
 * @Date: 2021-07-08 16:01:33
 * @LastEditTime: 2021-07-08 16:10:04
 * @FilePath: \LearnVue\03-Vue3版本学习\02-尚硅谷杨洪波\02-代码手敲\01_TypeScript\01_第一个ts代码.ts
 */
(() => {
  // str这个参数是string类型的
  function sayHi(str:String) {
    return "你好啊" + str;
  }
  let text = "小甜甜";
  console.log(sayHi(text));
})()

// 总结:ts的文件中如果直接书写js语法的代码,那么在html文件中直接引入ts文件,在谷歌的浏览器中是可以直接使用的

// 如果ts文件中有了ts的语法代码,那么就需要把这个ts文件编译成js文件,在html文件中引入js的文件来使用
// ts文件中的函数中的形参,如果使用了某个类型进行修饰,那么最终在编译的js文件中是没有这个类型的
// ts文件中的变量使用的是let进行修饰,编译的js文件中的修饰符就变成了var 了