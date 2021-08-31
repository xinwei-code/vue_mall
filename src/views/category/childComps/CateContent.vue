<template>
  <div class="cate-content">
    <div class="cate-content-side">
      <slot name="side"></slot>
    </div>
    <div class="cate-content-main">
      <slot name="main"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CateContent",
};
</script>

<style lang="less" scoped>
.cate-content {
  display: flex;
  margin-bottom: 100px;
}
.cate-content div:first-child{
    flex: 0.25;
}
</style>