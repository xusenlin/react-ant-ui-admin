import React from 'react';
import {Layout,Button} from 'antd';
import logo from "@/assets/img/logo.svg";
import {appName} from "@/config/app.ts";
import { MenuFoldOutlined,MenuUnfoldOutlined } from '@ant-design/icons';
import Breadcrumb from "./Breadcrumb.tsx"
import {useAppStore} from "@/store/app.ts";

const { Header } = Layout;


const App: React.FC = () =>{

  const setCollapsed = useAppStore((state) => state.setCollapsed)
  const collapsed = useAppStore((state) => state.collapsed)

  return (
      <Header className="header">
        <div style={{display:"flex",alignItems:"center"}}>
          <div className="logo-vertical">
            <img src={logo} style={{width:20}} alt="logo"/>
            <div className="site-title">{appName}</div>
          </div>
          <div className="header-action">
            <Button type="text" onClick={()=>{setCollapsed(!collapsed)}} shape="circle" icon={collapsed?<MenuUnfoldOutlined/>:<MenuFoldOutlined />} />
            <Breadcrumb/>
          </div>

        </div>
        <div className="header-right">
          sdfs
        </div>

      </Header>
  )
}


export default App;
