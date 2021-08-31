<template>
  <div class="cate-main">
    <!-- 上半部分 -->
    <div class="cate-main-top">
      <div
        class="cate-main-item"
        v-for="(item, index) in mainList"
        :key="index"
      >
        <a :href="item.link">
          <img :src="item.image" alt="" /> <span>{{ item.title }}</span>
        </a>
      </div>
    </div>

    <!-- 下半部分 -->
    <div class="cate-main-bottom">
      <main-tab-bar @tabItemClick="tabItemClick" />
      <main-goods-list />
    </div>
  </div>
</template>

<script>
import MainGoodsList from "./MainGoodsList";
import MainTabBar from "./MainTabBar";
export default {
  components: { MainTabBar, MainGoodsList },
  name: "CateMain",
  props: {
    mainList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    tabItemClick(index) {
      switch (index) {
        case 0:
          this.$emit("tabItemClick", "pop");
          break;
        case 1:
          this.$emit("tabItemClick", "new");
          break;
        case 2:
          this.$emit("tabItemClick", "sell");
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.cate-main-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  font-size: 13px;
}
.cate-main-item {
  width: 33%;
  margin: 10px 0;
  text-align: center;
}
.cate-main-item a {
  color: #333333;
}
.cate-main-item img {
  width: 100%;
}
</style>