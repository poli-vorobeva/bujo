import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  requestHabbits,
  requestHabbitsChange,
  requestHabbitsChangeInput,
  requestHabbitAddNew,
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
    setting: {
      opacity: 1,
      color: "black",
      bg: 1,
    },
  },
};
interface IDataHabbits {
  data: IHabbitsData;
}

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

export const changeHabbitsName = createAsyncThunk(
  "changeHabbitsName",
  async ({ idHabbit, value }: INameChange, thunkAPI) => {
    const response = await requestHabbitsChange({ idHabbit, value });
    if (response.status === "ok") {
      return {
        data: response.data,
      };
    }
    throw new Error("false data");
  }
);
interface IInputChange {
  idHabbit: string;
  idEl: string;
  value: boolean;
}

export const changeHabbitsInput = createAsyncThunk(
  "changeHabbitsInput",
  async ({ idHabbit, idEl, value }: IInputChange, thunkAPI) => {
    const response = await requestHabbitsChangeInput({ idHabbit, idEl, value });
    if (response.status === "ok") {
      return {
        data: response.data,
      };
    }
    throw new Error("false data");
  }
);
//addNewHabbit
export const addNewHabbit = createAsyncThunk(
  "addNewHabbit",
  async (thunkAPI) => {
    const response = await requestHabbitAddNew();
    if (response.status === "ok") {
      return {
        data: response.data,
      };
    }
    throw new Error("false data");
  }
);

const habbitsSlice = createSlice({
  name: "habbitsData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getHabbitsData.fulfilled, (state, action) => {
      state.data = action.payload.data;
    }),
      builder.addCase(getHabbitsData.rejected, (state, action) => {
        console.log("err");
      });
    builder.addCase(changeHabbitsName.fulfilled, (state, action) => {
      state.data = action.payload.data;
    }),
      builder.addCase(changeHabbitsName.rejected, (state, action) => {
        console.log("err");
      });
    builder.addCase(changeHabbitsInput.fulfilled, (state, action) => {
      state.data = action.payload.data;
    }),
      builder.addCase(changeHabbitsInput.rejected, (state, action) => {
        console.log("err");
      });
    builder.addCase(addNewHabbit.fulfilled, (state, action) => {
      state.data = action.payload.data;
    }),
      builder.addCase(addNewHabbit.rejected, (state, action) => {
        console.log("err");
      });
  },
});

const { actions, reducer } = habbitsSlice;

export default reducer;

//export const { auth, reg } = actions;
