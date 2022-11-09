import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface IUser{
    user:{
        name: string,
        password: string,
        id: string,
    }
}

export interface IUser1{
        name: string,
        password: string,
}
export interface IUser2{
    name: string,
    password: string,
    id: string,

}

const initialState:IUser = {
    user:{name:'', password:'', id: ''}
};

const userSlise = createSlice({
    name: 'userData',
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
        auth: (state, action)=>{
            state.user.name = action.payload.name;
            state.user.password =  action.payload.password;
        },
        reg: (state, action)=>{
            state.user.name = action.payload.name;
            state.user.password =  action.payload.password;
        }
    }

});

const {reducer, actions} = userSlise

export default reducer;

export const{auth,reg} = actions;