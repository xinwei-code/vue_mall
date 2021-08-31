<template>
  <div class="detail-goods-info">
    <span class="good-desc">{{ goodsInfo.title }}</span>
    <div class="goods-price">
      <span>￥{{ nowPrice }}</span>
      <span class="oldPrice">{{ goodsInfo.oldPrice }}</span>
      <em class="">{{ goodsInfo.discountDesc }}</em>
    </div>
    <div class="info-other">
      <span>{{ columns[0] }}</span>
      <span>{{ columns[1] }}</span>
      <span>72小时发货</span>
    </div>
    <div class="info-service">
      <div>
        <img src="~assets/img/yes.png" alt="" />
        <span>退货补运费</span>
      </div>
      <div>
        <img src="~assets/img/yes.png" alt="" />
        <span>全国包邮</span>
      </div>
      <div>
        <img src="~assets/img/yes.png" alt="" />
        <span>七天无理由退货</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    nowPrice() {
      return this.goodsInfo.lowNowPrice;
    },
  },
};
</script>

<style lang="less" scoped>
.detail-goods-info {
  padding: 12px 18px;
}
.good-desc {
  color: #262626;
  font-weight: 700;
}
.goods-price {
  color: #f2270c;
  padding-top: 10px;
  em {
    font-style: normal;
    background-color: #ff5777;
    color: #fff;
    font-size: 14px;
    padding: 1px 2px;
    margin-left: 10px;
    border-radius: 10px;
  }
}
.goods-price span:first-child {
  font-size: 20px;
}
.oldPrice {
  margin-left: 10px;
  color: #999999;
  text-decoration: line-through;
}
.info-other {
  display: flex;
  margin-top: 30px;
  font-size: 12px;
  color: #ccc;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.info-service {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-bottom: 20px;
    div{
        font-size: 14px;
        color: #8c8c8c;
    }
    img {
        width: 12px;
        vertical-align: middle;
        padding-bottom: 2px;
        padding-right: 3px;
    }
}
</style>