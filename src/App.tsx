import React from 'react';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomeTemplate from './Templates/HomeTemplate';
import Home from './Pages/Home/Home';
import Login from './Pages/LoginRegister/Login';
import Search from './Pages/Search/Search';
import Info from './Pages/Info/Info';
import AdminTemplate from './Templates/AdminTemplate/AdminTemplate';
import UserManageme from './Pages/Admin/UserManagement/UserManagement';
import CourseManagement from './Pages/Admin/CourseManagement/CourseManagement';
import CategoryCourese from './Pages/CategoryCourses/CategoryCourses';
import Detail from './Pages/Detail/Detail';
import ResponsiveItem from './Templates/ResponsiveItem';
import PageNotFound from './Components/PageNot/PageNotFound';
import LoginMobile from './Pages/LoginRegister/LoginMobile';
import './style.scss'

type Props = {}
export default function App({ }: Props) {
    return (<>
        <Routes>
            <Route path='/' element={<HomeTemplate />}>
                <Route index element={<Home />}></Route>
                <Route path="search/:key" element={<Search />}></Route>
                <Route path="info" element={<Info />}></Route>
                <Route path="categorycourses">
                    <Route path=':id' element={< CategoryCourese />}>
                    </Route>
                </Route>
                <Route path="detail">
                    <Route path=':id' element={< Detail />}></Route>
                </Route>
                <Route path='*' element={<Navigate to='/' />}></Route>
            </Route>
            <Route path='admin' element={<ResponsiveItem component={AdminTemplate} mobileComponent={PageNotFound} />}>
                <Route index element={<UserManageme />}></Route>
                <Route path='coursemanagement' element={<CourseManagement />}></Route>
                <Route path="*" element={<Navigate to="/admin" />}></Route>
            </Route>
            <Route path='login' element={<ResponsiveItem component={Login} mobileComponent={LoginMobile} />}>
                <Route path="*" element={<Navigate to="/login" />}></Route>
            </Route>
        </Routes>
    </>
    )
}