<template>
  <div>
    <TabNav v-model="nav" />
    <ContentComponent :status="nav" />
  </div>
</template>

<script>
import TabNav from "./TabNav";
import ContentComponent from "./ContentComponent";

export default {
  name: "ParentComponent",
  components: {
    TabNav,
    ContentComponent
  },
  data() {
    return {
      nav: 0
    };
  },
  watch: {
    nav: function(newVal, oldVal) {
      this.queryCustList(newVal);
    }
  },
  methods: {
    queryCustList(nav) {
      fetch(`/api?nav=${nav}`)
          .then(response => response.json())
          .then(data => {
            // 处理 API 响应数据
            // 将数据传递给内容组件
          });
    }
  }
};
</script>
