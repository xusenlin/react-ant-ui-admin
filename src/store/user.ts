import { create } from "zustand";

export type UserType = {
  name:string
  token:string
}



export interface IUserState {
  user: UserType;
  setUser: (user:UserType) => void;
}


const useUserStore = create<IUserState>((set):IUserState => ({
  user: {
    name:"Admin",
    token:""
  },
  setUser: (user) => set(() => ({ user: user })),
}));

