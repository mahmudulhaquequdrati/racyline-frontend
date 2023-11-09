import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import appointmentSlice from "../features/appointment/appointmentSlice";
import authSlice from "../features/auth/authSlice";
import availabilitiesSlice from "../features/availabilities/availabilitiesSlice";
import { vetListApi } from "../features/vetLists/vetLists";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    vetLists: vetListApi,
    appointment: appointmentSlice,
    availabilities: availabilitiesSlice,
  },
  devTools: import.meta.env.MODE !== "production",
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware);
  },
});
