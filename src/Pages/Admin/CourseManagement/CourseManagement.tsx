import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginInfo from '../../../Components/LoginInfo/LoginInfo'
import ModalAddCourse from './ModalAddCourse'
import CoursRegisterModal from './CoursRegisterModal'
import EditCourseInfoModal from './EditCourseInfoModal'

type Props = {}

export default function CourseManagement({ }: Props) {
  return (
    <div className='details course-management card container-fluid'>
      <div className="card-header">
        <div className="row">
          <div className='col-auto me-auto card-header-left'>
            <NavLink className='btn btn-modal1' to="/admin" id='btnThem' data-bs-toggle="modal" data-bs-target="#addCourse">Thêm Khóa Học</NavLink>
          </div>
          <div className="col-7 row ms-auto card-header-right ">
            <div className='col-7 p-1'>
              <form action="#">
                <input type="text" placeholder='Nhập vào khóa học cần tìm' className='header-search_input form-control' data-ms-editor='true' />
              </form>
            </div>
            {/* Login info */}
            <LoginInfo />

          </div>
        </div>
      </div>

      <div className="container-fluid ">
        <table className="table table-bordered table-hover myTable">
          <thead className="text-dark bg-light">
            <tr style={{ width: '100%' }}>
              <th className="align-middle text-break text-wrap" style={{ width: '7%' }} >
                <span className='hide'>STT</span>
                {/* <span className='unhide'>STT</span> */}
              </th>
              <th className="align-middle text-break text-wrap" style={{ width: '15%' }}>
                <span className='hide'>Mã khóa học</span>
                {/* <span className='unhide'>Mã KH</span> */}
              </th>
              <th className="align-middle text-break text-wrap" style={{ width: '15%' }} >
                <span className='hide'>Tên khóa học</span>
                {/* <span className='unhide'>Tên KH</span> */}
              </th>
              <th className="align-middle text-break text-wrap" style={{ width: '14%' }}>
                <span >Hình ảnh</span>
              </th>
              <th className="align-middle text-break text-wrap" style={{ width: '11%' }}>
                <span >Lượt xem</span>
              </th>
              <th className="align-middle text-break text-wrap" style={{ width: '13%' }}>
                <span >Người tạo</span>
              </th>

              <th className="align-middle" style={{ width: '25%' }}><em className="fa fa-cog text-wrap" /></th>
            </tr>
          </thead>

          <tbody id="tableDanhSach" >
            {/* {renderCourseList(currentItems)} */}
            <tr style={{ width: '100%' }}>
              <td className="align-middle text-break" style={{ width: '7%' }}>1</td>
              <td className="align-middle text-break text-wrap" style={{ width: '15%' }}>maKhoaHoc</td>
              <td className="align-middle text-break text-wrap" style={{ width: '15%' }}>tenKhoaHoc</td>
              <td className="align-middle img-fluid" style={{ backgroundImage: `url(hinhAnh)`, backgroundSize: "cover", width: '14%' }}>

              </td>
              <td className="align-middle text-break" style={{ width: '11%' }}>luotXem</td>
              <td className="align-middle text-break text-wrap" style={{ width: '13%' }}>nguoiTao.hoTen </td>
              <td className='align-middle' style={{ width: '25%' }}>
                <button onClick={() => { }} type="button" className="btn btn-primary mx-1 text-wrap" data-bs-toggle="modal" data-bs-target="#courseReg" >
                  <span className='hide'>Ghi danh</span>
                  {/* <span className='unhide'>Reg</span> */}
                </button>
                <button onClick={() => { }} className="btn btn-warning m-1 text-wrap" data-bs-toggle="modal" data-bs-target="#editInfoCourse">Sửa</button>
                <button onClick={() => { }} className="btn btn-danger mx-1" >Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* modal thêm người dùng */}
      <ModalAddCourse />
      {/* Modal ghi danh khóa học */}
      <CoursRegisterModal />
      {/* modal chỉnh sửa thông tin khóa học */}
      <EditCourseInfoModal />
    </div>
  )
}