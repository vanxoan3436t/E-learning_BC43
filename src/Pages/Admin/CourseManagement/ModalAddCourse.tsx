import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
// import { DispatchType, RootState } from '../../../Redux/configStote';
import { useFormik } from 'formik';
type Props = {

}

export interface AddCourseModal {
  maKhoaHoc: string,
  biDanh: string,
  tenKhoaHoc: string,
  moTa: string,
  luotXem: number,
  danhGia: number,
  hinhAnh: string,
  maNhom: string,
  ngayTao: string,
  maDanhMucKhoaHoc: string,
  taiKhoanNguoiTao: string
}

export default function ModalAddCourse({ }: Props) {
  // const dispatch: DispatchType = useDispatch();
  const [thumb, setThumb] = useState('../Img/ImgLogo/logo512.png')
  // const coursesCategary = useSelector((state: RootState) => state.quanLyKhoaHocReducer.coursesCategary);
  // const userArray = useSelector((state: RootState) => state.quanLyNguoiDungReducer.userArray);
  // addcoursefrm with add courses
  const addCourseFrm = useFormik<AddCourseModal>({
    initialValues: {
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: '',
      maNhom: "",
      ngayTao: "",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: ""
    },
    validationSchema: Yup.object().shape({
        maKhoaHoc: Yup.string()
            .required('Mã khóa học không được để trống'),

        tenKhoaHoc: Yup.string()
            .required('Tên khóa học không được để trống'),

        moTa: Yup.string()
            .required('Mô tả không được để trống'),

        ngayTao: Yup.string()
            .required('Ngày tạo không được để trống')
            .matches(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/, 'Vui lòng nhập đúng định dạng DD/MM/YYYY'),
        // .format('DD/MM/YYYY', true),
        danhGia: Yup.number()
            .required('Đánh giá không được để trống')
            .max(5, 'Đánh giá nhiều nhất là 5 sao')
            .min(0, 'Đánh giá thấp nhất là 0 sao'),
        luotXem: Yup.number()
            .required('Đánh giá không được để trống')
            .min(0, 'Lượt xem thấp nhất là 0'),
        maDanhMucKhoaHoc: Yup.string()
            .required('Danh mục khóa học không được để trống'),
        taiKhoanNguoiTao: Yup.string()
            .required('Tài khoản không được để trống'),
        maNhom: Yup.string()
            .required('Mã nhóm không được để trống')
    }),
    onSubmit: (values : AddCourseModal) => {
      console.log('values', values)

    }
  }


  )
  useEffect(() => {
    // dispatch(courseCategory)
  }, [])
  return (
    <div className="modal fade" id="addCourse" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog form-course">
        <div className="modal-content ">

          {/* Modal Header */}
          <header className="head-form mb-0">
            <h3 id="header-title">THÊM KHÓA HỌC</h3>
          </header>
          {/* Modal body */}
          <div className="modal-body">
            <form className="d-flex flex-wrap" onSubmit={addCourseFrm.handleSubmit}>
              <div className="form-group col-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-user" /></span>
                  </div>
                  <input type="text" name="maKhoaHoc" className="form-control input-sm" placeholder="Mã khóa học" onInput={addCourseFrm.handleChange} onBlur={addCourseFrm.handleBlur} />
                </div>
                {addCourseFrm.touched.maKhoaHoc && addCourseFrm.errors.maKhoaHoc && <div className="text-danger text-left">{addCourseFrm.errors.maKhoaHoc}</div>} 
              </div>
              <div className="form-group col-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-address-book" /></span>
                  </div>
                  <input type="name" name="tenKhoaHoc" className="form-control input-sm" placeholder="Tên khóa học" onInput={addCourseFrm.handleChange} onBlur={addCourseFrm.handleBlur} />
                </div>
                {addCourseFrm.touched.tenKhoaHoc && addCourseFrm.errors.tenKhoaHoc && <div className="text-danger text-left">{addCourseFrm.errors.tenKhoaHoc}</div>}
              </div>
              <div className="form-group col-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-briefcase" /></span>
                  </div>
                  <select value='' className="form-control" name="maDanhMucKhoaHoc" onInput={addCourseFrm.handleChange} onBlur={addCourseFrm.handleBlur} >
                    <option value="">Danh mục khóa học</option>
                    {/* {renderCourseList(coursesCategary)} */}
                    <option value="Design">Thiết kế Web-Design</option>
                    <option value="FullStack">Lập trình Full Stack-FullStack</option>
                  </select>
                </div>
                {addCourseFrm.touched.maDanhMucKhoaHoc && addCourseFrm.errors.maDanhMucKhoaHoc && <div className="text-danger text-left">{addCourseFrm.errors.maDanhMucKhoaHoc}</div>}
              </div>

              <div className="form-group col-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-calendar" /></span>
                  </div>
                  <input type="text" name="ngayTao" 
                  // id="datepicker" 
                  className="form-control" placeholder="Ngày tạo" onInput={addCourseFrm.handleChange} onBlur={addCourseFrm.handleBlur} />
                </div>
                {addCourseFrm.touched.ngayTao && addCourseFrm.errors.ngayTao && <div className="text-danger text-left">{addCourseFrm.errors.ngayTao}</div>}
              </div>

              <div className="form-group col-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-user" /></span>
                  </div>
                  <input type="number" name="danhGia"  className="form-control input-sm" placeholder="Đánh giá" onInput={addCourseFrm.handleChange} onBlur={addCourseFrm.handleBlur} />
                </div>
                {addCourseFrm.touched.danhGia && addCourseFrm.errors.danhGia && <div className="text-danger text-left">{addCourseFrm.errors.danhGia}</div>}
              </div>
              <div className="form-group col-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-address-book" /></span>
                  </div>
                  <input type="number" name="luotXem" className="form-control input-sm" placeholder="Lượt xem" onInput={addCourseFrm.handleChange} onBlur={addCourseFrm.handleBlur} />
                </div>
                {addCourseFrm.touched.luotXem && addCourseFrm.errors.luotXem && <div className="text-danger text-left">{addCourseFrm.errors.luotXem}</div>}
              </div>
              <div className="form-group col-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-briefcase" /></span>
                  </div>
                  <select className="form-control" name="taiKhoanNguoiTao" onInput={addCourseFrm.handleChange} onBlur={addCourseFrm.handleBlur}>
                    <option value="">Người tạo</option>
                    {/* {renderCreatorList(userArray)} */}
                    <option value="vanxoan">Văn Xoạn</option>

                  </select>
                </div>
                {addCourseFrm.touched.taiKhoanNguoiTao && addCourseFrm.errors.taiKhoanNguoiTao && <div className="text-danger text-left">{addCourseFrm.errors.taiKhoanNguoiTao}</div>}
                <span className="sp-thongbao" id="tbChucVu" />
              </div>

              <div className="form-group col-6 text-start">
                <div>
                  <input type='file' name='hinhAnh'
                    accept="image/png,image/jpg,image/jpeg"
                    {...(event: any) => {
                      let file = event.target.files[0]
                      let reader = new FileReader();
                      reader.readAsDataURL(file);
                      reader.onload = (e : any) => {
                        setThumb(e.target.result)
                      };
                      addCourseFrm.setFieldValue("hinhAnh", file);
                      console.log(addCourseFrm.values)
                    }}
                    onBlur={addCourseFrm.handleBlur} id="hinhAnh"
                  />
                  {/* <label className="custom-file-label text-left" htmlFor="hinhAnh"></label> */}

                </div>

              </div>
              <div className="form-group col-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-address-book" /></span>
                  </div>
                  <select className="form-control" name="maNhom" onInput={addCourseFrm.handleChange} onBlur={addCourseFrm.handleBlur} >
                    <option value="">Mã nhóm</option>
                    <option value="GP01">GP01</option>
                    <option value="GP02">GP02</option>
                    <option value="GP03">GP03</option>
                    <option value="GP04">GP04</option>
                    <option value="GP05">GP05</option>
                    <option value="GP06">GP06</option>
                    <option value="GP07">GP07</option>
                    <option value="GP08">GP08</option>
                    <option value="GP09">GP09</option>
                    <option value="GP10">GP10</option>
                    <option value="GP11">GP11</option>
                    <option value="GP12">GP12</option>
                    <option value="GP13">GP13</option>
                    <option value="GP14">GP14</option>
                    <option value="GP15">GP15</option>
                  </select>
                </div>
                {addCourseFrm.touched.maNhom && addCourseFrm.errors.maNhom && <div className="text-danger text-left">{addCourseFrm.errors.maNhom}</div>}
              </div>
              <div className="col-12 container text-start">
                <h5 className="card-header mb-2">Mô tả khóa học</h5>
                {/* {addCourseFrm.touched.moTa && addCourseFrm.errors.moTa && <div className="text-danger text-left">{addCourseFrm .errors.moTa}</div>} */}
                <div className="row">
                  <span className='col-3'>
                    <img src='https://i.pravatar.cc?u=40'
                      className="img-fluid rounded"
                      // alt={f&&File.name}
                      height={200}
                      width={200} alt='....' />
                  </span>
                  <textarea style={{ width: '75%' }} name="moTa" className=" h-auto form-control input-sm col-9" placeholder="Nhập mô tả" onInput={addCourseFrm.handleChange} onBlur={addCourseFrm.handleBlur} />
                </div>
              </div>

              {/* Modal footer */}
              <div className="modal-footer col-12" id="modal-footer">

                <button
                //  id="btnDong" 
                type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
                <button
                //  id="btnThem" 
                 type="submit" className="btn btn-success">Thêm khóa học</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}