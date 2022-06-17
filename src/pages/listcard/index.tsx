import React from "react";
import { List, Card, Typography, Button, Avatar } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

const ListCard = () => {
  const list: any[] = [];
  for (let i = 1; i < 8; i += 1) {
    list.push({
      id: i,
      title: "卡片列表",
      description:
        "Umi@4 实战教程，专门针对中后台项目零基础的朋友，不管你是前端还是后端，看完这个系列你也有能力合理“抗雷”，“顶坑”",
    });
  }

  return (
    <List
      rowKey="id"
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4,
      }}
      dataSource={[{}, ...list]}
      renderItem={(item) => {
        if (item && item.id) {
          return (
            <List.Item key={item.id}>
              <Card
                hoverable
                actions={[
                  <a key="option1">操作一</a>,
                  <a key="option2">操作二</a>,
                ]}
              >
                <Card.Meta
                  avatar={
                    <Avatar
                      size={48}
                      src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
                    />
                  }
                  title={<a>{item.title}</a>}
                  description={
                    <Paragraph ellipsis={{ rows: 3 }}>
                      {item.description}
                    </Paragraph>
                  }
                />
              </Card>
            </List.Item>
          );
        }
        return (
          <List.Item>
            <Button type="dashed" style={{ width: "100%", height: "201px" }}>
              <PlusOutlined /> 新增产品
            </Button>
          </List.Item>
        );
      }}
    />
  );
};

export default ListCard;