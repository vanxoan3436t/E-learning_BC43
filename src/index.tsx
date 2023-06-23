import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route, Navigate } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import HomeTemplate from './Templates/HomeTemplate';
import Home from './Pages/Home/Home';
import './assets/scss/style.scss'

export const history: any = createBrowserHistory();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <HistoryRouter history={history}>
        <Routes>
            <Route path='' element={<HomeTemplate />}>
                <Route index element={<Home />}></Route>
            </Route>
        </Routes>
    </HistoryRouter>
);

////tsrafce dùng tạo function có typescript