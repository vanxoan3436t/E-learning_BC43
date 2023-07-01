import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route, Navigate } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import HomeTemplate from './Templates/HomeTemplate';
import Home from './Pages/Home/Home';
import './assets/scss/style.scss'
import Login from './Pages/LoginRegister/Login';
import Search from './Pages/Search/Search';

export const history: any = createBrowserHistory();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <HistoryRouter history={history}>
        <Routes>
            <Route path='' element={<HomeTemplate />}>
                <Route index element={<Home />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="search" element={<Search />}></Route>
            </Route>
        </Routes>
    </HistoryRouter>
);

////tsrafce dùng tạo function có typescript