import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { CourseDetail } from '../../../Redux/reducer/quanLyKhoaHocReducer';

type Props = {}

export default function ListCourses({ }: Props) {
    const  coursesList = useSelector((state : any )=> state.quanLyKhoaHocReducer.coursesList);
 
    const renderCoursePopular = () => {
        return coursesList?.slice(0, 4).map((course : CourseDetail, index : number) => {
            return (
                <div key={index} className="col-sm-6 col-md-4 col-xxl-3 card-global-res">
                    <NavLink to={`/detail/${course.maKhoaHoc}`} className="card-global">
                        <img src={course.hinhAnh} onError={(e: any) => { e.target.onError = null; e.target.src = "https://codersera.com/blog/wp-content/uploads/2019/12/Learn-Reactjs-672x372.jpeg" }} alt="..." />
                        <span className='stiker-card'>{course.tenKhoaHoc.length > 5 ? course.tenKhoaHoc : "Lập trình web"}</span>
                        <div className="card-body-global">
                            <h6 className="">{course.moTa.length > 50 ? course.moTa.substring(0, 50) + '...' : 'Lập trình hiện đang là xu hướng trên toàn thế giới...'}</h6>
                            <div className='title-maker'>
                                <div className='img-card-footer'><img className='' src='/img/tony-stark.webp' alt="..." /></div>
                                <span className='ms-2 color-card-title'>Elon Musk</span>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <div>
                                <p>900.000<sup>đ</sup></p>
                                <p>400.000<sup>đ</sup></p>
                            </div>
                            <div>
                                <i className="fas fa-star me-1 text-star"></i>
                                <span className='text-star'>4.9</span>
                                <span className='color-card-title'>(7840)</span>
                            </div>
                        </div>
                    </NavLink>
                </div>
            )

        })
    }

    const renderCourseStudent = () => {
        return coursesList?.slice(5, 9).map((course : CourseDetail, index : number) => {
            if ((index + 1) % 2 === 0) {
                return (
                    <div key={index} className="col-sm-6 col-md-4 col-xxl-3 card-global-res mt-4">
                        <NavLink to={`/detail/${course.maKhoaHoc}`} className="card-global move-sub-card ">
                            <img src={course.hinhAnh} onError={(e: any) => { e.target.onError = null; e.target.src = "https://codersera.com/blog/wp-content/uploads/2019/12/Learn-Reactjs-672x372.jpeg" }} alt="..." />
                            <span className='stiker-card'>{course?.tenKhoaHoc?.length <= 10 ? course.tenKhoaHoc : "Lập trình web"}</span>
                            <div className="card-body-global">
                                <h6 className="">{course?.moTa?.length > 100 ? course.moTa.substring(0, 50) + '...' : 'Lập trình hiện đang là xu hướng trên toàn thế giới...'}</h6>
                                <div className='card-icon'>
                                    <span><i className="far fa-clock icon-oclock"></i>8 giờ</span>
                                    <span><i className="far fa-calendar-alt icon-calendar"></i>4 tuần</span>
                                    <span><i className="fas fa-signal icon-level"></i>Tất cả</span>
                                </div>
                            </div>
                            <div className='card-footer'>
                                <div className='title-maker'>
                                    <div className='img-card-footer'><img className='' src='/img/tony-stark.webp' alt="..." /></div>
                                    <span className='ms-2 color-card-title'>Elon Musk</span>
                                </div>
                                <div>
                                    <p>800.000<sup>đ</sup></p>
                                    <p>400.000<sup>đ</sup><i className="fas fa-tag iconTag"></i></p>
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
                                <button className='btn-global btn-sub-card'><NavLink to={`/detail/${course.maKhoaHoc}`}>Xem chi tiết</NavLink></button>

                            </div>
                            <div className='card-sale'>
                                <span>Yêu thích</span>
                            </div>
                        </NavLink>
                    </div>
                )

            } else {
                return (
                    <div key={index} className="col-sm-6 col-md-4 col-xxl-3 card-global-res mt-4">
                        <NavLink to={`/detail/${course.maKhoaHoc}`} className="card-global ">
                            <img src={course.hinhAnh} onError={(e: any) => { e.target.onError = null; e.target.src = "https://codersera.com/blog/wp-content/uploads/2019/12/Learn-Reactjs-672x372.jpeg" }} alt="..." />
                            <span className='stiker-card'>{course?.tenKhoaHoc?.length <= 10 ? course.tenKhoaHoc : "Lập trình web"}</span>
                            <div className="card-body-global">
                                <h6 className="">{course?.moTa?.length > 100 ? course.moTa.substring(0, 50) + '...' : 'Lập trình hiện đang là xu hướng trên toàn thế giới...'}</h6>
                                <div className='card-icon'>
                                    <span><i className="far fa-clock icon-oclock"></i>8 giờ</span>
                                    <span><i className="far fa-calendar-alt icon-calendar"></i>4 tuần</span>
                                    <span><i className="fas fa-signal icon-level"></i>Tất cả</span>
                                </div>
                            </div>
                            <div className='card-footer'>
                                <div className='title-maker'>
                                    <div className='img-card-footer'><img className='' src='/img/tony-stark.webp' alt="..." /></div>
                                    <span className='ms-2 color-card-title'>Elon Musk</span>
                                </div>
                                <div>
                                    <p>800.000<sup>đ</sup></p>
                                    <p>400.000<sup>đ</sup><i className="fas fa-tag iconTag"></i></p>
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
                                <button className='btn-global btn-sub-card'><NavLink to={`/detail/${course.maKhoaHoc}`}>Xem chi tiết</NavLink></button>

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
    const renderCourseReact = () => {
        return coursesList?.slice(7, 11).map((course : CourseDetail, index : number) => {
            // console.log(course.maKhoaHoc);
            if ((index + 1) % 2 === 0) {
                return (
                    <div key={index} className="col-sm-6 col-md-4 col-xxl-3 card-global-res mt-4">
                        <NavLink to={`/detail/${course.maKhoaHoc}`} className="card-global move-sub-card">
                            <img src={course.hinhAnh} onError={(e: any) => { e.target.onError = null; e.target.src = "https://codersera.com/blog/wp-content/uploads/2019/12/Learn-Reactjs-672x372.jpeg" }} alt="..." />
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
                                    <span className='ms-2 color-card-title'>Elon Musk</span>
                                </div>
                                <div>
                                    <p>800.000<sup>đ</sup></p>
                                    <p>400.000<sup>đ</sup><i className="fas fa-tag iconTag"></i></p>
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
                                <button className='btn-global btn-sub-card'><NavLink to={`/detail/${course.maKhoaHoc}`}>Xem chi tiết</NavLink></button>

                            </div>
                            <div className='card-sale'>
                                <span>Yêu thích</span>
                            </div>
                        </NavLink>
                    </div>
                )

            } else {
                return (
                    <div key={index} className="col-sm-6 col-md-4 col-xxl-3 card-global-res mt-4">
                        <NavLink to={`/detail/${course.maKhoaHoc}`} className="card-global">
                            <img src={course.hinhAnh} onError={(e: any) => { e.target.onError = null; e.target.src = "https://codersera.com/blog/wp-content/uploads/2019/12/Learn-Reactjs-672x372.jpeg" }} alt="..." />
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
                                    <span className='ms-2 color-card-title'>Elon Musk</span>
                                </div>
                                <div>
                                    <p>800.000<sup>đ</sup></p>
                                    <p>400.000<sup>đ</sup><i className="fas fa-tag iconTag"></i></p>
                                </div>

                            </div>
                            <div className='sub-card'>
                                <div className='sub-card-head'>
                                    <img src='/img/tony-stark.webp'  alt="..." />
                                    <span className='ms-1 color-card-title'>Elun Musk Ricard</span>
                                </div>
                                <h6>BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC</h6>
                                <p className='color-card-title'>Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương trình đào tạo Bootcamp Lập trình Front End chuyên nghiệp. Khóa học 100% thực hành cường độ cao theo dự án thực tế và kết nối doanh nghiệp hỗ trợ tìm việc ngay sau khi học...</p>
                                <div className='card-icon'>
                                    <span><i className="far fa-clock icon-oclock"></i>8 giờ</span>
                                    <span><i className="far fa-calendar-alt icon-calendar"></i>4 tuần</span>
                                    <span><i className="fas fa-signal icon-level"></i>Tất cả</span>
                                </div>
                                <button className='btn-global btn-sub-card'><NavLink to={`/detail/${course.maKhoaHoc}`}>Xem chi tiết</NavLink></button>

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
    return (<div className='list-couser-category '>
        {/* Course Popular */}
        <div className='popular-course'>
            <h6 className='ms-3 mt-5'>
            Khóa học phổ biến
            </h6>
        <div className='row mt-4'>
            {renderCoursePopular()}
        </div>
        </div>
        {/* Course Student */}
        <div className='mt-5'>
            <h6 className='ms-3'>Khóa học tham khảo</h6>
            <div className='row'>
                {renderCourseStudent()}
            </div>
        </div>
        {/* Course Student */}
        <div className='mt-5'>
            <h6 className='ms-3'>Khóa học Front End React Js</h6>
            <div className='row'>
                {renderCourseReact()}
            </div>
        </div>
    </div>
    )
}