import React from 'react'

type Props = {}

const InfoCoureHome = (props: Props) => {
    return (
        <div className="info-coure-box  section-bg-common">

            <div className="info-course-home ">
                <h3 className='section-heading__title_small'>Thông tin quan trọng</h3>
                <div className="info-gird">
                    <div className="info-item-home wow animate__animated animate__fadeInDown animate-delay">
                        <div className="info-overlay"></div>
                        <div className="info-item-content">
                            <div className='info-item-content-title'>
                                <i className="fa-solid fa-book-open"></i>
                                <h3>Khóa học</h3>
                            </div>

                            <div className='info-item-content-text'>
                                Học qua dự án thực tế, học đi đôi với hành, không lý thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực tế để học viên học xong làm được ngay <br />
                                <ul >
                                    <li>

                                        <span>Hơn 1000 bài tập và dự án thực tế</span>
                                    </li>
                                    <li>
                                        <span>Công nghệ cập nhật mới nhất</span>
                                    </li>
                                    <li>
                                        <span>Hình ảnh, ví dụ, bài giảng sinh động trực quan</span>
                                    </li>
                                    <li>
                                        <span>Tư duy phân tích, giải quyết vấn đề trong dự án</span>
                                    </li>
                                    <li>
                                        <span>Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong dự án</span>
                                    </li>
                                    <li>
                                        <span>Cơ hội thực tập tại các công ty lớn như FPT, Meta, GOOGLE</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="info-item-home wow animate__animated animate__fadeInLeft animate-delay-0_4">
                        <div className="info-overlay"></div>
                        <div className="info-item-content">
                            <div className='info-item-content-title'>
                                <i className="fa-solid fa-road"></i>
                                <h3>Lộ trình phù hợp</h3>
                            </div>
                            <div className='info-item-content-text'>
                                <ul>
                                    <li>
                                        <span> Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao</span>
                                    </li>
                                    <li>
                                        <span>Học, luyện tập code, kỹ thuật phân tích, soft skill</span>
                                    </li>
                                    <li>
                                        <span>Huấn luyện để phát triển năng lực và niềm đam mê lập trình</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="info-item-home  wow animate__animated animate__fadeInLeft animate-delay-0_6">
                        <div className="info-overlay"></div>
                        <div className="info-item-content">
                            <div className='info-item-content-title'>
                                <i className="fa-solid fa-chalkboard-user"></i>
                                <h3>Hệ thống học tập</h3>
                            </div>
                            <div className='info-item-content-text'>
                                <ul>
                                    <li>
                                        <span>Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học viên</span>
                                    </li>
                                    <li>
                                        <span>Thống kê lượt xem video, làm bài, điểm số theo chu kỳ</span>
                                    </li>
                                    <li>
                                        <span>Thống kê, so sánh khả năng học của các học viên cùng level để đưa ra mục tiêu học tập</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="info-item-home wow animate__animated animate__fadeInLeft animate-delay-0_8">
                        <div className="info-overlay"></div>
                        <div className="info-item-content">
                            <div className='info-item-content-title'>
                                <i className="fa-solid fa-users"></i>
                                <h3>Giảng viên</h3>
                            </div>
                            <div className='info-item-content-text'>
                                <ul>
                                    <li>
                                        <span>Tương tác cùng mentor và giảng viên qua phần thảo luận</span>
                                    </li>
                                    <li>
                                        <span>Review code và đưa ra các nhận xét góp ý</span>
                                    </li>
                                    <li>
                                        <span>Chấm điểm tương tác thảo luận giữa các học viên</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="info-item-home wow animate__animated animate__fadeInLeft animate-delay-1">
                        <div className="info-overlay"></div>
                        <div className="info-item-content">
                            <div className='info-item-content-title'>
                                <i className="fa-solid fa-graduation-cap"></i>
                                <h3>Chứng nhận</h3>
                            </div>
                            <div className='info-item-content-text'>
                                <ul >
                                    <li>
                                        <span>Chấm bài và có thể vấn đáp trực tuyến để review</span>
                                    </li>
                                    <li>
                                        <span>Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc đáo</span>
                                    </li>
                                    <li>
                                        <span>Kết nối CV của bạn đến với các đối tác của Cyberfoft</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default InfoCoureHome