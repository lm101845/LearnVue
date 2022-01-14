<!--
 * @Author: liming
 * @Date: 2022-01-14 10:12:27
 * @LastEditTime: 2022-01-14 15:35:23
 * @FilePath: \vue2addts\src\views\Home.vue
-->
<template lang="pug">
    div
        //- c3r2List(:data="data2" :hasLine="line" @iconClick="onIconClick")
        c3r2List(:data="data2" @iconClick="onIconClick")
</template>

<script lang="ts">
import c3r2List from "@/components/c3r2List.vue";
import { Component, Vue } from "vue-property-decorator";
import { C3r2Props } from "@/components/data/ComponentsProps";

@Component({
    components: { c3r2List },
})
export default class TestTs extends Vue {
    public data2: C3r2Props = {
        left: {
            title: "左边题目",
            desc: "25.42%",
            icon: require("../assets/images/icon/cat.jpg")
        },
        middle: {
            title: "中间题目",
            desc: "35.4%",
            icon: require("../assets/images/icon/cat.jpg")
        },
        right: {
            title: "右边题目",
            desc: "25.4%",
            icon: require("../assets/images/icon/cat.jpg")
        },
    };

    onIconClick(index:Number){
        console.log('======',index);
        
    }
}
</script>

<style lang="stylus" scoped>
*{
    padding: 5px;
}
</style>
