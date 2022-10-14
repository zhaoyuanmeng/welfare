import mobileConfig from "./mobile";
import pcConfig from "./pc";
// 这里面注入pc 和 mobile 的配置
export const config = {
  install(Vue: any) {
    Object.keys(mobileConfig).map((key: string) => {
      Vue.use(mobileConfig[key]);
    });
    Object.keys(pcConfig).map((key: string) => {
      Vue.use(pcConfig[key]);
    });
  },
};
