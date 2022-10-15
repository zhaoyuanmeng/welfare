<script setup lang="ts">
const images = [
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.616pic.com%2Fbg_w1180%2F00%2F01%2F13%2FyDwj2KVG5u.jpg&refer=http%3A%2F%2Fpic.616pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668400148&t=ba0c0f639d0fb68d1168b7d161744f07",
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.daimg.com%2Fuploads%2Fallimg%2F190723%2F1-1ZH3231P5.jpg&refer=http%3A%2F%2Fimg.daimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668400148&t=880f8cb7857b1d11e6ea72bfb32ed2de",
];
</script>

<template>
  <div>
    <div>
      <van-swipe :autoplay="3000" lazy-render class="my-swipe">
        <van-swipe-item v-for="image in images" :key="image" :width="300">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<style scoped>
@import "./index.scss";
</style>
