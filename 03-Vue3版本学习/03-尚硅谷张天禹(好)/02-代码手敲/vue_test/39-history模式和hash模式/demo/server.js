/*
 * @Author: liming
 * @Date: 2021-08-27 22:48:26
 * @LastEditTime: 2021-08-27 23:11:46
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\demo\server.js
 */
const express = require('express')
const history = require('connect-history-api-fallback')

const app = express()

//使用中间件,专门用于指定静态资源
// __dirname+'/static'表示当前目录下的static文件
app.use(express.static(__dirname + '/static'))

app.use(history)
app.get('/person', (req, res) => {
    res.send({
        name: "tom",
        age:18
    })
})
app.listen(5005, err => {
    if (!err) {
        console.log('服务器启动成功了');
    }
})