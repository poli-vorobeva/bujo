import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { requestCanvasChart } from "../request/requestCanvasChart";
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
  "canvasDataChart",
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

const canvasCharSlice = createSlice({
  name: "data",
  initialState,
  // reducers:{
  //     auth: {
  //         reducer: (state, action: PayloadAction<IUser2>)=>{
  //                 state.user.name = action.payload.name;
  //                 state.user.password =  action.payload.password;
  //                 state.user.id = action.payload.id;
  //             },
  //         prepare: (data:IUser1)=>{
  //             const id = 'fff';
  //             return {payload:{id, name: data.name, password: data.password}, type:'AUTH'}
  //         }},
  //         reg: {
  //             reducer: (state, action: PayloadAction<IUser2>)=>{
  //                     state.user.name = action.payload.name;
  //                     state.user.password =  action.payload.password;
  //                     state.user.id = action.payload.id;
  //                 },
  //             prepare: (data:IUser1)=>{
  //                 const id = 'fff';
  //                 return {payload:{id, name: data.name, password: data.password}, type:'AUTH'}
  //             }},
  // }
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getCanvasData.fulfilled, (state, action) => {
      state.data = action.payload.data;
    }),
      builder.addCase(getCanvasData.rejected, (state, action) => {
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
