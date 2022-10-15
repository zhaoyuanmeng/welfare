<template>
  <div class="main">
    <div class="header"></div>
    <div class="content">
      <div>个人中心</div>
    </div>
    <!-- 这里可以弄路由 -->
    <div class="footer">
      <van-tabbar route>
        <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="friends-o" replace to="/m_data"
          >数据展示</van-tabbar-item
        >
        <van-tabbar-item icon="setting-o" replace to="/m_login"
          >个人中心</van-tabbar-item
        >
      </van-tabbar>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
