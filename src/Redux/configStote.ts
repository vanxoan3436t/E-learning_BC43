import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
 reducer:{
   
 }
    
})
//lấy ra kiểu dữ liệu của store
export type RootState = ReturnType <typeof store.getState>

export type DispatchType = typeof store.dispatch;