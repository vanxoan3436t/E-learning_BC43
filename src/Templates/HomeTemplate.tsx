import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import ScrollToTop from "react-scroll-to-top";
type Props = {}

const HomeTemplate: React.FC = ({ }: Props): JSX.Element => {
    return (
        <>
            <Header ></Header>
            <div className="content-layout" >
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ScrollToTop smooth color='#fff' style={{borderRadius:'50%',background:'#0554f2'}} width='1.3rem' height='1.2rem'/>
        </>
    )
}


export default HomeTemplate