<!--
 * @Author: liming
 * @Date: 2022-01-14 10:12:27
 * @LastEditTime: 2022-01-14 15:09:55
 * @FilePath: \vue2addts\src\components\c3r2List.vue
-->
<template lang="pug">
    .c3r2-list
        slot
            .left
                slot(name="left")
                    .t(v-if="data.left" ) {{data.left.title}}
                        span(v-if="data.left.icon" @click="iconClick(0)")
                            img.icon(:src="data.left.icon")
                    .b(v-if="data.left") {{data.left.desc}}
            //- .line
            .middle
                slot(name="middle")
                    .t(v-if="data.middle" ) {{data.middle.title}}
                        span(v-if="data.middle.icon" @click="iconClick(1)")
                            img.icon(:src="data.middle.icon")
                    .b(v-if="data.middle") {{data.middle.desc}} 
            //- .line
            .right
                slot(name="right")
                    .t(v-if="data.right" ) {{data.right.title}}
                        span(v-if="data.right.icon" @click="iconClick(2)")
                            img.icon(:src="data.right.icon")
                    .b(v-if="data.right") {{data.right.desc}} 

</template>

<script lang="ts">
import { Component, Vue,Prop, Emit } from 'vue-property-decorator';
import {C3r2Props} from '@/components/data/ComponentsProps'

@Component({
    name:'c3r2-list'
})

export default class c3r2List extends Vue {
    /**
     * @Overview
     * 三列两行的数据
     * @example
     * data:C3r2Props = {
     *  left:{
     *      title:'左边题目',
     *      desc:'25.4%',
     *      icon:require('xxx')
     *  }
     * }
     */

    @Prop({
        type: C3r2Props,
        default: new C3r2Props(),
        required: true
    })

    /**
     * 在 TypeScript 2.7 版本中引入了确定赋值断言，即允许在实例属性和变量声明后面放置一个 ! 号，
     * 从而告诉 TypeScript 该属性会被明确地赋值。为了更好地理解它的作用，我们来看个具体的例子：
     */
    data!: C3r2Props;

    @Prop({
        type: Object,
        required: false
    })

    hasLine?:{has:false,color:"#E5EAF5"}

    mounted() {}

    @Emit("iconClick")

    public iconClick(index:Number){
        return index;
    }
}
</script>


<style scoped lang="stylus">
    .c3r2-list{
        display: flex;
        justify-content: space-between;
        text-align: center;
        .line{
            width: 0.5px;
            height: 40px;
        }
        .t{
            font-size: 12px;
            color: #858DA3;
            line-height: 17px;
        }
        .b{
            font-size: 15px;
            font-weight: 500;
            color: #282C3E;
            line-height: 18px;
            margin-top: 5px;
        }
        .left{
            .b{
                color: #EF4034;
            }
        }
        .icon{
            width: 16px;
            height: 16px;
        }
    }
</style>
