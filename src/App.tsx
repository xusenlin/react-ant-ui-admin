import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import logo from "@/assets/img/min-logo.png"
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider  width={260} style={{background: colorBgContainer,  overflow: "hidden" }} collapsedWidth={60} breakpoint={"lg"} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo-vertical">
            <img src={logo} style={{width:20}} alt="logo"/>
             药企表单系统 V1
          </div>
          <Menu style={{border:"none"}} theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout>
          <Header style={{ height:60, padding: 0, background: colorBgContainer,borderBottom:"1px solid #f5f5f5" }}>
           <div style={{display:"flex",justifyContent:'space-between',padding:16,alignItems:"center",height: "100%"}}>
             <Breadcrumb>
               <Breadcrumb.Item>User</Breadcrumb.Item>
               <Breadcrumb.Item>Bill</Breadcrumb.Item>
             </Breadcrumb>
             <div></div>
           </div>
          </Header>
          <Content style={{ margin: '16px' }}>
            <div className="main-content" style={{ background: colorBgContainer }}>
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ padding:0,height:48,background:"#fff",display:"flex",justifyContent:"center",alignItems:"center" }}>BERRY ©2023 </Footer>
        </Layout>
      </Layout>
  );
};

export default App;
