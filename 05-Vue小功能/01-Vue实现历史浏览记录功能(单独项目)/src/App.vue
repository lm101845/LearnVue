<template>
  <div id="app">
    <ul class="tab">
      <router-link 
        to="/list" 
        tag="li" 
        class="tab-item" 
      >
        动物列表页
      </router-link>
      <router-link 
        to="/history" 
        tag="li" 
        class="tab-item" 
        >
        历史浏览页
      </router-link>
    </ul>
    <div class="view-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    }
  }
}
</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  min-width: 1200px;
  min-height: 100%;
  background-color: #f1f1f1;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  height: 100%;
  margin: 0 auto;

  .tab {
    display: flex;
    width: 300px;
    height: 40px;
    border: 1px solid #424242;
    margin: 30px;
    .tab-item {
      width: 200px;
      height: 40px;
      line-height: 40px;
      text-align: center;

      &.router-link-active {
        background-color: #424242;
        color: #fff;
      }
    }
  }

  .view-wrapper {
    width: 100%;
    margin: 15px 0;
    padding: 0 40px;
    box-sizing: border-box;
  }
}
</style>