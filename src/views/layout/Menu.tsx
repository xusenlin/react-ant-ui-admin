import {Menu} from 'antd';
import React from 'react';
import { useNavigate,useLocation } from "react-router-dom"
import * as Icons from '@ant-design/icons';
import {MenuType, useMenuStore} from "@/store/menu.ts"


type MenuItem = {
  label: React.ReactNode,
  key: React.Key,
  type?:string,
  children?: MenuItem[],
  icon?: React.ReactNode,
}

const createIcon = name => (React.createElement(Icons[name]))
const buildMenu = (menu:MenuType[]):MenuItem[] => (menu.map(r=>{
  const { label,path,icon,children,type } = r
  let item = {label,key:path,type} as MenuItem
  if(icon){
    item.icon = createIcon(icon)
  }
  if (children && Array.isArray(children)){
    item.children = buildMenu(children)
  }
  return item
}))



const App: React.FC = () => {
  const menu = useMenuStore((state) => state.menu)
  const navigate = useNavigate()
  const location = useLocation()

  return (
      <Menu
          style={{border: "none"}}
          theme="light"
          defaultSelectedKeys={[location.pathname]}
          onClick={m=>navigate(m.key)}
          mode="inline"
          items={buildMenu(menu)}/>
  );
};

export default App;
