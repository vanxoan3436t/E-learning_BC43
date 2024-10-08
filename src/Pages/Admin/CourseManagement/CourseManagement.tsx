import React, { useEffect, useRef, useState } from 'react'
import LoginInfo from '../../../Components/LoginInfo/LoginInfo'
import ModalAddCourse from './ModalAddCourse'
import CoursRegisterModal from './CoursRegisterModal'
import EditCourseInfoModal from './EditCourseInfoModal'
import ReactPaginate from 'react-paginate';
import { DispatchType, RootState } from '../../../Redux/configStote'
import { useDispatch, useSelector } from 'react-redux'
import { CourseDetail, getListCourseActionApi, searchCoursesAsyncActionApi } from '../../../Redux/reducer/quanLyKhoaHocReducer'

// type Props = {}
export default function CourseManagement(
  // { }: Props
) {
  const dispatch: DispatchType = useDispatch();
  const coursesList = useSelector((state: RootState) => state.quanLyKhoaHocReducer.coursesList);
  const keyRef = useRef('');
  //Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + 5;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(coursesList && coursesList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(coursesList && coursesList.length / 5));
  }, [itemOffset, coursesList]);
  const handlePageClick = (event: any) => {
    const newOffset = event.selected * 5 % coursesList.length;
    // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };
//Search
  const handleChange = (e: any) => {
    const { value } = e.target;
    keyRef.current = value;
    dispatch(searchCoursesAsyncActionApi(keyRef.current));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  }
  useEffect(()=> {
      dispatch(getListCourseActionApi());
  },[]);
  //render danh sách khóa học
  const renderCourseList = (currentItems: any) => {
    return currentItems.map((item: CourseDetail, index: number) => {
      return <tr style={{ width: '100%' }} key={index}>
        <td className="align-middle text-break" style={{ width: '7%' }}>{itemOffset + index + 1}</td>
        <td className="align-middle text-break text-wrap" style={{ width: '15%' }}>{item.maKhoaHoc}</td>
        <td className="align-middle text-break text-wrap" style={{ width: '15%' }}>{item.tenKhoaHoc}</td>
        <td className="align-middle img-fluid" style={{ backgroundImage: `url(${item.hinhAnh})`, backgroundSize: "cover", width: '14%' }}>

        </td>
        <td className="align-middle text-break" style={{ width: '11%' }}>{item.luotXem}</td>
        <td className="align-middle text-break text-wrap" style={{ width: '13%' }}>{item.nguoiTao.hoTen} </td>
        <td className='align-middle' style={{ width: '25%' }}>
          <button  type="button" className="btn btn-primary mx-1 text-wrap" data-bs-toggle="modal" data-bs-target="#courseReg" >
            <span >Ghi danh</span>
          </button>
          <button  className="btn btn-warning m-1 text-wrap" data-bs-toggle="modal" data-bs-target="#editInfoCourse">Sửa</button>
          <button  className="btn btn-danger mx-1" >Xóa</button>
        </td>
      </tr>
    })

  }
  return (
    <div className='details course-management card container-fluid'>
      <div className="card-header">
        <div className="row">
          <div className='col-auto me-auto card-header-left'>
            <button className='btn btn-modal1' id='btnThem' data-bs-toggle="modal" data-bs-target="#addCourse">Thêm Khóa Học</button>
          </div>
          <div className="col-7 row ms-auto card-header-right">
            <div className='col-7 p-1'>
              <form action="#" onSubmit={handleSubmit}>
                <input type="text" placeholder='Nhập vào khóa học cần tìm' className='header-search_input form-control' data-ms-editor='true' name='keyword' onInput={handleChange} />
              </form>
            </div>
            <LoginInfo />
          </div>
        </div>
      </div>

      <div className="container-fluid ">
        <table className="table table-bordered table-hover myTable">
          <thead className="text-dark bg-light">
            <tr style={{ width: '100%' }}>
              <th className="align-middle text-break text-wrap" style={{ width: '7%' }} >
                <span >STT</span>
             
              </th>
              <th className="align-middle text-break text-wrap" style={{ width: '15%' }}>
                <span >Mã khóa học</span>
               
              </th>
              <th className="align-middle text-break text-wrap" style={{ width: '15%' }} >
                <span >Tên khóa học</span>
         
              </th>
              <th className="align-middle text-break text-wrap" style={{ width: '14%' }}>
                <span >Hình ảnh</span>
              </th>
              <th className="align-middle text-break text-wrap" style={{ width: '11%' }}>
                <span >Lượt xem</span>
              </th>
              <th className="align-middle text-break text-wrap" style={{ width: '13%' }}>
                <span >Người tạo</span>
              </th>

              <th className="align-middle" style={{ width: '25%' }}><em className="fa fa-cog text-wrap" /></th>
            </tr>
          </thead>

          <tbody id="tableDanhSach" >
            {renderCourseList(currentItems)}

          </tbody>
        </table>
      </div>

      <ModalAddCourse />
      <CoursRegisterModal />
      <EditCourseInfoModal />
      <ReactPaginate
        nextLabel="Sau >"
        pageRangeDisplayed={3}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        previousLabel="< Trước"
        pageClassName="page-item"
        pageLinkClassName="page-link-pages"
        previousClassName="page-item"
        previousLinkClassName="page-link-pages"
        nextClassName="page-item"
        nextLinkClassName="page-link-pages"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link-pages"
        containerClassName="paginationPages"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}