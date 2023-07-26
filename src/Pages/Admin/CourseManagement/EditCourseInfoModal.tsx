type Props = {}

export default function EditCourseInfoModal({}: Props) {
  return (
    <div className="modal fade" id="editInfoCourse">
     <div className="modal-dialog form-course">
        <div className="modal-content ">

          {/* Modal Header */}
          <header className="head-form mb-0">
            <h3 id="header-title">CẬP NHẬT</h3>
          </header>
          {/* Modal body */}
          <div className="modal-body">
            <form className="d-flex flex-wrap " >
              <div className="form-group col-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-user" /></span>
                  </div>
                  <input type="text" name="maKhoaHoc" id="tknv" className="form-control input-sm" placeholder="Mã khóa học" />
                </div>

              </div>
              <div className="form-group col-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-address-book" /></span>
                  </div>
                  <input type="name" name="tenKhoaHoc" id="name" className="form-control input-sm" placeholder="Tên khóa học" />
                </div>
                {/* {formik.touched.tenKhoaHoc && formik.errors.tenKhoaHoc && <div className="text-danger text-left">{formik.errors.tenKhoaHoc}</div>} */}
              </div>
              <div className="form-group col-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-briefcase" /></span>
                  </div>
                  <select value='' className="form-control" name="maDanhMucKhoaHoc">
                    <option value="">Danh mục khóa học</option>

                    {/* {renderCourseList(coursesCategary)} */}
                  </select>
                </div>
                {/* {formik.touched.maDanhMucKhoaHoc && formik.errors.maDanhMucKhoaHoc && <div className="text-danger text-left">{formik.errors.maDanhMucKhoaHoc}</div>} */}
              </div>

              <div className="form-group col-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-calendar" /></span>
                  </div>
                  <input type="text" name="ngayTao" id="datepicker" className="form-control" placeholder="Ngày tạo" />
                </div>
                {/* {formik.touched.ngayTao && formik.errors.ngayTao && <div className="text-danger text-left">{formik.errors.ngayTao}</div>} */}
              </div>

              <div className="form-group col-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-user" /></span>
                  </div>
                  <input type="number" name="danhGia" id="tknv" className="form-control input-sm" placeholder="Đánh giá" />
                </div>
                {/* {formik.touched.danhGia && formik.errors.danhGia && <div className="text-danger text-left">{formik.errors.danhGia}</div>} */}
              </div>
              <div className="form-group col-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-address-book" /></span>
                  </div>
                  <input type="number" name="luotXem" id="name" className="form-control input-sm" placeholder="Lượt xem" />
                </div>
                {/* {formik.touched.luotXem && formik.errors.luotXem && <div className="text-danger text-left">{formik.errors.luotXem}</div>} */}
              </div>
              <div className="form-group col-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-briefcase" /></span>
                  </div>
                  <select className="form-control" name="taiKhoanNguoiTao">
                    <option value="">Người tạo</option>
                    {/* {renderCreatorList(userArray)} */}
                  </select>
                </div>
                {/* {formik.touched.taiKhoanNguoiTao && formik.errors.taiKhoanNguoiTao && <div className="text-danger text-left">{formik.errors.taiKhoanNguoiTao}</div>} */}
                <span className="sp-thongbao" id="tbChucVu" />
              </div>

              <div className="form-group col-6 text-start">
                <div>
                  <input type='file' name='hinhAnh'
                    accept="image/png,image/jpg,image/jpeg"
                  // {(event) => {
                  //   let file = event.target.files[0]
                  //   let reader = new FileReader();
                  //   reader.readAsDataURL(file);
                  //   reader.onload = (e) => {
                  //     setThumb(e.target.result)
                  //   };
                  //   formik.setFieldValue("hinhAnh", file);
                  //    console.log(formik.values)
                  // }}
                  // onBlur={formik.handleBlur} type="file" id="hinhAnh" 
                  />

                </div>

              </div>
              <div className="form-group col-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-address-book" /></span>
                  </div>
                  <select className="form-control" name="maNhom">
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
                {/* {formik.touched.maNhom && formik.errors.maNhom && <div className="text-danger text-left">{formik.errors.maNhom}</div>} */}
              </div>
              <div className="col-12 container text-start">
                <h5 className="card-header mb-2">Mô tả khóa học</h5>
                {/* {formik.touched.moTa && formik.errors.moTa && <div className="text-danger text-left">{formik.errors.moTa}</div>} */}
                <div className="row">
                  <span className='col-3'>
                    <img src='https://i.pravatar.cc?u=40'
                      className="img-fluid rounded"
                      // alt={f&&File.name}
                      height={200}
                      width={200} alt='....' />
                  </span>
                  <textarea style={{ width: '75%' }} name="moTa" className=" h-auto form-control input-sm col-9" placeholder="Nhập mô tả" />
                </div>
              </div>

              {/* Modal footer */}
              <div className="modal-footer col-12" id="modal-footer">

                <button id="btnDong" type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
                <button id="btnThem" type="submit" className="btn btn-success">Cập nhật</button>
              </div>
            </form>
          </div>

        </div>
      </div>
</div>
  )
}