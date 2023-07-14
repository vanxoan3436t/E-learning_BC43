import  { useRef } from 'react'
import { NavLink} from 'react-router-dom'
import { history } from '../..'
import { useDispatch } from 'react-redux'
type Props = {
}

const Header = (props: Props) => {
  const dispatch = useDispatch();
  const keyInput = useRef('')

  const handleChange = (e: any) => {
    const { value } = e.target;
    keyInput.current = value
  }
  const handleSubmitSearch = async (e: any) => {
    e.preventDefault()
    // console.log('keyInput.current', keyInput.current)
    if (keyInput.current !== '') {
      await history.push(`/search/${keyInput.current}`)
    }
  }

  return (
    <header className='header white-bg sticky-on container '>
      <div id="sticky-placeholder"></div>
      <div className="header-top ">
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
                    <span>elearning@gmail.com</span>
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
                    <NavLink className='instagram' to="/">
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

      <div id='navbar-wrap' className="white-bg header-bottom navbar-wrap container">
        <div className="container-fuild ">
          <div className="header-bottom_row d-flex justify-content-between align-items-center">
            <div className="header-bottom_col logo">
              <div>
                <NavLink to={'/'} className='logo_link'>
                  <img src="./img/elearning-logo.png" alt="logo" />
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
                      <NavLink to={'/info'} >THÔNG TIN</NavLink>
                      {/* để tạm link qua info dễ qua lại  */}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <form className="header-bottom_col" onSubmit={handleSubmitSearch}>
              <div className="search-main d-flex justify-content-between">
                <input onInput={handleChange} type="text" placeholder='Tìm kiếm' className='search_input' data-ms-editor='true' />
                <button className="search_button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
            <div className="heder-bottom_col ">
              <NavLink className='btn  btn--common btn-primary' to='/login' onClick={() => {

              }
              }>
                Đăng Nhập
                <i className="fa-solid fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>


    </header >
  )
}

export default Header