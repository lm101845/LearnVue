<!--
 * @Author: liming
 * @Date: 2021-08-28 18:26:54
 * @LastEditTime: 2021-08-30 10:17:35
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\App.vue
-->
<template>
  <input type="text" v-model="keyword" />
  <h3>{{ keyword }}</h3>
</template>

<script>
import { ref, customRef } from "vue";
// ref是精装房，customRef是毛坯房
export default {
  name: "App",
  setup() {
    //无论是程序员自己定义的，还是Vue自己提供的，ref就是一个容器

    //自定义一个ref,名为 myRef
    // 所谓的自定义ref，其实本质上就是个函数,而且里面的东西也不是我们完全自己写的(借助customRef这个API)
    function myRef(value, delay) {
      let timer;
      //   console.log("=========myRef========", value);
      //   const x = customRef();
      //   //   注意：你所得到的这个x最终最终你要返回出去，不然你后面的myRef写的就没有意义了
      //   return x;

      return customRef((track, trigger) => {
        //   第一个return是把你忙活了一圈的ref给交出去
        return {
          get() {
            console.log(`有人从myRef这个容器中读取数据了，我把${value}给他了`);
            track(); //通过Vue追踪value的变化(提前和get商量一下,让它认为value是有用的)
            //追踪一下Keyword的改变
            // 如果你不提前跟get打招呼(track)，get是不会理你的
            return value;
          },
          set(newValue) {
            console.log(`有人把myRef这个容器中的数据改为了${newValue}`);
            clearTimeout(timer);
            // 我一直按住不动，时间小于1秒，那么定时器就会不断的开启关闭，开启关闭
            timer = setTimeout(() => {
              value = newValue;
              //形参也是属于函数作用域里面的一个变量
              // set改完后，需要再央求get再读取一下
              trigger();
              //通过Vue去重新解析模版
            }, delay);
            // 如果你的速度比1秒快的时候，你就开了一堆定时器
            //把很多的赋值，很多的trigger都积压在一起了，那到时候肯定有这个问题
          },
        };
        //第二个return就是语法要求了
      });
    }
    // let keyword = ref("hello");
    //使用VUe提供的内置的ref

    let keyword = myRef("hello", 500);
    //使用程序员自定义的ref
    return {
      keyword,
    };
  },
};
</script>

<style></style>
