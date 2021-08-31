<template>
  <div class="account">
    <div class="balance">
      <span>0.00</span>元
      <p>我的余额</p>
    </div>
    <div class="discounts">
      <span>0</span>张
      <p>我的优惠券</p>
    </div>
    <div class="integral">
      <span>0</span>分
      <p>我的积分</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileAccount",
};
</script>

<style lang="less" scoped>
.account {
  display: flex;
  text-align: center;
  border-bottom: 10px solid #f2f2f2;
}
.account div {
  flex: 1;
  padding: 20px;
  padding-bottom: 0;
  font-size: 13px;
  border-right: 1px solid #f5f5f5;
}
.account div p {
  color: #666666;
  margin-top: 10px;
}
.account div span{
    color: #ff5f3e;
    font-size: 24px;
    font-weight: 700;
}
</style>