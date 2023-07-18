import React, { useEffect } from 'react'
import { getStoreJson, http } from '../../../util/config'
import { useDispatch } from 'react-redux';
import { DispatchType } from '../../../Redux/configStote';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UserModel, getUserInfoActionApi, updateUserInfoActionApi } from '../../../Redux/reducer/quanLyNguoiDungReducer';

type Props = {

}
// phải kết nối logic modal với các page ,là truyền thông tin xem trước ròi mới sử lí chức năng
const UserUpdateInfo = (props: Props) => {
  const infoUser = getStoreJson('credentials')
  const dispatch: DispatchType = useDispatch();
  // console.log('userUpdate', props)

  const updateFrm = useFormik<UserModel>({
    initialValues: {
      taiKhoan: infoUser?.taiKhoan,
      matKhau: infoUser?.matKhau,
      hoTen: infoUser?.hoTen,
      soDT: infoUser?.soDT,
      maLoaiNguoiDung: infoUser?.maLoaiNguoiDung,
      maNhom: 'GP01',
      email: infoUser?.email
    }, 
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string()
          .min(2, 'Tài khoản quá ít kí tự')
          .max(16, 'Tài khoản quá 16 kí tự')
          .required('Tài khoản không được để trống'),

      matKhau: Yup.string()
          .required('Nhập lại mật khẩu')
          .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'Mật khẩu phải ít nhất 8 ký tự gồm chữ, số, và kí tự đặc biệt'),

      hoTen: Yup.string()
          .required('Tên không được để trống')
          .matches(/^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/, 'Chỉ nhập kí tự chữ'),

      email: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),

      soDT: Yup.string()
          .required('Số điện thoại không được để trống')
          .matches(/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/, 'Số điện thoại chưa đúng định đạng'),
      maLoaiNguoiDung: Yup.string().required('Vui lòng chọn người dùng !'),
  }),
    onSubmit: (values: UserModel) => {
      console.log('values', values)
      const actionApi = updateUserInfoActionApi(values);
      dispatch(actionApi);
    }

  })

  useEffect(() => {
    // dispatch(getUserInfoActionApi());
  }, [])
  return (
    <div className="modal fade" id="userUpdateInfo" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="head-form">
            <h3 className="header-title">Thông Tin Người Dùng : {infoUser?.taiKhoan} </h3>
          </div>
          <div className="modal-body">
            <form action="#" onSubmit={updateFrm.handleSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className='fa-solid fa-user'></i>
                    </div>
                  </div>
                  <input name='taiKhoan' className='form-control input-sm' placeholder='Tài Khoản' type='text' value={updateFrm.values.taiKhoan}  onBlur={updateFrm.handleBlur} onChange={updateFrm.handleChange}/>
                
                </div>
                {updateFrm.errors.taiKhoan && <div className="text-err text-danger text-left">{updateFrm.errors.taiKhoan}</div>}
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className='fa-solid fa-address-book'></i>
                    </div>
                  </div>
                  <input name='hoTen' className='form-control input-sm' placeholder='Họ và tên' type='text'value={updateFrm.values.hoTen} onBlur={updateFrm.handleBlur} onInput={updateFrm.handleChange} />
                </div>
                {updateFrm.errors.hoTen && <div className="text-err text-danger text-left">{updateFrm.errors.hoTen}</div>}
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className='fa-solid fa-envelope'></i>
                    </div>
                  </div>
                  <input name='email' className='form-control input-sm' placeholder='Email' type='email'value={updateFrm.values.email} onBlur={updateFrm.handleBlur} onInput={updateFrm.handleChange} />
                </div>
                {updateFrm.errors.email && <div className="text-err text-danger text-left">{updateFrm.errors.email}</div>}

              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className='fa-solid fa-key'></i>
                    </div>
                  </div>
                  <input name='matKhau' className='form-control input-sm' placeholder='Mật khẩu' type='password'value={updateFrm.values.matKhau} onBlur={updateFrm.handleBlur} onInput={updateFrm.handleChange} />
                </div>
                {updateFrm.errors.matKhau && <div className="text-err text-danger text-left">{updateFrm.errors.matKhau}</div>}

              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className='fa-solid fa-phone'></i>
                    </div>
                  </div>
                  <input name='soDT' className='form-control input-sm' placeholder='Số điện thoại' type='text'value={updateFrm.values.soDT} onBlur={updateFrm.handleBlur} onInput={updateFrm.handleChange} />
                </div>
                {updateFrm.errors.soDT && <div className="text-err text-danger text-left">{updateFrm.errors.soDT}</div>}
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className='fa-solid fa-user'></i>
                    </div>
                  </div>
                  <select className='form-control' name="maLoaiNguoiDung" id=""value={updateFrm.values.maLoaiNguoiDung} onBlur={updateFrm.handleBlur} onInput={updateFrm.handleChange}>
                    <option value="">Loại người dùng</option>
                    <option value="GV">Giáo vụ</option>
                    <option value="HV">Học viên</option>
                  </select>
                </div>
                {updateFrm.errors.maLoaiNguoiDung && <div className="text-err text-danger text-left">{updateFrm.errors.maLoaiNguoiDung}</div>}
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-bs-dismiss='modal'>Đóng</button>
                <button type="submit" className="btn" data-bs-dismiss="modal">Cập nhật</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserUpdateInfo