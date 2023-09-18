import React from 'react';
import {Breadcrumb} from 'antd';
import {MenuType, useMenuStore} from "@/store/menu.ts"
import {useLocation} from "react-router-dom";


type MenuMap = {
  [path:string]:{title:string,path:string}[]
}

const getMenuMap = (menu: MenuType[], val = [],pPath=""):MenuMap=> {
  let map = {};
  let childrenMap = {}
  for (const item of menu) {
    const {path, label, children} = item
    let d = []
    let newPath = ""
    if(path){
      newPath = pPath + path
      d = [...val, {title:label, path:newPath}]
    }

    if (path && !children) {
      map[newPath] = d;
    } else if (children) {
      childrenMap = getMenuMap(children, d,newPath)
    }
  }
  Object.assign(map, childrenMap)
  return map;
}

const App: React.FC = () => {
  const menu = useMenuStore((state) => state.menu)
  const menuMap = getMenuMap(menu)

  const location = useLocation()
  console.log(menuMap)
  console.log(location.pathname)

  const breadcrumb = menuMap.hasOwnProperty(location.pathname) ? menuMap[location.pathname] : []
  return (
      <div className="breadcrumb">
        <Breadcrumb items={breadcrumb}/>
      </div>
  );
};

export default App;
