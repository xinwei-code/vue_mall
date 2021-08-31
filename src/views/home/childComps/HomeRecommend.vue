<template>
  <div class="home-recommend">
      <div class="home-recommend-item" v-for="(item, index) in recommend" :key="index">
          <img :src="item.image" alt="">
          <span>{{item.title}}</span>
      </div>
  </div>
</template>

<script>
export default {
name:'HomeRecommend',
props:{
    recommend:{
        type:Array,
        default(){
            return []
        }
    }
}
}
</script>

<style lang="less" scoped>
.home-recommend{
    display: flex;
    flex-wrap: nowrap;
    text-align: center;
    color: #666666;
    font-size: 14px;
    margin-top: 15px;
    justify-content: space-around;
    padding-bottom: 25px;
    border-bottom: 10px solid #eeeeee;
    .home-recommend-item{
        width: 22%;
    }
}
.home-recommend-item img{
    width: 100%;
}
</style>