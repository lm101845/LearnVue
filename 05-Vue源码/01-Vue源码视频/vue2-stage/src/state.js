/*
 * @Author: liming
 * @Date: 2022-07-18 22:22:29
 * @LastEditTime: 2022-07-18 22:22:30
 * @FilePath: \vue2-stage\src\state.js
 */
export function initState(vm) {
    const opts = vm.$options;   //获取所有的选项
    //如果有data属性就初始化数据
    if (opts.data) {
        initData(vm);
    }
}

//拿到data后对里面的数据进行代理
function initData(vm) {
    let data = vm.$options.data;  //data Vue2里面可以是函数，也可以是对象
    data = typeof data === 'function' ? data.call(vm) : data
    console.log(data);
}