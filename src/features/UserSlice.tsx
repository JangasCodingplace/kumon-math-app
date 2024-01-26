import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'Userid',
  initialState: {
    value: "idid"
  },
  reducers: {
    user: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value ="1010"
    },
    decrement: state => {
      state.value =="id"
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = UserSlice.actions

export default UserSlice.reducer