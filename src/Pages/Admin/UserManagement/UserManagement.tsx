import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginInfo from '../../../Components/LoginInfo/LoginInfo'
import ModalAddUser from './ModalAddUser'
import EditUserInfoModal from './EditUserInfoModal'
import UserRegisterModal from './UserRegisterModal'

type Props = {}

export default function UserManagement({ }: Props) {
  return (
    <div className='details user-management card container-fluid'>
      <div className="card-header">
        <div className="row">
          <div className='col-auto me-auto card-header-left'>
            <NavLink className='btn' to="/admin" id='btnThem' data-bs-toggle="modal" data-bs-target="#addUserModal">Thêm người dùng</NavLink>
          </div>
          <div className="col-7 row ms-auto card-header-right ">
            <div className='col-7 p-1'>
              <form action="#">
                <input type="text" placeholder='Nhập vào tài khoản hoặc tên người dùng' className='header-search_input form-control' data-ms-editor='true' />
              </form>
            </div>
            {/* Login info */}
            <LoginInfo />

          </div>
        </div>
      </div>
      {/* body */}
      <div className="container-fluid ">
        <table className="table table-bordered table-hover myTable">
          <thead className="text-dark bg-light">
            <tr style={{ width: '100%' }}>
              <th className="align-middle text-break text-wrap" style={{ width: '7%' }} >
                <span className='hide'>STT</span>
                {/* <span className='unhide'>STT</span> */}
              </th>
              <th className="align-middle text-break text-wrap" style={{ width: '13%' }}>
                <span className='hide'>Tài khoản</span>
                {/* <span className='unhide'>TK</span> */}
              </th>
              <th className="align-middle text-break text-wrap" style={{ width: '7%' }} >
                <span className='hide'>Người dùng</span>
                {/* <span className='unhide'>ND</span> */}
              </th>
              <th className="align-middle text-break text-wrap" style={{ width: '15%' }}>
                <span className='hide'>Họ và tên</span>
                {/* <span className='unhide'>Họ Tên</span> */}
              </th>
              <th className="align-middle text-break text-wrap" style={{ width: '21%' }}>Email</th>
              <th className="align-middle text-break text-wrap" style={{ width: '12%' }}>
                <span className='hide'>Số điện thoại</span>
                {/* <span className='unhide'>Điện thoại</span> */}
              </th>

              <th className="align-middle" style={{ width: '25%' }}><em className="fa fa-cog text-wrap" /></th>
            </tr>
          </thead>
          <tbody id="tableDanhSach" >
            {/* {renderUserList(currentItems)} */}
            <tr style={{ width: '100%' }}>
              <td className="align-middle text-break text-wrap" style={{ width: '5%' }}>1</td>
              <td className="align-middle text-break text-wrap" style={{ width: '13%' }} >TK</td>
              <td className="align-middle text-break text-wrap" style={{ width: '5%' }} >maLoaiNguoiDung</td>
              <td className="align-middle text-break text-wrap" style={{ width: '15%' }} >hoTen</td>
              <td className="align-middle text-break text-wrap" style={{ width: '25%' }} >m.email</td>
              <td className="align-middle text-break text-wrap" style={{ width: '10%' }} >soDt</td>
              <td style={{ width: '27%' }}>
                <button type="button" className="btn btn-primary mx-1 text-wrap" data-bs-toggle="modal" data-bs-target="#userReg" >
                  Ghi danh
                  {/* <span className='hide'>Ghi danh</span> */}
                  {/* <span className='unhide'>Thêm</span> */}
                </button>
                <button onClick={() => { }} className="btn btn-warning m-1 text-wrap" data-bs-toggle="modal" data-bs-target="#editUserInfo">Sửa</button>
                <button onClick={() => { }} className="btn btn-danger mx-1 text-wrap" >Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* các modal */}
      {/* modal thêm người dùng */}
      <ModalAddUser />
      {/* modal ghi danh */}
      <UserRegisterModal/>
      {/* modal chỉnh sửa thông tin người dùng */}
    <EditUserInfoModal/>
    </div>
  )
}