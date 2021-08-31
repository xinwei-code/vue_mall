<template>
  <div class="shop-info">
    <div class="shop-logo">
      <img :src="shopInfo.shopLogo" alt="" />
      <span>{{ shopInfo.name }}</span>
    </div>

    <div class="shop-info-detail">
      <div class="info-left">
        <div class="shop-sales">
          <div>{{ shopInfo.cSells }}</div>
          <div>总销量</div>
        </div>
        <div class="total-goods">
          <div>{{ shopInfo.cGoods }}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="info-right">
        <div v-for="(item, index) in shopInfo.score" :key="index">
          <span>{{ item.name }}</span>
          <span :class="{ 'score-better': item.isBetter }">{{
            item.score
          }}</span>
          <span :class="{ 'better-more': item.isBetter }">{{
            item.isBetter ? "高" : "低"
          }}</span>
        </div>
      </div>
    </div>
    <div class="shop-btn">
      <van-button
        round
        size="small"
        icon="shop-o"
        type="default"
        :url="shopInfo.shopUrl"
        text="进店逛逛"
      ></van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="less" scoped>
.shop-info {
  border-top: 5px solid #f2f5f8;
  .shop-logo {
    margin-top: 15px;
    margin-left: 10px;
    img {
      width: 45px;
      border: 1px solid #ccc;
      border-radius: 50%;
      vertical-align: middle;
      margin-right: 10px;
    }
  }
}
.shop-info-detail {
  text-align: center;
  display: flex;

  .info-left {
    height: 50px;
    border-right: 1px solid #ccc;
    margin-top: 20px;
    width: 50%;
    display: flex;
    justify-content: space-around;
    .shop-sales div:nth-child(2) {
      color: #333333;
      font-size: 12px;
      margin-top: 10px;
    }
    .total-goods div:nth-child(2) {
      color: #333333;
      margin-top: 10px;
      font-size: 12px;
    }
  }
  .info-right {
    text-align: left;
    margin-top: 10px;
    margin-left: 20px;
    font-size: 13px;
    div {
      margin-bottom: 10px;
    }
    div span:nth-child(2) {
      margin-left: 15px;
      color: green;
    }
    div span:nth-child(3) {
      float: right;
      background-color: #5ea732;
      margin-left: 15px;
      color: #fff;
    }
  }
}

.shop-btn {
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 5px solid #f2f5f8;
}

// 自定义样式
.score {
  color: #5ea732;
}
.score-better {
  color: #f13e3a !important;
}
.better-more {
  background-color: #f13e3a !important;
}
</style>