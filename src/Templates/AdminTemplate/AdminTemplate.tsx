import { NavLink, Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DispatchType } from '../../Redux/configStote';
import { getUserArrActionApi } from '../../Redux/reducer/quanLyNguoiDungReducer';
import ModeToggle from '../../theme/ModeToggle';
type Props = {}
const AdminTemplate = (props: Props) => {
  const dispatch: DispatchType = useDispatch();
  useEffect(() => {
    dispatch(getUserArrActionApi());
  }, []);
  return (
    <Layout className='admin container-fluid'>
      <Sider width={80} style={{ height: '100%', background: 'none' }} className=' admin-body align-middle'>
        <div className='admin-body-left'>
          <div className='d-flex  flex-column justify-content-center align-items-center'>
          <div className='admin-body-left-header flex-grow-1 flex-shrink-1'>
            <NavLink to={'/'} className='mx-2 btn '>
              <i className="fa-solid fa-house"></i>
            </NavLink>
          </div>
          <span className="dark-light">
            <ModeToggle />
          </span>
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
      <Content className='' style={{ height: '100vh' }}>
        <Outlet />
      </Content>
    </Layout >

  );
};

export default AdminTemplate