import { createAction } from "@reduxjs/toolkit";

interface IDATA  {
    name:string;
    password:string
}
 

export const auth = createAction<IDATA>('AUTH');
export const reg = createAction<IDATA>('REG');