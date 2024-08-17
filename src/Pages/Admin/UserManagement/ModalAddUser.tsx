import { useFormik } from 'formik'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { addUserActionApi  } from '../../../Redux/reducer/quanLyNguoiDungReducer';
import { DispatchType } from '../../../Redux/configStote';
type Props = {}

export default function ModalAddUser({ }: Props) {
  const dispatch: DispatchType = useDispatch()
  
  const addUserFrm = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      hoTen: '',
      soDT: '',
      maLoaiNguoiDung: '',
      maNhom: 'GP01',
      email: ''
    },
    validationSchema: Yup.object().shape({
        taiKhoan: Yup.string()
            .min(2, 'Tài khoản quá ít kí tự')
            .max(16, 'Tài khoản quá 16 kí tự')
            .required('Tài khoản không được để trống'),

        matKhau: Yup.string()
            .required('Tài khoản không được để trống')
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
    onSubmit: (values) => {
      const actionApi = addUserActionApi(values);
    dispatch(actionApi)
    }
  }
  )
  useEffect(() => {
    
  },[])
  return (
    <div className="modal fade" id="addUserModal" aria-labelledby="exampleModalLabel" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content form-user">
          <header className="head-form ">
            <h3 >THÔNG TIN NGƯỜI DÙNG</h3>
          </header>
          <div className="modal-body">
            {/* form user */}
            <form action="#" onSubmit={addUserFrm.handleSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className='fa-solid fa-user'></i>
                    </span>
                  </div>
                  <input name='taiKhoan' className='form-control input-sm' placeholder='Tài Khoản' type='text' onChange={addUserFrm.handleChange} onBlur={addUserFrm.handleBlur} />
                </div>
                {addUserFrm.errors.taiKhoan && <div className="text-err text-danger text-left">{addUserFrm.errors.taiKhoan}</div>}
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className='fa-solid fa-address-book'></i>
                    </span>
                  </div>
                  <input name='hoTen' className='form-control input-sm' placeholder='Họ và tên' type='text' onChange={addUserFrm.handleChange} onBlur={addUserFrm.handleBlur} />
                </div>
                {addUserFrm.errors.hoTen && <div className="text-err text-danger text-left">{addUserFrm.errors.hoTen}</div>}
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className='fa-solid fa-envelope'></i>
                    </span>
                  </div>
                  <input name='email' className='form-control input-sm' placeholder='Email' type='email' onChange={addUserFrm.handleChange} onBlur={addUserFrm.handleBlur} />
                </div>
                {addUserFrm.errors.email && <div className="text-err text-danger text-left">{addUserFrm.errors.email}</div>}
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className='fa-solid fa-key'></i>
                    </span>
                  </div>
                  <input name='matKhau' className='form-control input-sm' placeholder='Mật khẩu' type='password' onChange={addUserFrm.handleChange} onBlur={addUserFrm.handleBlur} />
                </div>
                {addUserFrm.errors.matKhau && <div className="text-err text-danger text-left">{addUserFrm.errors.matKhau}</div>}
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className='fa-solid fa-phone'></i>
                    </span>
                  </div>
                  <input name='soDT' className='form-control input-sm' placeholder='Số điện thoại' type='text' onChange={addUserFrm.handleChange} onBlur={addUserFrm.handleBlur} />
                </div>
                {addUserFrm.errors.soDT && <div className="text-err text-danger text-left">{addUserFrm.errors.soDT}</div>}
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className='fa-solid fa-user'></i>
                    </span>
                  </div>
                  <select className='form-control' name="maLoaiNguoiDung" onChange={addUserFrm.handleChange} onBlur={addUserFrm.handleBlur}>
                    <option value="">Loại người dùng</option>
                    <option value="GV">Giáo vụ</option>
                    <option value="HV">Học viên</option>
                  </select>
                </div>
                {addUserFrm.errors.maLoaiNguoiDung && <div className="text-err text-danger text-left">{addUserFrm.errors.maLoaiNguoiDung}</div>}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Đóng</button>
                <button type="submit" className="btn ">Thêm người dùng</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}