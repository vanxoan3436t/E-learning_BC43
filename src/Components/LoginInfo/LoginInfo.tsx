import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getStoreJson } from '../../util/config'
import swal from 'sweetalert'
import UserUpdateInfo from '../../Pages/Admin/UserManagement/UserUpdateInfo'

type Props = {}

const LoginInfo = (props: Props) => {
  const credentail = getStoreJson('credentials');
  const [UserUpdate, setUserUpdate] = useState({});
  const updateUser = (i: any) => {
   i && setUserUpdate(i)
  }
  const infoUser = getStoreJson('credentials')
  return (
    <div className="login-info col-5 ms-auto">
      <span>Chào {infoUser?.taiKhoan} !</span>
      <NavLink to='/info'>
      <img src="https://nld.mediacdn.vn/291774122806476800/2022/3/19/20200403104047-41cb-16476717856591379514951.jpg" alt="avatar" />
      </NavLink>
      <span className="dropdown">
        <button className="btn btn-white dropdown-toggle ms-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">

        </button>
        <ul className="dropdown-menu">
          <li><NavLink className="dropdown-item" to="" data-bs-toggle="modal" data-bs-target="#userUpdateInfo" onClick={() => {
            updateUser(credentail)
          }}>Cập nhật thông tin</NavLink></li>
          <li><NavLink className="dropdown-item" to="/" onClick={() => {
            localStorage.removeItem("credentials");
            swal({
              title: "Đăng xuất thành công !",
              icon: "success",
              timer: 2000,
            });
          }}>Đăng xuất</NavLink></li>
        </ul>
      </span>
      <UserUpdateInfo />
    </div>
  )
}
export default LoginInfo