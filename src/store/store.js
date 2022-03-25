import { configureStore } from "@reduxjs/toolkit";
import { propertiesApi } from "../services/propertiesApi";

const store = configureStore({
  reducer: {
    [propertiesApi.reducerPath]: propertiesApi.reducer,
  },
});

export default store;
