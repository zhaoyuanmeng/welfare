<template>
  <div class="main">
    <div class="header">
      <van-tabs v-model:active="active1">
        <van-tab v-for="index in 8" :title="'标签 ' + index">
          <div>内容部分</div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="content">
      <van-swipe :autoplay="3000" lazy-render class="my-swipe">
        <van-swipe-item v-for="image in images" :key="image" :width="300">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="footer">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const active = ref(0);
const active1 = ref(0);
const images = [
  "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
  "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
];
</script>

<style>
@import "./index.scss";
</style>
