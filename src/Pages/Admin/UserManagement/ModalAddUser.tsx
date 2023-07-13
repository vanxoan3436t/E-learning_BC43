import React from 'react'

type Props = {}

export default function ModalAddUser({}: Props) {
  return (
    <div className="modal fade" id="addUserModal"  aria-labelledby="exampleModalLabel">
    <div className="modal-dialog">
      <div className="modal-content form-user">
        <header className="head-form ">
          <h3 >THÔNG TIN NGƯỜI DÙNG</h3>
        </header>
        <div className="modal-body">
          {/* form user */}
          <form action="#">
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className='fa-solid fa-user'></i>
                  </span>
                </div>
                <input name='taiKhoan' className='form-control input-sm' placeholder='Tài Khoản' type='text' />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className='fa-solid fa-address-book'></i>
                  </span>
                </div>
                <input name='hoTen' className='form-control input-sm' placeholder='Họ và tên' type='text' />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className='fa-solid fa-envelope'></i>
                  </span>
                </div>
                <input name='email' className='form-control input-sm' placeholder='Email' type='email' />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className='fa-solid fa-key'></i>
                  </span>
                </div>
                <input name='matKhau' className='form-control input-sm' placeholder='Mật khẩu' type='password' />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className='fa-solid fa-phone'></i>
                  </span>
                </div>
                <input name='soDt' className='form-control input-sm' placeholder='Số điện thoại' type='text' />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className='fa-solid fa-user'></i>
                  </span>
                </div>
                <select className='form-control' name="maLoaiNguoiDung" id="">
                    <option value="">Loại người dùng</option>
                    <option value="GV">Giáo vụ</option>
                    <option value="HV">Học viên</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Đóng</button>
          <button type="button" className="btn ">Thêm người dùng</button>
        </div>
      </div>
    </div>
  </div>
  )
}