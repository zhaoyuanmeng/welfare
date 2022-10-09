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
      <div class="test">Content</div>
      <div class="test">Content</div>
      <div class="test">Content</div>
      <div class="test">Content</div>
      <div class="test">Content</div>
      <div class="test">Content</div>
      <div class="test">Content</div>
      <div class="test">Content</div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      The government Design ©2022 By 赵元达&何宇
    </a-layout-footer>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    return {
      selectedKeys: ref<string[]>(["2"]),
    };
  },
});
</script>
<style scoped>
@import "./index.css";
</style>
