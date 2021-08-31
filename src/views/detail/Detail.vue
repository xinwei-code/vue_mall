<template>
  <div id="detail">
    <!-- 导航栏区域 -->
    <van-sticky>
      <van-nav-bar left-arrow @click-left="onClickLeft">
        <template slot="title">
          <span
            v-for="(item, index) in title"
            :key="index"
            @click="tabClick(index)"
            :class="{ active: currentIndex === index }"
            >{{ item }}</span
          >
        </template>
      </van-nav-bar>
    </van-sticky>

    <!-- 轮播图区域 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in swiperImages" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>

    <!-- 精简商品信息区域 -->
    <detail-goods-info :goodsInfo="goodsInfo" :columns="columns" />

    <!-- 店铺信息 -->
    <detail-shop-info :shopInfo="shopInfo" />

    <!-- 详情信息 -->
    <detailInfo :detailInfo="detailInfo" />

    <!-- 商品参数信息 -->
    <detail-goods-params :paramInfo="paramInfo" ref="goodsParams" />

    <!-- 用户评论信息 -->
    <deatil-comment-info :commentInfo="commentInfo" ref="goodsComment" />

    <!-- 推荐商品信息 -->
    <detail-recommend-info>
      <recommend-list :recommendInfo="recommendInfo" ref="recommend" />
    </detail-recommend-info>

    <!-- 底部商品导航 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="cartClick" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="addToCart"
      />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailInfo from "./childComps/DetailInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DeatilCommentInfo from "./childComps/DeatilCommentInfo";
import DetailRecommendInfo from "./childComps/DetailRecommendInfo";
import DetailGoodsParams from "./childComps/DetailGoodsParams";

import RecommendList from "components/content/recommendList/RecommendList";

import { getDetailData, getRecommendData, GoodsParam } from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailGoodsInfo,
    DetailShopInfo,
    DetailInfo,
    DetailGoodsParams,
    DeatilCommentInfo,
    DetailRecommendInfo,
    RecommendList,
  },
  created() {
    this.getDetailData(this.$route.params.iid);
    this.getRecommendInfo();
  },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
      //轮播图图片
      swiperImages: [],
      //商品简略信息
      goodsInfo: {},
      //商品的销量和收藏人数
      columns: [],
      //店铺信息
      shopInfo: {},
      //详情信息
      detailInfo: {},
      //商品参数信息
      paramInfo: {},
      //评论信息
      commentInfo: {},
      //推荐商品信息
      recommendInfo: [],
    };
  },
  computed: {
    id() {
      return this.$route.params.iid;
    },
  },
  methods: {
    //点击回退页面
    onClickLeft() {
      this.$router.back();
    },
    //点击顶部tab栏切换样式
    tabClick(index) {
      this.currentIndex = index;
      switch (index) {
        case 0:
          scrollTo(0, 0);
          break;
        case 1:
          window.scrollTo(0, this.$refs.goodsParams.$el.offsetTop - 90);
          break;
        case 2:
          window.scrollTo(0, this.$refs.goodsComment.$el.offsetTop - 90);
          break;
        case 3:
          window.scrollTo(0, this.$refs.recommend.$el.offsetTop - 90);
          break;
        default:
          break;
      }
    },
    //点击前往购物车界面
    cartClick() {
      this.$router.push("/cart");
    },
    //点击加入购物车
    addToCart() {
      const obj = {};
      obj.image = this.swiperImages[0];
      obj.id = this.id;
      obj.title = this.goodsInfo.title;
      obj.desc = this.goodsInfo.desc;
      obj.price = this.goodsInfo.lowNowPrice;
      this.$store.dispatch("addcart", obj);

      this.$toast.success("加入购物车成功");
    },

    //获取详情页所有数据
    getDetailData(iid) {
      getDetailData(iid).then((res) => {
        const data = res.result;
        this.swiperImages = data.itemInfo.topImages;
        this.goodsInfo = data.itemInfo;
        this.columns = data.columns;
        this.shopInfo = data.shopInfo;
        this.detailInfo = data.detailInfo;
        this.goodsParamsInfo = data.itemParams.info.set;
        this.goodsParamsRules = data.itemParams.rule.tables[0];

        // 保存参数信息
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        //保存评论信息
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },

    getRecommendInfo() {
      getRecommendData().then((res) => {
        this.recommendInfo = res.data.list;
      });
    },
  },
};
</script>

<style lang="less" scoped>
#detail {
  padding-bottom: 40px;
}
.van-nav-bar span {
  padding: 0 13px;
  font-size: 14px;
}
.active {
  color: red;
}
.van-swipe-item {
  height: 300px;
}
.van-swipe-item img {
  width: 100%;
}
</style>