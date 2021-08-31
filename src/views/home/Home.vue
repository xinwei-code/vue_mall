<template>
  <div id="home">
    <!-- 顶部区域 -->
    <van-nav-bar title="购物街" class="title" :border="false" />
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      success-text="刷新成功"
    >
      <!-- 轮播图区域 -->
      <swiper :images="banner" />
      <!-- recommend区域 -->
      <home-recommend :recommend="recommend" />
      <!-- 本周流行区域 -->
      <feature-view />
    </van-pull-refresh>
    <!-- TabControl区域 -->
    <van-sticky>
      <home-tab-control @itemClick="tabClick" ref="tabControl"/>
    </van-sticky>
    <!-- 商品列表区域 -->
    <goods-list
      :goodsList="showGoodsList"
      @pullingup="loadMore"
      ref="goodsList"
    />
    <!-- 返回顶部 -->
    <back-top @click.native="backTop" ref="backTop" />
  </div>
</template>

<script>
import { getHomeMultiData, getHomeData } from "network/home";

import Swiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import FeatureView from "./childComps/FeatureView";
import HomeTabControl from "./childComps/HomeTabControl";
import GoodsList from "components/content/goodsList/GoodsList";

import BackTop from "components/common/BackTop";

export default {
  components: {
    Swiper,
    HomeRecommend,
    FeatureView,
    HomeTabControl,
    GoodsList,
    BackTop,
  },
  name: "Home",
  data() {
    return {
      isLoading: false,
      banner: [],
      recommend: [],
      goodsList: {
        pop: { page: 1, list: [] },
        sell: { page: 1, list: [] },
        new: { page: 1, list: [] },
      },
      currentType: "pop",
      saveY: 0,
    };
  },
  created() {
    this.getHomeMultiData();

    this.getHomeData("pop");
    this.getHomeData("new");
    this.getHomeData("sell");
  },
  computed: {
    //点击tab选项卡显示的数据发给goodsList组件
    showGoodsList() {
      return this.goodsList[this.currentType].list;
    },
  },
  methods: {
    //下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        //刷新当前页面
        location.reload();
      }, 1000);
    },
    //点击tab栏切换列表数据
    tabClick(item) {
      if (item === "流行") {
        this.currentType = "pop";
        scrollTo(0, this.$refs.goodsList.$el.offsetTop);
      } else if (item === "精选") {
        this.currentType = "sell";
        scrollTo(0, this.$refs.goodsList.$el.offsetTop);
      } else {
        this.currentType = "new";
        scrollTo(0, this.$refs.tabControl.$el.offsetTop);
      }
    },
    //上拉加载更多
    loadMore() {
      this.getHomeData(this.currentType);
    },
    //返回顶部
    backTop(e) {
      window.scrollTo(0, 0);
    },

    //网路请求相关的方法
    //获取主页轮播图和recommend区域数据
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    //获取商品数据数据
    getHomeData(type) {
      getHomeData(type, this.goodsList[type].page).then((res) => {
        this.goodsList[type].list.push(...res.data.list);
        this.goodsList[type].page += 1;
      });
    },
  },
};
</script>

<style lang="less">
.title {
  background-color: #fd82c1;
}
</style>