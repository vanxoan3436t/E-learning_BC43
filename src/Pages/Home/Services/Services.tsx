import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Services = (props: Props) => {


    return (

        <section className='services-home'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <div className="section-heading text-center">
                            <span className="section-heading__title_small">
                                CHÚNG TÔI CUNG CẤP DỊCH VỤ CNTT TỐT NHẤT
                            </span>
                            <h2 className="section-heading__title_big">
                                Giải pháp dễ dàng cho mọi vấn đề CNTT khó
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="services__navbar">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="services__navbar_nav nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item services__navbar_item" role="presentation">
                                    <button className="services__navbar_link nav-link active" id="" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" >
                                        <i className="fa-solid fa-gear"></i>Tại sao chọn chúng tôi
                                    </button>
                                </li>
                                <li className="nav-item services__navbar_item" role="presentation">
                                    <button className="services__navbar_link nav-link" id="" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" >
                                        <i className="fa-solid fa-microchip"></i>Chỉ số công nghệ
                                    </button>
                                </li>
                                <li className="nav-item services__navbar_item" role="presentation">
                                    <button className="services__navbar_link nav-link" id="" data-bs-toggle="tab" data-bs-target="#awards" type="button" role="tab" aria-controls="awards" aria-selected="false">
                                        <i className="fa-solid fa-medal"></i>Giải thưởng của chúng tôi
                                    </button>
                                </li>
                            </ul>
                        </div>


                    </div >
                </div >

                <div className="services__tabbar">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="tab-content">

                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">

                                        <div className="col-lg-3 col-md-6 wow animate__animated animate__fadeInUp animate-delay" >
                                            <div className="services__item services-key__content mb-30">
                                                <div className="services__item_overlay services-key__content_overlay" />
                                                <header className="services__item_header services-key__content_header sticky">
                                                    <i className="fa-solid fa-pen-ruler services__item_icon"></i>
                                                    <h3 className="services__item_title services-key__content_title">
                                                        <NavLink to='/' >Thiết kế sản phẩm</NavLink>
                                                    </h3>
                                                </header>
                                                <div className="services__item_content services-key__content_text">
                                                    <p className="services__item_paragraph services-key__content_paragraph">
                                                        Grursus mal suada lisis more ametion consectet
                                                        elit. Vesti at suada consectetur elit.
                                                    </p>
                                                    <NavLink className="services-key__content_link" to="/">Khám phá ngay</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 wow animate__animated animate__fadeInUp animate-delay-0_4" >
                                            <div className="services__item services-key__content mb-30">
                                                <div className="services__item_overlay services-key__content_overlay" />
                                                <header className="services__item_header services-key__content_header sticky">
                                                    <i className="fa-solid fa-code services__item_icon"></i>
                                                    <h3 className="services__item_title services-key__content_title">
                                                        <NavLink to='/'>Phát triển web</NavLink>
                                                    </h3>
                                                </header>
                                                <div className="services__item_content services-key__content_text">
                                                    <p className="services__item_paragraph services-key__content_paragraph">
                                                        Grursus mal suada lisis more ametion consectet
                                                        elit. Vesti at suada consectetur elit.
                                                    </p>
                                                    <NavLink className="services-key__content_link" to="/">Khám phá ngay</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 wow animate__animated animate__fadeInUp animate-delay-0_6" >
                                            <div className="services__item services-key__content mb-30">
                                                <div className="services__item_overlay services-key__content_overlay" />
                                                <header className="services__item_header services-key__content_header sticky">
                                                    <i className="services__item_icon fa-solid fa-database"></i>
                                                    <h3 className="services__item_title services-key__content_title">
                                                        <a href="/">Phân tích dữ liệu</a>
                                                    </h3>
                                                </header>
                                                <div className="services__item_content services-key__content_text">
                                                    <p className="services__item_paragraph services-key__content_paragraph">
                                                        Grursus mal suada lisis more ametion consectet
                                                        elit. Vesti at suada consectetur elit.
                                                    </p>
                                                    <NavLink className="services-key__content_link" to="/">Khám phá ngay</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 wow animate__animated animate__fadeInUp animate-delay-0_8" >
                                            <div className="services__item services-key__content mb-30">
                                                <div className="services__item_overlay services-key__content_overlay" />
                                                <header className="services__item_header services-key__content_header sticky">
                                                    <i className="fa-solid fa-shield-halved services__item_icon"></i>
                                                    <h3 className="services__item_title services-key__content_title">
                                                        <a href="/">An ninh mạng</a>
                                                    </h3>
                                                </header>
                                                <div className="services__item_content services-key__content_text">
                                                    <p className="services__item_paragraph services-key__content_paragraph">
                                                        Grursus mal suada lisis more ametion consectet
                                                        elit. Vesti at suada consectetur elit.
                                                    </p>
                                                    <NavLink className="services-key__content_link" to="/">Khám phá ngay</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeInUp animate-delay">
                                            <div className="services__item services__tech text-center mb-30">
                                                <div className="services__item_overlay services__tech_overlay" />
                                                <header className="services__item_header mb-0 sticky">
                                                    <i className="fa-solid fa-desktop services__tech_icon "></i>
                                                    <h4 className="services__item_title services__tech_title">
                                                        <a href="services-details.html">Trang Wed</a>
                                                    </h4>
                                                </header>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeInUp animate-delay-0_4" >
                                            <div className="services__item services__tech text-center mb-30">
                                                <div className="services__item_overlay services__tech_overlay" />
                                                <header className="services__item_header mb-0 sticky">
                                                    <i className="fa-brands fa-android services__tech_icon "></i>
                                                    <h4 className="services__item_title services__tech_title">
                                                        <a href="services-details.html">Android Apps</a>
                                                    </h4>
                                                </header>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow  animate__animated animate__fadeInUp animate-delay-0_6">
                                            <div className="services__item services__tech text-center mb-30">
                                                <div className="services__item_overlay services__tech_overlay" />
                                                <header className="services__item_header mb-0 sticky">
                                                    <i className="fa-brands fa-apple services__tech_icon "></i>
                                                    <h4 className="services__item_title services__tech_title">
                                                        <a href="services-details.html">ios Apps</a>
                                                    </h4>
                                                </header>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeInUp animate-delay-0_8">
                                            <div className="services__item services__tech text-center mb-30">
                                                <div className="services__item_overlay services__tech_overlay" />
                                                <header className="services__item_header mb-0 sticky">
                                                    <i className="fa-solid fa-spinner services__tech_icon "></i>
                                                    <h4 className="services__item_title services__tech_title">
                                                        <a href="services-details.html">Iot Program</a>
                                                    </h4>
                                                </header>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeInUp animate-delay-1_2" >
                                            <div className="services__item services__tech text-center mb-30">
                                                <div className="services__item_overlay services__tech_overlay" />
                                                <header className="services__item_header mb-0 sticky">
                                                    <i className="fa-solid fa-bomb services__tech_icon "></i>
                                                    <h4 className="services__item_title services__tech_title">
                                                        <a href="services-details.html">Wearalables</a>
                                                    </h4>
                                                </header>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeInUp animate-delay-1_5">
                                            <div className="services__item services__tech text-center mb-30">
                                                <div className="services__item_overlay services__tech_overlay" />
                                                <header className="services__item_header mb-0 sticky">
                                                    <i className="fa-solid fa-tv services__tech_icon "></i>
                                                    <h4 className="services__item_title services__tech_title">
                                                        <a href="services-details.html">tv Program</a>
                                                    </h4>
                                                </header>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="tab-pane fade " id="awards" role="tabpanel" aria-labelledby="awards-tab">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeInUp animate-delay" >
                                            <div className="services__awards mb-30">
                                                <img src="./img/services-awards-img-1.png" alt='services-awards-1' className="services__awards_board" />
                                                <h3 className="services__awards_title">
                                                    <a href="/">Top 10 Công ty Công nghệ 2018</a>
                                                </h3>
                                                <p className="services__awards_text">
                                                    Grursus mal suada faci lisis Lorem ipsum is
                                                    dolarorit more ametion consectetur elit. Vesti ipsum
                                                    suada to the consectetur elit.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeInUp animate-delay-0_4" >
                                            <div className="services__awards mb-30">
                                                <img src="./img/services-awards-img-2.png" alt='services-awards-2' className="services__awards_board" />
                                                <h3 className="services__awards_title">
                                                    <a href="/">Giải thưởng hàng đầu về thuế thu nhập 2019</a>
                                                </h3>
                                                <p className="services__awards_text">
                                                    Grursus mal suada faci lisis Lorem ipsum is
                                                    dolarorit more ametion consectetur elit. Vesti ipsum
                                                    suada to the consectetur elit.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeInUp animate-delay-0_6" >
                                            <div className="services__awards mb-30">
                                                <img src="./img/services-awards-img-3.png" alt='services-awards-3' className="services__awards_board" />
                                                <h3 className="services__awards_title">
                                                    <a href="/">Trung tâm đào tạo hàng đầu 2020</a>
                                                </h3>
                                                <p className="services__awards_text">
                                                    Grursus mal suada faci lisis Lorem ipsum is
                                                    dolarorit more ametion consectetur elit. Vesti ipsum
                                                    suada to the consectetur elit.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >

    )
}

export default Services