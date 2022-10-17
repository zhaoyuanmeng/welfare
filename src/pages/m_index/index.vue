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
      <van-tabs v-model:active="activeName">
        <van-tab v-for="item in tabs" :title="item.title">
          <div v-if="item.name == 'Recommond'"><Recommond></Recommond></div>
          <div v-if="item.name == 'Impornent'"><Impornent></Impornent></div>
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
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
// 引入组件
import Impornent from "../m_tabs/m_import/index.vue";
import Recommond from "../m_tabs/m_recommond/index.vue";

const activeName = ref("impornent");

// 后期这里做成配置的 通过vuexs
const tabs = [
  {
    title: "推荐",
    name: "Recommond",
  },
  {
    title: "重要",
    name: "Impornent",
  },
  {
    title: "重要",
    name: "Impornent",
  },
  {
    title: "重要",
    name: "Impornent",
  },
  {
    title: "重要",
    name: "Impornent",
  },
  {
    title: "重要",
    name: "Impornent",
  },
  {
    title: "重要",
    name: "Impornent",
  },
  {
    title: "重要",
    name: "Impornent",
  },
  {
    title: "重要",
    name: "Impornent",
  },
  {
    title: "重要",
    name: "Impornent",
  },
];

let value = ref("");
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
