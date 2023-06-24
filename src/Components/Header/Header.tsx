import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='header white-bg'>
      <div className="header-top container-custom">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="header-top_info">

                <div className="header-top_info_item">
                  <div className="header-top_info_icon ">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div className="header-top_info_text ">
                    <p className='fs-13'>Thứ 2 - Thứ 7:</p>
                    <span>9am - 8pm</span>
                  </div>
                </div>

                <div className="header-top_info_item">
                  <div className="header-top_info_icon">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <div className="header-top_info_text">
                    <p>Trợ giúp:</p>
                    <span>+84 961 051 014</span>
                  </div>
                </div>

                <div className="header-top_info_item">
                  <div className="header-top_info_icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="header-top_info_text">
                    <p>Email chúng tôi:</p>
                    <span>cybersoft@gmail.com</span>
                  </div>
                </div>

                <div className="header-top_info_item">
                  <div className="header-top_info_icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="header-top_info_text">
                    <p>Trụ sở:</p>
                    <span>New York , Việt Nam</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="header-top_social">
                <ul>
                  <li className="social_list">
                    <NavLink className='facebook' to="/">
                      <i className="fab fa-facebook-f" />
                    </NavLink>
                  </li>
                  <li className="social_list">
                    <NavLink className='tiktok' to="/">
                      <i className="fa-brands fa-tiktok"></i>
                    </NavLink>
                  </li>
                  <li className="social_list">
                  <NavLink className='instagram'  to="/">
                      <i className="fab fa-instagram"></i>
                    </NavLink>
                  </li>
                  <li className="social_list">
                    <NavLink className='youtube' to="/">
                      <i className="fa-brands fa-youtube"></i>
                    </NavLink>
                  </li>

                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="white-bg header-bottom  container-custom">
        <div className="container-fluid">
          <div className="header-bottom_row d-flex justify-content-between align-items-center">
            <div className="header-bottom_col">
              <div className="logo">
                <NavLink to={'/'} className='logo_link'>
                  <img src="./src/assets/img/logo.png" alt="logo" />
                </NavLink>
              </div>
            </div>

            <div className="header-bottom_col">
              <div className="main-menu">
                <nav className="main-menu_nav">
                  <ul className='d-flex'>
                    <li className="nav-sub">
                      <NavLink to={'/'} >DANH MỤC</NavLink>
                      <ul className='main-menu_dropdown'>
                        <li><NavLink to={'/'}>LẬP TRÌNH BACKEND</NavLink></li>
                        <li><NavLink to={'/'}>THIẾT KẾ WEB</NavLink></li>
                        <li><NavLink to={'/'}>LẬP TRÌNH DI ĐỘNG</NavLink></li>
                        <li><NavLink to={'/'}>LẬP TRÌNH FRONT END</NavLink></li>
                        <li><NavLink to={'/'}>LẬP TRÌNH FULL STACK</NavLink></li>
                        <li><NavLink to={'/'}>TƯ DUY LẬP TRÌNH</NavLink></li>
                      </ul>
                    </li>
                    <li className="nav-sub">
                      <NavLink to={'/'} >KHOÁ HỌC</NavLink>
                    </li>
                    <li className="nav-sub">
                      <NavLink to={'/'} >BLOG</NavLink>
                    </li>
                    <li className="nav-sub">
                      <NavLink to={'/'} >SỰ KIỆN</NavLink>
                      <ul className='main-menu_dropdown'>
                      <li><NavLink to={'/'}>SỰ KIỆN SALE CUỐI NĂM</NavLink></li>
                      <li><NavLink to={'/'}>SỰ KIỆN GIÁNG SINH</NavLink></li>
                      <li><NavLink to={'/'}>SỰ KIỆN NOEL</NavLink></li>
                      </ul>
                    </li>
                    <li className="nav-sub">
                      <NavLink to={'/'} >THÔNG TIN</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <form className="header-bottom_col">
              <div className="header-search d-flex justify-content-between">
                <input type="text" placeholder='Tìm kiếm' className='header-search_input'  data-ms-editor='true'/>
                <button className="header-search_button">
                <i className="fas fa-search"></i>
              </button>
              </div>
            </form>
            <div className="heder-bottom_col">
                <NavLink className='btn  btn--common btn-primary' to='/login'>
                Đăng Nhập
                <i className="fa-solid fa-arrow-right"></i>
                </NavLink>
            </div>
          </div>
        </div>
      </div>


    </header>
  )
}

export default Header