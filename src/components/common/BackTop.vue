<template>
  <div class="back-top">
      <img src="~assets/img/backTop.png" alt="">
  </div>
</template>

<script>
export default {
name:'BackTop'
}
</script>

<style lang="less" scoped>
.back-top {
    position: fixed;
    top: 550px;
    right: 20px;
    z-index: 1;
    img{
        width: 40px;
    }
}
</style>