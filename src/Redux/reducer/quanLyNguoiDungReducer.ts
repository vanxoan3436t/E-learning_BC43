import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { USER_LOGIN, getStoreJson, http, httpNonAuth, setStoreJson } from '../../util/config';
import { UserLoginFrm, UserSignUpFrm } from '../../Pages/LoginRegister/Login';
import { history } from '../..';
import { DispatchType, RootState } from '../configStote';
import swal from 'sweetalert';
import { UserUpdateFrm } from '../../Pages/Info/Info';
import { useSelector } from 'react-redux';
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
  try {
    const result = await httpNonAuth.post(`/api/QuanLyNguoiDung/DangKy`, userSignUp);
    if (result.request?.status === 200) {
      swal({
        title: "Đăng ký thành công hãy đăng nhập",
        icon: "success",
        timer: 2000,
      });
    }
    return result.data
  } catch (err) {
  console.log('err', err)
    swal({
      title: "Đăng ký thất bại ,kiểm tra lại thông tin !",
      icon: "warning",
      timer: 2000,
    });
  }


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
    const credentailLocal = getStoreJson('credentials')
    if (credentailLocal) {
      const valuesRegisCoure = {
        taiKhoan: credentailLocal.taiKhoan,
        maKhoaHoc: key
      }
      try {
        const result = await http.post(`/api/QuanLyKhoaHoc/HuyGhiDanh`, valuesRegisCoure);
        if (result.request?.status === 200) {
          swal({
            // title: err.response?.data,
            title: "Hủy đăng kí thành công",
            icon: "success",
            timer: 1500,
          });
          dispacth(getUserInfoActionApi());
        }
      } catch (err: any) {
        swal({
          // title: err.response?.data,
          title: "k được rồi",
          icon: "warning",
          timer: 2000,
        });
      }
    }
  }
}

export const getUserArrActionApi = () => {
  return async (dispatch: DispatchType) => {
    const result = await httpNonAuth.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01&tuKhoa?=1`);
    const action: PayloadAction<UserArr[]> = getListUserAction(result.data);
    dispatch(action);
  }
}

export const searchUserActionApi = (key: string) => {
  return async (dispacth: DispatchType) => {
    try {
      const result = await httpNonAuth.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01&tuKhoa=${key}`);
      const action: PayloadAction<UserArr[]> = getListUserAction(result.data);
      dispacth(action);
    } catch (err) {
      console.log('err', err);
    };
  }
}
//Thêm người dùng
export const addUserActionApi = (values: UserModel) => {

  return async (dispatch: DispatchType) => {
    try {
      const result = await http.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, values);
      if (result.request?.status === 200) {
        swal({
          title: "Thêm thành công",
          icon: "success",
          timer: 2000,
        });
      }
      dispatch(getUserArrActionApi());
    } catch (err) {
      swal({
        // title: errors.response?.data,
        icon: "warning",
        text: 'Đã xảy ra lỗi vui lòng quay lại trang chủ hoặc thử lại',
        timer: 2000,
      });
      console.log('err', err);
    }
  }
}