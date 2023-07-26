import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ButtonMouseEvent from '../../Components/ButtonProps/ButtonMouseEvent'
import { useFormik } from 'formik'
import { loginAsyncActionApi, signUpAsyncActionApi } from '../../Redux/reducer/quanLyNguoiDungReducer'
import { DispatchType } from '../../Redux/configStote'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
type Props = {}

export interface UserLoginFrm {
  taiKhoan: string,
  matKhau: string,
}
export interface UserSignUpFrm {
  taiKhoan: string,
  matKhau: string,
  hoTen: string,
  email: string,
  soDT: string,
  maNhom: string,
}
const Login = (props: Props) => {
  const [classState, toggleClass] = useState(false);
  const dispatch: DispatchType = useDispatch();
  //formSingup
  const signUpFrm = useFormik<UserSignUpFrm>({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDT: "",
      maNhom: "GP1",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string()
        .min(3, 'Tài khoản quá ít kí tự')
        .max(16, 'Tài khoản quá 16 kí tự')
        .required('Tài khoản không được để trống'),

      matKhau: Yup.string()
        .required('Tài khoản không được để trống')
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'Mật khẩu phải ít nhất 8 tự gồm chữ, số, và kí tự đặc biệt'),

      hoTen: Yup.string()
        .required('Tên không được để trống')
        .matches(/^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/, 'Chỉ nhập kí tự chữ'),

      email: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),

      soDT: Yup.string()
        .required('Số điện thoại không được để trống')
        .matches(/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/, 'Số điện thoại chưa đúng định đạng'),
    }),
    onSubmit: (values: UserSignUpFrm) => {
      const actionApi = signUpAsyncActionApi(values)
      dispatch(actionApi);
    }
  })
//formSignin
  const loginFrm = useFormik<UserLoginFrm>({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
    }, onSubmit: (values: UserLoginFrm) => {
      const actionApi = loginAsyncActionApi(values)
      dispatch(actionApi);
    }
  })

  return (
    <section className='body-login'>
      <div className={`container login-form ${classState ? 'sign-up-mode' : ''}`} >
        <div className="form-container ">
          <div className="signin-signup">

            <form onSubmit={loginFrm.handleSubmit} action="#" className={`sign-in-form ${!classState ? 'animate__animated animate__fadeInRight animate__delay-3s' : ''}`}>
              <h2 className='login-title'>Đăng Nhập</h2>
              <div className="input-field">
                <i className="fa-solid fa-user"></i>
                <input type="text" placeholder="Tài khoản" name="taiKhoan" onInput={loginFrm.handleChange} value={loginFrm.values.taiKhoan} />
              </div>
              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Mật khẩu" name='matKhau' onInput={loginFrm.handleChange} value={loginFrm.values.matKhau} />
              </div>
              <input type="submit" className='btn btn--common btn-primary' value='Đăng nhập' />
              <p className='social-text'>Hoặc đăng nhập bằng </p>
              <div className="social-media">
                <NavLink to="/" className="social_list fb"><i className="fab fa-facebook-f" /></NavLink>
                <NavLink to="/" className="social_list gg"><i className="fab fa-google-plus-g" /></NavLink>
                <NavLink to="/" className="social_list in"><i className="fab fa-linkedin-in" /></NavLink>
              </div>
            </form>
          </div>

          <div className="signin-signup">
            <form onSubmit={signUpFrm.handleSubmit} action="#" className={`sign-up-form`}>
              <h2 className='login-title'>Đăng Ký</h2>
              <div className="input-field">
                <i className="fa-solid fa-user"></i>
                <input type="text" placeholder="Tài khoản" name="taiKhoan" onInput={signUpFrm.handleChange} />
                {signUpFrm.errors.taiKhoan ? <div className='message-err text-danger'>{signUpFrm.errors.taiKhoan}</div> : <div className='message'></div>}
              </div>
              <div className="input-field">
                <i className="fa-solid fa-file-signature"></i>
                <input type="text" placeholder="Họ Tên" name='hoTen' onInput={signUpFrm.handleChange} />
                {signUpFrm.errors.hoTen ? <div className='message-err text-danger'>{signUpFrm.errors.hoTen}</div> : <div className='message'></div>}
              </div>
              <div className="input-field">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" placeholder="Email" name="email" onInput={signUpFrm.handleChange} />
                {signUpFrm.errors.email ? <div className='message-err text-danger'>{signUpFrm.errors.email}</div> : <div className='message'></div>}
              </div>
              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Mật khẩu" name='matKhau' onInput={signUpFrm.handleChange} />
                {signUpFrm.errors.matKhau ? <div className='message-err text-danger'>{signUpFrm.errors.matKhau}</div> : <div className='message'></div>}
              </div>

              <div className="input-field">
                <i className="fa-solid fa-phone-flip"></i>
                <input type="text" placeholder="Số điện thoại" name='soDT' onInput={signUpFrm.handleChange} />
                {signUpFrm.errors.soDT ? <div className='message-err text-danger'>{signUpFrm.errors.soDT}</div> : <div className='message'></div>}
              </div>
              <select id="" className='input-field'
                onChange={signUpFrm.handleChange}
                name='maNhom'
              >
                <option value="">Chọn nhóm người dùng</option>
                <option value="GP01">GP01</option>
                <option value="GP02">GP02</option>
                <option value="GP03">GP03</option>
                <option value="GP04">GP04</option>
                <option value="GP05">GP05</option>
                <option value="GP06">GP06</option>
                <option value="GP07">GP07</option>
                <option value="GP08">GP08</option>
                <option value="GP09">GP09</option>
                <option value="GP010">GP010</option>
              </select>

              <input type="submit" className='btn btn--common btn-primary' value='Đăng kí' />
              <p className='social-text'>Hoặc đăng kí bằng </p>

              <div className="social-media">
                <NavLink to="/" className="social_list fb "><i className="fab fa-facebook-f" /></NavLink>
                <NavLink to="/" className="social_list gg"><i className="fab fa-google-plus-g" /></NavLink>
                <NavLink to="/" className="social_list in"><i className="fab fa-linkedin-in" /></NavLink>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Tài Khoản Mới</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, pariatur.</p>
              <ButtonMouseEvent value={`Đăng Kí`} className={`btn transparent`} handleClick={() => {
                toggleClass(true);
              }} />
            </div>
            <img src="https://cdn.dribbble.com/users/1201592/screenshots/8898860/media/d4fd70463d621a19d4a64e2f88e7798f.gif" alt="img-signup" className='img-login' />
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>Đã Có Tài Khoản</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, pariatur.</p>
              <ButtonMouseEvent value={`Đăng Nhập`} className={`btn transparent`} handleClick={() => {
                toggleClass(false);
              }} />
            </div>
            <img src="https://cdn.dribbble.com/users/1201592/screenshots/7799068/media/4a6fd0e415aafb6d151e6b54bc313042.png" alt="img-signup" className='img-login' />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Login