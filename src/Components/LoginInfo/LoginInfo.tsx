import React from 'react'
import { NavLink } from 'react-router-dom'
import UserUpdateInfo from '../../Pages/Admin/UserManagement/UserUpdateInfo'
import { getStoreJson } from '../../util/config'
// import { logOut } from '../../Redux/reducer/quanLyNguoiDungReducer'
import { history } from '../..'

type Props = {}

export default function LoginInfo({}: Props) {

  const infoUser = getStoreJson('credentials')
  return (
    <div className="login-info col-5 ms-auto">
    <span>Chào {infoUser?.taiKhoan} !</span>
    <img src="https://nld.mediacdn.vn/291774122806476800/2022/3/19/20200403104047-41cb-16476717856591379514951.jpg" alt="avatar" />
    <span className="dropdown">
      <button className="btn btn-white dropdown-toggle ms-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">

      </button>
      <ul className="dropdown-menu">
        <li><NavLink className="dropdown-item" to="/info" data-bs-toggle="modal" data-bs-target="#userUpdateInfo">Cập nhật thông tin</NavLink></li>
        <li><NavLink className="dropdown-item" to="/login"  onClick={()=>{
           
            alert('Cần đăng nhập tài khoản quản trị !')
            window.location.reload();

            }}>Đăng xuất</NavLink></li>
      </ul>
    </span>
    {/* modal Cập nhật thông tin*/}
    <UserUpdateInfo></UserUpdateInfo>
  </div>
  )
}