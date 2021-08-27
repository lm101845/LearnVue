/*
 * @Author: liming
 * @Date: 2021-08-23 20:08:35
 * @LastEditTime: 2021-08-27 16:44:13
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\router\index.js
 */

// 该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";
// VueRouter可以当成构造函数去用

//引入组件
// import About from '../components/About'
// import Home from '../components/Home'

import About from "../pages/About";
import Home from "../pages/Home";

// 子路由
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

const router = new VueRouter({
  // export default new VueRouter({
  // 创建并暴露一个路由器
  // router:路由器
  // route:路由
  // routes:一堆路由
  // 路由就是一组key-value的对应关系
  routes: [
    // 在一堆路由里面就可以写一组一组{key-value}的路由了，每组路由就是一个一个的配置对象
    {
      name: "guanyu",
      // 给路由起名字
      path: "/about",
      component: About,
      // 如果你的路径是/about,我就给你看About这个组件
      //   peiqi:false
      //   meta是路由免费提供给我们的一个容器，叫做路由元信息
      //   meta: { isAuth: false },
      //   isAuth:是否授权
      //   谁需要权限的校验，我才把这个东西放到谁那里
      meta: {  isAuth: true,title: "关于" },
    },
    {
      name: "zhuye",
      path: "/home",
      //但是这么写会报错，因为About和Home没有定义——所以需要引入组件
      component: Home,
      //   子路由——写成数组形式
      meta: { title: "主页" },

      children: [
        {
          name: "xinwen",
          path: "news",
          // 注意：一级路由前面加斜杠/，而子路由就不要加斜杠了——底层遍历规则的时候已经给你加了斜杠了
          component: News,
          meta: { isAuth: true, title: "新闻" },
          beforeEnter: (to, from, next) => {
            //独享路由守卫，只给新闻服务——换名了，由beforeEach换成beforeEnter
            //   进入之前
            //   注意：独享路由守卫只有前置，没有后置！！！！
            if (to.meta.isAuth) {
              //判断是否需要鉴权——更好的写法
              // 你先符合前面的额条件我才判断
              //   if (localStorage.getItem("school") === "atguigu2") {
              if (localStorage.getItem("school") === "atguigu") {
                // 如果进来了，并且学校名对了，那么也放行
                // document.title = to.meta.title || "硅谷系统";

                next();
              } else {
                alert("学校名不对，无无权限查看！");
              }
            } else {
              //如果第一个if判断没有进来，则放行
              // document.title = to.meta.title || "硅谷系统";
              next();
            }
          },
        },
        {
          name: "xiaoxi",
          path: "message",
          // 注意：一级路由前面加斜杠/，而子路由就不要加斜杠了——底层遍历规则的时候已经给你加了斜杠了
          component: Message,
          meta: { isAuth: true, title: "消息" },
          children: [
            {
              name: "xiangqing",
              path: "detail",
              //   path: "detail/:id/:title",
              // 告诉路由写的params是哪个,我们管/:id叫占位符
              component: Detail,
              meta: { isAuth: true, title: "详情" },
              //   详情也得做权限的校验

              //谁配置东西，你就在谁哪里去写
              //   props的第一种写法：值为对象,该对象中的所有key,value都会以props的形式传给Detail组件。
              //   那么Detail组件就会以props的形式接收
              //   不过这种写法我们用得少，因为传递的是死数据
              //  props: { a: 1, b: "hello" },

              //    props的第二种写法：值为【布尔值】，若布尔值为真，就会把该路由组件所有【params参数】，以props的形式传给Detail组件。
              //   缺点：只能适用params，不能接收juery参数
              //   props: true,

              //props的第三种写法：值为【函数】——就靠返回值了(返回值必须是一个对象，而且以props的形式传给Detail)
              //   props() {
              //       return {id:'666',title:'你好啊'}
              //   }
              props($route) {
                //   这是一个回调函数，我们定义的，我们不回调，它到时候帮我们回调
                return {
                  id: $route.query.id,
                  title: $route.query.title,
                  a: 1,
                  b: "hello",
                };
              },

              //   使用解构赋值
              //   props({ query}) {
              //         //   这是一个回调函数，我们定义的，我们不回调，它到时候帮我们回调
              //       return {id:query.id,title:query.title}
              //   }
              //   使用解构赋值的连续写法——但是语义化不明显
              //       props({ query: { id,title}}) {
              //     //   这是一个回调函数，我们定义的，我们不回调，它到时候帮我们回调
              //     return { id,title};
              //   },
            },
          ],
        },
      ],
    },
  ],
});

// 在暴露路由之前，跟它商量商量，加一个路由守卫
// beforeEach是一个方法(每一次路由切换之前都会帮你调用一个函数)，可以调用
//全局前置路由守卫——每次路由切换之前被调用
// 它一共接收三个参数
// 你去上学，to:学校 from:家
router.beforeEach((to, from, next) => {
  // document.title = to.meta.title || '硅谷系统';
  // 刚开始的时候是undefined，所以用一个默认值'硅谷系统
  // 这个是路由切换前帮你调用这个函数
  console.log("前置路由守卫", to, from, next);
  // 你这个路由守卫为了安全把所有人都拦住了
  // next();
  // next()函数就是放行的意思，这个有点像Node里面的中间件
  // 判断一下什么时候放行，什么时候不放行
  // Home,About我们是随便看的
  // News和Message我们不能随便看，localStorage里面的school为atguigu我们就放行

  // 路由守卫需要问问人家你去哪里？你要去Home,About，我不管，你要去News和Message拿我就要看看你符不符合要求了
  // if (to.path === '/home/news' || to.path === '/home/message') {
  //     // 你先符合前面的额条件我才判断
  //     if (localStorage.getItem('school') === 'atguigu2') {
  //         // 如果进来了，并且学校名对了，那么也放行
  //         next()
  //     } else {
  //         alert('学校名不对，无无权限查看！')
  //     }
  // } else {
  //     //如果第一个if判断没有进来，则放行
  //     next()
  // }

  // 如果不想用路径，用name也行
  //   if (to.name === "xinwen" || to.name === "xiaoxi") {
  if (to.meta.isAuth) {
    //判断是否需要鉴权——更好的写法
    // 你先符合前面的额条件我才判断
    //   if (localStorage.getItem("school") === "atguigu2") {
    if (localStorage.getItem("school") === "atguigu") {
      // 如果进来了，并且学校名对了，那么也放行
      // document.title = to.meta.title || "硅谷系统";

      next();
    } else {
      alert("学校名不对，无无权限查看！");
    }
  } else {
    //如果第一个if判断没有进来，则放行
    // document.title = to.meta.title || "硅谷系统";
    next();
  }
});

//全局后置路由守卫——初始化的时候被调用，每次路由切换之后被调用
// router.afterEach((to,from,next) => {
router.afterEach((to, from) => {
  console.log("后置路由守卫", to, from);
  // 后置路由守卫只有2个参数，没有next！！！——切换后调用,已经完成了,人家再给你next没用了
  // 后置路由守卫连next都没有，他守卫个毛线？？？
  // 虽然后置路由守卫用的不多，但是他也有他的作用的。
  document.title = to.meta.title || "硅谷系统";
  // 如果借用后置路由守卫，这句话只用写一次即可
  // 你想写的稳，你写的时机就得往后靠
});
export default router;
