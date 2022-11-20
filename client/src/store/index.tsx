import userData from "../reducer/fetchUserData";
import canvasDataChart from "../reducer/canvasChartData";

import { configureStore } from "@reduxjs/toolkit";
import {typeDataForCanvasChart} from "../dto";

export type stateType={
  userData: { email: string;  name: string; password: string; }
  canvasDataChart: { data: typeDataForCanvasChart }
}
const store = configureStore({
  reducer: { userData, canvasDataChart },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export default store;
