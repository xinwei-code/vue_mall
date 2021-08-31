<template>
  <div id="cart">
    <!-- 顶部tab栏区域 -->
    <van-nav-bar>
      <template slot="title">
        <span>购物车({{ goodsNum }})</span>
      </template>
    </van-nav-bar>

    <!-- 商品卡片区域 -->
    <van-list>
      <van-card
        v-for="(item, index) in cartList"
        :key="index"
        :num="item.count"
        :price="item.price"
        :desc="item.desc"
        :title="item.title"
        :thumb="item.image"
      >
        <template #footer>
          <van-checkbox
            checked-color="#ee0a24"
            v-model="item.checked"
            icon-size="18px"
            @click="checkOne(item)"
          ></van-checkbox>
        </template>
      </van-card>
    </van-list>

    <!-- 底部提交订单区域 -->
    <van-submit-bar :price="totalPrice" button-text="提交订单">
      <van-checkbox
        checked-color="#ee0a24"
        v-model="isSelectAll"
        @click="checkBtnClick"
        >全选</van-checkbox
      >
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      isSelectAll: true,
    };
  },
  computed: {
    goodsNum() {
      return this.$store.getters.cartCount;
    },
    cartList() {
      return this.$store.getters.cartList;
    },
    totalPrice() {
      const cartList = this.$store.getters.cartList;
      return (
        cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.count * item.price;
          }, 0) * 100
      );
    },
  },
  methods: {
    //单选同步多选
    checkOne(item) {
      console.log(item);
      const ischeckedAll =
        this.cartList.find((item) => item.checked == false) === undefined;
      if (ischeckedAll) {
        //找不到未勾选的这一项
        this.isSelectAll = item.checked;
      } else {
        this.isSelectAll = ischeckedAll.checked;
      }
    },
    // 多选同步单选
    checkBtnClick() {
      this.cartList.forEach((item) => {
        item.checked = this.isSelectAll;
        console.log(item.price);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: #fd5732;
}
.van-nav-bar span {
  font-weight: 700;
  color: #fff;
}
.van-checkbox {
  float: right;
}
</style>