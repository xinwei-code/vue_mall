<template>
  <div class="recommend-list">
    <recommend-list-item
      :goods="item"
      v-for="(item, index) in recommendInfo"
      :key="index"
      :infoItem="item"
    />
  </div>
</template>

<script>
import RecommendListItem from "./RecommendListItem";
export default {
  name: "RecommendList",
  props: ["recommendInfo"],
  components: {
    RecommendListItem,
  },

};
</script>

<style scoped>
.recommend-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}
</style>