import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../Redux/configStote';
import { useParams, NavLink } from 'react-router-dom';
import { getcourseCategaryListActionApi } from '../../Redux/reducer/quanLyKhoaHocReducer';


type Props = {}

const CategoryCourese = (props: Props) => {
  const dispatch: DispatchType = useDispatch();
  const { coursesCategary, coursesCategaryList } = useSelector((state: RootState) => state.quanLyKhoaHocReducer)
  const categoryCode: any = useParams();

  const nameCategary = () => {
    return coursesCategary.map((i: any, index: number) => {
      if (i.maDanhMuc === categoryCode.id) {
        return <span key={index} className='ms-2'> {i.tenDanhMuc}</span>
      }
    })
  }

  const renderCourseCategoryList = () => {
    return coursesCategaryList.map((course: any, index: number) => {
      if ((index + 1) % 2 === 0) {
        return (
          <div key={index} className="col-xl-3 col-lg-4 col-md-6 card-global-res">
            <NavLink to={`/detail/${course.maKhoaHoc}`} className="card-global move-sub-card">
              <img src={course.hinhAnh} onError={(e: any) => { e.target.onError = null; e.target.src = "https://codersera.com/blog/wp-content/uploads/2019/12/Learn-Reactjs-672x372.jpeg" }} alt="..."/>
              <span className='stiker-card'>{course.tenKhoaHoc.length <= 10 ? course.tenKhoaHoc : "Lập trình web"}</span>
              <div className="card-body-global">
                <h6 className="">{course.moTa.length > 100 ? course.moTa.substr(0, 50) + '...' : 'Lập trình hiện đang là xu hướng trên toàn thế giới...'}</h6>
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
      } else {
        return (
          <div key={index} className="col-xl-3 col-lg-4 col-md-6   card-global-res">
            <NavLink to={`/detail/${course.maKhoaHoc}`} className="card-global">
              <img src={course.hinhAnh} onError={(e: any) => { e.target.onError = null; e.target.src = "https://codersera.com/blog/wp-content/uploads/2019/12/Learn-Reactjs-672x372.jpeg" }} alt="..." />
              <span className='stiker-card'>{course.tenKhoaHoc.length <= 10 ? course.tenKhoaHoc : "Lập trình web"}</span>
              <div className="card-body-global">
                <h6 className="">{course.moTa.length > 100 ? course.moTa.substr(0, 50) + '...' : 'Lập trình hiện đang là xu hướng trên toàn thế giới...'}</h6>
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
    dispatch(getcourseCategaryListActionApi(categoryCode.id))
  }, [categoryCode.id])
  return (
    <section >
      <div className="title-course">
        <h3>KHÓA HỌC THEO DANH MỤC</h3>
        <p>HÃY CHỌN KHÓA HỌC MONG MUỐN !!!</p>
      </div>
      <div className="list-couser-category">
        <div >
          <span className='course-name'>
            <i className='fa-solid fa-desktop'></i>
            {nameCategary()}
          </span>
        </div>

        <div className='mt-3 list-courses-content'>
          <div className='row'>
            {renderCourseCategoryList()}
          </div>
        </div>

      </div>
    </section>
  )
}

export default CategoryCourese