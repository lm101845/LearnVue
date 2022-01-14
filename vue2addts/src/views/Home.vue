<!--
 * @Author: liming
 * @Date: 2022-01-14 10:12:27
 * @LastEditTime: 2022-01-14 15:35:23
 * @FilePath: \vue2addts\src\views\Home.vue
-->
<template lang="pug">
    div
        p 123
        //- c3r2List(:data="data2" :hasLine="line" @iconClick="onIconClick")
        c3r2List(:data="data2")
</template>

<script lang="ts">
import c3r2List from '@/components/c3r2List.vue';
import { Component, Vue } from "vue-property-decorator";
import {C3r2Props} from '@/components/data/c3r2Props'

@Component({
    components: {c3r2List}
})
export default class TestTs extends Vue {
    public data2:C3r2Props = {
        left:{
            title: "左边题目"
        }
    }
}
</script>
