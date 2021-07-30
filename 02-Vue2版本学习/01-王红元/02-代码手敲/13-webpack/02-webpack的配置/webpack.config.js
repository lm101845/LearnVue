// 通过CommonJS给它导出一个对象
// 你在终端输入webpack这个命令的时候，它会自动找到webpack.config.js这个文件
// 然后看一下你这里有没有导出入口和出口
// 它就会读取这个入口和出口，就知道你从哪里作为入口，哪里作为出口了

// path:要动态的获取路径(要用到node的语法了)
// const path = require("./path");
// 我们没有这样写，说明不是从当前文件找的这个path,而是从node的包里找的path
// 要想用path,就必须要有path这个包
// 如果装包：终端输入 npm init(进行初始化)
// 然后它会让你起个包的名字，告诉你版本号，描述，入口(随便写，也用不上)是什么等
// 最终会生成一个package.json这个文件
// 如果package.json还依赖一些别的东西的话，我们还会敲npm install
// 这样如果package.json依赖一些东西，它会根据package.json里面所有的依赖帮助我们在当前文件夹里安装一些东西
// 因为我们这里package.json没有什么依赖，所以敲npm install就没有什么效果
// 但是一旦依赖于Node相关的东西，我们肯定要建立package.json这个文件夹的
const path = require("path");
// require是导入，并且赋值给path变量了
module.exports = {
  entry: "./src/main.js",
  // entry:入口
  //   output: "./dist/bundle.js",
  // 出口一般不要这样写，要写成对象类型
  // output:出口
  output: {
    // 出口这里要写2个东西：路径加上文件名字，不能像入口这样简单写
    // path: "./dist",
    // path不能这样写，这样写就是相对路径，人家要求你是绝对路径
    // path:要动态的获取路径(要用到node的语法了)
    path: path.resolve(__dirname, "dist"),
    // __dirname是Node里面的一个全局变量，可以获取当前文件所在路径(dirname前面要加2个下横线)
    // 第二个参数填dist,会将当前路径后面拼接一个dist(这样的话我们整个路径就拥有了)
    // 而且还是一个绝对路径，就不会报错了
    // path这个东西就是一个模块，模块里面有一个函数叫做resolve
    // 它可以把2个路径拼接到一起
    filename: "bundle.js",
  },
};

// 这样写想达成的效果是：终端输入webpack,就自动知道要把src的main.js文件打包，
// 并且放到dist文件夹下并且以bundle.js命名呢
// 而不用这样写了：webpack ./src/main.js ./dist/bundle.js
// 更加的简单

// 我们这里做了半天就做了一件事：将入口和出口的东西放到一个配置文件里了
// 而不用我们每次在终端里敲命令，又写入口(./src/main.js)，又写出口(./dist.bundle.js)，很麻烦

// 但是其实我们实际中也不敲'webpack'这个命令，而是敲`npm run build`这个命令来构建，打包
// 虽然好像直接敲`webpack`命令好像更加简单，但是如果webapck.config.js名字变了，比如成了production.config.js
// 那你的命令就要重新敲为了webpack production.config.js

// 所以我们可以把webpack这个命令映射到npm run build中，就可以执行webpack相关的命令了
// 怎么映射呢？在package.json里进行配置
