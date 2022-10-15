import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { mobileRouter, pcRouter } from "./config";
import { isMobile } from "@/utils/index";

// const routes: Array<RouteRecordRaw> = [...mobileRouter, ...pcRouter];
console.log("aaaaaaaa", isMobile());

const router = createRouter({
  history: createWebHistory(),

  routes: isMobile() ? mobileRouter : pcRouter,
});

// 这里面需要加一个钩子函数

export default router;
