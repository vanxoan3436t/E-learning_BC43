import React from 'react'
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";


type Props = {}

const Case = (props: Props) => {

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
    return (
        <section className='case'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="section-heading section-heading--style3">
                            <span className="section-heading__title_small wow animate__animated animate__fadeInUp animate__delay-0_3" >
                                NHỮNG GÌ CHÚNG TA ĐÃ LÀM
                            </span>
                            <h2 className="section-heading__title_big  wow animate__animated animate__fadeInUp animate__delay-0_5" >
                                Nghiên cứu của chúng tôi
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="section-button ">
                            <NavLink to='/' className="btn btn--common btn-primary wow animate__animated animate__fadeInRight animate-delay-0_9"  >
                                Xem chi tiết
                                <i className="fa-solid fa-arrow-right"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container-fuild ">
                <div className="case-wrapper">
                    <div className="row case-active">
                    <Slider {...settings}>
                        <div className="case-item wow animate__animated  animate__fadeInUp animated__delay-0_3" >
                            <div className="case-item__image">
                                <NavLink to='/' >
                                    <img src="https://i.pravatar.cc?u=40" alt="Case 1" />
                                </NavLink>
                            </div>
                            <div className="case-item__content secondary-bg-color ">
                            <h5 >
                                    <NavLink to="/" >Analysis of Web Security</NavLink>
                                </h5>
                                <span>Ứng dụng / Trang web</span>
                            </div>
                        </div>

                        <div className="case-item wow animate__animated  animate__fadeInUp animated__delay-0_5" >
                            <div className="case-item__image">
                                <NavLink to='/' >
                                    <img src="https://i.pravatar.cc?u=41" alt="Case 2" />
                                </NavLink>
                            </div>
                            <div className="case-item__content secondary-bg-color ">
                            <h5 >
                                    <NavLink to="/" >Drone Camera</NavLink>
                                </h5>
                                <span>Công nghệ hiện đại</span>
                            </div>
                        </div>

                        <div className="case-item wow animate__animated  animate__fadeInUp animated__delay-0_7"  >
                            <div className="case-item__image">
                                <NavLink to='/' >
                                    <img src="https://i.pravatar.cc?u=43" alt="Case 3" />
                                </NavLink>
                            </div>
                            <div className="case-item__content secondary-bg-color ">
                            <h5 >
                                    <NavLink to="/" >Social Marketing App</NavLink>
                                </h5>
                                <span>Phát triển ứng dụng</span>
                            </div>
                        </div>

                        <div className="case-item wow animate__animated  animate__fadeInUp animated__delay-1_2" >
                            <div className="case-item__image">
                                <NavLink to='/' >
                                    <img src="https://i.pravatar.cc?u=48" alt="Case 4" />
                                </NavLink>
                            </div>
                            <div className="case-item__content secondary-bg-color ">
                            <h5 >
                                    <NavLink to="/" >Airpods Technology</NavLink>
                                </h5>
                                <span>Công nghệ hiện đại</span>
                            </div>
                        </div>

                        <div className="case-item wow animate__animated  animate__fadeInUp animated__delay-0_3"  >
                            <div className="case-item__image">
                                <NavLink to='/' >
                                    <img src="https://i.pravatar.cc?u=49" alt="Case 5" />
                                </NavLink>
                            </div>
                            <div className="case-item__content secondary-bg-color ">
                            <h5 >
                                    <NavLink to="/" >eCommerce Website</NavLink>
                                </h5>
                                <span>Phát triển / Thiết kế</span>
                            </div>
                        </div>

                        <div className="case-item wow animate__animated  animate__fadeInUp animated__delay-0_5" >
                            <div className="case-item__image">
                                <NavLink to='/' >
                                    <img src="https://i.pravatar.cc?u=18" alt="Case 6" />
                                </NavLink>
                            </div>
                            <div className="case-item__content secondary-bg-color ">
                            <h5 >
                                    <NavLink to="/" >Analysis of Web Security</NavLink>
                                </h5>
                                <span>Ứng dụng / Trang web</span>
                            </div>
                        </div>

                        <div className="case-item wow animate__animated  animate__fadeInUp animated__delay-0_7"  >
                            <div className="case-item__image">
                                <NavLink to='/' >
                                    <img src="https://i.pravatar.cc?u=55" alt="Case 7" />
                                </NavLink>
                            </div>
                            <div className="case-item__content secondary-bg-color ">
                            <h5 >
                                    <NavLink to="/" >Drone Camera</NavLink>
                                </h5>
                                <span>Công nghệ hiện đại</span>
                            </div>
                        </div>

                        <div className="case-item wow animate__animated  animate__fadeInUp animated__delay-1_2"  >
                            <div className="case-item__image">
                                <NavLink to='/' >
                                    <img src="https://i.pravatar.cc?u=62" alt="Case 8" />
                                </NavLink>
                            </div>
                            <div className="case-item__content secondary-bg-color ">
                                <h5 >
                                    <NavLink to="/" >Airpods Technology</NavLink>
                                </h5>
                                <span>Công nghệ hiện đại</span>
                            </div>
                        </div>
                    </Slider>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Case