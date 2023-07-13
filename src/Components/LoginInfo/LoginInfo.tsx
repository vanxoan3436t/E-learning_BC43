import React from 'react'
import { NavLink } from 'react-router-dom'
import UserUpdateInfo from '../../Pages/Admin/UserManagement/UserUpdateInfo'

type Props = {}

export default function LoginInfo({}: Props) {
  return (
    <div className="login-info col-5 ms-auto">
    <span>Chào beginner !</span>

    <img src="https://i.pravatar.cc?u=40" alt="" />

    <span className="dropdown">
      <button className="btn btn-white dropdown-toggle ms-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">

      </button>
      <ul className="dropdown-menu">
        <li><NavLink className="dropdown-item" to="" data-bs-toggle="modal" data-bs-target="#userUpdateInfo">Cập nhật thông tin</NavLink></li>
        <li><NavLink className="dropdown-item" to="/">Đăng xuất</NavLink></li>
      </ul>
    </span>
    {/* modal Cập nhật thông tin*/}
    <UserUpdateInfo></UserUpdateInfo>
  </div>
  )
}