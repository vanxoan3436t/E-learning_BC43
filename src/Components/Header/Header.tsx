import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { history } from '../..'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../Redux/configStote'
import { getStore } from '../../util/config'
import { courseCategaryActionApi } from '../../Redux/reducer/quanLyKhoaHocReducer'
import ModeToggle from '../../theme/ModeToggle'
import AccountSettings from '../AccountSettings/AccountSettings'
import './_header.scss'
type Props = {}
const Header = (props: Props) => {
  const [navbarToggler, setNavbarToggler] = useState(false);
  const dispatch: DispatchType = useDispatch();
  const login: any = getStore('credentials');
  const keyInput = useRef('');
  const { coursesCategary } = useSelector((state: RootState) => state.quanLyKhoaHocReducer);

  const handleClickNavbarToggle = () => {
    if (navbarToggler === true) {
      setNavbarToggler(false);
    } else if (navbarToggler === false) {
      setNavbarToggler(true);
    }
  }

  //xử lí đăng nhập 
  const handleLoginLink = () => {
    if (login) {
      let loginAccount = JSON.parse(login)
      return <div className="header-avatar">
        {loginAccount.maLoaiNguoiDung === 'GV' ?
          <span className='header-set'>
          <NavLink to="/admin/usermanagement">
              <i className="fa-solid fa-gear text-warning"></i>
            </NavLink> 
          </span>
          : <></>}
        <div className='to-info' data-bs-toggle="dropdown" aria-expanded="false">
          <img className='your-avatar' src="/img/avatar-rose.jpg" alt="avarta" />
            <AccountSettings/>

        </div>
      </div>
    } else {
      return <NavLink className='btn btn--common ' to='/login'>
        Đăng Nhập
        <i className="fa-solid fa-arrow-right"></i>
      </NavLink>
    }
  }
  const [searchValue, setSearchValue] = useState('')
  const handleChange = (e: any) => {
    const { value } = e.target;
    setSearchValue(value);
    keyInput.current = searchValue;
  }

  const deleteSearchValue = (e: any) => {
    e.preventDefault();
    setSearchValue('');
  }
  const handleSubmitSearch = async (e: any) => {
    e.preventDefault();
    if (keyInput.current !== '') {
      await history.push(`/search/${searchValue}`);
    }
  }
  // header fix
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    }
  }, [])

  useEffect(() => {
    dispatch(courseCategaryActionApi());
  }, [])
  return (<>
    <header className={`header white-bg sticky-on  ${scrollPosition > 91.5 ? "sticky" : ""}`}>
      <div id='topbar-wrap' className="header-top container-custom d-none d-lg-block">
        <div className="container-fluid">
          <div className="row align-items-center ">
            <div className="col-lg-9">
              <div className="header-top_info">

                <div className="header-top_info_item">
                  <div className="header-top_info_icon ">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div className="header-top_info_text ">
                    <p className='fs-13'>Thứ 2 - Thứ 6:</p>
                    <span>9am - 6pm</span>
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
                    <span>tech_learning@gmail.com</span>
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

      <div id='navbar-wrap' className={`white-bg header-bottom navbar-wrap container-custom header-mobile`}>
        <div className="container-fluid">
          <div className="main-menu">
            <nav className="main-menu-nav navbar navbar-expand-lg">
              <NavLink className="logo" to='/'>
                <img src="./img/logo-vanxoan.png" alt="logo" />
              </NavLink>
              <button
                onClick={() => { handleClickNavbarToggle() }}
                className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className='fa-solid fa-bars'></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Trang trủ</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to='/'>
                      DANH MỤC KHÓA HỌC  <i className="fa-solid fa-arrow-down"></i>
                    </NavLink>
                    <ul className="main-menu_dropdown">
                      {coursesCategary.map((coursesCategary: any, index: number) => (
                        <li key={index}>
                          <NavLink
                            className="dropdown-item"
                            to={`/categorycourses/${coursesCategary.maDanhMuc}`}
                            style={{ textTransform: 'uppercase' }}
                          >
                            {coursesCategary.tenDanhMuc}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={'/'} >BLOG</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={'/'} >Sự kiện</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={'/'} >Thông tin</NavLink>
                  </li>
                </ul>
                <div className={`d-block d-block-edit ${navbarToggler === true ? '' : 'd-none'}`}>
                  <div className={`nav-box-button `}>
                    <span className="dark-light">
                      <ModeToggle />
                    </span>
                    <form className="search-main d-flex justify-content-between" onSubmit={handleSubmitSearch}>
                      <input value={searchValue} onInput={handleChange} type="text" placeholder='Tìm kiếm' className='search_input' data-ms-editor='true' />
                      <button className="search_button">
                        <i className={`fas fa-search ${searchValue === '' ? 'd-block' : 'd-none'}`}></i>
                        <i
                          onClick={deleteSearchValue}
                          className={`fa-solid fa-xmark ${searchValue !== '' ? 'd-block' : 'd-none'}`}></i>
                      </button>
                    </form>
                    {handleLoginLink()}
                  </div>
                </div>
              </div>
            </nav>

            <div className={`d-block ${navbarToggler === false ? '' : 'd-none'}`}>
              <div className={`nav-box-button nav-box-button-lg `}>
                <span className="dark-light">
                  <ModeToggle />
                </span>
                <form className="search-main d-flex justify-content-between" onSubmit={handleSubmitSearch}>
                  <input value={searchValue} onInput={handleChange} type="text" placeholder='Tìm kiếm' className='search_input' data-ms-editor='true' />
                  <button className="search_button">
                    <i className={`fas fa-search ${searchValue === '' ? 'd-block' : 'd-none'}`}></i>
                    <i
                      onClick={deleteSearchValue}
                      className={`fa-solid fa-xmark ${searchValue !== '' ? 'd-block' : 'd-none'}`}></i>
                  </button>
                </form>
                {handleLoginLink()}
              </div>
            </div>
          </div>

        </div>
      </div>
    </header >
  </>
  )
}

export default Header