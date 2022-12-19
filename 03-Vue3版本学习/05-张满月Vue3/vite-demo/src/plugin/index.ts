/**
 * @Author liming
 * @Date 2022/12/19 14:45
 **/

import type { Plugin } from 'vite'
// @ts-ignore
import * as babel from '@babel/core'; //@babel/core核心功能：将源代码转成目标代码。
// @ts-ignore
import jsx from '@vue/babel-plugin-jsx'; //Vue给babel写的插件支持tsx v-model等
export default function (): Plugin {
    return {
        name: "vite-plugin-tsx",
        config (config) {
            return {
                esbuild:{
                    include:/\.ts$/
                }
            }
        },
        async transform(code, id) {
            if (/.tsx$/.test(id)) {
                //@ts-ignore
                const ts = await import('@babel/plugin-transform-typescript').then(r=>r.default)
                const res = babel.transformSync(code,{
                    plugins:[jsx,[ts, { isTSX: true, allowExtensions: true }]], //添加babel插件
                    ast:true, // ast: 抽象语法树，源代码语法结构的一种抽象表示。babel内部就是通过操纵ast做到语法转换。
                    babelrc:false, //.babelrc.json
                    configFile:false //默认搜索默认babel.config.json文件
                })
                return res?.code //code: 编译后的代码
            }

            return code
        }
    }
}


