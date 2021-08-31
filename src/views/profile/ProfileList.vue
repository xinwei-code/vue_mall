<template>
  <div class="profile-list">
    <div class="order-list">
      <div>
        <img src="~assets/img/profile/message.png" alt="" />
        <span>我的消息</span>
      </div>
      <div>
        <img src="~assets/img/profile/shop.png" alt="" />
        <span>积分商城</span>
      </div>
      <div>
        <img src="~assets/img/profile/vip.png" alt="" />
        <span>会员卡</span>
      </div>
    </div>
    <div class="service-list">
      <div>
        <img src="~assets/img/profile/cart.png" alt="" />
        <span>我的购物车</span>
      </div>
      <div>
        <img src="~assets/img/profile/downLoad_APP.png" alt="" />
        <span>下载购物APP</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileList",
};
</script>

<style lang="less" scoped>
.order-list {
  border-bottom: 10px solid #f2f2f2;
}
.order-list div,
.service-list div {
  padding: 10px 0;
}

.order-list div img,
.service-list div img {
  vertical-align: middle;
  margin-right: 10px;
  margin-left: 10px;
}
.order-list div span,
.service-list div span {
  display: inline-block;
  width: calc(100vw - 45px);
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.order-list div:last-child span,
.service-list div:last-child span {
  border-bottom: 0;
}
</style>