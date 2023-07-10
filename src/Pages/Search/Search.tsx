import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Search = (props: Props) => {
  return (
    <>
      <section className='search-page-container'>
        <div className='title-course'>
          <h3>Tìm kiếm</h3>
          <p>Kết quả tìm kiếm khóa học</p>
        </div>
        <div className='search-page container-fluid'>
          <div className='row'>
            <div className='col-xl-2 col-lg-3 col-md-4 '>
              {/* filter PC */}
              <div className='nav-filter'>
                <h6><i className="fa-solid fa-book-open"></i>Lọc</h6>
                <div className='filter-container'>
                  <div className='filter-item'>
                    <h6>Khóa học</h6>
                    <ul>
                      <li>
                        <label className="box-search">
                          Tất cả
                          <input type="checkbox" />
                          <span className='check-mark'><i className="fa-solid fa-check"></i></span>
                        </label>
                      </li>
                      <li>
                        <label className="box-search">
                          Front End
                          <input type="checkbox" />
                          <span className='check-mark'><i className="fa-solid fa-check"></i></span>
                        </label>
                      </li>
                      <li>
                        <label className="box-search">
                          Back End
                          <input type="checkbox" />
                          <span className='check-mark'><i className="fa-solid fa-check"></i></span>
                        </label>
                      </li>
                      <li>
                        <label className="box-search">
                          HTML / CSS
                          <input type="checkbox" />
                          <span className='check-mark'><i className="fa-solid fa-check"></i></span>
                        </label>
                      </li>
                    </ul>

                  </div>
                  <div className='filter-item'>
                    <h6>Cấp độ</h6>
                    <ul>
                      <li>
                        <label className="box-search">
                          Tất cả
                          <input type="checkbox" />
                          <span className='check-mark'><i className="fa-solid fa-check"></i></span>
                        </label>
                      </li>
                      <li>
                        <label className="box-search">
                          Mới bắt đầu
                          <input type="checkbox" />
                          <span className='check-mark'><i className="fa-solid fa-check"></i></span>
                        </label>
                      </li>
                      <li>
                        <label className="box-search">
                          Trung cấp
                          <input type="checkbox" />
                          <span className='check-mark'><i className="fa-solid fa-check"></i></span>
                        </label>
                      </li>
                      <li>
                        <label className="box-search">
                          Cao cấp
                          <input type="checkbox" />
                          <span className='check-mark'><i className="fa-solid fa-check"></i></span>
                        </label>
                      </li>
                    </ul>

                  </div>
                  <div className='filter-item'>
                    <h6>Đánh giá</h6>
                    <ul>
                      <li>
                        <label className="box-search">
                          <i className="fa-solid fa-star"></i>

                          <input type="checkbox" />
                          <span className='check-mark'><i className="fa-solid fa-check"></i></span>
                        </label>
                      </li>
                      <li>
                        <label className="box-search">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <input type="checkbox" />
                          <span className='check-mark'><i className="fa-solid fa-check"></i></span>
                        </label>
                      </li>
                      <li>
                        <label className="box-search">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <input type="checkbox" />
                          <span className='check-mark'><i className="fa-solid fa-check"></i></span>
                        </label>
                      </li>
                      <li>
                        <label className="box-search">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <input type="checkbox" />
                          <span className='check-mark'><i className="fa-solid fa-check"></i></span>
                        </label>
                      </li>
                      <li>
                        <label className="box-search">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>

                          <input type="checkbox" />
                          <span className='check-mark'><i className="fa-solid fa-check"></i></span>
                        </label>
                      </li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-10 col-lg-9 col-md-8">
              <h6>
                Hiển thị 0 kết quả
              </h6>
              <div className="course-search-result mt-3">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search