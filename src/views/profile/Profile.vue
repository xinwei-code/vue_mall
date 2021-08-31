<template>
  <div id="profile">
    <!-- 顶部区域 -->
    <profile-nav-bar />
    <!-- 用户登录/注册区域 -->
    <profile-user-info />
    <!-- 账户信息 -->
    <profile-account />
    <profile-list />
  </div>
</template>

<script>
import ProfileAccount from "./ProfileAccount";
import ProfileList from "./ProfileList";
import ProfileNavBar from "./ProfileNavBar";
import ProfileUserInfo from "./ProfileUserInfo";
export default {
  name: "Profile",
  components: { ProfileNavBar, ProfileUserInfo, ProfileAccount, ProfileList },
};
</script>

<style>
</style>