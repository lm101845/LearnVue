<!--
 * @Author liming
 * @Date 2022/12/5 23:01
-->
<template>
  <div class="wraps">
    <div :style="{height:item.height+'px',background:item.background,top:item.top+'px',left:item.left + 'px'}"
         v-for="item in waterList" class="items"></div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
const props = defineProps<{
  list: any[]
}>()
const waterList = reactive<any[]>([])

/**
 * 这段代码有点没看懂
 * CSS瀑布流实现原理：
 *  1.实现原理：1，确定列数，并排满第一列，同时每一列的当前记录到heightList中，此时heightList的长度已经固定，只需要每次都更改高度就可以了；
 *  2，第一排排满后，先找出哪一列最短(list里面定义了高)，找到后，根据heightList的下标设置位置，然后再更新此列的高度
 */
const init = () => {
  const heightList: any[] = []
  const width = 130;   //宽都是一样的，搞不一样
  const x = document.body.clientWidth   //如1920
  //页面可见区域宽
  const column = Math.floor(x / width)   //一共可以摆几列

  for (let i = 0; i < props.list.length; i++) {
    if (i < column) {
      props.list[i].top = 10;
      props.list[i].left = i * width;
      heightList.push(props.list[i].height + 10)
      waterList.push(props.list[i])
    } else {
      let current = heightList[0]
      let index = 0;
      //找出真正最小的那个单位
      heightList.forEach((h, inx) => {
        if (current > h) {
          current = h;
          index = inx;
        }
      })
      console.log(current,'c')
      props.list[i].top = (current + 20);
      console.log(props.list[i].top,'top',i)
      props.list[i].left = index * width;
      heightList[index] =  (heightList[index] + props.list[i].height + 20);
      waterList.push(props.list[i])

    }
  }
  console.log(props.list)
}

onMounted(() => {
  window.onresize = () => init()
  init()
})

</script>

<style scoped lang='less'>
.wraps {
  position: relative;
  height: 100%;
  .items {
    position: absolute;
    width: 120px;
  }
}
</style>
