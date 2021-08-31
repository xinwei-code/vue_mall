<template>
  <div class="main-tab-bar">
    <div @click="itemClick(index)" v-for="(item, index) in title" :key="index">
      <span :class="{ active: currentIndex === index }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainTabBar",
  data() {
    return {
      title: ["综合", "新品", "销量"],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabItemClick", index);
    },
  },
};
</script>

<style lang="less" scoped>
.main-tab-bar {
  display: flex;
  div {
    flex: 1;
    padding: 10px;
    span {
      text-align: center;
      padding: 0 5px 3px;
    }
  }
}
.active {
  color: #ff8198;
  border-bottom: 2px solid #ff8198;
}
</style>