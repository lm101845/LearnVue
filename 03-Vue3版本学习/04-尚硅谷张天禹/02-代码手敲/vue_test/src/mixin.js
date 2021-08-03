/*
 * @Author: liming
 * @Date: 2021-08-04 03:02:17
 * @LastEditTime: 2021-08-04 03:09:26
 * @FilePath: \04-尚硅谷张天禹\02-代码手敲\vue_test\src\mixin.js
 */
export const hunhe = {
  methods: {
    showName() {
      alert(this.name);
    },
    },
    mounted() {
        console.log('你好啊')
    },
};

export const hunhe2 = {
    data() {
        return {
            x:100,y:200
        }
    }
}
