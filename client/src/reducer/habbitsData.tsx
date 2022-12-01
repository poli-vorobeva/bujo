import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  requestHabbits,
  requestHabbitsChange,
} from "../request/requestHabbits";
import { IHabbitsData } from "../dto";

interface IInitialState {
  data: IHabbitsData;
}

const initialState: IInitialState = {
  data: {
    days: 21,
    habbits: [
      {
        habbitName: "",
        habbitId: "fvfvf",
        data: [],
      },
    ],
  },
};

///const dispatch = useDispatch<AppDispatch>();
interface IUserEmail {
  email: string;
}

export const getHabbitsData = createAsyncThunk(
  "getHabbitsData",
  async ({ email }: IUserEmail, thunkAPI) => {
    const response = await requestHabbits(email);
    if (response.status === "ok") {
      return {
        data: response.data,
      };
    }
    throw new Error("false data");
  }
);

interface INameChange {
  idHabbit: string;
  value: string;
}

export const addHabbitsToServer = createAsyncThunk(
  "changeHabbitsName",
  async ({ data }: IInitialState, thunkAPI) => {
    const response = await requestHabbitsChange(data);
    if (response.status === "ok") {
      return {
        data: response.data,
      };
    }
    throw new Error("false data");
  }
);
// export const changeHabbitsName = createAsyncThunk(
//   "changeHabbitsName",
//   async ({ idHabbit, value }: INameChange, thunkAPI) => {
//     const response = await requestHabbitsChange({ idHabbit, value });
//     if (response.status === "ok") {
//       return {
//         data: response.data,
//       };
//     }
//     throw new Error("false data");
//   }
// );
interface IInputChange {
  idHabbit: string;
  idEl: string;
  value: boolean;
}

// export const changeHabbitsInput = createAsyncThunk(
//   "changeHabbitsInput",
//   async ({ idHabbit, idEl, value }: IInputChange, thunkAPI) => {
//     const response = await requestHabbitsChangeInput({ idHabbit, idEl, value });
//     if (response.status === "ok") {
//       return {
//         data: response.data,
//       };
//     }
//     throw new Error("false data");
//   }
// );
//addNewHabbit

const habbitsSlice = createSlice({
  name: "habbitsData",
  initialState,
  reducers: {
    changeHabbitsName(state, action: PayloadAction<INameChange>) {
      state.data.habbits.find(
        (it) => it.habbitId === action.payload.idHabbit
      ).habbitName = action.payload.value;
    },
    changeHabbitsInput(state, action: PayloadAction<IInputChange>) {
      state.data.habbits.find(
        (it) => it.habbitId === action.payload.idHabbit
      ).data[+action.payload.idEl] = action.payload.value;
    },
    addNewHabbit(state) {
      state.data.habbits.push({
        habbitName: "",
        habbitId: "id" + Math.random() * 1000,
        data: new Array(21).fill(null).map((it) => false),
      });
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getHabbitsData.fulfilled, (state, action) => {
      state.data = action.payload.data;
    }),
      builder.addCase(getHabbitsData.rejected, (state, action) => {
        console.log("err");
      });
    // builder.addCase(changeHabbitsName.fulfilled, (state, action) => {
    //   state.data = action.payload.data;
    // }),
    //   builder.addCase(changeHabbitsName.rejected, (state, action) => {
    //     console.log("err");
    //   });
    // builder.addCase(changeHabbitsInput.fulfilled, (state, action) => {
    //   state.data = action.payload.data;
    // }),
    //   builder.addCase(changeHabbitsInput.rejected, (state, action) => {
    //     console.log("err");
    //   });
    // builder.addCase(addNewHabbit.fulfilled, (state, action) => {
    //   state.data = action.payload.data;
    // }),
    //   builder.addCase(addNewHabbit.rejected, (state, action) => {
    //     console.log("err");
    //   });
  },
});

const { actions, reducer } = habbitsSlice;

export const { changeHabbitsName, changeHabbitsInput, addNewHabbit } = actions;

export default reducer;

//export const { auth, reg } = actions;
