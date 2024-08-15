import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { DispatchType, RootState } from '../../Redux/configStote';
import { getStoreJson } from '../../util/config';
import { getUserInfoActionApi, updateUserInfoActionApi, userCancelCourseActionApi, } from '../../Redux/reducer/quanLyNguoiDungReducer';
import * as Yup from 'yup'
import { useFormik } from 'formik';
type Props = {}
export interface UserUpdateFrm {
  taiKhoan: string,
  matKhau: string,
  hoTen: string,
  soDT: string,
  maLoaiNguoiDung: string,
  maNhom: string,
  email: string
}

const Info = (props: Props) => {
  const [classState, toggleClass] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch: DispatchType = useDispatch();
  const infoUser = getStoreJson('credentials');
  const { ...userPersonalInfo } = useSelector((state: RootState) => state.quanLyNguoiDungReducer.userPersonalInfo);
  let { chiTietKhoaHocGhiDanh, taiKhoan, maLoaiNguoiDung, email, maNhom, soDT, hoTen } = { ...userPersonalInfo };
  // RenderCourser
  const RenderUserCourses = () => {
    if (chiTietKhoaHocGhiDanh) {
      return chiTietKhoaHocGhiDanh.filter((courses) => {
        if (searchTerm.trim() === '') {
          return courses
        } else if (courses.tenKhoaHoc.trim().toLocaleLowerCase().includes(searchTerm.trim().toLocaleLowerCase())) {
          return courses
        }
      }).map((course, index) => {
        return (
          <div key={index} className="my-course-item">
            <div className="row">
              <div className="col-xl-3 col-lg-4">
                <img className='img-net' src={course.hinhAnh} onError={(e: any) => { e.target.onError = null; e.target.src = "https://static2.yan.vn/YanNews/2167221/201911/70868668_2079835275450016_6414538479824273408_o-1ab2f5b2.jpg" }} alt="..." />
              </div>
              <div className="col-xl-7 col-lg-6 card-net-content">
                <h6>{course.tenKhoaHoc}</h6>
                <p className='color-card-title'>{course.moTa.length > 50 ? course.moTa.substring(0, 50) + '...' : 'ES6 là một chuẩn Javascript mới được đưa ra vào năm 2015 với nhiều quy tắc và cách sử dụng khác nhau...'}</p>
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
                  <img className="img-net-footer" src="https://nld.mediacdn.vn/291774122806476800/2022/3/19/20200403104047-41cb-16476717856591379514951.jpg" alt='...' />
                  <span className="ml-2">Nguyễn Nam</span>
                </div>

              </div>
              <div className="col-xl-2">
                <NavLink className='btn  btn--common btn-primary' to='/info'
                  onClick={() => {
                    const action = userCancelCourseActionApi(course.maKhoaHoc)
                    dispatch(action)
                  }
                  }>
                  Hủy Khóa Học
                </NavLink>
              </div>
            </div>
          </div>
        )
      })

    } else {
      return ''
    }
  }
  // updateFrm form 
  const updateFrm = useFormik<UserUpdateFrm>({
    initialValues: {
      taiKhoan: infoUser.taiKhoan,
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: infoUser.maLoaiNguoiDung,
      maNhom: "GP01",
      email: "",
    },
    validationSchema: Yup.object().shape({
      matKhau: Yup.string()
        .required('Tài khoản không được để trống')
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'Mật khẩu phải ít nhất 8 tự gồm chữ, số, và kí tự đặc biệt'),

      hoTen: Yup.string()
        .required('Tên không được để trống')
        .matches(/^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/, 'Chỉ nhập kí tự chữ'),

      email: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),
      soDT: Yup.string()
        .required('Số điện thoại không được để trống')
        .matches(/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/, 'Số điện thoại chưa đúng định đạng'),
    }),
    onSubmit: (values: UserUpdateFrm) => {
      const actionApi = updateUserInfoActionApi(values);
      dispatch(actionApi);
    }
  })
  useEffect(() => {
    dispatch(getUserInfoActionApi());
  }, [])
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
                <img src="/img/rose-info.jpg" alt="avarta" />
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
                          <span>{email}</span>
                        </p>
                        <p>Họ và tên:
                          <span>{hoTen}</span>
                        </p>
                        <p>Số điện thoại:
                          <span>{soDT}</span>
                        </p>
                      </div>
                      <div className="col-md-5">
                        <p>Tài khoản :
                          <span>{taiKhoan}</span>
                        </p>
                        <p>Nhóm :
                          <span>{maNhom}</span>
                        </p>
                        <p>Đối tượng :
                          <span>{maLoaiNguoiDung}</span>
                        </p>
                        <NavLink to='' className='btn btn--common btn-primary' data-bs-toggle="modal" data-bs-target="#update-info">Cập nhật
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
                          <div className='bg-warning progress progress-bar progress-bar-striped progress-bar-animated alert alert-warning' style={{ width: '75%' }}>
                          </div>
                        </div>
                        <div className="my-skill">
                          <span className='badge bg-info'>REACT</span>
                          <div className='bg-info progress progress-bar progress-bar-striped progress-bar-animated alert alert-info' style={{ width: '80%' }}>
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
                        <input type="text" placeholder='Tìm kiếm' className='search_input' data-ms-editor='true'  onChange={(e) => {
                          setSearchTerm(e.target.value)
                        console.log('e.target.value', e.target.value)
                        }}/>
                        <button className="search_button">
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                  {/*  */}
                  {RenderUserCourses()}
                </section>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info-modal-update modal fade " id="update-info" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Chỉnh sửa thông tin cá nhân</h1>
              <button type="button" className='btn close' data-bs-dismiss="modal" ><i className="fa-solid fa-x"></i></button>
            </div>
            <div className="modal-body">
              <form action="#" onSubmit={updateFrm.handleSubmit}>
                <h6>Họ và tên</h6>
                <input type="text" placeholder='Họ và Tên' name='hoTen' onBlur={updateFrm.handleBlur} onChange={updateFrm.handleChange} value={updateFrm.values.hoTen} />
                {updateFrm.errors.hoTen ? <div className='message-err text-danger'>{updateFrm.errors.hoTen}</div> : <div className='message'></div>}
                <h6>Mật Khẩu</h6>
                <input type="password" placeholder='Mật Khẩu' name='matKhau' onBlur={updateFrm.handleBlur} onChange={updateFrm.handleChange} value={updateFrm.values.matKhau} />
                {updateFrm.errors.matKhau ? <div className='message-err text-danger'>{updateFrm.errors.matKhau}</div> : <div className='message'></div>}
                <h6>Email</h6>
                <input type="email" placeholder='Email' name='email' onBlur={updateFrm.handleBlur} onChange={updateFrm.handleChange} value={updateFrm.values.email} />
                {updateFrm.errors.email ? <div className='message-err text-danger'>{updateFrm.errors.email}</div> : <div className='message'></div>}
                <h6>Số điện thoại</h6>
                <input type="phone" placeholder='Số điện thoại' name='soDT' onBlur={updateFrm.handleBlur} onChange={updateFrm.handleChange} value={updateFrm.values.soDT} />
                {updateFrm.errors.soDT ? <div className='message-err text-danger'>{updateFrm.errors.soDT}</div> : <div className='message'></div>}
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Đóng</button>
                  <button type="submit" className="btn btn-changes">Lưu thay đổi</button>
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