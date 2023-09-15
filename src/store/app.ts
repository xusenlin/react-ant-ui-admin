import { create } from "zustand";
import { storagePrefixKey } from "@/config/app.ts"
import { persist } from 'zustand/middleware'



export interface AppType {
  collapsed: boolean;
  setCollapsed: (val:boolean) => void;
  // decrement: () => void;
}





export const useAppStore = create<AppType>(
    persist(
        (set, get):AppType => ({
          collapsed:true,
          setCollapsed: (val) => set({ collapsed: get().collapsed = val }),
        }),
        {name: storagePrefixKey + "App"}
    )
);


