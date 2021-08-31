<template>
  <div id="app">
    <!-- 路由占位符 -->
    <!-- <keep-alive exclude="detail"> -->
      <router-view></router-view>
    <!-- </keep-alive> -->

    <!-- 底部导航栏区域 -->
    <tab-bar />
  </div>
</template>
<script>
import TabBar from "components/content/TabBar";
export default {
  name: "App",
  components: { TabBar },
};
</script>

<style>
</style>
