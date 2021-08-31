<template>
  <van-list
    v-model="loading"
    @load="onLoad"
  >
    <div class="goods-list">
      <goods-list-item
        :goods="item"
        v-for="(item, index) in goodsList"
        :key="index"
      />
    </div>
  </van-list>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  components: { GoodsListItem },
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      this.$emit("pullingup");
      // 加载状态结束
      this.loading = false;
      // 数据全部加载完成
    },
  },
};
</script>

<style lang="less" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}
</style>