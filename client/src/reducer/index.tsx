import { createReducer } from "@reduxjs/toolkit";
import { reg, auth } from "../actions";
export interface IUser{
    user:{
        name: string,
        password: string,
    }
}

const initialState:IUser = {
    user:{name:'', password:''}
};
interface IDATA {
    name: string;
        password: string;
}
interface IAction {
    type: string;
    payload:IDATA;
}

const reducer = createReducer(initialState, builder =>{
    builder
        .addCase(auth, (state, action)=>{
            state.user.name = action.payload.name;
            state.user.password =  action.payload.password;
        })
        .addCase(reg, (state, action)=>{
            state.user.name = action.payload.name;
            state.user.password =  action.payload.password;
        })
        .addDefaultCase(()=>{})
})

// const reducer = (state = initialState, action:IAction) => {
//     switch (action.type) {
//         case "AUTH":
//             return {
//                 ...state,
//                 user:{
//                     name: action.payload.name,
//                     password: action.payload.password,
//                 }
//             };
//         case "REG":
//             return {
//                 ...state,
//                 user:{
//                     name: action.payload.name,
//                     password: action.payload.password,
//                 }
//             };
//         default:
//             return state;
//     }
// }

export default reducer;