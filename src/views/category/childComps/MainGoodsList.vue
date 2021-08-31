<template>
  <div class="goods-list">
    <div
      class="goods-list-item"
      v-for="(item, index) in tabControlData"
      :key="index"
    >
      <img :src="item.img" alt="" />
      <div class="goods-info">
        <span class="title">{{ item.title }}</span>
        <span class="price">￥{{ item.price }}</span>
        <div class="collect">
          <img src="~assets/img/collect.svg" alt="" />
          <span>{{ item.cfav }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainGoodsList",
  data() {
      return {
          tabControlData:[]
      }
  },
  mounted() {
    this.$bus.$on("tabData", (tabData)=>{
        this.tabControlData = tabData
    });
  },
};
</script>

<style lang="less" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.goods-list-item {
  width: 45%;
  margin-bottom: 15px;
}
.goods-list-item img {
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
}
.title {
  display: inline-block;
  width: 130px;
  color: #666666;
  background-color: #fff;
  font-size: 13px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.price,
.sale,
.collect {
  color: #ff5777;
  font-size: 12px;
}
.collect {
  margin-right: 5px;
  margin-left: 5px;
  display: inline-block;

  img {
    width: 18px;
    vertical-align: middle;
    padding-bottom: 3px;
    padding-right: 3px;
  }
}
</style>