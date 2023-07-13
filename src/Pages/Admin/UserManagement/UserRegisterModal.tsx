import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

export default function UserRegisterModal({ }: Props) {
    return (
        <div className="modal fade" id="userReg">
            <div className="modal-dialog formCourse">
                <div className="modal-content">
                    {/* modal footer */}
                    <div className="modal-body ">
                        <div className="border-bottom border-secondary">
                            <div className="row">
                                <h5 className="col-3" id="URM-title">Chọn khóa học</h5>
                                <form className='form-group col-6'>
                                    <div className="input-group float-left ">
                                        <input name='hoTen' placeholder="Chọn khóa học" data-bs-toggle="dropdown" type="text" className="form-control input-dropdown" aria-label="Text input with segmented dropdown button" />
                                        {/* <button data-reference="parent" data-boundary="window" type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false"></button> */}

                                        <ul className="dropdown-menu set-height">
                                            {/* {renderUserListNotRegister(UserListNotRegister)} */}
                                        </ul>
                                    </div>

                                </form>
                                <div className="col-3">
                                    <NavLink to='' onClick={() => { }} className="btn float-right btn-modal1 " >Ghi danh</NavLink >

                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body ">
                        <div className="border-bottom border-secondary">

                            <div className="row">
                                <h5 className="text-left col-6" id="URM-title">Khóa học chờ xác thực</h5>
                                <div className="col-6">
                                    <input className="form-control" type="search" placeholder="Nhập tên học viên hoặc số điện thoại" aria-label="Search" />
                                </div>
                            </div>
                            .<table className="table table-center table-hover myTable table-striped">
                                <thead className="text-dark bg-light">
                                    <tr>
                                        <th>STT</th>
                                        <th>Tên khóa học</th>
                                        <th>Chờ xác nhận</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {renderUserListNotConfirmed(notConfirmedItems)} */}
                                    <tr>
                                        <td className="align-middle" scope="row"> 1</td>
                                        <td className="align-middle">item.tenKhoaHoc</td>
                                        <td>
                                            <button onClick={() => { }} className="btn mx-1 btn-modal1" >Xác thực</button>
                                            <button onClick={() => { }} className="btn btn-danger mx-1" >Xóa</button>

                                        </td>
                                    </tr>
                                    
                                </tbody>

                            </table>
                            {/* <ReactPaginate
                                nextLabel="Sau >"
                                pageRangeDisplayed={2}
                                pageCount={pageCount1}
                                onPageChange={handlePageClick1}
                                previousLabel="< Trước"
                                pageClassName="page-item"
                                pageLinkClassName="pageLinkPages"
                                previousClassName="page-item"
                                previousLinkClassName="pageLinkPages"
                                nextClassName="page-item"
                                nextLinkClassName="pageLinkPages"
                                breakLabel="..."
                                breakClassName="page-item"
                                breakLinkClassName="pageLinkPages"
                                containerClassName="paginationPages"
                                activeClassName="active"
                                renderOnZeroPageCount={null}
                            /> */}
                        </div>
                    </div>
                    {/* Modal footer */}
                    <div className="modal-body">
                        <div className="">
                            <div className="row">
                                <h5 className="text-left col-6">Khóa học đã ghi danh</h5>
                                <div className="col-6">
                                    <input className="form-control" type="search" placeholder="Nhập tên học viên hoặc số điện thoại" aria-label="Search" />
                                </div>

                            </div>
                            .<table className="table table-center table-hover myTable table-striped">
                                <thead className="text-dark bg-light">
                                    <tr>
                                        <th>STT</th>
                                        <th>Học viên</th>
                                        <th>Chờ xác nhận</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {renderUserListConfirmed(confirmedItems)} */}
                                    <tr>
                                        <td className="align-middle" scope="row"> 1</td>
                                        <td className="align-middle">item.hoTen</td>
                                        <td>
                                            <button onClick={() => { }} className="btn btn-danger mx-1" >Xóa</button>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle" scope="row"> 1</td>
                                        <td className="align-middle">item.tenKhoaHoc</td>
                                        <td>
                                            <button onClick={() => { }} className="btn btn-danger mx-1" >Xóa</button>

                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                            {/* <ReactPaginate
                                nextLabel="Sau >"
                                pageRangeDisplayed={2}
                                pageCount={pageCount2}
                                onPageChange={handlePageClick2}
                                previousLabel="< Trước"
                                pageClassName="page-item"
                                pageLinkClassName="pageLinkPages"
                                previousClassName="page-item"
                                previousLinkClassName="pageLinkPages"
                                nextClassName="page-item"
                                nextLinkClassName="pageLinkPages"
                                breakLabel="..."
                                breakClassName="page-item"
                                breakLinkClassName="pageLinkPages"
                                containerClassName="paginationPages"
                                activeClassName="active"
                                renderOnZeroPageCount={null}
                            /> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}