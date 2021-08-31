<template>
  <div class="recommend-list-item" @click="recommendItemClick">
    <van-image :src="infoItem.image" lazy-load>
      <template v-slot:loading>
        <van-loading type="spinner" />
      </template>
    </van-image>
    <div>{{ infoItem.title }}</div>
    <div class="goods-info">
      <span>{{ "￥" + infoItem.price }}</span>
      <img src="~assets/img/collect.svg" alt="" />
      <span>{{ infoItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["infoItem"],
  methods: {
    recommendItemClick() {
      window.open(this.infoItem.item_url);
    },
  },
};
</script>

<style lang="less" scoped>
.recommend-list-item {
  width: 45%;
  margin: 5px 0px;
  cursor: pointer;
}
.van-image {
  border-radius: 5px;
  overflow: hidden;
}
.recommend-list-item img {
  width: 100%;
}
.recommend-list-item > div {
  font-size: 14px;
  color: #666666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-info {
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.goods-info span:first-child {
  padding-right: 5px;
  color: red;
}
.goods-info span:nth-child(3) {
  color: #666666;
}
.goods-info img {
  width: 18px;
  vertical-align: middle;
  padding-bottom: 3px;
}
</style>