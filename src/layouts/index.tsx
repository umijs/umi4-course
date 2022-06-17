import {
  PieChartOutlined,
  UserOutlined,
  TableOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, Result, Button } from "antd";
import React, { useState, useEffect } from "react";
import { Outlet, useAppData, useNavigate, useLocation } from "umi";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const menuHash: any = {
  "/": {
    label: "首页",
    icon: <PieChartOutlined />,
  },
  user: {
    label: "用户",
    icon: <UserOutlined />,
  },
  listcard: {
    label: "卡片列表",
    icon: <TableOutlined />,
  },
};

const unaccessible = ["/hooks", "/useEffect", "/usemodel", "/useState"];

const getItem = (path: string, children?: MenuItem[]) => {
  const route = menuHash[path];
  return {
    key: path.startsWith("/") ? path : `/${path}`,
    icon: route?.icon || <></>,
    children,
    label: route?.label || path,
  } as MenuItem;
};

const routesToMenu = (routes: any[]): MenuItem[] => {
  return routes
    .filter((i) => {
      const path = i.path.startsWith("/") ? i.path : `/${i.path}`;
      return !unaccessible.includes(path);
    })
    .map((route) => {
      const { path, children } = route;
      if (children) {
        return getItem(path, routesToMenu(children));
      }
      return getItem(path);
    });
};

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const { clientRoutes } = useAppData();
  const { children } = clientRoutes[0];
  const items = routesToMenu(children);

  if (unaccessible.includes(location.pathname)) {
    return (
      <Result
        status="403"
        title="403"
        subTitle="抱歉，你没有权限访问这个页面！"
        extra={
          <Button type="primary" onClick={() => navigate(-1)}>
            返回上一个页面
          </Button>
        }
      />
    );
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: "32px",
            margin: "16px",
            color: "#fff",
            textAlign: "center",
            fontSize: "16px",
          }}
        >
          Umi 4
        </div>
        <Menu
          theme="dark"
          onClick={(e) => {
            navigate(e?.key);
          }}
          defaultSelectedKeys={[location.pathname]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Umi@4 实战小册 Created by xiaohuoni
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
