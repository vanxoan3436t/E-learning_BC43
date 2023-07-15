import { configureStore } from "@reduxjs/toolkit";
import quanLyNguoiDungReducer from "./reducer/quanLyNguoiDungReducer";
import quanLyKhoaHocReducer from "./reducer/quanLyKhoaHocReducer";
import isLoadingReducer from "./reducer/isLoadingReducer";
export const store = configureStore({
 reducer:{
   quanLyNguoiDungReducer:quanLyNguoiDungReducer,
    quanLyKhoaHocReducer:quanLyKhoaHocReducer,
    isLoadingReducer:isLoadingReducer
 }
    
})
//lấy ra kiểu dữ liệu của store
export type RootState = ReturnType <typeof store.getState>

export type DispatchType = typeof store.dispatch;