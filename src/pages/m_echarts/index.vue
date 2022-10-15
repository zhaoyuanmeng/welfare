<template>
  <div class="main">
    <div class="header">
      <van-search
        v-model="value"
        show-action
        background="rgb(248, 14, 33)"
        placeholder="请输入搜索关键词"
        @search="onSearch"
      >
        <template #action>
          <div @click="onClickButton">搜索</div>
        </template>
      </van-search>
    </div>
    <div class="content">
      <div>echarts数据</div>
    </div>
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

<script lang="ts" setup>
import { ref } from "vue";
import { Toast } from "vant";
const value = ref("");
const onSearch = (val: string) => Toast(val);
const onClickButton: any = () => Toast(value.value);
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
