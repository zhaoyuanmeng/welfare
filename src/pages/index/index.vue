<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div class="test">
        <Carousel
          :autoplay="true"
          :duration="2000"
          :initIndex="2"
          :direction="true"
          directionMode="hover"
          :directionSize="20"
          directionColor="skyblue"
          :indicator="true"
          indicatorMode="always"
          indicatorColor="white"
          indicatorActiveColor="skyblue"
          @before-moving="beforeMoving"
          @after-moving="afterMoving"
        >
          <CarouselItem
            v-for="(item, index) in state.data"
            :key="index"
            :idx="index"
          >
            <img :src="item" />
          </CarouselItem>
        </Carousel>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      The government Design ©2022 By 赵元达&何宇
    </a-layout-footer>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import swiper from "@/components/swipper/swiper.vue";
export default defineComponent({
  components: {
    swiper,
  },
  setup() {
    const state = reactive({
      data: [
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2F1208%2F1300%2Fntk-1300-31979.jpg&refer=http%3A%2F%2Fimg2.niutuku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667910998&t=c4457da52a74709a44b4c30fedc8ac34",
        "https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1665421200&t=e27eb9d3e19f9d79609023bcd4fc4505",
        "https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1665421200&t=e27eb9d3e19f9d79609023bcd4fc4505",
      ],
    });
    function beforeMoving(dir: { index: number; direction: string }) {
      // console.log("before", dir);
    }
    function afterMoving(dir: { index: number; direction: string }) {
      // console.log("after", dir);
    }
    return {
      selectedKeys: ref<string[]>(["2"]),
      beforeMoving,
      afterMoving,
      state,
    };
  },
});
</script>
<style scoped>
@import "./index.css";
</style>
