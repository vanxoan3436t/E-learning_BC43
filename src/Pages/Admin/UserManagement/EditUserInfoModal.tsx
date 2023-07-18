import React from 'react'
import { DispatchType } from '../../../Redux/configStote'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik';
import { UserUpdateFrm } from '../../Info/Info';

type Props = {

}

export default function EditUserInfoModal({ }: Props) {
  const dispatch: DispatchType = useDispatch();

  const updateFrm = useFormik<UserUpdateFrm>({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      hoTen: '',
      soDT: '',
      maLoaiNguoiDung: '',
      maNhom: 'GP01',
      email: ''
    }, onSubmit: (values: UserUpdateFrm) => {
      console.log('values', values)
    }

  })
  return (
    <div className="modal fade" id="editUserInfo">
      <div className="modal-dialog">
        <div className="modal-content">
          <header className="head-form ">
            <h3 >THÔNG TIN NGƯỜI DÙNG</h3>
          </header>
          <div className="modal-body">
            {/* form user */}
            <form action="#" onSubmit={updateFrm.handleSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className='fa-solid fa-user'></i>
                    </span>
                  </div>
                  <input name='taiKhoan' className='form-control input-sm' placeholder='Tài Khoản' type='text' onBlur={updateFrm.handleBlur} onInput={updateFrm.handleChange} value={updateFrm.values.taiKhoan} />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className='fa-solid fa-address-book'></i>
                    </span>
                  </div>
                  <input name='hoTen' className='form-control input-sm' placeholder='Họ và tên' type='text' onBlur={updateFrm.handleBlur} onInput={updateFrm.handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className='fa-solid fa-envelope'></i>
                    </span>
                  </div>
                  <input name='email' className='form-control input-sm' placeholder='Email' type='email' onBlur={updateFrm.handleBlur} onInput={updateFrm.handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className='fa-solid fa-key'></i>
                    </span>
                  </div>
                  <input name='matKhau' className='form-control input-sm' placeholder='Mật khẩu' type='password' onBlur={updateFrm.handleBlur} onInput={updateFrm.handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className='fa-solid fa-phone'></i>
                    </span>
                  </div>
                  <input name='soDT' className='form-control input-sm' placeholder='Số điện thoại' type='text' onBlur={updateFrm.handleBlur} onInput={updateFrm.handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className='fa-solid fa-user'></i>
                    </span>
                  </div>
                  <select className='form-control' name="maLoaiNguoiDung" id="" onBlur={updateFrm.handleBlur} onInput={updateFrm.handleChange}>
                    <option value="">Loại người dùng</option>
                    <option value="GV">Giáo vụ</option>
                    <option value="HV">Học viên</option>
                  </select>
                </div>
              </div>

              <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Đóng</button>
            <button type="submit" className="btn ">Cập nhật</button>
          </div>
            </form>
          </div>
         
        </div>
      </div>
    </div>
  )
}