# Vuex简略笔记

## mapState

是不是每次都写this.$store.state.XXX让你感到厌烦，你实在不想写这个东西怎么办，当然有解决方案，就像下面这样:

~~~
<script>
import { mapState } from 'vuex'; // 从vuex中导入mapState
export default {
    mounted() {
        console.log(this.name);
    },
    computed: {
        ...mapState(['name']), // 经过解构后，自动就添加到了计算属性中，此时就可以直接像访问计算属性一样访问它
    },
}
</script>
~~~

## Getter装饰器

- 设想一个场景，你已经将store中的name展示到页面上了，而且是很多页面都展示了，此时产品经理过来找事儿😡：
- 产品经理：所有的name前面都要加上“hello”！
- 我：为什么？
- 产品经理：我提需求还需要为什么吗？
- 我：好，我加！

这时候，你第一想到的是怎么加呢，emm...在每个页面上，使用this.$store.state.name获取到值之后，进行遍历，前面追加"hello"即可。

🤦🏻‍♂️ 错！这样很不好，原因如下：

- 第一，假如你在A、B、C三个页面都用到了name，那么你要在这A、B、C三个页面都修改一遍，多个页面你就要加很多遍这个方法，造成代码冗余，很不好；
- 第二，假如下次产品经理让你把 “hello” 改成 “fuck” 的时候，你又得把三个页面都改一遍，这时候你只能抽自己的脸了...

👏🏻 吸取上面的教训，你会有一个新的思路：我们可以直接在store中对name进行一些操作或者加工，从源头解决问题！那么具体应该怎么写呢？这时候，本次将要介绍的这个Getter利器闪亮登场！

🤡 怎么用呢？不废话，show code！

首先，在store对象中增加getters属性

~~~
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        name: '张三',
        number: 0,
        list: [
            { id: 1, name: '111' },
            { id: 2, name: '222' },
            { id: 3, name: '333' },
        ]
    },
    // 在store对象中增加getters属性
    getters: {
        getMessage(state) { // 获取修饰后的name，第一个参数state为必要参数，必须写在形参上
            return `hello${state.name}`;
        }
    },
});

export default store;
~~~

在组件中使用：

```js
export default {
    mounted() {
        // 注意不是$store.state了，而是$store.getters
        console.log(this.$store.state.name);
        console.log(this.$store.getters.getMessage);
    }
}
```

在组件中使用：

```js
export default {
    mounted() {
        // 注意不是$store.state了，而是$store.getters
        console.log(this.$store.state.name);
        console.log(this.$store.getters.getMessage);
    }
}
```

🤖 官方建议： 是不是每次都写this.$store.getters.XXX让你感到厌烦，你实在不想写这个东西怎么办，当然有解决方案，官方建议我们可以使用mapGetters去解构到计算属性中，就像使用mapState一样，就可以直接使用this调用了，就像下面这样：

~~~
<script>
import { mapState, mapGetters } from 'vuex';
export default {
    mounted() {
        console.log(this.name);
        console.log(this.getMessage);
    },
    computed: {
        ...mapState(['name']),
        ...mapGetters(['getMessage']),
    },
}
</script>
~~~

 读取值的操作我们有 “原生读（state）” 和 “修饰读（getters）”，接下来就要介绍怎么修改值了！

~~~
actions: {
    setNum(content, payload) {   // 增加payload参数
        return new Promise(resolve => {
            setTimeout(() => {
                content.commit('setNumberIsWhat', { number: payload.number });
                resolve();
            }, 1000);
        });
    },
}

等价的解构写法——
actions: {
    setNum({ commit }) {   // 直接将content结构掉，解构出commit，下面就可以直接调用了
        return new Promise(resolve => {
            setTimeout(() => {
                commit('setNumberIsWhat', { number: payload.number });;  // 直接调用
                resolve();
            }, 1000);
        });
    },
},
~~~



