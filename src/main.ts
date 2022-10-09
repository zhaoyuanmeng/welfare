import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router"; // 创建vue实例
const app = createApp(App);

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css"; // or 'ant-design-vue/dist/antd.less'

app.use(Antd); // 全局挂在antd
app.use(router); // 挂载路由
app.use(store); // 挂载pinia
app.mount("#app");
