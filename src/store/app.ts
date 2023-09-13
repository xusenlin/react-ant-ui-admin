import { create } from "zustand";
import { storagePrefixKey } from "@/config/app.ts"
import { persist } from 'zustand/middleware'

export type MenuType = {
  label: string,
  path: string,
  icon?: string,
  children?: MenuType[],
}

export interface IMenuState {
  menu: MenuType[];
  // increment: () => void;
  // decrement: () => void;
}





export const useMenuStore = create<IMenuState>(
    persist(
        (set, get):IMenuState => ({
          menu: [
            {
              label: "仪表盘",
              path: "/dashboard",
              icon:"HomeOutlined"
            },
            {
              label: "Demo",
              path: "/demo",
              icon:"GithubOutlined",
              children:[
                {
                  label: "仪表盘",
                  path: "/demo/dashboard",
                  icon:"HomeOutlined",
                },
              ]
            }
          ],
          // addABear: () => set({ bears: get().bears + 1 }),
        }),
        {name: storagePrefixKey + "Menu"}
    )
);


