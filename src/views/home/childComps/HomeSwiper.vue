<template>
  <div class="swiper">
    <van-swipe :autoplay="3000" height="195">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <a :href="image.link"><img v-lazy="image.image" /></a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    images: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.van-swipe-item img {
  width: 100%;
}
</style>