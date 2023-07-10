import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Info = (props: Props) => {
  const [classState, toggleClass] = useState(false)
  return (<>
    {/* info */}
    <section className='info-page'>
      <div className="title-course">
        <h3>Thông tin cá nhân</h3>
        <p>Thông tin học viên</p>
      </div>
      <div className="info-page-content">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="info-left">
              <div className='info-avatar'>
                <img src="https://static-images.vnncdn.net/files/publish/2023/6/29/001rose-1879.jpg" alt="avarta" />
              </div>
              <h6>Rosé</h6>
              <p>Lập trình viên BlackPink</p>
              <button className='btn btn-success'>Hồ sơ cá nhân</button>
            </div>
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="info-right">
              <div className="tab">
                <button className={`tab-link ${!classState ? 'active' : ''}`} onClick={() => {
                  toggleClass(false)
                }}>Thông tin cá nhân</button>
                <button className={`tab-link ${classState ? 'active' : ''}`} onClick={() => {
                  toggleClass(true)
                }}>Khoá học</button>
              </div>
              <div className={`tab-content ${!classState ? 'active' : ''}`} >
                <section className="user-info">
                  <div className="user-info-top">
                    <div className="row">
                      <div className="col-md-7">
                        <p>Email:
                          <span> r0qwe@gmail.com</span>
                        </p>
                        <p>Họ và tên:
                          <span> tên là</span>
                        </p>
                        <p>Số điện thoại:
                          <span> 000000000000</span>
                        </p>
                      </div>
                      <div className="col-md-5">
                        <p>Tài khoản :
                          <span>12s1!</span>
                        </p>
                        <p>Nhóm :
                          <span>GP01</span>
                        </p>
                        <p>Đối tượng :
                          <span>Học viên</span>
                        </p>
                        <NavLink to='/' className='btn btn--common btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">Cập nhật
                          <i className="fa-solid fa-arrow-right"></i>
                        </NavLink>
                      </div>
                    </div>
                  </div>

                  <div className="user-info-bot">
                    <h4>Kĩ năng của tôi</h4>
                    <div className="row">
                      <div className="skill-all col-xl-8 col-lg-6">
                        <div className="my-skill">
                          <span className='badge bg-danger'>HTML</span>
                          <div className='bg-danger progress progress-bar progress-bar-striped progress-bar-animated alert alert-danger'>
                          </div>
                        </div>
                        <div className="my-skill">
                          <span className='badge bg-primary'>CSS</span>
                          <div className='bg-primary progress progress-bar progress-bar-striped progress-bar-animated alert alert-primary'>
                          </div>
                        </div>
                        <div className="my-skill">
                          <span className='badge bg-warning'>JS</span>
                          <div className='bg-warning progress progress-bar progress-bar-striped progress-bar-animated alert alert-warning' style={{width : '75%'}}>
                          </div>
                        </div>
                        <div className="my-skill">
                          <span className='badge bg-info'>REACT</span>
                          <div className='bg-info progress progress-bar progress-bar-striped progress-bar-animated alert alert-info' style={{width : '80%'}}>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6">
                        <div className="time-study">
                          <div className="time-study-item">
                            <i className="fa-solid fa-user-clock"></i>
                            <div>
                              <h6>Giờ học</h6>
                              <p>150</p>
                            </div>
                          </div>
                          <div className="time-study-item">
                            <i className="fa-solid fa-layer-group"></i>
                            <div>
                              <h6>Điểm tổng</h6>
                              <p>80</p>
                            </div>
                          </div>
                          <div className="time-study-item">
                            <i className="fa-solid fa-swatchbook"></i>
                            <div>
                              <h6>Buổi học</h6>
                              <p>50</p>
                            </div>
                          </div>
                          <div className="time-study-item">
                            <i className="fa-solid fa-signal-bars"></i>
                            <div>
                              <h6>Cấp độ</h6>
                              <p>Trung cấp</p>
                            </div>
                          </div>
                          <div className="time-study-item">
                            <i className="fa-solid fa-graduation-cap"></i>
                            <div>
                              <h6>Học lực</h6>
                              <p>Khá</p>
                            </div>
                          </div>
                          <div className="time-study-item">
                            <i className="fa-solid fa-book"></i>
                            <div>
                              <h6>Bài tập</h6>
                              <p>7749</p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </section>
              </div>
              <div className={`tab-content ${classState ? 'active' : ''}`}>
                <section className="my-course-info">
                  <div className="find-course-net">
                    <h6>Khoá học của tôi</h6>
                    <form action="">
                      <div className="search-main">
                        <input type="text" placeholder='Tìm kiếm' className='search_input' data-ms-editor='true' />
                        <button className="search_button">
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="my-course-item">
                    <div className="row">
                      <div className="col-xl-3 col-lg-4">
                        <img className='img-net' src="https://i.pravatar.cc?u=40" alt="..." />
                      </div>
                      <div className="col-xl-7 col-lg-6 card-net-content">
                        <h6>tên khoá học</h6>
                        <p className='color-card-title'>desription</p>
                        <div className="icon-net-card">
                          <span className="text-card-title"><i className="fa-solid fa-clock icon-oclock" /> 8 giờ</span>
                          <span className="text-card-title"><i className="fa-solid fa-calendar icon-calendar" /> 23 giờ</span>
                          <span className="text-card-title"><i className="fa-solid fa-signal icon-level " /> All level</span>
                        </div>
                        <p className="icon-star-net">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </p>
                        <div >
                          <img className="img-net-footer" src="/static/media/instrutor10.89946c43.jpg" alt='...' />
                          <span className="ml-2">Nguyễn Nam</span>
                        </div>

                      </div>
                      <div className="col-xl-2">
                        <NavLink className='btn  btn--common btn-primary' to='/detail'
                        >
                          Xem chi tiết
                          <i className="fa-solid fa-arrow-right"></i>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info-modal-update modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Chỉnh sửa thông tin cá nhân</h1>
              <button type="button" className='btn close' data-bs-dismiss="modal" ><i className="fa-solid fa-x"></i></button>
            </div>
            <div className="modal-body">
              <form action="#">
                <h6>Họ và tên</h6>
                <input type="text" placeholder='Họ và Tên' name='hoTen'/>
                <div className="message"></div>
                <h6>Mật Khẩu</h6>
                <input type="password" placeholder='Mật Khẩu' name='matKhau'/>
                <div className="message"></div>
                <h6>Emaik</h6>
                <input type="email" placeholder='Email' name='email'/>
                <div className="message"></div>
                <h6>Số điện thoại</h6>
                <input type="phone" placeholder='Số điện thoại' name='soDT'/>
                <div className="message"></div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Đóng</button>
                  <button type="button" className="btn btn-changes">Lưu thay đổi</button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>

    </section>
  </>
  )
}

export default Info