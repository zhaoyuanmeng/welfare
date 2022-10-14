import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
const app = createApp(App);

import { config } from "./config/index";
import "ant-design-vue/dist/antd.css";
import "vant/lib/index.css";
app.use(router); // 挂载路由
app.use(store); // 挂载pinia
app.use(config); // 加载UI配置
app.mount("#app");
