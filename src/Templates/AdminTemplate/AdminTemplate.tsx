import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';

import {
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Quản lí người dùng', '1', <PieChartOutlined className='quanlinguoidung' />),
  getItem('Quản lí khoá học', '2', <DesktopOutlined className='quanlikhoahoc' />),
];
type Props = {}

const AdminTemplate = (props: Props) => {


  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout className='admin'>
      <Header className='admin-header' >
        <div className='admin-header-left'>
          <NavLink to={'/'} >
            <i className="fa-solid fa-house"></i>
          </NavLink>
          Trang chủ
        </div>
        <div className='admin-header-right'>
          <span>Chào beginner !</span>
          <div className='your-avatar'>
            <img style={{ width: '40px' }} src="https://i.pravatar.cc?u=40" alt="" />
          </div>
          <div className='admin-header-dropdown'>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

              </button>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/">Đăng xuất</NavLink></li>
                <li><NavLink className="dropdown-item" to="/admin/infoadmin">Thông tin cá nhân</NavLink></li>
              </ul>
            </div>

          </div>
        </div>
      </Header>
      <Layout className='admin-body'>
        <div style={{ width: 256 }}>
          <Sider>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={collapsed}
              items={items}
            />
          </Sider>
        </div>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
              <NavLink to="/admin" data-bs-toggle="modal" data-bs-target="#exampleModal">Thêm người dùng</NavLink>

              <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Thêm người dùng</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                      ... abc
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                      <button type="button" className="btn btn-primary">Lưu thay đổi</button>
                    </div>
                  </div>
                </div>
              </div>

            </Breadcrumb.Item>
          </Breadcrumb>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
              <input type="text" placeholder='Tìm kiếm' className='header-search_input' data-ms-editor='true' />
            </Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: 'pink',
              height: '500px'
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout >
  );
};

export default AdminTemplate