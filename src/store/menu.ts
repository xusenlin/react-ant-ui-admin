import {create} from "zustand";

export type MenuType = {
  label: string,
  path?: string,
  type?: string,
  icon?: string,
  children?: MenuType[],
}

export interface IMenuState {
  menu: MenuType[];
  // increment: () => void;
  // decrement: () => void;
}


export const useMenuStore = create<IMenuState>(
    (set, get): IMenuState => ({
      menu: [
        {
          label: "仪表盘",
          path: "/dashboard",
          icon: "HomeOutlined"
        },
        {
          type: 'group',
          label: "Demo",
          children: [
            {
              label: "分析数据",
              path: "/demo",
              icon: "FundOutlined"
            },
            {
              label: "文章管理",
              path: "/article",
              icon: "ApartmentOutlined",
              children: [
                {
                  label: "文章列表",
                  path: "/list",
                },
              ],
            },
          ]
        },
        {
          type: 'group',
          label: "Group",
          children: [
            {
              label: "公众号管理",
              path: "/dome2",
              icon: "RadarChartOutlined"
            },
            {
              label: "用户管理",
              path: "/dome3",
              icon: "UsergroupAddOutlined"
            },
          ]
        },
        {
          type: 'group',
          label: "Other",
          children: [
            {
              label: "测试菜单数据",
              path: "/dome4",
              icon: "DeleteOutlined"
            },
            {
              label: "市场工具",
              path: "/dome5",
              icon: "AntDesignOutlined"
            },
            {
              label: "Ai智能助手",
              path: "/dome6",
              icon: "HeatMapOutlined",
              children: [
                {
                  label: "支持多级菜单",
                  path: "/dome7",
                  icon: "AntDesignOutlined",
                  children: [
                    {
                      label: "子菜单",
                      path: "/dome9",
                      icon: "MenuFoldOutlined"
                    }
                  ]
                },
                {
                  label: "Icon 非必填",
                  path: "/dome22",
                },
              ]
            },
          ]
        },
      ],
      // addABear: () => set({ bears: get().bears + 1 }),
    })
);


