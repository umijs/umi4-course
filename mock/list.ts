import mockjs from "mockjs";

export default {
  "GET /api/list": mockjs.mock({
    success: true,
    "data|10": [
      {
        id: "@id",
        title: "@name",
        description: "@cparagraph(2)",
      },
    ],
  }),
};
