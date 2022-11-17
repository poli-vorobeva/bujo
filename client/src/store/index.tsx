import userData from "../reducer/fetchUserData";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { userData },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export default store;
