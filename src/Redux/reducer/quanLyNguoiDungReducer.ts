import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { USER_LOGIN, getStore, getStoreJson, http, httpNonAuth, setStoreJson } from '../../util/config';
import { UserLoginFrm } from '../../Pages/LoginRegister/Login';
import { history } from '../..';
import { DispatchType } from '../configStote';

export interface ChiTietKhoaHocGhiDanh {
  maKhoaHoc: string;
  tenKhoaHoc: string;
  biDanh: string;
  moTa: string;
  luotXem: number;
  hinhAnh: string;
  ngayTao: Date;
  danhGia: number;
}

export interface InFoUser {
  chiTietKhoaHocGhiDanh: ChiTietKhoaHocGhiDanh[];
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  maLoaiNguoiDung: string;
  maNhom: string;
  email: string;
}

export interface IsLoading {
  isLoading: boolean
}
export interface UserSignUpApi {
  taiKhoan: string,
  matKhau: string,
  hoTen: string,
  email: string,
  soDT: string,
  maNhom: string,
  maLoaiNguoiDung: string,
}

export interface UserLoginApi {
  taiKhoan: string,
  matKhau: string
}


export interface UserState {
  userLogin: UserLoginApi | undefined
  userSignUp: UserSignUpApi | undefined
  credentials : {}
  userPersonalInfo: InFoUser | {}
  myCourseDetail: []
  userArray: []
  userListNotConfirmed: []
  userListConfirmed: []
  UserListNotRegister: []
  UserListNotRegisterSearch: []
}
const initialState: UserState = {
  userLogin: getStoreJson(USER_LOGIN),
  userSignUp: getStoreJson('userSignUp'),
  credentials: getStoreJson('credentials'),
  userPersonalInfo: {},
  myCourseDetail: [],
  userArray: [],
  userListNotConfirmed: [],
  userListConfirmed: [],
  UserListNotRegister: [],
  UserListNotRegisterSearch: [],
}

const quanLyNguoiDungReducer = createSlice({
  name: 'quanLyNguoiDungReducer',
  initialState,
  reducers: {
    // credentials: (state: UserState, action: PayloadAction<{}>) => {
    //   state.credentials = action.payload

    // },
    signUpAction: (state: UserState, action: PayloadAction<UserSignUpApi>) => {
      state.userSignUp = action.payload
    },
    getUserInfoAction: (state: UserState, action: PayloadAction<InFoUser>) => {
      state.userPersonalInfo = action.payload
    },

  },
  extraReducers: (builder) => {
    /*
         Các trạng thái của 1 action api
         + pending: Khi api đang được thực hiện
         + fulfilled: khi kết quả api trả về thành công
         + rejected: Khi kết quả api trả về thất bại
      */
    // Xử lý dữ liệu trả về api
    //    builder.addCase(loginAsyncAction.fulfilled, (state: UserState, action: PayloadAction<UserLoginApi>) => {
    //     state.userLogin = action.payload;
    //     // state.isLoading = false;
    // })

    builder.addCase(loginAsyncActionApi.pending, (state: UserState, action) => {
      // state.isLoading = true;
    }).addCase(loginAsyncActionApi.fulfilled, (state: UserState, action: PayloadAction<UserLoginApi>) => {
      state.userLogin = action.payload;
      // state.isLoading = false;
    }).addCase(loginAsyncActionApi.rejected, (state: UserState, action) => {
      alert('Đăng nhập thất bại !');
      // state.isLoading = false;
    })
  }

});

export const { getUserInfoAction } = quanLyNguoiDungReducer.actions

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
  setStoreJson('credentials', result.data)
  const maLoaiNguoiDung = result.data.maLoaiNguoiDung;
  if (maLoaiNguoiDung === 'GV') {
    history.push('/admin/')
  } else {
    history.push('/')
  }

  return result.data
});

export const signUpAsyncActionApi = createAsyncThunk('signUpAsyncActionApi', async (userSignUp: UserLoginFrm) => {
  //call api
  const result = await http.post(`/api/QuanLyNguoiDung/DangKy`, userSignUp);
  return result.data
});

export const getUserInfoActionApi = () => {
  return async (dispacth: DispatchType) => {
      const result = await http.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`,)
      const action: PayloadAction<{}> = getUserInfoAction(result.data);
      dispacth(action)
  }
}
