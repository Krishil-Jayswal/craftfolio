import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "name",
  initialState: null,
  reducers: {
    setName: (state, action) => action.payload,
    clearName: () => null,  
  },
});

export const { setName, clearName } = nameSlice.actions;
export default nameSlice.reducer;
