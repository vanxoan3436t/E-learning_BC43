import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getStoreJson, http, httpNonAuth } from '../../util/config';
import { DispatchType } from '../configStote';
import { Type } from 'typescript';

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
    courseList: [],
    courseDetail: CourseDetail[],
    coursesCategary: [],
    coursesCategaryList: [],
    coursesSearchList: [],
    coursesPagination: {},
}

const initialState: StateDefault = {
    courseList: [],// gọi api luôn khi load trang 
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
        getCourseListAction: (state: StateDefault, action: PayloadAction<[]>) => {
            state.courseList = action.payload
            // console.log('action.payload', action.payload)
        },
        getSearchListAction: (state: StateDefault, action: PayloadAction<[]>) => {
            state.coursesSearchList = action.payload

        }
    }
});

export const { getCourseListAction, getSearchListAction } = quanLyKhoaHocReducer.actions

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


export const getListCourseActionApi = () => {
    return async (dispacth: DispatchType) => {
        const result = await httpNonAuth.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`)
        const action: PayloadAction<CourseDetail[]> = getCourseListAction(result.data);
        // console.log('action', action)
        dispacth(action)
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