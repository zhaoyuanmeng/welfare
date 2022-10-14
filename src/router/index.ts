import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { mobileRouter, pcRouter } from "./config";

const routes: Array<RouteRecordRaw> = [...mobileRouter, ...pcRouter];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
