/*
 * @Author: liming
 * @Date: 2021-07-11 09:40:15
 * @LastEditTime: 2021-07-11 09:52:46
 * @FilePath: \LearnVue\03-Vue3版本学习\02-尚硅谷杨洪波\02-代码手敲\01_TypeScript\02_ts在vscode中自动编译\01-类型注解.ts
 */
// 类型注解:是一种轻量级的为函数或者变量添加的约束
(function () {
    function showMsg(str) {
        return '床前明月光,' + str;
    }
    var msg = '疑是地上霜';
    //msg是一个数组
    //let msg = [10,20,30]
    //msg是数组时会报错，但是可以编译成功
    console.log(showMsg(msg));
})();
