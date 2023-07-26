import React from 'react'
import { CounterUpPage } from '../../../util/methord'
type Props = {}

const NumberUp = (props: Props) => {
    return (
        <div className='counter counter--bg container-fluid'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3 wow animate__animated animate__fadeInLeft animate-delay-0_3">
                        <div className="counter__item text-center text-white">
              {CounterUpPage(10000)} 
                            <h3 >Học viên</h3>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 wow animate__animated animate__fadeInLeft animate-delay-0_5">
                        <div className="counter__item text-center text-white">
                        {CounterUpPage(250)}
                            <h3 >Đối tác</h3>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 wow animate__animated animate__fadeInLeft animate-delay-0_7">
                        <div className="counter__item text-center text-white">
                        {CounterUpPage(150)}
                            <h3 >Giảng viên</h3>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 wow animate__animated animate__fadeInLeft animate-delay-0_9" >
                        <div className="counter__item text-center text-white">
                        {CounterUpPage(10)}
                            <h3>Trung tâm</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default NumberUp