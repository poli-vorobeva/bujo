import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { requestAuth } from "../request/requestAuth";
import { requestReg } from "../request/requestReg";
export interface IUser {
  user: {
    email: string;
    password: string;
    id: string;
    name: string;
  };
}

export interface IUser1 {
  email: string;
  password: string;
}

export interface IUser3 {
  email: string;
  password: string;
  name: string;
}

export interface IUser2 {
  email: string;
  password: string;
  id: string;
  name: string;
}

const initialState = {
  email: "sds",
  password: "admin",
  id: "",
  name: "admin",
};

///const dispatch = useDispatch<AppDispatch>();

export const authUserData = createAsyncThunk(
  "users/authUserData",
  async ({ email, password }: IUser1, thunkAPI) => {
    const response = await requestAuth(email, password);
    if (response.status === "ok") {
      return {
        email: response.email,
        name: response.name,
        password: response.password,
      };
    }
    throw new Error("false data");
  }
);
export const regUserData = createAsyncThunk(
  "users/regUserData",
  async ({ email, name, password }: IUser3, thunkAPI) => {
    const response = await requestReg(email, name, password);
    if (response.status === "ok") {
      return {
        email: response.email,
        name: response.name,
        password: response.password,
      };
    }
    throw new Error("invalid name, try another");
  }
);

const userSlise = createSlice({
  name: "userData",
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
  reducers: {
    auth: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    reg: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(authUserData.fulfilled, (state, action) => {
      // Add user to the state array
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.name = action.payload.name;
    }),
      builder.addCase(authUserData.rejected, (state, action) => {
        // Add user to the state array
        console.log("err");
        state.name = action.error.message;
      });
    builder.addCase(regUserData.fulfilled, (state, action) => {
      // Add user to the state array
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.name = action.payload.name;
    }),
      builder.addCase(regUserData.rejected, (state, action) => {
        // Add user to the state array
        console.log("err");
        state.name = action.error.message;
      });
  },
});

const { actions, reducer } = userSlise;

export default reducer;

export const { auth, reg } = actions;
