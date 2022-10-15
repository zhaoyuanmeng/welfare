import { createRouter, createWebHistory } from "vue-router";

import { mobileRouter, pcRouter } from "./config";
import { isMobile } from "@/utils/index";
const router = createRouter({
  history: createWebHistory(),

  routes: isMobile() ? mobileRouter : pcRouter,
});

export default router;
