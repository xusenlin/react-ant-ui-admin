import React from 'react';
import {Layout,Button,Dropdown, Space} from 'antd';
import logo from "@/assets/img/logo.svg";
import {appName} from "@/config/app.ts";
import type { MenuProps } from 'antd';
import { MenuFoldOutlined,MenuUnfoldOutlined,DownOutlined,LogoutOutlined,UserOutlined } from '@ant-design/icons';


import {useAppStore} from "@/store/app.ts";

const { Header } = Layout;



const items : MenuProps['items'] = [
  {
    label: (
        <div>
          个人中心
        </div>
    ),
    icon:<UserOutlined />,
    key: '0',
  },
  {
    label: (
        <div>
          退出登录
        </div>
    ),
    icon:<LogoutOutlined />,
    key: '1',
  }
];




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
          <Space className="header-action">
            <Button type="text" onClick={()=>{setCollapsed(!collapsed)}} shape="circle" icon={collapsed?<MenuUnfoldOutlined/>:<MenuFoldOutlined />} />
          </Space>

        </div>
        <div className="header-right">
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Admin
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </Header>
  )
}


export default App;
