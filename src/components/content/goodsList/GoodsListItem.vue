<template>
  <div class="goods-list-item" @click="toDetail">
    <van-image :src="goods.show.img" lazy-load>
      <template v-slot:loading>
        <van-loading type="spinner" />
      </template>
    </van-image>
    <div>{{ goods.title }}</div>
    <div class="goods-info">
      <span>{{ "￥" + goods.price }}</span>
      <img src="~assets/img/collect.svg" alt="" />
      <span>{{ goods.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    toDetail() {
      this.$router.push("/detail/" + this.goods.iid);
    },
  },
};
</script>

<style lang="less" scoped>
.goods-list-item {
  width: 45%;
  margin: 5px 0px;
}
.van-image {
  border-radius: 5px;
  overflow: hidden;
}
.goods-list-item img {
  width: 100%;
}
.goods-list-item > div {
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