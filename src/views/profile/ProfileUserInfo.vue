<template>
  <div class="user-info">
    <div class="avatar">
      <img src="~assets/img/profile/avatar.png" alt="" />
    </div>
    <div class="user-operate">
      <div class="login">登录/注册</div>
      <div class="mobile-icon">暂无绑定手机号</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileUserInfo",
};
</script>

<style lang="less" scoped>
.user-info {
  position: relative;
  margin-top: -1px;
  background-color: #ff8198;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
}
.user-info::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: url(~assets/img/profile/arrow-right.png) no-repeat;
  background-size: 20px 20px;
}
.avatar {
  margin-left: 15px;
}
.avatar img {
  width: 65px;
  border-radius: 50%;
  border: 1px solid transparent;
}
.user-operate {
  text-align: left;
}
.login {
  margin-bottom: 5px;
}
.mobile-icon {
  font-size: 13px;
  position: relative;
  margin-left: 15px;
}
.mobile-icon::before {
  content: "";
  position: absolute;
  top: 0;
  left: -18px;
  width: 20px;
  height: 20px;
  background: url(~assets/img/profile/mobile-phone.png) no-repeat center;
  background-size: 20px 20px;
}
</style>