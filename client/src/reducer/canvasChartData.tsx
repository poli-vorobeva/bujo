import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  requestCanvasChart,
  requestCanvasChartChange,
} from "../request/requestCanvasChart";
import { requestReg } from "../request/requestReg";
import { typeDataForChart } from "../components/chartComponents/mockData";

const initialState = {
  data: {},
};
interface IDataChart {
  data: typeDataForChart;
}

///const dispatch = useDispatch<AppDispatch>();
export interface IUser {
  email: string;
}

export const getCanvasData = createAsyncThunk(
  "getCanvasDataChart",
  async ({ email }: IUser, thunkAPI) => {
    const response = await requestCanvasChart(email);
    if (response.status === "ok") {
      return {
        data: response.data,
      };
    }
    throw new Error("false data");
  }
);

export interface IDataChange {
  day: string;
  timeFrom: number;
  timeTo: number;
}

export const changeCanvasData = createAsyncThunk(
  "changeCanvasDataChart",
  async ({ day, timeFrom, timeTo }: IDataChange, thunkAPI) => {
    const response = await requestCanvasChartChange({ day, timeFrom, timeTo });
    if (response.status === "ok") {
      return {
        data: response.data,
      };
    }
    throw new Error("false data");
  }
);

const canvasCharSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getCanvasData.fulfilled, (state, action) => {
      state.data = action.payload.data;
    }),
      builder.addCase(getCanvasData.rejected, (state, action) => {
        console.log("err");
      });
    builder.addCase(changeCanvasData.fulfilled, (state, action) => {
      state.data = action.payload.data;
    }),
      builder.addCase(changeCanvasData.rejected, (state, action) => {
        console.log("err");
      });
  },
});

const { actions, reducer } = canvasCharSlice;

export default reducer;

function useSelector() {
  throw new Error("Function not implemented.");
}
//export const { auth, reg } = actions;
