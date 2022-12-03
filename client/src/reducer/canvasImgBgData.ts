import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  requestGetImagesData,
  requestAddImagesData,
} from "../request/requestCanvasImgBg";
import {
  IImagesArray,
  IStateDataBgCanvas,
  ISettingImg,
  IDataBgCanvas,
} from "../dto";

const initialState: IStateDataBgCanvas = {
  data: {
    habbitImg: {
      pictures: [],
      setting: {
        opacity: 1,
        color: "#000000",
      },
    },
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
    if (response.status === "ok") {
      return {
        data: response.data.data,
        type: response.data.type,
      };
    }
    throw new Error("false data");
  }
);

interface IChangeImageData {
  data: IImagesArray;
  type: "habbitImg";
}

interface IAddImageBgData {
  data: IDataBgCanvas;
  type: "habbitImg";
}
export const addImagesBgData = createAsyncThunk(
  "addImagesData",
  async ({ data, type }: IAddImageBgData, thunkAPI) => {
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

// export const changeImagesBgData = createAsyncThunk(
//   "changeImagesBgData",
//   async ({ data, type }: IAddImgBg, thunkAPI) => {
//     const response = await requestChangeImagesData(data, type);
//     if (response.status === "ok") {
//       return {
//         data: response.data.data,
//         type: response.data.type,
//       };
//     }
//     throw new Error("false data");
//   }
// );

// export const deleteImagesBgData = createAsyncThunk(
//   "deleteImagesBgData",
//   async ({ data, type }: IAddImgBg, thunkAPI) => {
//     const response = await requestDeleteImagesData(data, type);
//     if (response.status === "ok") {
//       return {
//         data: response.data.data,
//         type: response.data.type,
//       };
//     }
//     throw new Error("false data");
//   }
// );
// export const changeBgData = createAsyncThunk(
//   "changeBgData",
//   async ({ data, type }: IAddImgBg, thunkAPI) => {
//     const response = await requestChangeBg(data, type);
//     if (response.status === "ok") {
//       return {
//         data: response.data.data,
//         type: response.data.type,
//       };
//     }
//     throw new Error("false data");
//   }
// );

interface IBgSetting {
  data: ISettingImg;
  type: "habbitImg";
}
// export const changeBgSetting = createAsyncThunk(
//   "changeBgSetting",
//   async ({ data, type }: IBgSetting, thunkAPI) => {
//     const response = await requestBgSetting(data, type);
//     if (response.status === "ok") {
//       return {
//         data: response.data.data,
//         type: response.data.type,
//       };
//     }
//     throw new Error("false data");
//   }
// );

const canvasImBgSlice = createSlice({
  name: "canvasImBgSlice",
  initialState,
  reducers: {
    addImagesToBg(state, action: PayloadAction<IChangeImageData>) {
      const type = action.payload.type;
      state.data[type].pictures.push(action.payload.data);
      // state.data.habbits.find(
      //   (it) => it.habbitId === action.payload.idHabbit
      // ).habbitName = action.payload.value;
    },
    changeImagesInBg(state, action: PayloadAction<IChangeImageData>) {
      const type = action.payload.type;
      state.data[type].pictures.find(
        (it) => it.id === action.payload.data.id
      ).coordinate = action.payload.data.coordinate;
    },
    changeBackgroundInBg(state, action: PayloadAction<IChangeImageData>) {
      const type = action.payload.type;
      state.data[type].pictures[0] = action.payload.data;
    },
    deleteImagesInBg(state, action: PayloadAction<IChangeImageData>) {
      const type = action.payload.type;
      state.data[type].pictures = state.data[type].pictures.filter(
        (it) => it.id != action.payload.data.id
      );
    },
    changeBgSetting(state, action: PayloadAction<IBgSetting>) {
      const type = action.payload.type;
      state.data[type].setting = action.payload.data;
    },
  },
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
      // const type = action.payload.type;
      // state.data[type] = action.payload.data;
    }),
      builder.addCase(addImagesBgData.rejected, (state, action) => {
        console.log("err");
      });
    // builder.addCase(changeImagesBgData.fulfilled, (state, action) => {
    //   const type = action.payload.type;
    //   state.data[type] = action.payload.data;
    // }),
    //   builder.addCase(changeImagesBgData.rejected, (state, action) => {
    //     console.log("err");
    //   });
    // builder.addCase(changeBgData.fulfilled, (state, action) => {
    //   const type = action.payload.type;
    //   state.data[type] = action.payload.data;
    // }),
    //   builder.addCase(changeBgData.rejected, (state, action) => {
    //     console.log("err");
    //   });
    // builder.addCase(deleteImagesBgData.fulfilled, (state, action) => {
    //   const type = action.payload.type;
    //   state.data[type] = action.payload.data;
    // }),
    //   builder.addCase(deleteImagesBgData.rejected, (state, action) => {
    //     console.log("err");
    //   });
    // builder.addCase(changeBgSetting.fulfilled, (state, action) => {
    //   const type = action.payload.type;
    //   state.data[type] = action.payload.data;
    // }),
    //   builder.addCase(changeBgSetting.rejected, (state, action) => {
    //     console.log("err");
    //   });
  },
});

const { actions, reducer } = canvasImBgSlice;
export const {
  addImagesToBg,
  changeImagesInBg,
  changeBackgroundInBg,
  deleteImagesInBg,
  changeBgSetting,
} = actions;

export default reducer;

//export const { auth, reg } = actions;
