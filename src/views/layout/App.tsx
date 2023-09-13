import React, { useState } from 'react';
import logo from "@/assets/img/min-logo.png"
import { appName } from "@/config/app.ts"
import {  Layout, theme } from 'antd';
import Menu from "./Menu.tsx"
import Breadcrumb from "./Breadcrumb.tsx"
import {Outlet} from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider  width={220} style={{background: colorBgContainer,  overflow: "hidden" }} collapsedWidth={60} breakpoint={"lg"} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo-vertical">
            <img src={logo} style={{width:20}} alt="logo"/>
            { !collapsed && <div className="site-title">{appName}</div>}
          </div>
          <Menu />
        </Sider>
        <Layout>
          <Header style={{ height:60, padding: 0, background: colorBgContainer,borderBottom:"1px solid #f5f5f5" }}>
           <div style={{display:"flex",justifyContent:'space-between',padding:16,alignItems:"center",height: "100%"}}>
             <Breadcrumb/>
             <div></div>
           </div>
          </Header>
          <Content style={{ margin: '16px' }}>
            <div className="main-content" style={{ background: colorBgContainer }}>
              <Outlet />
            </div>
          </Content>
          <Footer style={{ padding:0,height:48,background:"#fff",display:"flex",justifyContent:"center",alignItems:"center" }}>XuSenLin ©2023 </Footer>
        </Layout>
      </Layout>
  );
};

export default App;
