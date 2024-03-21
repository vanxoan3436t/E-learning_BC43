import { NavLink } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='footer overflow-hidden position-relative'>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6  col-sm-12 mb-30">
              <div className="footer-widget">
                <div className="footer-logo mb-30">
                  <NavLink to={'/'}>
                    <h4>Tech-Learning</h4>
                  </NavLink>
                </div>
                <div className="footer-widget_text">
                  <p>Bắt đầu sự nghiệp lập trình
                    từ ZERO tại <br /> Tech-Learning <br /> <span> 100% Thực Hành, Học Thật, Dự Án Thật, Việc Làm Thật</span>
                  </p>
                </div>
                <div className="footer-widget_social">
                  <ul>
                    <li className="social_list ">
                      <NavLink className='facebook' to="/">
                        <i className="fab fa-facebook-f" />
                      </NavLink>
                    </li>

                    <li className="social_list ">
                      <NavLink className='tiktok' to="/">
                        <i className="fa-brands fa-tiktok"></i>
                      </NavLink>
                    </li>
                    <li className="social_list ">
                      <NavLink className='instagram' to="/">
                        <i className="fab fa-instagram"></i>
                      </NavLink>
                    </li>
                    <li className="social_list ">
                      <NavLink className='youtube' to="/">
                        <i className="fa-brands fa-youtube"></i>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 mb-25">
              <div className="footer-widget">
                <div className="footer-widget_title">
                  <h3 >Khoá Học</h3>
                </div>
                <div className="footer-widget_menu">
                  <ul>
                    <li >
                      <NavLink to="/">Front End</NavLink>
                    </li>
                    <li >
                      <NavLink to="/">Back End</NavLink>
                    </li>
                    <li >
                      <NavLink to="/">Full stack</NavLink>
                    </li>
                    <li >
                      <NavLink to="/">Node Js</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 mb-25">
              <div className="footer-widget">
                <div className="footer-widget_title">
                  <h3 >Hỗ Trợ</h3>
                </div>
                <div className="footer-widget_menu">
                  <ul>
                    <li >
                      <NavLink to="/">Diễn Đàn</NavLink>
                    </li>
                    <li >
                      <NavLink to="/">Trợ Giúp & Hỏi đáp</NavLink>
                    </li>
                    <li >
                      <NavLink to="/">Liên hệ nhanh</NavLink>
                    </li>
                    <li >
                      <NavLink to="/">Chính sách</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12  mb-25">
              <div className="footer-widget">
                <div className="footer-widget_title">
                  <h3 >Đăng kí Tư Vấn</h3>
                </div>
                <form className="footer-form">
                  <input type="text" placeholder='Họ Và Tên' spellCheck='false' data-ms-editor='true' />
                  <input type="text" placeholder='Email' spellCheck='false' data-ms-editor='true' />
                  <input type="text" placeholder='Số Điện Thoại' spellCheck='false' data-ms-editor='true' />
                  <div className="section-button ">
                    <NavLink to='/' className='btn  btn--common btn-primary '>Gửi Đăng Kí
                      <i className="fa-solid fa-arrow-right"></i>
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="footer_copyright">
                <p >
                  © Bản quyền Tech-Learning 2022 - 2023 - Empower by <NavLink to="https://www.facebook.com/zoan.ty">Văn Xoạn</NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer