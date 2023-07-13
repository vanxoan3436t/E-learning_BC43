import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, } from 'antd';

import UserManageme from '../../Pages/Admin/UserManagement/UserManagement';
import CourseManagement from '../../Pages/Admin/CourseManagement/CourseManagement';

type Props = {}

const AdminTemplate = (props: Props) => {


  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout className='admin container-fluid'>
      <div className='admin-body align-middle'>

        <div className='admin-body-left'>
            <div className='admin-body-left-header'>
              <NavLink to={'/'} className='mx-2 btn '>
                <i className="fa-solid fa-house"></i>
              </NavLink>
            </div>
            <ul className="list-unstyled">
              <li>
                <NavLink to='/admin/usermanagement'>
                  <i className="fa-solid fa-user"></i>
                  Quản lý người dùng
                </NavLink>
              </li>
              <li>
                <NavLink to='/admin/coursemanagement'>
                  <i className="fa-solid fa-briefcase"></i>
                  Quản lý khóa học
                </NavLink>
              </li>
            </ul>
        </div>

       <UserManageme></UserManageme>
       {/* <CourseManagement></CourseManagement> */}
      </div>
 
    </Layout >
  );
};

export default AdminTemplate