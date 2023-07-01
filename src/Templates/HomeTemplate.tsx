import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

type Props = {}

const HomeTemplate: React.FC = ({ }: Props): JSX.Element => {
    return (
        <>
            <Header ></Header>
            <div className="content-layout" >
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    )
}


export default HomeTemplate