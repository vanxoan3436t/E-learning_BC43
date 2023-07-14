import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { USER_LOGIN, getStoreJson, http } from '../../util/config';
import { UserLoginFrm } from '../../Pages/LoginRegister/Login';




export interface UserLoginApi {
  taiKhoan: string,
  matKhau: string
}

export interface UserState {
  userLogin: UserLoginApi | undefined

}
const initialState = {
  userLogin: getStoreJson(USER_LOGIN),

}

const quanLyNguoiDungReducer = createSlice({
  name: 'quanLyNguoiDungReducer',
  initialState,
  reducers: {
    loginAction: (state: UserState, action: PayloadAction<UserLoginApi>) => {
      state.userLogin = action.payload
    }
  },extraReducers:(builder)=>{

     builder.addCase(loginAsyncAction.fulfilled, (state: UserState, action: PayloadAction<UserLoginApi>) => {
        state.userLogin = action.payload;
        // state.isLoading = false;
    })
  }
});

export const {loginAction} = quanLyNguoiDungReducer.actions

export default quanLyNguoiDungReducer.reducer

//----------create action async
export const loginAsyncAction = createAsyncThunk('loginAsyncAction', async (userLogin: UserLoginFrm) => {
  //call api
  const res = await http.post(`/api/QuanLyNguoiDung/DangNhap`, userLogin);
  return res.data.content
})