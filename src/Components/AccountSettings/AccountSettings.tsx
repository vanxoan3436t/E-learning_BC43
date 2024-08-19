import React, { useState } from 'react'
import { getStoreJson } from '../../util/config';
import swal from 'sweetalert'
import './_accountSetting.scss'
import { history } from '../..';
const AccountSettings = () => {
  const credentail = getStoreJson('credentials');
  const [UserUpdate, setUserUpdate] = useState({});
  const updateUser = (i: any) => {
    i && setUserUpdate(i)
  }
  return (
    <ul className='dropdown-menu'>
      <li className='dropdown-menu-li'>
        <button className="dropdown-item"
          onClick={() => {
            history.push('/info')
          }}
        >Trang cá nhân</button>
      </li>
      {/* <li className='dropdown-menu-li'>
        <button className="dropdown-item"
          onClick={() => {
            history.push('/admin/usermanagement')
          }}
        >Trang quản lý</button>
      </li> */}
      <li className='dropdown-menu-li dropdown-show-modal'>
        <button
          data-bs-toggle="modal" data-bs-target="#userUpdateInfo"
          className='dropdown-item'
          onClick={() => {
            updateUser(credentail)
          }}>Cập nhật thông tin</button></li>
      <li className='dropdown-menu-li'>
        <button className="dropdown-item"
          onClick={() => {
            localStorage.removeItem("credentials");
            swal({
              title: "Đăng xuất thành công !",
              icon: "success",
              timer: 2000,
            });
          }}>Đăng xuất</button></li>
    </ul>
  )
}

export default AccountSettings