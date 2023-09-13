import React from 'react';
import {Breadcrumb} from 'antd';
import {MenuType, useMenuStore} from "@/store/menu.ts"
import {useLocation} from "react-router-dom";

const getMenuMap = (menu: MenuType[], val = [])=> {
  let map = {};
  let childrenMap = {}
  for (const item of menu) {
    const {path, label, children} = item
    const d = [...val, {title:label, path}]
    if (path && !children) {
      map[path] = d;
    } else if (children) {
      childrenMap = getMenuMap(children, d)
    }
  }
  Object.assign(map, childrenMap)
  return map;
}

const App: React.FC = () => {
  const menu = useMenuStore((state) => state.menu)
  const menuMap = getMenuMap(menu)

  const location = useLocation()
  const breadcrumb = menuMap.hasOwnProperty(location.pathname) ? menuMap[location.pathname] : []
  return (
      <Breadcrumb items={breadcrumb}/>
  );
};

export default App;