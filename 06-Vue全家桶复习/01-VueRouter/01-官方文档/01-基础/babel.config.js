/*
 * @Author: liming
 * @Date: 2021-08-03 09:55:48
 * @LastEditTime: 2021-08-28 17:56:03
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\babel.config.js
 */
// 然后，将 .babelrc 修改为：xxx  
// 现在是新版本了， .babelrc的新名字叫babel.config.js了
module.exports = {
//   presets: ["@vue/cli-plugin-babel/preset", ["es2015", { modules: false }]],
    presets: ["@vue/cli-plugin-babel/preset", ["@babel/preset-env", { modules: false }]],
    // 这里报错了，应该这么写
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
