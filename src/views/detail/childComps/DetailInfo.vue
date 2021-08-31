<template>
  <div class="detail-info">
    <div class="top-info">
      <div></div>
      <div>{{ detailInfo.desc }}</div>
      <div></div>
    </div>
    <span>穿着效果</span>
    <div class="detail-image" v-if="detailInfo.detailImage">
      <img :src="item" alt="" v-for="(item, index) in imageList" :key="index" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    imageList() {
      return this.detailInfo.detailImage[0].list;
    },
  },
};
</script>

<style lang="less" scoped>
.detail-info {
  margin-top: 20px;
}
.top-info div:first-child,
.top-info div:nth-child(3) {
  position: relative;
  width: 90px;
  height: 2px;
  margin-left: 10px;
  background-color: #ccc;
}
.top-info div:nth-child(2) {
  color: #666666;
  font-size: 14px;
  text-align: center;
  padding: 15px 5px;
}
.top-info div:nth-child(3) {
  float: right;
  margin-right: 10px;
}
.top-info div:first-child::after {
  content: "";
  position: absolute;
  top: -4px;
  left: 0;
  width: 5px;
  height: 5px;
  background-color: #333333;
}
.top-info div:nth-child(3)::after {
  content: "";
  position: absolute;
  top: -4px;
  right: 0px;
  width: 5px;
  height: 5px;
  background-color: #333333;
}
.detail-image img {
  width: 100%;
}
</style>