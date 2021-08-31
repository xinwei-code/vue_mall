<template>
  <div class="recommend-info">
      <span>热门推荐</span>
      <slot></slot>
  </div>
</template>

<script>
export default {
name:'DetailRecommendInfo'
}
</script>

<style lang="less" scoped>
.recommend-info{
    padding: 10px;
}
</style>