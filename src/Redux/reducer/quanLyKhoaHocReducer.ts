import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getStoreJson, http, httpNonAuth } from '../../util/config';
import { DispatchType } from '../configStote';
import { AddCourseModal } from '../../Pages/Admin/CourseManagement/ModalAddCourse';
import swal from 'sweetalert';

//detail
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
    coursesList: [],// gọi api luôn khi load trang 
    courseDetail: [],
    coursesCategary: [],// kiểu ở trên navlink danh mục
    coursesCategaryList: [],// gọi api sau khi ấn vô navlink page danh mục khóa học
    coursesSearchList: [],// gọi api sau khi ấn tìm kiếm
    coursesPagination: {},

}

const quanLyKhoaHocReducer = createSlice({
    name: 'quanLyKhoaHocReducer',
    initialState,
    reducers: {
        getCoursesListAction: (state: StateDefault, action: PayloadAction<[]>) => {
            state.coursesList = action.payload
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

export const { getCoursesListAction, getSearchListAction, getCoursesCategaryAction, getCoursesCategaryListAction } = quanLyKhoaHocReducer.actions

export default quanLyKhoaHocReducer.reducer

// ------------------create action async
/* statusCode thông dụng : 
    200: Dữ liệu gửi đi và nhận về kết quả thành công (OK)
    201: Dữ liệu khởi tạo thành công (Created)
    400: Bad request (lỗi không tìm thấy item trên backend)
    404: Not found (không tìm thấy link backend)
    500: Error in server (Lỗi xảy ra tại server - có thể do dữ liệu frontend gửi lên xử lý bị lỗi backend không catch trường hợp này thì ra 500 hoặc là backend code bị lỗi) => Xác định lỗi => mở post man request thử với data đúng thì có được hay không nếu vẫn lỗi thì báo backend fix
    401: UnAuthorize (Lỗi khi không có quyền truy cập vào api này (phải token hợp lệ ...))
    403: Forbiden ( Lỗi chưa đủ quyền truy cập vào api )

*/
export const courseCategaryActionApi = () => {
    return async (dispatch: DispatchType) => {
        try {
            const result = await httpNonAuth.get(`/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc?tenDanhMuc`)
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
            const result = await httpNonAuth.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`)
            const action: PayloadAction<CourseDetail[]> = getCoursesListAction(result.data);
            dispacth(action)
        } catch (err) {
            console.log('err', err)
        }
    }
}

export const searchAsyncActionApi = (key: string) => {
    return async (dispacth: DispatchType) => {
        try {
            const result = await httpNonAuth.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${key}&MaNhom=GP01`)
            const action: PayloadAction<CourseDetail[]> = getSearchListAction(result.data);
            dispacth(action)
        } catch (error) {
            console.log('error', error)
        };
    }
}

export const searchCoursesAsyncActionApi = (key: string) => {
    return async (dispacth: DispatchType) => {
        try {
            const result = await httpNonAuth.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${key}&MaNhom=GP01`)
            const action: PayloadAction<CourseDetail[]> = getCoursesListAction(result.data);
            dispacth(action)
            console.log('action.payload', action.payload)
        } catch (error) {
            console.log('error', error)
        };
    }
}

//Thêm khóa học
export const addCourseActionApi = (values: any) => {
    return async (dispatch: DispatchType) => {

        let formData = new FormData();
        for (let key in values) {
            if (key !== 'hinhAnh') {
                formData.append(key, values[key]);
            } else {
                formData.append('hinhAnh', values.hinhAnh, values.hinhAnh.name)
            }
            // console.log(formData.get('hinhAnh'))
        }

        try {
            // console.log(formData.get('hinhAnh'))
            const result = await http.post('/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh', formData)
            console.log('resukt', result.data)
            if (result.request.status === 200) {
                // formik.resetForm()
                swal({
                    title: "Thêm thành công",
                    icon: "success",
                    timer: 2000,
                });

                // dispatch(getListCourse) phải gọi 6 danh sách khóa học

            }

        } catch (errors) {
            swal({
                // title: errors.response?.data,
                icon: "warning",
                text: 'Đã xảy ra lỗi vui lòng quay lại trang chủ hoặc thử lại',
                timer: 2000,
            });
        }
    }

}