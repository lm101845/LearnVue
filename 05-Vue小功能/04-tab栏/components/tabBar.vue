<template>
  <div class="tab-nav">
    <ul>
      <li v-for="(item, index) in tabs" :key="index" :class="{'active': nav === index}" @click="change(index)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabNav",
  model: {
    prop: "nav",
    event: "change"
  },
  props: {
    nav: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      tabs: ["已营销", "未营销"]
    };
  },
  methods: {
    change(index) {
      this.$emit("change", index);
    }
  }
};
</script>

<style scoped lang="less">
.tab-nav {

  ul {
    display: flex;

    li {
      flex: 1;
      list-style: none;
      text-align: center;
      cursor: pointer;

      &.active {
        color: #fff;
        background-color: #0486ff;
      }

    }
  }
}
</style>
