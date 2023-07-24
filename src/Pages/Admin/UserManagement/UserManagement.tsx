import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import LoginInfo from '../../../Components/LoginInfo/LoginInfo'
import ModalAddUser from './ModalAddUser'
import EditUserInfoModal from './EditUserInfoModal'
import UserRegisterModal from './UserRegisterModal'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../../Redux/configStote'
import ReactPaginate from 'react-paginate'
import { UserArr, getUserArrActionApi, searchUserActionApi, upDateInfoAction, updateUserInfoActionApi } from '../../../Redux/reducer/quanLyNguoiDungReducer'
import swal from 'sweetalert'
import { http } from '../../../util/config'
import { AxiosError } from 'axios'

type Props = {}

export default function UserManagement({ }: Props) {

  const dispatch: DispatchType = useDispatch();
  const userArray = useSelector((state: RootState) => state.quanLyNguoiDungReducer.userArray);
  const keyRef = useRef('');
  //Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + 5;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(userArray && userArray.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(userArray && userArray?.length / 5));
  }, [itemOffset, userArray]);

  const handlePageClick = (e: any) => {
    const newOffset = e.selected * 5 % userArray.length;
    console.log(`User requested page number ${e.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };
  //SUA
  const [userUpdate, setUserUpdate] = useState({})
  const updateUser = (i: any) => {setUserUpdate(i)}
  console.log('userUpdate', userUpdate)
  //Search
  const handleChange = (e: any) => {
    const { value } = e.target;
    keyRef.current = value;
    dispatch(searchUserActionApi(keyRef.current));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (keyRef.current === '') {
      dispatch(getUserArrActionApi())
    };
  }, [keyRef.current]);

  //XOA
  const deleteUser = async (i: string) => {
    try {
      let result = await http.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${i}`)
      if (result.request.status === 200) {
        swal({
          title: "Xóa thành công",
          icon: "success",
          timer: 2000,
        });
        dispatch(getUserArrActionApi())
      }

    } catch {
      swal({
        title: 'Tài khoản đã ghi danh hoặc không tồn tại. Không thể xóa !',
        icon: "warning",
        text: 'Đã xảy ra lỗi vui lòng quay lại trang chủ hoặc thử lại',
        timer: 2000,
      });
    }
  }

  //render danh sách người dùng
  const renderUserList = (currentItems: any) => {
    return currentItems.map((item: any, index: number) => {
      return <tr style={{ width: '100%' }} key={index}>
        <td className="align-middle text-break text-wrap" style={{ width: '5%' }}>{itemOffset + index + 1}</td>
        <td className="align-middle text-break text-wrap" style={{ width: '13%' }} >{item.taiKhoan}</td>
        <td className="align-middle text-break text-wrap" style={{ width: '5%' }} >{item.maLoaiNguoiDung}</td>
        <td className="align-middle text-break text-wrap" style={{ width: '15%' }} >{item.hoTen}</td>
        <td className="align-middle text-break text-wrap" style={{ width: '25%' }} >{item.email}</td>
        <td className="align-middle text-break text-wrap" style={{ width: '10%' }} >{item.soDt}</td>
        <td style={{ width: '27%' }}>
          <button type="button" className="btn btn-primary mx-1 text-wrap" data-bs-toggle="modal" data-bs-target="#userReg" >
            Ghi danh
          </button>
          <button onClick={() => {
            updateUser(item)
          }} className="btn btn-warning m-1 text-wrap" data-bs-toggle="modal" data-bs-target="#editUserInfo">Sửa</button>
          <button onClick={() => { deleteUser(item.taiKhoan) }} className="btn btn-danger mx-1 text-wrap" >Xóa</button>
        </td>
      </tr>
    })
  }
  return (
    <div className='details user-management card container-fluid'>
      <div className="card-header">
        <div className="row">
          <div className='col-auto me-auto card-header-left'>
            <button className='btn' data-bs-toggle="modal" data-bs-target="#addUserModal">Thêm người dùng</button>
          </div>
          <div className="col-7 row ms-auto card-header-right ">
            <div className='col-7 p-1'>
              <form action="#" onSubmit={handleSubmit}>
                <input type="text" placeholder='Nhập vào tài khoản hoặc tên người dùng' className='header-search_input form-control' data-ms-editor='true' onInput={handleChange} />
              </form>
            </div>
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
                <span >STT</span>
       
              </th>
              <th className="align-middle text-break text-wrap" style={{ width: '13%' }}>
                <span >Tài khoản</span>
           
              </th>
              <th className="align-middle text-break text-wrap" style={{ width: '7%' }} >
                <span >Người dùng</span>
             
              </th>
              <th className="align-middle text-break text-wrap" style={{ width: '15%' }}>
                <span >Họ và tên</span>
            
              </th>
              <th className="align-middle text-break text-wrap" style={{ width: '21%' }}>Email</th>
              <th className="align-middle text-break text-wrap" style={{ width: '12%' }}>
                <span >Số điện thoại</span>
             
              </th>

              <th className="align-middle" style={{ width: '25%' }}><em className="fa fa-cog text-wrap" /></th>
            </tr>
          </thead>
          <tbody id="tableDanhSach" >
            {renderUserList(currentItems)}

          </tbody>
        </table>
      </div>
      {/* modal thêm người dùng */}
      <ModalAddUser />
      {/* modal ghi danh */}
      <UserRegisterModal />
      {/* modal chỉnh sửa thông tin người dùng */}
      <EditUserInfoModal userUpdate={userUpdate} />
      <ReactPaginate
        nextLabel="Sau >"
        pageRangeDisplayed={3}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        previousLabel="< Trước"
        pageClassName="page-item"
        pageLinkClassName="page-link-pages"
        previousClassName="page-item"
        previousLinkClassName="page-link-pages"
        nextClassName="page-item"
        nextLinkClassName="page-link-pages"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link-pages"
        containerClassName="paginationPages"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}
////