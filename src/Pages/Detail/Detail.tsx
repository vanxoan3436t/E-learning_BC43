import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../..'
import { NavLink, useParams } from 'react-router-dom'
import { CourseDetail, getDetailActionApi, getListCourseActionApi, registerCourseActionApi } from '../../Redux/reducer/quanLyKhoaHocReducer'
import { DispatchType } from '../../Redux/configStote'
import { getStoreJson } from '../../util/config'
import swal from 'sweetalert'

type Props = {}

export default function Detail({ }: Props) {
  const dispatch : DispatchType = useDispatch();
const kword : any = useParams();

  const { courseDetail, coursesList } = useSelector((state: any) => state.quanLyKhoaHocReducer)
  const renderCourseRelated = () => {
    return coursesList?.slice(7, 11).map((course : CourseDetail, index : number) => {
        if ((index + 1) % 2 === 0) {
          return (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6   card-global-res">
              <NavLink to={`/detail/${course.maKhoaHoc}`} className="card-global move-sub-card">
                <img src={course.hinhAnh} onError={(e: any) => { e.target.onError = null; e.target.src = "https://codersera.com/blog/wp-content/uploads/2019/12/Learn-Reactjs-672x372.jpeg" }}  alt="..."/>
                <span className='stiker-card'>{course.tenKhoaHoc.length <= 10 ? course.tenKhoaHoc : "Lập trình web"}</span>
                <div className="card-body-global">
                  <h6 className="">{course.moTa.length > 100 ? course.moTa.substring(0, 50) + '...' : 'Lập trình hiện đang là xu hướng trên toàn thế giới...'}</h6>
                  <div className='card-icon'>
                    <span><i className="far fa-clock icon-oclock"></i>8 giờ</span>
                    <span><i className="far fa-calendar-alt icon-calendar"></i>4 tuần</span>
                    <span><i className="fas fa-signal icon-level"></i>Tất cả</span>
                  </div>
                </div>
                <div className='card-footer'>
                  <div className='title-maker'>
                    <div className='img-card-footer'><img className='' src='/img/tony-stark.webp' alt="" /></div>
                    <span className='ms-2 color-card-title'>Tony Stark</span>
                  </div>
                  <div>
                    <p>900.000<sup>đ</sup></p>
                    <p>400.000<sup>đ</sup><i className="fas fa-tag icon-tag"></i></p>
                  </div>
  
                </div>
                <div className='sub-card'>
                  <div className='sub-card-head'>
                    <img src='/img/tony-stark.webp' alt="" />
                    <span className='ms-1 color-card-title'>Elun Musk Ricard</span>
                  </div>
                  <h6>BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC</h6>
                  <p className='color-card-title'>Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương trình đào tạo Bootcamp Lập trình Front End chuyên nghiệp. Khóa học 100% thực hành cường độ cao theo dự án thực tế và kết nối doanh nghiệp hỗ trợ tìm việc ngay sau khi học...</p>
                  <div className='card-icon'>
                    <span><i className="far fa-clock icon-oclock"></i>8 giờ</span>
                    <span><i className="far fa-calendar-alt icon-calendar"></i>4 tuần</span>
                    <span><i className="fas fa-signal icon-level"></i>Tất cả</span>
                  </div>
                  <button className='btn-card-global btn-sub-card'><NavLink to={`/detail/${course.maKhoaHoc}`}>Xem chi tiết</NavLink></button>
  
                </div>
                <div className='card-sale'>
                  <span>Yêu thích</span>
                </div>
              </NavLink>
            </div>
          )
        }
        else {
          return (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6   card-global-res">
              <NavLink to={`/detail/${course.maKhoaHoc}`} className="card-global">
                <img src={course.hinhAnh} alt="..." />
                <span className='stiker-card'>{course.tenKhoaHoc.length <= 10 ? course.tenKhoaHoc : "Lập trình web"}</span>
                <div className="card-body-global">
                  <h6 className="">{course.moTa.length > 100 ? course.moTa.substring(0, 50) + '...' : 'Lập trình hiện đang là xu hướng trên toàn thế giới...'}</h6>
                  <div className='card-icon'>
                    <span><i className="far fa-clock icon-oclock"></i>8 giờ</span>
                    <span><i className="far fa-calendar-alt icon-calendar"></i>4 tuần</span>
                    <span><i className="fas fa-signal icon-level"></i>Tất cả</span>
                  </div>
                </div>
                <div className='card-footer'>
                  <div className='title-maker'>
                    <div className='img-card-footer'><img className='' src='/img/tony-stark.webp' alt="..." /></div>
                    <span className='ms-2 color-card-title'>Tony Stark</span>
                  </div>
                  <div>
                    <p>900.000<sup>đ</sup></p>
                    <p>400.000<sup>đ</sup><i className="fas fa-tag icon-tag"></i></p>
                  </div>
  
                </div>
                <div className='sub-card'>
                  <div className='sub-card-head'>
                    <img src='/img/tony-stark.webp' alt="..." />
                    <span className='ms-1 color-card-title'>Elun Musk Ricard</span>
                  </div>
                  <h6>BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC</h6>
                  <p className='color-card-title'>Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương trình đào tạo Bootcamp Lập trình Front End chuyên nghiệp. Khóa học 100% thực hành cường độ cao theo dự án thực tế và kết nối doanh nghiệp hỗ trợ tìm việc ngay sau khi học...</p>
                  <div className='card-icon'>
                    <span><i className="far fa-clock icon-oclock"></i>8 giờ</span>
                    <span><i className="far fa-calendar-alt icon-calendar"></i>4 tuần</span>
                    <span><i className="fas fa-signal icon-level"></i>Tất cả</span>
                  </div>
                  <button className='btn-card-global btn-sub-card'><NavLink to={`/detail/${course.maKhoaHoc}`}>Xem chi tiết</NavLink></button>
  
                </div>
                <div className='card-sale'>
                  <span>Yêu thích</span>
                </div>
              </NavLink>
            </div>
          )
        }

    })
}

useEffect(() => {
  dispatch(getDetailActionApi(kword.id));
  dispatch(getListCourseActionApi())
}, [kword.id])
  return (
    <>
      <section className='detail-coures'>
        <div className='title-course'>
          <h3>Thông tin khóa học</h3>
          <p>Tiến lên và không chần chừ !!!</p>
        </div>
        <div className='detail-coures-content'>
          <div className='row'>
            <div className="col-lg-8 col-md-7">
              <h4 className='title-detail-course'>{courseDetail.tenKhoaHoc > 18 ? courseDetail.tenKhoaHoc : 'LẬP TRÌNH FRONT-END CHUYÊN NGHIỆP'}</h4>
              <div className=' row head-detail-course'>
                <div className="col-lg-4">
                  <div className='detail-course-intro'>
                    <div>
                      <img src='/img/rose-blackpink.webp' alt="..." />
                    </div>
                    <div className='instrutor-title'>
                      <p>Giảng viên</p>
                      <p>Rose</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className='detail-course-intro'>
                    <div className=''>
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <div className='instrutor-title'>
                      <p>Lĩnh vực</p>
                      <p>{courseDetail.danhMucKhoaHoc?.tenDanhMucKhoaHoc}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className='detail-course-intro'>
                    <div className='review-detail'>
                      <span>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <i className="far fa-star"></i>
                        3.5
                      </span>
                      <p>100 đánh giá</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className='text-discripts'>React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện đại, phản ứng cho web.Khóa học này dạy bạn về React chuyên sâu, từ cơ bản, từng bước đi sâu vào tất cả các kiến ​​thức cơ bản cốt lõi, khám phá rất nhiều ví dụ và cũng giới thiệu cho bạn các khái niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn ví dụ và bản trình diễn, bài tập và bài tập cũng như vô số kiến ​​thức quan trọng bị hầu hết các nguồn khác bỏ qua - sau cùng, có một lý do tại sao khóa học này lại rất lớn! Và trong trường hợp bạn thậm chí không biết tại sao bạn lại muốn học React và bạn chỉ ở đây vì một số quảng cáo hoặc "thuật toán" - đừng lo lắng: ReactJS là một công nghệ quan trọng với tư cách là một nhà phát triển web và trong khóa học này, tôi sẽ cũng giải thích TẠI SAO điều đó lại quan trọng!</p>
              <div className='box-course-learn'>
                <h6>Những gì bạn sẽ học</h6>
                <div className='row'>
                  <div className="col-6">
                    <ul>
                      <li><i className='fas fa-check'></i><NavLink to=' '>Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện với người dùng và phản ứng nhanh</NavLink></li>
                      <li><i className='fas fa-check'></i><NavLink to=' '>Đăng ký công việc được trả lương cao hoặc làm freelancer trong một trong những lĩnh vực được yêu cầu nhiều nhất mà bạn có thể tìm thấy trong web dev ngay bây giờ</NavLink></li>
                      <li><i className='fas fa-check'></i><NavLink to=' '>Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận dụng sức mạnh của JavaScript một cách dễ dàng</NavLink></li>
                      <li><i className='fas fa-check'></i><NavLink to=' '>
                        Tìm hiểu tất cả về React Hooks và React Components</NavLink></li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li><i className='fas fa-check'></i><NavLink to=' '>
                        Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp Javascript NPM, Webpack, Babel và ES6 / ES2015</NavLink></li>
                      <li><i className='fas fa-check'></i><NavLink to=' '>Nhận ra sức mạnh của việc xây dựng các thành phần có thể kết hợp</NavLink></li>
                      <li><i className='fas fa-check'></i><NavLink to=' '>Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản</NavLink></li>
                      <li><i className='fas fa-check'></i><NavLink to=' '>Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các ứng dụng Redux</NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='course-content'>
                <h6>Nội dung khóa học</h6>
                <div className='course-detail-item'>
                  <div className='course-detail-content'>
                    <div className='section-course'>
                      <span>Mục 1: Giới thiệu</span>
                      <button className='btnGlobal btn-preview'>Xem trước</button>
                    </div>
                    <p>Bài học</p>
                    <div className='lesson-container'>
                      <div className='lesson-content mt-1'>
                        <span><i className="fas fa-play-circle"></i>Các khái niệm về React Component</span>
                        <span><i className="fas fa-clock"></i>14:35</span>
                      </div>
                      <div className='lesson-content mt-1'>
                        <span><i className="fas fa-play-circle"></i>Thiết lập môi trường cho Windows</span>
                        <span><i className="fas fa-clock"></i>14:35</span>
                      </div>
                      <div className='lesson-content mt-1'>
                        <span><i className="fas fa-play-circle"></i>Tạo ứng dụng React - React-Scripts</span>
                        <span><i className="fas fa-clock"></i>14:35</span>
                      </div>
                      <div className='lesson-content mt-1'>
                        <span><i className="fas fa-play-circle"></i>Ghi chú nhanh về dấu ngoặc kép cho string interpolation</span>
                        <span><i className="fas fa-clock"></i>14:35</span>
                      </div>

                    </div>
                  </div>

                </div>
                <div className='course-detail-item'>
                  <div className='course-detail-content'>
                    <div className='section-course'>
                      <span>Mục 2: Kiến thức căn bản</span>
                      <button className='btnGlobal btn-preview'>Xem trước</button>
                    </div>
                    <p>Bài học</p>
                    <div className='lesson-container'>
                      <div className='lesson-content mt-1'>
                        <span><i className="fas fa-play-circle"></i>Trang chủ và thành phần thư mục</span>
                        <span><i className="fas fa-clock"></i>14:35</span>
                      </div>
                      <div className='lesson-content mt-1'>
                        <span><i className="fas fa-play-circle"></i>Hướng dẫn khóa học + Liên kết Github</span>
                        <span><i className="fas fa-clock"></i>14:35</span>
                      </div>
                      <div className='lesson-content mt-1'>
                        <span><i className="fas fa-play-circle"></i>Trang chủ thương mại điện tử + thiết lập SASS</span>
                        <span><i className="fas fa-clock"></i>14:35</span>
                      </div>
                      <div className='lesson-content mt-1'>
                        <span><i className="fas fa-play-circle"></i>
                          Tệp CSS và SCSS</span>
                        <span><i className="fas fa-clock"></i>14:35</span>
                      </div>
                      <div className='lesson-content mt-1'>
                        <span><i className="fas fa-play-circle"></i>
                          React 17: Cập nhật các gói + Phiên bản React mới nhất</span>
                        <span><i className="fas fa-clock"></i>14:35</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='course-detail-item'>
                  <div className='course-detail-content'>
                    <div className='section-course'>
                      <span>Mục 3: Kiến thức chuyên sâu</span>
                      <button className='btnGlobal btn-preview'>Xem trước</button>
                    </div>
                    <p>Bài học</p>
                    <div className='lesson-container'>
                      <div className='lesson-content mt-1'>
                        <span><i className="fas fa-play-circle"></i>connect() and mapStateToProps</span>
                        <span><i className="fas fa-clock"></i>14:35</span>
                      </div>
                      <div className='lesson-content mt-1'>
                        <span><i className="fas fa-play-circle"></i>
                          Trạng thái thư mục vào Redux</span>
                        <span><i className="fas fa-clock"></i>14:35</span>
                      </div>
                      <div className='lesson-content mt-1'>
                        <span><i className="fas fa-play-circle"></i>
                          Thành phần Tổng quan về Bộ sưu tập</span>
                        <span><i className="fas fa-clock"></i>14:35</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-5">
              <div className='side-bar-course-detail'>
                <img src={courseDetail.hinhAnh} onError={(e: any) => { e.target.onError = null; e.target.src = "https://static2.yan.vn/YanNews/2167221/201911/70868668_2079835275450016_6414538479824273408_o-1ab2f5b2.jpg" }} alt="..." />
                <div className='course-price'>
                  <p><i className="fas fa-bolt"></i>500.000<sup>đ</sup></p>
                </div>
                <button className='btnGlobal btn-preview' onClick={() => {
                  if (getStoreJson('credentials')) {
                    registerCourseActionApi(kword.id)
                    console.log('AA', getStoreJson('credentials'))
                  } else {
                    swal({
                     title:'Cần đăng nhập để đăng kí !',
                     icon:'warning',
                     timer:2000, 
                    })
                    // dispatch(userNotloginRegis(kword.id))
                    history.push('/login')
                  }
                }}>Đăng ký</button>
                <div className='side-bar-detail-content'>
                  <ul>
                    <li>
                      <p>Ghi danh:<span> 10 học viên</span></p>
                      <i className='fas fa-user-graduate '></i>
                    </li>
                    <li>
                      <p>Thời gian: <span> 18 giờ</span></p>
                      <i className='far fa-clock far fa-calendar-alt'></i>
                    </li>
                    <li>
                      <p>Bài học:<span> 10</span></p>
                      <i className="fas fa-book"></i>
                    </li>
                    <li>
                      <p>Video:<span> 14</span></p>
                      <i className="fas fa-photo-video"></i>
                    </li>
                    <li>
                      <p>Trình độ:<span> Người mới bắt đầu</span></p>
                      <i className='fas fa-database'></i>
                    </li>
                  </ul>
                  <form action="" className='form-coupon'>
                    <input type="text" placeholder='Nhập mã' />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='courses-related'>
          <h6>Khóa học tham khảo</h6>
          <div className='row'>
            {renderCourseRelated()}
          </div>
        </div>
      </section>
    </>
  )
}