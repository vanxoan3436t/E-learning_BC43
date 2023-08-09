import React, { useEffect } from 'react'
import { DispatchType } from '../../../Redux/configStote'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik';
import { UserModel, getUserArrActionApi } from '../../../Redux/reducer/quanLyNguoiDungReducer';
import * as Yup from 'yup';
import swal from 'sweetalert';
import { http } from '../../../util/config';

export interface Props {
  userUpdate: string | any,
}
export default function EditUserInfoModal(props: Props): JSX.Element {
  const dispatch: DispatchType = useDispatch()
  const updateUser = async (values: UserModel )=> {
    try {
      let result = await http.put('/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', values)
      if (result.request.status === 200) {
        swal({
          title: `Tài khoản ${result.data.taiKhoan} `,
          text:'Cập nhật thành công',
          icon: "success",
          timer: 2000,
        });
        dispatch(getUserArrActionApi)
      }
    } catch (err : any) {
      swal({
         title: err.response?.data,
        icon: "warning",
        text: 'Đã xảy ra lỗi vui lòng quay lại trang chủ hoặc thử lại',
        timer: 2000,
      });
    }
  }
  const updateFrm = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: '',
      maNhom: "GP01",
      email: "",
    },
    validationSchema: Yup.object().shape({
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
      updateUser(values);
    }
  })
//
  useEffect(() => {
  }, [props.userUpdate])
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
                  <input name='taiKhoan' className='form-control input-sm' placeholder='Tài Khoản' type='text' onBlur={updateFrm.handleBlur} onInput={updateFrm.handleChange} value={updateFrm.values.taiKhoan = props.userUpdate?.taiKhoan} disabled/>
                </div>
                {updateFrm.errors.taiKhoan && <div className="text-err text-danger text-left">{updateFrm.errors.taiKhoan}</div>}
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className='fa-solid fa-address-book'></i>
                    </span>
                  </div>
                  <input name='hoTen' className='form-control input-sm' placeholder='Họ và tên' type='text' onBlur={updateFrm.handleBlur} onInput={updateFrm.handleChange} value={updateFrm.values.hoTen}/>
                </div>
                {updateFrm.errors.hoTen && <div className="text-err text-danger text-left">{updateFrm.errors.hoTen}</div>}
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className='fa-solid fa-envelope'></i>
                    </span>
                  </div>
                  <input name='email' className='form-control input-sm' placeholder='Email' type='email' onBlur={updateFrm.handleBlur} onInput={updateFrm.handleChange} value={updateFrm.values.email }/>
                </div>
                {updateFrm.errors.email && <div className="text-err text-danger text-left">{updateFrm.errors.email}</div>}
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className='fa-solid fa-key'></i>
                    </span>
                  </div>
                  <input name='matKhau' className='form-control input-sm' placeholder='Mật khẩu' type='password' onBlur={updateFrm.handleBlur} onInput={updateFrm.handleChange} value={updateFrm.values.matKhau} />
                </div>
                {updateFrm.errors.matKhau && <div className="text-err text-danger text-left">{updateFrm.errors.matKhau}</div>}
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className='fa-solid fa-phone'></i>
                    </span>
                  </div>
                  <input name='soDT' className='form-control input-sm' placeholder='Số điện thoại' type='text'  onBlur={updateFrm.handleBlur} onInput={updateFrm.handleChange} value={updateFrm.values.soDT}/>
                </div>
                {updateFrm.errors.soDT && <div className="text-err text-danger text-left">{updateFrm.errors.soDT}</div>}
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className='fa-solid fa-user'></i>
                    </span>
                  </div>
                  <select className='form-control' name="maLoaiNguoiDung" id="" onBlur={updateFrm.handleBlur} onInput={updateFrm.handleChange} value={updateFrm.values.maLoaiNguoiDung }>
                    <option value="">Loại người dùng</option>
                    <option value="GV">Giáo vụ</option>
                    <option value="HV">Học viên</option>
                  </select>
                </div>
                {updateFrm.errors.maLoaiNguoiDung && <div className="text-err text-danger text-left">{updateFrm.errors.maLoaiNguoiDung}</div>}
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