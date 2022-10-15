<template>
  <div class="main">
    <div class="header">
      <div class="header-search">
        <div class="logo">爱心公益</div>
        <div>
          <van-search
            background="rgb(248, 14, 33)"
            v-model="value"
            shape="round"
            placeholder="请输入搜索关键词"
          />
        </div>
        <div class="text">我的</div>
      </div>
    </div>
    <div class="content">
      <van-tabs v-model:active="active1">
        <van-tab v-for="index in 8" :title="'标签 ' + index">
          <!-- 这里面根据传入的东西来判断用啥组件 -->
          <div>
            <van-swipe :autoplay="3000" lazy-render class="my-swipe">
              <van-swipe-item v-for="image in images" :key="image" :width="300">
                <img :src="image" />
              </van-swipe-item>
            </van-swipe>
          </div>
        </van-tab>
      </van-tabs>
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
    <Import></Import>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// 引入组件
import Import from "../m_tabs/m_import/index.vue";

const active1 = ref(0);
const images = [
  "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
  "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
];
// 后期这里做成配置的 通过vuexs
const tabs = [
  {
    title: "",
  },
];

let value = ref("");
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
