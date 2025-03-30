import { configureStore } from "@reduxjs/toolkit";
import idReducer from "./Data/idSlice";
import nameReducer from "./Data/nameSlice";
import emailReducer from "./Data/emailSlice";
import tokenReducer from "./Data/tokenSlice";

export const store = configureStore({
  reducer: {
    id: idReducer,
    name: nameReducer,
    email: emailReducer,
    token : tokenReducer
  },
});
