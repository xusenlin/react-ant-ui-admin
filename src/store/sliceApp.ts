import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type App = {
  menu: string[]
}


const initialState: App = {
  menu: []
}
const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setMenu(state, action: PayloadAction<string>) {
      state.menu = action.payload
    }
  },
});

export const appReducer = appSlice.reducer

export const {
  setMenu,
} = appSlice.actions

