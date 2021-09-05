/*
 * @Author: liming
 * @Date: 2021-09-05 15:48:32
 * @LastEditTime: 2021-09-05 15:55:07
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\hooks\usePoint.js
 */

import {reactive, onMounted, onBeforeUnmount } from "vue";

export default function() {
// function usePoint() {
    //和鼠标打点相关的数据
    let point = reactive({
        x: 0,
        y: 0,
    });

    //和鼠标打点相关的方法
    //事件方法单独写，有了名字到时候好移除
    function savePoint(event) {
        // 我这里能拿到很多坐标，pageX,clientX,我就选pageX吧
        point.x = event.pageX;
        point.y = event.pageY;
        console.log(event.pageX, event.pageY);
        // 有一个问题：我这个X,Y也是Demo组件在用，如果有一天Demo组件都卸载了，但是这个监听还是继续发挥着作用
        // 所以就要借助于另外一个钩子了：onBeforeOnMount(类似于Vue2里面的beforeDestory)——当卸载之前(把这个函数给弄死——removeEventListener)

        /**
           * 通过 addEventListener() 添加的事件处理程序只能使用 removeEventListener() 并传入与添
              加时同样的参数来移除。这意味着使用 addEventListener() 添加的匿名函数无法移除
           */
    }

    //和鼠标打点相关的生命周期钩子
    onMounted(() => {
        //只要这个Demo组件一挂载，立刻就走这个回调
        //   window.addEventListener("click", (event) => {
        //     point.x = event.pageX;
        //     point.y = event.pageY;
        //     console.log(event.pageX, event.pageY);
        //   });
        window.addEventListener("click", savePoint);
    });

    onBeforeUnmount(() => {
        window.removeEventListener("click", savePoint);
    });

    return point
    // 不要忘了return point！！！！
    // 你要把有用的数据给返回出去！！！
}

//不要忘了暴露，否则别人没法用
// export default usePoint