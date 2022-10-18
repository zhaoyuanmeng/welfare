<template>
  <div class="main-search" v-show="isShow">
    <div class="search-input">
      <van-nav-bar
        left-text="返回"
        left-arrow
        @click-left="downShow"
        style="height: 50px"
      >
        <template #title>
          <van-search
            v-model="searchVal"
            placeholder="请输入搜索关键词"
            shape="round"
          />
        </template>
      </van-nav-bar>
    </div>
    <div class="search-content">
      <div class="zujian">
        <div class="title">搜索指定板块</div>
        <div class="content fl">
          <div class="item">123</div>
          <div class="item">123</div>
          <div class="item">123</div>
          <div class="item">123</div>
          <div class="item">123</div>
        </div>
      </div>
      <div>
        <searchItem isFlex>
          <template #title>test1 </template>
          <template #content>
            <div>123</div>
            <div>123</div>
            <div>12sss3</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
          </template>
        </searchItem>
      </div>
      <div>
        <searchItem isFlex>
          <template #title> test2 </template>
          <template #content>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
          </template>
        </searchItem>
      </div>
      <div v-if="flag">主动搜索出来的板块</div>
      <div v-if="data.length > 0">姓名----{{ data[0].name }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import searchItem from "../common/searchItem/searchItem.vue";

let isShow = ref(false);
let searchVal = ref("");
let flag = ref(false);
let test = ref(false);
let data = ref<any[]>([]);
const toShow = () => {
  isShow.value = true;
};
const downShow: any & MouseEvent = () => {
  isShow.value = false;
};
const getList = () => {
  if (searchVal.value == "a") {
    data.value = [{ name: "zyd" }, { name: "zzz" }];
  } else {
    data.value = [];
  }
};
flag = computed(() => {
  // 这里面可以去请求接口
  getList();
  return searchVal.value.length > 0;
});

defineExpose({
  toShow,
  downShow,
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
