import {appReducer, App} from "./sliceApp.ts";
import {configureStore} from '@reduxjs/toolkit';
import {userReducer, UserStore} from "./sliceUser.ts"

export type AsyncStatus = "loading" | "succeeded" | "failed"

export type State = {
  user: UserStore,//用户信息
  app: App,//系统信息
}

const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer
  }
});


export {store};
