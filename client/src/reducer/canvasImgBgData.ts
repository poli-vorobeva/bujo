import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  requestGetImagesData,
  requestAddImagesData,
  requestChangeImagesData,
  requestChangeBg,
} from "../request/requestCanvasImgBg";
import { IImagesArray, IIntStBgImg } from "../dto";

const initialState: IIntStBgImg = {
  data: {
    habbitImg: [],
    habbitBg: [],
  },
};

///const dispatch = useDispatch<AppDispatch>();
interface IUserEmail {
  email: string;
  type: string;
}

export const getImagesBgData = createAsyncThunk(
  "getImagesData",
  async ({ email, type }: IUserEmail, thunkAPI) => {
    const response = await requestGetImagesData(email, type);
    console.log("getImgDts", response);
    if (response.status === "ok") {
      return {
        data: response.data.data,
        type: response.data.type,
      };
    }
    throw new Error("false data");
  }
);

interface IAddImgBg {
  data: IImagesArray;
  type: string;
}

export const addImagesBgData = createAsyncThunk(
  "addImagesData",
  async ({ data, type }: IAddImgBg, thunkAPI) => {
    const response = await requestAddImagesData(data, type);
    if (response.status === "ok") {
      return {
        data: response.data.data,
        type: response.data.type,
      };
    }
    throw new Error("false data");
  }
);

export const changeImagesBgData = createAsyncThunk(
  "changeImagesBgData",
  async ({ data, type }: IAddImgBg, thunkAPI) => {
    const response = await requestChangeImagesData(data, type);
    console.log(response);
    if (response.status === "ok") {
      return {
        data: response.data.data,
        type: response.data.type,
      };
    }
    throw new Error("false data");
  }
);
export const changeBgData = createAsyncThunk(
  "changeBgData",
  async ({ data, type }: IAddImgBg, thunkAPI) => {
    const response = await requestChangeBg(data, type);
    console.log(response);
    if (response.status === "ok") {
      return {
        data: response.data.data,
        type: response.data.type,
      };
    }
    throw new Error("false data");
  }
);
const canvasImBgSlice = createSlice({
  name: "canvasImBgSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getImagesBgData.fulfilled, (state, action) => {
      const type = action.payload.type;
      state.data[type] = action.payload.data;
    }),
      builder.addCase(getImagesBgData.rejected, (state, action) => {
        console.log("err");
      });
    builder.addCase(addImagesBgData.fulfilled, (state, action) => {
      const type = action.payload.type;
      state.data[type] = action.payload.data;
    }),
      builder.addCase(addImagesBgData.rejected, (state, action) => {
        console.log("err");
      });
    builder.addCase(changeImagesBgData.fulfilled, (state, action) => {
      const type = action.payload.type;
      state.data[type] = action.payload.data;
    }),
      builder.addCase(changeImagesBgData.rejected, (state, action) => {
        console.log("err");
      });
    builder.addCase(changeBgData.fulfilled, (state, action) => {
      const type = action.payload.type;
      state.data[type] = action.payload.data;
    }),
      builder.addCase(changeBgData.rejected, (state, action) => {
        console.log("err");
      });
  },
});

const { actions, reducer } = canvasImBgSlice;

export default reducer;

//export const { auth, reg } = actions;
