<template>
  <div class="tab-bar" v-if="isShow">
    <van-tabbar v-model="active" route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="bars">分类</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/profile" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      //默认选中的标签索引值
      active: 0,
    };
  },
  computed:{
      isShow(){
          let path = this.$route.path
          return path.split('/')[1] !== 'detail'
      }
  }
};
</script>

<style>
</style>