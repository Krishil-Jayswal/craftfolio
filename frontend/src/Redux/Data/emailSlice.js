import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
  name: "email",
  initialState: null,  
  reducers: {
    setEmail: (state, action) => action.payload,
    clearEmail: () => null,  
  },
});

export const { setEmail, clearEmail } = emailSlice.actions;
export default emailSlice.reducer;
