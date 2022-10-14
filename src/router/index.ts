import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { mobileRouter, pcRouter } from "./config";

const routes: Array<RouteRecordRaw> = [...mobileRouter, ...pcRouter];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 这里面需要加一个钩子函数

export default router;
