<template>
  <van-nav-bar :border="false">
    <template slot="title">
      <span>蘑菇街 </span>
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  name: "ProfileNavBar",
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: #ff8198;
}
.van-nav-bar span {
  color: #fff;
  font-weight: 700;
}
</style>