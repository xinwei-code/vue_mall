<template>
  <div id="category">
    <!-- 顶部标题区域 -->
    <van-nav-bar>
      <template slot="title">
        <span>商品分类</span>
      </template>
    </van-nav-bar>

    <!-- 主体区域-->
    <cate-content>
      <!-- 侧边栏 -->
      <cate-side-bar
        slot="side"
        :sideTitle="sideTitle"
        @getMainData="getMainData"
      />
      <!-- body区域 -->
      <cate-main
        slot="main"
        :mainList="mainList"
        @tabItemClick="tabItemClick"
        ref="cateMain"
      />
    </cate-content>
  </div>
</template>

<script>
import {
  getCategoryData,
  getSubcategoryData,
  getCategoryDetail,
} from "network/category";
import CateContent from "./childComps/CateContent";
import CateSideBar from "./childComps/CateSideBar";
import CateMain from "./childComps/CateMain";
export default {
  components: { CateContent, CateSideBar, CateMain },
  name: "Category",
  created() {
    this.getCategoryData();
    this.getMainData(this.maitKey, this.miniWallkey);
    this.getTabData(this.miniWallkey, "pop");
    this.getTabData(this.miniWallkey, "new");
    this.getTabData(this.miniWallkey, "sell");
  },
  data() {
    return {
      //侧边栏数据
      sideTitle: [],
      //默认请求参数
      maitKey: "3627",
      miniWallkey: "10062603",
      type: "pop",
      //主体部分数据
      mainList: [],
      //主体部分tabControl区域数据
      tabControlData: {
        pop: [],
        new: [],
        sell: [],
      },
    };
  },
  methods: {
    //监听孙组件的点击事件
    tabItemClick(type) {
      this.type = type;
      this.getTabData(this.miniWallkey, this.type);
      this.$forceUpdate()
    },

    //网路请求相关方法

    //获取侧边栏数据
    getCategoryData() {
      getCategoryData().then((res) => {
        this.sideTitle = res.data.category.list;
      });
    },
    //点击侧边栏
    getMainData(maitKey, miniWallkey) {
      this.maitKey = maitKey;
      this.miniWallkey = miniWallkey;
      //主体上半部分数据
      getSubcategoryData(maitKey).then((res) => {
        this.mainList = res.data.list;
      });
      this.getTabData(this.miniWallkey, this.type);
      this.$forceUpdate()
    },
    //获取下半部分数据
    getTabData(miniWallkey, type) {
      getCategoryDetail(miniWallkey, type).then((res) => {
        this.tabControlData[type] = res;
        this.$bus.$emit("tabData", this.tabControlData[type]);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: #ff8198;
  span {
    color: #fff;
    font-weight: 700;
  }
}
</style>