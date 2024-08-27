import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../slices/dashboardSlice";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;