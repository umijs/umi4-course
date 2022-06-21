import React from "react";
import { List, Card, Typography, Button, Avatar } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useRequest, request } from "umi";

const { Paragraph } = Typography;

const ListCard = () => {
  const { data, loading } = useRequest(() => request("/api/list"));
  console.log(data);
  if (loading) return <div>loading</div>;
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
      dataSource={[{}, ...data?.data]}
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
