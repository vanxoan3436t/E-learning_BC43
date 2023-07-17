import { NavLink, Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
type Props = {}
const AdminTemplate = (props: Props) => {
  return (
    <Layout className='admin container-fluid'>
      <Sider width={80} style={{ height: '100%' }} className=' admin-body align-middle'>
        <div className='admin-body-left'>
          <div className='admin-body-left-header'>
            <NavLink to={'/'} className='mx-2 btn '>
              <i className="fa-solid fa-house"></i>
            </NavLink>
          </div>
          <ul className="list-unstyled">
            <li>
              <NavLink to='/admin'>
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
      </Sider>
      <Content className='' style={{height:'100vh'}}>
        <Outlet />
      </Content>
    </Layout >

  );
};

export default AdminTemplate