import userData from "../reducer/fetchUserData";
import canvasDataChart from "../reducer/canvasChartData";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { userData, canvasDataChart },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export default store;
