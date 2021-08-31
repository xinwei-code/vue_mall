<template>
  <div class="comment-info">
    <!-- 顶部导航 -->
    <div class="comment-nav">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <!-- 用户评价信息区域 -->
    <div class="user-comment">
      <div class="user-avatar" v-if="commentInfo.user">
        <img :src="commentInfo.user.avatar" alt="" />
        <span class="username">{{ commentInfo.user.uname }}</span>
      </div>
      <div class="comment-content">
        <p>{{ commentInfo.content }}</p>
        <div class="extraInfo">
          <van-tag
            size="medium"
            text-color="#333333"
            type="warning"
            v-for="(item, index) in commentInfo.extraInfo"
            :key="index"
            >{{ item }}</van-tag
          >
        </div>
        <span>{{ commentTime }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    //转换评论时间的格式
    commentTime() {
      return dayjs(this.commentInfo.created * 1000).format('YYYY-MM-DD HH:mm:ss')
    },
  },
};
</script>

<style lang="less" scoped>
.comment-info {
  padding: 0 20px;
  border-bottom: 5px solid #f2f5f8;
}
.comment-nav {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.comment-nav span:first-child {
  font-size: 15px;
}
.comment-nav span:nth-child(2) {
  font-size: 13px;
  padding-right: 20px;
  color: #333333;
}

//三角形
.comment-nav span:nth-child(2)::before,
.comment-nav span:nth-child(2)::after {
  content: "";
  position: absolute;
  top: 16px;
  right: 0px;
  width: 0;
  height: 0;
  border: 7px solid transparent;
  border-left-color: #ccc;
}
.comment-nav span:nth-child(2)::after {
  right: 3px;
  border-left-color: #fff;
}

.user-comment {
  padding: 10px 0 30px 0;
}

.user-avatar {
  color: #333333;
  font-size: 15px;
}
.user-avatar img {
  width: 40px;
  border: 1px solid transparent;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}

.comment-content p {
  color: #777777;
  font-size: 14px;
}
.comment-content span {
  color: #999999;
  font-size: 12px;
  margin-right: 10px;
}
</style>