import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { USER_LOGIN, getStore, getStoreJson, http, httpNonAuth, setStoreJson } from '../../util/config';
import { UserLoginFrm, UserSignUpFrm } from '../../Pages/LoginRegister/Login';
import { history } from '../..';
import { DispatchType } from '../configStote';
import swal from 'sweetalert';
import { UserUpdateFrm } from '../../Pages/Info/Info';
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

export interface UserSignUp {
  taiKhoan: string,
  matKhau: string,
  hoTen: string,
  email: string,
  soDT: string,
  maNhom: string,
}
export interface UserModel {
  taiKhoan: string,
  matKhau: string,
  hoTen: string,
  soDT: string,
  maNhom: string,
  maLoaiNguoiDung: string,
  email: string,
}

export interface UserLoginApi {
  taiKhoan: string,
  matKhau: string
}

export interface UserArr {
  taiKhoan: string
  hoTen: string
  email: string
  soDt: string
  maLoaiNguoiDung: string
}

export interface UserState {
  userLogin: UserLoginApi | undefined
  userSignUp: UserSignUp | undefined
  credentials: {}
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
    signUpAction: (state: UserState, action: PayloadAction<UserSignUp>) => {
      state.userSignUp = action.payload
    },
    getUserInfoAction: (state: UserState, action: PayloadAction<InFoUser>) => {
      state.userPersonalInfo = action.payload
    },
    upDateInfoAction: (state: UserState, action: PayloadAction<UserModel>) => {
      state.userPersonalInfo = action.payload
    },
    getListUserAction: (state: UserState, action: PayloadAction<[]>) => {
      state.userArray = action.payload
    }
  },
  extraReducers: (builder) => {
    /*
         Các trạng thái của 1 action api
         + pending: Khi api đang được thực hiện
         + fulfilled: khi kết quả api trả về thành công
         + rejected: Khi kết quả api trả về thất bại
      */
    // Xử lý dữ liệu trả về api
    builder.addCase(loginAsyncActionApi.pending, (state: UserState, action) => {
    }).addCase(loginAsyncActionApi.fulfilled, (state: UserState, action: PayloadAction<UserLoginApi>) => {
      state.userLogin = action.payload;
    }).addCase(loginAsyncActionApi.rejected, (state: UserState, action) => {
      swal({
        title: "Đăng nhập thất bại !",
        icon: "warning",
        timer: 2000,
      });
    })
  }

});

export const { getUserInfoAction, upDateInfoAction, getListUserAction } = quanLyNguoiDungReducer.actions

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
//Đăng nhập
export const loginAsyncActionApi = createAsyncThunk('loginAsyncActionApi', async (userlogin: UserLoginFrm) => {
  const result = await http.post(`/api/QuanLyNguoiDung/DangNhap`, userlogin);
  setStoreJson('credentials', result.data)
  const maLoaiNguoiDung = result.data.maLoaiNguoiDung;
  if (result.request?.status === 200) {
    swal({
      title: "Đăng nhập thành công !",
      icon: "success",
      timer: 1350,
    });
    if (maLoaiNguoiDung === 'GV') {
      history.push('/admin/')
    } else {
      history.push('/')
    }
  }
  return result.data
});
//Đăng kí
export const signUpAsyncActionApi = createAsyncThunk('signUpAsyncActionApi', async (userSignUp: UserSignUpFrm) => {
  const result = await httpNonAuth.post(`/api/QuanLyNguoiDung/DangKy`, userSignUp);
  console.log('result', result)
  return result.data
});
// Lấy thông tin người dùng
export const getUserInfoActionApi = () => {
  return async (dispacth: DispatchType) => {
    const result = await http.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`,)
    const action: PayloadAction<{}> = getUserInfoAction(result?.data);
    dispacth(action)
  }
}
//Update thông tin người dùng
export const updateUserInfoActionApi = (values: UserUpdateFrm) => {
  return async (dispacth: DispatchType) => {
    try {
      const result = await http.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, values)
      if (result.request?.status === 200) {
        swal({
          title: "Cập nhật thành công",
          icon: "success",
          timer: 2000,
        });
      }
      const action: PayloadAction<{}> = upDateInfoAction(result.data);
      dispacth(action)
    } catch (err) {
      swal({
        // title: err.response?.data,
        title: "Kiểm tra lại email ",
        icon: "warning",
        timer: 2000,

      });
    }
  }
}

//Hủy khóa học (phải đăng kí khóa học - mới hủy khóa học)
export const userCancelCourseActionApi = (key: string) => {
  return async (dispacth: DispatchType,) => {

    try {
      const result = await http.post(`/api/QuanLyKhoaHoc/HuyGhiDanh`, key)
      if (result.request?.status === 200) {

      }
      const action: PayloadAction<{}> = upDateInfoAction(result.data);
      dispacth(action)
    } catch (err: any) {

    }
  }
}

export const getUserArrActionApi = () => {
  return async (dispatch: DispatchType) => {
    const result = await httpNonAuth.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01&tuKhoa?=1`)
    const action: PayloadAction<UserArr[]> = getListUserAction(result.data);
    dispatch(action)
  }
}

export const searchUserActionApi = (key: string) => {
  return async (dispacth: DispatchType) => {
    try {
      const result = await httpNonAuth.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01&tuKhoa=${key}`)
      const action: PayloadAction<UserArr[]> = getListUserAction(result.data);
      dispacth(action)
      console.log('action.payload', action.payload)
    } catch (error) {
      console.log('error', error)
    };
  }
}
//Thêm người dùng
export const addUserActionApi = (values: UserModel) => {

  return async (dispatch: DispatchType) => {
    try {
      const result = await http.post(`/api/QuanLyNguoiDung/ThemNguoiDung`,values)
      if (result.request?.status === 200) {
        swal({
          title: "Thêm thành công",
          icon: "success",
          timer: 2000,
        });
      }
      dispatch(getUserArrActionApi());//dữ liệu thêm người dùng đã được gửi thành công trên sever backend nên ta chỉ cần dispacth lại(gọi lại hàm lấy danh sách người dùng và render lại)
    
    } catch (err) {
      swal({
        // title: errors.response?.data,
        icon: "warning",
        text: 'Đã xảy ra lỗi vui lòng quay lại trang chủ hoặc thử lại',
        timer: 2000,
      });
    }
  }
}