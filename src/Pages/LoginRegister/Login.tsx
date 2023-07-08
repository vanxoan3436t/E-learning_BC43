import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ButtonMouseEvent from '../../Components/ButtonProps/ButtonMouseEvent'
import { useFormik } from 'formik'
import { loginAsyncAction } from '../../Redux/reducer/quanLyNguoiDungReducer'
import { DispatchType } from '../../Redux/configStote'
import { useDispatch } from 'react-redux'

type Props = {}

export interface UserLoginFrm {
  taiKhoan: string,
  matKhau: string,
}

const Login = (props: Props) => {
  const [classState, toggleClass] = useState(false)
  const dispatch: DispatchType = useDispatch();
  const loginFrm = useFormik<UserLoginFrm>({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
    }, onSubmit: (values: UserLoginFrm) => {
      console.log('values', values)
      const actionApi = loginAsyncAction(values)
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
                <input type="text" placeholder="Tài khoản" name="taiKhoan" onInput={loginFrm.handleChange} />
              </div>
              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Mật khẩu" name='matKhau' onInput={loginFrm.handleChange} />

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

            <form action="#" className={`sign-up-form`}>
              <h2 className='login-title'>Đăng kí</h2>

              <div className="input-field">
                <i className="fa-solid fa-user"></i>
                <input type="email" placeholder="Tài khoản" name="username" />
              </div>
              <div className="input-field">
                <i className="fa-solid fa-file-signature"></i>
                <input type="text" placeholder="Họ Tên" />
              </div>
              <div className="input-field">
                <i className="fa-solid fa-envelope"></i>
                <input type="text" placeholder="Email" name="email" />
              </div>
              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>

              <div className="input-field">
                <i className="fa-solid fa-phone-flip"></i>
                <input type="text" placeholder="Số điện thoại" />
              </div>
              <div className="input-field">
                <i className="fa-solid fa-hashtag"></i>
                <input type="text" placeholder="Mã khoá học" />
              </div>
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
                toggleClass(true)
                console.log('classState', classState)
              }} />

            </div>
            <img src="https://cdn.dribbble.com/users/1201592/screenshots/8898860/media/d4fd70463d621a19d4a64e2f88e7798f.gif" alt="img-signup" className='img-login' />

          </div>

          <div className="panel  right-panel">
            <div className="content">
              <h3>Đã Có Tài Khoản</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, pariatur.</p>
              <ButtonMouseEvent value={`Đăng Nhập`} className={`btn transparent`} handleClick={() => {
                toggleClass(false)
                console.log('classState', classState)

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