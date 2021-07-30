/*
 * @Author: liming
 * @Date: 2021-07-30 16:22:14
 * @LastEditTime: 2021-07-30 17:22:15
 * @FilePath: \01-购物车\main.js
 */
const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1,
        name: "《算法导论》",
        date: "2006-9",
        price: 85.0,
        count: 1,
      },
      {
        id: 2,
        name: "《UNIX编程艺术》",
        date: "2006-2",
        price: 59.0,
        count: 1,
      },
      {
        id: 3,
        name: "《编程珠玑》",
        date: "2008-10",
        price: 39.0,
        count: 1,
      },
      {
        id: 4,
        name: "《代码大全》",
        date: "2006-3",
        price: 128.0,
        count: 1,
      },
      //在data里面弄一个数组，一旦你把某本书弄到购物车里面，就在数组里面追加一个对象
    ],
  },
  methods: {
    //方案1：使用methods
    // getFinalPrice(price) {
    //   return "￥" + price.toFixed(2);
    // },
    decrement(index) {
      //console.log("减法", index);
      //因为每本书都有count,不确定是哪本书的count减法，所以要加一个参数index
      this.books[index].count--;
      //但是减法不能是负数，最少是1，之后按钮就要变成"disabled",不可以点击了
    },
    increment(index) {
      //console.log("加法", index);
      this.books[index].count++;
    },
    removeHandle(index) {
      //数组中的splice()方法有移除功能
      //把自己删除第二个参数传个1就可以了
      this.books.splice(index, 1);
    },
  },
  filters: {
    // 方案2：使用过滤器
    // 因为有多个，所以用复数s
    showPrice(price) {
      return "￥" + price.toFixed(2);
    },
  },
  computed: {
    //计算总金额用计算属性比较好
    totalPrice() {
      // 方法1：普通的for循环
      // let totalPrice = 0;
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].price * this.books[i].count;
      // }
      // return totalPrice;
      //注意这个return不要忘记写

      //方法2：for...in循环
      //for (let i in  this.books)
      // let totalPrice = 0;
      // for (let i in this.books) {
      //   // console.log(i);
      //   totalPrice += this.books[i].price * this.books[i].count;
      // }
      // return totalPrice;

      //方法3:for...of循环
      //for(let i od this.books)
      //   let totalPrice = 0;
      //   for (let item of this.books) {
      //     totalPrice += item.price * item.count;
      //   }
      //   return totalPrice;

      //方法4：使用高阶函数
      //reduce
      return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.count;
      }, 0);
    },
  },
});
