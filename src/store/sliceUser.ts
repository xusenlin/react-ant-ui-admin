import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type User = {
  access_token: string
  expires_in?: number
  userId: string
  token_type?: string
  username: string
}

export type UserStore = {
  user: User | null,
  permission: string[]
}

const initialState: UserStore = {
  user: null,
  permission: []
}
const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setPermission(state, action: PayloadAction<string[]>) {
      state.permission = action.payload
    }
  },
});

export const userReducer = userSlice.reducer

export const {
  setPermission,
} = userSlice.actions

