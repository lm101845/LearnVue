// 引入一个包——帮我们拼接路径用的
const path = require('path')

// 引入html-webpack-plugin插件
// 它的效果就是给我们自动生成html文件并且引入相关的资源
const HTMLWebpackPlugin = require('html-webpack-plugin')

// 引入clean插件
// 它会在编译前先将dist目录里面的东西都清空，然后再进行编译

const { CleanWebpackPlugin} = require('clean-webpack-plugin')
// webpack中的所有配置信息都应该写在module.exports中
module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",
    
    // 指定打包文件所在的目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        
        // 打包后文件的名字
        filename: 'bundle.js',
        // 配置打包的环境
        // 告诉webpack不要使用箭头函数了(这样就可以用于ie浏览器了)
        environment: {
            arrowFunction:false
        }
    },

    mode:'production',
    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是规则生效的文件(使用正则表达式——以.ts结尾)
                // 这2段代码连起来的意思是：我用ts-loader来处理以.ts结尾的文件
                test: /\.ts$/,
                // 要使用的loader
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        // 设置babel
                        options: {
                            // 设置babel要兼容的浏览器
                            // 即设置预定义的环境
                            presets: [
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11"
                                            // 你只要写了ie:11，它一定会兼容老版本浏览器的
                                            // "chrome": "88"
                                            // 要兼容的目标浏览器
                                            // 我的代码要运行，运行在哪个浏览器里？
                                            // targets用来指定运行的浏览器版本
                                        },
                                        "corejs": "3",
                                        // 指定corejs的版本
                                        // 使用corejs的方式,"usage"表示按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader',
                    // 加载器是从后往前执行的，写到后面的先执行
                ],
                // 要排除的文件
                exclude:/node_modules/
            }
        ]
    },

    // 配置webpack插件
    plugins: [
        new HTMLWebpackPlugin({
            // title: '这是一个自定义的title'
            template:'./src/index模版.html'
        }),

        new CleanWebpackPlugin()
    ],

    // resolve是用来设置引用模块的
    resolve: {
        extensions: ['.ts', '.js']
        // 告诉webpack凡是以.ts和.js为扩展名的文件都可以作为模块来使用
    }
}
