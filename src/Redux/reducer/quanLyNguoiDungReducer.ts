import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { USER_LOGIN, getStoreJson, http, httpNonAuth, setStoreJson } from '../../util/config';
import { UserLoginFrm } from '../../Pages/LoginRegister/Login';
import { DispatchType } from '../configStote';
import { history } from '../..';


export interface UserSignUpApi {
  taiKhoan: string,
  matKhau: string,
  hoTen: string,
  email: string,
  soDT: string,
  maNhom: string
}

export interface UserLoginApi {
  taiKhoan: string,
  matKhau: string
}


export interface UserState {
  userLogin: UserLoginApi | undefined
  userSignUp: UserSignUpApi | undefined
}
const initialState : UserState = {
  userLogin: getStoreJson(USER_LOGIN),
  userSignUp:getStoreJson('userSignUp')
  //SignUp : 
}

const quanLyNguoiDungReducer = createSlice({
  name: 'quanLyNguoiDungReducer',
  initialState,
  reducers: {
    loginAction: (state: UserState, action: PayloadAction<UserLoginApi>) => {
      state.userLogin = action.payload
    },
    signUpAction:(state : UserState, action : PayloadAction<UserSignUpApi>) => {

      state.userSignUp = action.payload
    }
  }
});

export const { loginAction } = quanLyNguoiDungReducer.actions

export default quanLyNguoiDungReducer.reducer

//----------create action async
/* statusCode thông dụng : 
    200: Dữ liệu gửi đi và nhận về kết quả thành công (OK)
    201: Dữ liệu khởi tạo thành công (Created)
    400: Bad request (lỗi không tìm thấy item trên backend)
    404: Not found (không tìm thấy link backend)
    500: Error in server (Lỗi xảy ra tại server - có thể do dữ liệu frontend gửi lên xử lý bị lỗi backend không catch trường hợp này thì ra 500 hoặc là backend code bị lỗi) => Xác định lỗi => mở post man request thử với data đúng thì có được hay không nếu vẫn lỗi thì báo backend fix
    401: UnAuthorize (Lỗi khi không có quyền truy cập vào api này (phải token hợp lệ ...))
    403: Forbiden ( Lỗi chưa đủ quyền truy cập vào api )

*/
export const loginAsyncActionApi = createAsyncThunk('loginAsyncActionApi', async (userlogin: UserLoginFrm) => {

  //call api
  const result = await http.post(`/api/QuanLyNguoiDung/DangNhap`, userlogin);
  setStoreJson(USER_LOGIN,result.data)
  const maLoaiNguoiDung = result.data.maLoaiNguoiDung;
  if (maLoaiNguoiDung === 'GV'){
    history.push('/admin/')
  }else{
    history.push('/')
  }

  return result.data
});

export const signUpAsyncActionApi = createAsyncThunk('signUpAsyncActionApi', async (userSignUp: UserLoginFrm) => {

  //call api
  const result = await http.post(`/api/QuanLyNguoiDung/DangKy`, userSignUp);
  console.log('result.data', result.data)
  alert('Đăng kí tài khoản thành công !')

  return result.data
});