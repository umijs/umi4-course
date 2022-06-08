import { IApi } from "umi";

export default (api: IApi) => {
  // 通过插件设置环境变量
  // process.env.COMPRESS = "none";

  // 通过插件修改配置
  api.modifyConfig((memo: any) => {
    memo.title = "Hello Umi";
    return memo;
  });
};
