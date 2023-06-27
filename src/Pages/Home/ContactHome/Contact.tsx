import React from 'react'

type Props = {}

const Contact = (props: Props) => {
    return (
        <section className="contact contact--bg contact--padding" >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="contact-address contact-address--bg" >
                            <ul>
                                <li className="contact-address__item">
                                    <div className="contact-address__item_icon">
                                        <i className="fas fa-map-marker-alt" />
                                    </div>
                                    <div className="contact-address__item_text">
                                        <h3 >Địa điểm của chúng tôi</h3>
                                        <p >
                                            2307 Beverley Rd Brooklyn, New York Việt Nam.
                                        </p>
                                    </div>
                                </li>
                                <li className="contact-address__item">
                                    <div className="contact-address__item_icon">
                                        <i className="fas fa-envelope-open-text" />
                                    </div>
                                    <div className="contact-address__item_text">
                                        <h3 >Địa chỉ Email</h3>
                                        <p >Info@example.com</p>
                                        <p >Info@radiustheme.com</p>
                                    </div>
                                </li>
                                <li className="contact-address__item ">
                                    <div className="contact-address__item_icon">
                                        <i className="fas fa-phone-alt" />
                                    </div>
                                    <div className="contact-address__item_text">
                                        <h3 >Gọi cho chúng tôi miễn phí</h3>
                                        <p >
                                            <i>(+00) 123 567990</i>
                                        </p>
                                    </div>
                                </li>
                                <li className="contact-address__item">
                                    <form className="contact-address__form" >
                                        <input className="contact-address__form_input" type="text" placeholder="Find Your Solution" spellCheck="false" data-ms-editor="true" />
                                        <button className="contact-address__form_button">
                                            <i className="fas fa-arrow-right" />
                                        </button>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <form className="contact-form" id="contact-form">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="section-heading">
                                        <span className="section-heading__title_small">
                                            Liên lạc
                                        </span>
                                        <h2 className="section-heading__title_big">
                                            Bạn đã sẵn sàng cho một công việc tốt hơn, hiệu quả hơn chưa?
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <input name="name" type="text" className="contact-form__input" placeholder="Name *" />
                                </div>
                                <div className="col-md-6">
                                    <input name="email" type="text" className="contact-form__input" placeholder="Email *" />
                                </div>
                                <div className="col-md-6">
                                    <input name="phone" type="text" className="contact-form__input" placeholder="Phone" />
                                </div>
                                <div className="col-md-6">
                                    <select className="contact-form__input" name="subject" >
                                        <option value={1}>Chọn chủ đề của bạn</option>
                                        <option value={1}>Chọn chủ đề của bạn 2</option>
                                        <option value={1}>Chọn chủ đề của bạn 3</option>


                                    </select>
                                    {/* <div className="nice-select contact-form__input" tabIndex={0}>
                                        <span className="current">Chọn chủ đề của bạn</span>
                                        <ul className="list">
                                            <li data-value={1} className="option selected focus">Chọn chủ đề của bạn</li>
                                        </ul>
                                    </div> */}
                                </div>
                                <div className="col-md-12">
                                    <textarea className="contact-form__input contact-form__input_textarea" name="message" placeholder="Message" spellCheck="false" data-ms-editor="true" defaultValue={""} />
                                </div>
                                <div className="col-md-12">
                                    <button type="submit" className="contact-form__button">
                                        Gửi tin nhắn
                                    </button>
                                </div>
                            </div>
                            <div className="form-response" />
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact