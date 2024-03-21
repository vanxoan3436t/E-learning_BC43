import React from 'react';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route, Navigate } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import HomeTemplate from './Templates/HomeTemplate';
import Home from './Pages/Home/Home';
import './assets/scss/style.scss'
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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFY_bVXQBEy-Siz7P_3hyOSI4wim5wK0Q",
  authDomain: "tech-learning-613a2.firebaseapp.com",
  projectId: "tech-learning-613a2",
  storageBucket: "tech-learning-613a2.appspot.com",
  messagingSenderId: "547542045141",
  appId: "1:547542045141:web:a01631aba7ef552ea4ad5c",
  measurementId: "G-FDMP7CD2N1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const history: any = createBrowserHistory();

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