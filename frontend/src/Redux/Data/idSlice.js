import { createSlice } from "@reduxjs/toolkit";

const idSlice = createSlice({
  name: "id",
  initialState: null,  
  reducers: {
    setId: (state, action) => action.payload,
    clearId: () => null,  
  },
});

export const { setId, clearId } = idSlice.actions;
export default idSlice.reducer;
