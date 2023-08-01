import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Rooms from "./slices/hostelRoomsSlice";

const store = configureStore({
  reducer: combineReducers({
    Rooms,
  }),
});

export const { dispatch, getState } = store;
export default store;
