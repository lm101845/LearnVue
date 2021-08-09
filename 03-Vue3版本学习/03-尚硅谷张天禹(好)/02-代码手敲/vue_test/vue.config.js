/*
 * @Author: liming
 * @Date: 2021-08-03 18:43:56
 * @LastEditTime: 2021-08-03 18:51:04
 * @FilePath: \04-尚硅谷张天禹\02-代码手敲\vue_test\vue.config.js
 */
module.exports = {
  // 这个是Common.js的模块化暴露方式
  //因为webpack是基于Node的
  pages: {
    index: {
      //入口
      entry: "src/main.js",
    },
  },
  lintOnSave:false, //关闭语法检查
};
