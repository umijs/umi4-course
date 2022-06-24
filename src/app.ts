import { request, getDvaApp } from "umi";

export function render(oldRender: any) {
  request("/api/accessible").then(({ data }) => {
    const app = getDvaApp();
    app?._store.dispatch({
      type: "global/save",
      payload: { unaccessible: data },
    });
  });
  oldRender();
}
