/**
 * @author Zhao YuanDa
 * @parms:
 * @description: //手机端的路由配置
 * @date 2022-10-14 14:09
 */
export const mobileRouter = [
  {
    path: "/",
    name: "mIndex",
    meta: {
      title: "手机首页",
      keepAlive: true,
    },
    component: () => import("@/pages/m_index/index.vue"),
  },
  {
    path: "/m_login",
    name: "mLogin",
    meta: {
      title: "手机登录",
      keepAlive: true,
    },
    component: () => import("@/pages/m_login/index.vue"),
  },
  {
    path: "/m_data",
    name: "mData",
    meta: {
      title: "数据展示页",
      keepAlive: true,
    },
    component: () => import("@/pages/m_echarts/index.vue"),
  },
];
/**
 * @author Zhao YuanDa
 * @parms:
 * @description: //PC端
 * @date 2022-10-14 14:10
 */
export const pcRouter = [
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import("@/pages/login/index.vue"),
  },
  {
    path: "/",
    name: "Index",
    meta: {
      title: "首页",
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import("@/pages/index/index.vue"),
  },
];
