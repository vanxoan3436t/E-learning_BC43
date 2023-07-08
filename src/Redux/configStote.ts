import { configureStore } from "@reduxjs/toolkit";
import quanLyNguoiDungReducer from "./reducer/quanLyNguoiDungReducer";
export const store = configureStore({
 reducer:{
    quanLyNguoiDungReducer:quanLyNguoiDungReducer
 }
    
})
//lấy ra kiểu dữ liệu của store
export type RootState = ReturnType <typeof store.getState>

export type DispatchType = typeof store.dispatch;