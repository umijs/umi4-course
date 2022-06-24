import { defineConfig } from "umi";

export default defineConfig({
  // 最终值在插件中设置，所以这里不用写
  //   title: "Hello Umi",
  plugins: [
    require.resolve("@umijs/plugins/dist/model"),
    require.resolve("@umijs/plugins/dist/antd"),
    require.resolve("@alita/plugins/dist/request"),
    require.resolve("@alita/plugins/dist/dva"),
    require.resolve("@umijs/max-plugin-openapi/dist/openapi"),
  ],
  model: {},
  request: {},
  dva: {
    enableModelsReExport: {},
  },
  antd: {},
  openAPI: {
    // 这里使用服务端提供的url
    schemaPath:
      "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json",
    mock: true,
  },
});
