<template>
  <van-sidebar v-model="activeKey">
    <van-sidebar-item
      @click="itemClick(index, item.maitKey, item.miniWallkey)"
      :title="item.title"
      v-for="(item, index) in sideTitle"
      :key="index"
      :class="{ active: activeKey === index }"
    />
  </van-sidebar>
</template>

<script>
export default {
  name: "CateSideBar",
  data() {
    return {
      activeKey: 0,
    };
  },
  props: {
    sideTitle: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    //监听每个item的点击
    itemClick(index, maitKey, miniWallkey) {
      this.activeKey = index;
      //通知父组件发请求拿到主体部分数据
      this.$emit("getMainData", maitKey, miniWallkey);
    },
  },
};
</script>

<style lang="less" scoped>
.active {
  color: #ff5777;
  font-weight: 700;
}
</style>