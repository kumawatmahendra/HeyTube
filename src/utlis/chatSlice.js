import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    massage: []
  },
  reducers: {
    addMassage: (state, action) => {
      state.massage.splice(OFFSET_LIVE_CHAT, 1)
      state.massage.push(action.payload)
    }
  }
})
export const { addMassage } = chatSlice.actions
export default chatSlice.reducer