import React from 'react';

import {  Layout, theme } from 'antd';
import Menu from "./Menu.tsx"
import Header from "./Header.tsx"
import {Outlet} from "react-router-dom";
import {useAppStore} from "@/store/app.ts";

const { Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const collapsed = useAppStore((state) => state.collapsed)

  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
      <Layout style={{ display:"flex",flexDirection:"column" }}>
        <Header />
        <Layout style={{ background: colorBgContainer }}>
          <Sider
              width={300}
              className="sider"
              style={{background: colorBgContainer }}
              collapsedWidth={60}
              breakpoint={"lg"}
              collapsed={collapsed}>
            <Menu />
          </Sider>
          <Layout>
            <Content style={{ background: colorBgContainer }}>
              <div className="main-content" >
                <Outlet />
              </div>
            </Content>
            {/*<Footer style={{ padding:0,height:48,background:"#fff",display:"flex",justifyContent:"center",alignItems:"center" }}>XuSenLin ©2023 </Footer>*/}
          </Layout>
        </Layout>

      </Layout>
  );
};

export default App;
