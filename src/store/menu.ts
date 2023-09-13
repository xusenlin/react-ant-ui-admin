import { create } from "zustand";

export type MenuType = {
  label: string,
  path?: string,
  icon?: string,
  children?: MenuType[],
}

export interface IMenuState {
  menu: MenuType[];
  // increment: () => void;
  // decrement: () => void;
}



export const useMenuStore = create<IMenuState>(
    (set, get):IMenuState => ({
      menu: [
        {
          label: "仪表盘",
          path: "/dashboard",
          icon:"HomeOutlined"
        },
        {
          label: "仪表盘2",
          path: "/dashboard2",
          icon:"HomeOutlined"
        },
        {
          label: "Demo",
          icon:"GithubOutlined",
          children:[
            {
              label: "Demo2",
              children:[
                {
                  label: "Demo2",
                  path: "/demo",
                  icon:"HomeOutlined",
                },
              ],
              icon:"HomeOutlined",
            },
            {
              label: "仪表盘X",
              path: "/dashboard2",
              icon:"HomeOutlined"
            },
          ]
        }
      ],
      // addABear: () => set({ bears: get().bears + 1 }),
    })
);


