import { defineConfig } from "umi";

export default defineConfig({
  // 最终值在插件中设置，所以这里不用写
  //   title: "Hello Umi",
  plugins: [
    require.resolve("@umijs/plugins/dist/model"),
    require.resolve("@umijs/plugins/dist/antd"),
    require.resolve("@alita/plugins/dist/request"),
  ],
  model: {},
  request: {},
  antd: {},
});
