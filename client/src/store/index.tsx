import userData from "../reducer/fetchUserData";
import canvasDataChart from "../reducer/canvasChartData";
import habbitsData from "../reducer/habbitsData";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { userData, canvasDataChart, habbitsData },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export default store;
