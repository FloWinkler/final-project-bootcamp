import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./slices/booking";
import authReducer from "./slices/auth";

export default configureStore({
  reducer: {
    booking: bookingReducer,
    auth: authReducer,
  },
});
