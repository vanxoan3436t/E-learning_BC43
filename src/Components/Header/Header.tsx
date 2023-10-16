import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { history } from '../..'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../Redux/configStote'
import { getStore } from '../../util/config'
import swal from 'sweetalert'
import { courseCategaryActionApi } from '../../Redux/reducer/quanLyKhoaHocReducer'
import ModeToggle from '../../theme/ModeToggle'
type Props = {}
const Header = (props: Props) => {
  const dispatch: DispatchType = useDispatch();
  const login: any = getStore('credentials');
  const keyInput = useRef('');
  const { coursesCategary } = useSelector((state: RootState) => state.quanLyKhoaHocReducer);
  const renderCourseCate = () => {
    return coursesCategary.map((coursesCategary: any, index: number) => {
      return (
        <li key={index}>
          <NavLink className="dropdown-item" to={`/categorycourses/${coursesCategary.maDanhMuc}`} style={{ textTransform: 'uppercase' }}>{coursesCategary.tenDanhMuc}</NavLink>
        </li>
      )
    })
  }

  // Đăng xuất
  const logOut = () => {
    localStorage.removeItem("credentials");
    swal({
      title: "Đăng xuất thành công !",
      icon: "success",
      timer: 2000,
    });
    window.location.reload();
  }
  //xử lí đăng nhập 
  const handleLoginLink = () => {
    if (login) {
      let loginAccount = JSON.parse(login)
      return <div className="header-avatar">
        {loginAccount.maLoaiNguoiDung === 'GV' ? <span className='header-set'>  <NavLink to="/admin/usermanagement"><i className="fa-solid fa-gear text-warning"></i></NavLink> </span> : <></>}
        <NavLink className='to-info' to='/info'>
          <img className='your-avatar' src="/img/avatar-rose.jpg" alt="avarta" />
          <span className='logout' onClick={() => {
            logOut()
          }}><NavLink to='/'><i className="fa-solid fa-right-to-bracket text-danger"></i></NavLink></span>
        </NavLink>
      </div>
    } else {
      return <NavLink className='btn btn--common ' to='/login'>
        Đăng Nhập
        <i className="fa-solid fa-arrow-right"></i>
      </NavLink>
    }
  }
  const handleChange = (e: any) => {
    const { value } = e.target;
    keyInput.current = value
  }
  const handleSubmitSearch = async (e: any) => {
    e.preventDefault();
    if (keyInput.current !== '') {
      await history.push(`/search/${keyInput.current}`);
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

      <div id='navbar-wrap' className={`white-bg header-bottom navbar-wrap container-custom header-mobile`}>
        <div className="container-fluid">
          <div className="main-menu">
            <nav className="main-menu-nav navbar navbar-expand-lg ">
              <NavLink className="logo" to='/'>
                <img src="/img/Van_xoan-logo-test.png" alt="logo" />
              </NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className='fa-solid fa-bars'></span>
              </button>
 
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Trang trủ</NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink className="nav-link " to='/'>
                      DANH MỤC KHÓA HỌC  <i className="fa-solid fa-arrow-down"></i>
                    </NavLink>
                    <ul className=" main-menu_dropdown">
                      {renderCourseCate()}
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={'/'} >BLOG</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={'/'} >Sự kiện</NavLink>
                  </li>

                </ul>
                <span className="dark-light">
                  <ModeToggle />
                </span>
                <form className="search-main d-flex justify-content-between" onSubmit={handleSubmitSearch}>
                  <input onInput={handleChange} type="text" placeholder='Tìm kiếm' className='search_input' data-ms-editor='true' />
                  <button className="search_button">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
                {handleLoginLink()}
              </div>
            </nav>

          </div>
        </div>

        {/* <span className="dark-light">
          <ModeToggle />
        </span> */}
      </div>
    </header >
  </>
  )
}

export default Header