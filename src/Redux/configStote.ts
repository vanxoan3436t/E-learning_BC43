import { configureStore } from "@reduxjs/toolkit";
import quanLyNguoiDungReducer from "./reducer/quanLyNguoiDungReducer";
import quanLyKhoaHocReducer from "./reducer/quanLyKhoaHocReducer";
export const store = configureStore({
 reducer:{
   quanLyNguoiDungReducer:quanLyNguoiDungReducer,
    quanLyKhoaHocReducer:quanLyKhoaHocReducer,
 }
    
})
//lấy ra kiểu dữ liệu của store
export type RootState = ReturnType <typeof store.getState>

export type DispatchType = typeof store.dispatch;