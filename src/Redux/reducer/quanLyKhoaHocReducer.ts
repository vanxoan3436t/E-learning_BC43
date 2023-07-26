import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getStoreJson, http, httpNonAuth } from '../../util/config';
import { DispatchType } from '../configStote';
import swal from 'sweetalert';
export interface NguoiTAO {
    taiKhoan: string;
    hoTen: string;
    maLoaiNguoiDung: string;
    tenLoaiNguoiDung: string;
}
export interface DanhMucKhoaHoc {
    maDanhMucKhoahoc: string;
    tenDanhMucKhoaHoc: string;
}

export interface CourseDetail {
    maKhoaHoc: string;
    biDanh: string;
    tenKhoaHoc: string;
    moTa: string;
    luotXem: number;
    hinhAnh: string;
    maNhom: string;
    ngayTao: string;
    soLuongHocVien: number;
    nguoiTao: NguoiTAO;
    danhMucKhoaHoc: DanhMucKhoaHoc;
}

export interface StateDefault {
    coursesList: [],
    courseDetail: CourseDetail[],
    coursesCategary: [],
    coursesCategaryList: [],
    coursesSearchList: [],
    coursesPagination: {},
}

const initialState: StateDefault = {
    coursesList: [],
    courseDetail: [],
    coursesCategary: [],
    coursesCategaryList: [],
    coursesSearchList: [],
    coursesPagination: {},

}

const quanLyKhoaHocReducer = createSlice({
    name: 'quanLyKhoaHocReducer',
    initialState,
    reducers: {
        getCoursesListAction: (state: StateDefault, action: PayloadAction<[]>) => {
            state.coursesList = action.payload
        },
        getDetailAction: (state: StateDefault, action: PayloadAction<[]>) => {
            state.courseDetail = action.payload
        },
        getSearchListAction: (state: StateDefault, action: PayloadAction<[]>) => {
            state.coursesSearchList = action.payload
        },
        getCoursesCategaryAction: (state: StateDefault, action: PayloadAction<[]>) => {
            state.coursesCategary = action.payload
        },
        getCoursesCategaryListAction: (state: StateDefault, action: PayloadAction<[]>) => {
            state.coursesCategaryList = action.payload
        }
    }
});

export const { getCoursesListAction, getSearchListAction, getCoursesCategaryAction, getCoursesCategaryListAction, getDetailAction } = quanLyKhoaHocReducer.actions

export default quanLyKhoaHocReducer.reducer
// ------------------create action async
export const courseCategaryActionApi = () => {
    return async (dispatch: DispatchType) => {
        try {
            const result = await httpNonAuth.get(`/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc?tenDanhMuc`);
            const action: PayloadAction<DanhMucKhoaHoc[]> = getCoursesCategaryAction(result.data)
            dispatch(action);
        } catch (err) {
            console.log('err', err);
        }
    }
}

export const getcourseCategaryListActionApi = (key: string) => {
    return async (dispacth: DispatchType) => {
        try {
            const result = await httpNonAuth.get(`/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${key}&MaNhom=GP01`);
            const action: PayloadAction<CourseDetail[]> = getCoursesCategaryListAction(result.data);
            dispacth(action);
        } catch (err) {
            console.log('err', err);
        }
    }
}

export const getListCourseActionApi = () => {
    return async (dispacth: DispatchType) => {
        try {
            const result = await httpNonAuth.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`);
            const action: PayloadAction<CourseDetail[]> = getCoursesListAction(result.data);
            dispacth(action);
        } catch (err) {
            console.log('err', err);
        }
    }
}
//get Detail
export const getDetailActionApi = (key: string) => {
    return async (dispacth: DispatchType) => {
        try {
            const result = await httpNonAuth.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${key}`);
            const action: PayloadAction<CourseDetail[]> = getDetailAction(result.data);
            dispacth(action);
        } catch (error) {
            console.log('error', error);
        };
    }
}

// Regist Course
export const registerCourseActionApi = async (key : string) => {
    const credentailLocal = getStoreJson('credentials')
    if (credentailLocal) {
        const valuesRegisCoure = {
            taiKhoan: credentailLocal.taiKhoan,
            maKhoaHoc: key
        }
        try {
            const  result = await http.post('/api/QuanLyKhoaHoc/DangKyKhoaHoc', valuesRegisCoure)
            if (result.request?.status === 200) {
            swal({
                title: "Đăng kí thành công",
                icon: "success",
                timer: 1800,
               
            });
        }
        } catch (err) {
            swal({
                title: 'ĐÃ ĐĂNG KÍ RỒI HOẶC CHƯA ĐĂNG NHẬP !',
                icon: "warning",
                text: 'Đã xảy ra lỗi vui lòng quay lại trang chủ hoặc thử lại',
                timer: 2000,
            });
            console.log('err', err);
        }
    }
}

export const searchAsyncActionApi = (key: string) => {
    return async (dispacth: DispatchType) => {
        try {
            const result = await httpNonAuth.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${key}&MaNhom=GP01`)
            const action: PayloadAction<CourseDetail[]> = getSearchListAction(result.data);
            dispacth(action);
        } catch (err) {
            console.log('err', err);
        };
    }
}

export const searchCoursesAsyncActionApi = (key: string) => {
    return async (dispacth: DispatchType) => {
        try {
            const result = await httpNonAuth.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${key}&MaNhom=GP01`)
            const action: PayloadAction<CourseDetail[]> = getCoursesListAction(result.data);
            dispacth(action);
        } catch (err) {
            console.log('err', err);
        };
    }
}

//Thêm khóa học
export const addCourseActionApi = (values: any) => {
    return async () => {
        let formData = new FormData();
        for (let key in values) {
            if (key !== 'hinhAnh') {
                formData.append(key, values[key]);
            } else {
                formData.append('hinhAnh', values.hinhAnh, values.hinhAnh.name)
            }
        }

        try {
            const result = await http.post('/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh', formData);
            if (result.request.status === 200) {
                swal({
                    title: "Thêm thành công",
                    icon: "success",
                    timer: 2000,
                });
            }

        } catch (err) {
            swal({
                icon: "warning",
                text: 'Đã xảy ra lỗi vui lòng quay lại trang chủ hoặc thử lại',
                timer: 2000,
            });
            console.log('err', err);
        }
    }

}