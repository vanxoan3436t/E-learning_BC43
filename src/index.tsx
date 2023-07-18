import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route, Navigate } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import HomeTemplate from './Templates/HomeTemplate';
import Home from './Pages/Home/Home';
import './assets/scss/style.scss'
import Login from './Pages/LoginRegister/Login';
import Search from './Pages/Search/Search';
import Info from './Pages/Info/Info';
import { Provider } from 'react-redux';
import { store } from './Redux/configStote';
import AdminTemplate from './Templates/AdminTemplate/AdminTemplate';
import UserManageme from './Pages/Admin/UserManagement/UserManagement';
import CourseManagement from './Pages/Admin/CourseManagement/CourseManagement';
export const history: any = createBrowserHistory();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store} >
        <HistoryRouter history={history}>
            <Routes>
                <Route path='/' element={<HomeTemplate />}>
                    <Route index element={<Home />}></Route>
                    <Route path="search/:key" element={<Search />}></Route>
                    <Route path="info" element={<Info />}></Route>
                    <Route path='*' element={<Navigate to='/' />}></Route>
                </Route>
                <Route path='admin' element={<AdminTemplate />}>
                    <Route index  element={<UserManageme />}></Route>
                    <Route path='coursemanagement' element={<CourseManagement />}></Route>
                    <Route path="*" element={<Navigate to="/admin" />}></Route>
                </Route>
                <Route path='login' element={<Login />}>
                    <Route path="*" element={<Navigate to="/login" />}></Route>
                </Route>
            </Routes>
        </HistoryRouter>
    </Provider>
);

////tsrafce dùng tạo function có typescript
//https://i.pravatar.cc?u=40
//  window.location.reload();