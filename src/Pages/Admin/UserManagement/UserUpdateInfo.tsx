import React from 'react'

type Props = {}

export default function UserUpdateInfo({}: Props) {
  return (
    <div className="modal fade" id="userUpdateInfo" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="head-form">
          <h3 className="header-title" >THÔNG TIN NGƯỜI DÙNG</h3>
        </div>
        <div className="modal-body">
        <form action="#">
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className='fa-solid fa-user'></i>
                      </div>
                    </div>
                    <input name='taiKhoan' className='form-control input-sm' placeholder='Tài Khoản' type='text' />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className='fa-solid fa-address-book'></i>
                      </div>
                    </div>
                    <input name='hoTen' className='form-control input-sm' placeholder='Họ và tên' type='text' />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className='fa-solid fa-envelope'></i>
                      </div>
                    </div>
                    <input name='email' className='form-control input-sm' placeholder='Email' type='email' />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className='fa-solid fa-key'></i>
                      </div>
                    </div>
                    <input name='matKhau' className='form-control input-sm' placeholder='Mật khẩu' type='password' />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className='fa-solid fa-phone'></i>
                      </div>
                    </div>
                    <input name='soDt' className='form-control input-sm' placeholder='Số điện thoại' type='text' />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className='fa-solid fa-user'></i>
                      </div>
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
        <button type="button" className="btn btn-danger">Đóng</button>
          <button type="button" className="btn" data-bs-dismiss="modal">Cập nhật</button>
       
        </div>
      </div>
    </div>
  </div>
  )
}