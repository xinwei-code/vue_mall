<template>
  <div class="home-tab-control">
    <div
      class="home-tab-control-item"
      v-for="(item, index) in title"
      :key="index"
      @click="tabBarClick(index, item)"
    >
      <span :class="{ active: currentIndex === index }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTabControl",
  data() {
    return {
      title: ["流行", "新款", "精选"],
      currentIndex: 0,
      isActive: false,
    };
  },
  methods: {
    tabBarClick(index, item) {
      //改变当前的currentIndex
      this.currentIndex = index;
      //发送点中的title
      this.$emit("itemClick", item);
    },
  },
};
</script>

<style lang="less" scoped>
.home-tab-control {
  background-color: #fff;
  display: flex;
  text-align: center;
  color: #666666;
  padding: 10px 0px;
  .home-tab-control-item {
    flex: 1;
  }
}
.active {
  padding: 5px 12px;
  border-bottom: 3px solid red;
}
</style>