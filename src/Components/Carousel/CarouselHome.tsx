import { NavLink } from 'react-router-dom'
type Props = {}

const CarouselHome = (props: Props) => {
  return (
    <section className='carousel-home container-fluid' >
      <div className="overlay"></div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="carousel-caption d-md-block">
              <div className="row">
                <div className="col-6">
                  <span className='wow animate__animated animate__fadeInUp animate-delay' >Khởi đầu sự nghiệp của bạn</span>
                  <h2 className='wow animate__animated animate__fadeInUp animate-delay'>BẮT ĐẦU SỰ NGHIỆP LẬP TRÌNH TẠI TECH-LEARNING</h2>
                  <p className='carousel-caption-text wow animate__animated animate__fadeInUp animate-delay'>“E-Learning Academy là học viện tiên phong tại Việt Nam áp dụng phương pháp đào tạo Active Learning và Flipped Learning thông qua các dự án thực tiễn trong lĩnh vực đào tạo CNTT. Học viên sẽ đóng vai trò là một Scrum member trong mô hình Agile để trở thành một lập trình chuyên nghiệp, đáp ứng mọi nhu cầu tuyển dụng của Doanh nghiệp.” <br />
                    _CEO Tech-learning</p>
                  <NavLink to='/' className="btn btn--common btn-primary wow animate__animated animate__fadeInUp animate-delay" data-animation="fadeInUp" data-delay="1s" tabIndex={-1} >
                    Xem chi tiết
                    <i className="fa-solid fa-arrow-right"></i>
                  </NavLink>
                </div>
              </div>

            </div>
          </div>

          <div className="carousel-item ">
            <div className="carousel-caption  d-md-block">
              <div className="row">
                <div className="col-6">
                  <span className='wow animate__animated animate__fadeInUp animate-delay'>Khám phá khoá học của Tech-learning</span>
                  <h2 className='wow animate__animated animate__fadeInUp animate-delay'>TECH-Learning : ĐÀO TẠO LẬP TRÌNH THEO LỘ TRÌNH DỰ ÁN</h2>
                  <div className='wow animate__animated animate__fadeInUp animate-delay'>
                    <ul>
                      <li>Bootcamp - Lập trình Front End từ Zero đến có việc</li>
                      <li>Bootcamp - Lập trình Fullstack JavaScript từ Zero đến có việc</li>
                      <li>Bootcamp - Lập trình Back-End JAVA từ Zero đến có việc</li>
                      <li>Bootcamp - Lập trình Back-End JAVA từ Zero đến có việc</li>
                      <li>Bootcamp - Cấp tốc - Lập trình Fullstack từ Zero</li>
                    </ul>
                  </div>
                  <NavLink to='/' className="btn btn--common btn-primary wow animate__animated animate__fadeInUp animate-delay" data-animation="fadeInUp" data-delay="1s" tabIndex={-1} >
                    Xem chi tiết
                    <i className="fa-solid fa-arrow-right"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item ">
            <div className="carousel-caption  d-md-block">
              <div className="row">
                <div className="col-6">
                  <span className='wow animate__animated animate__fadeInUp animate-delay'>Tech-learning là ai ?</span>
                  <h2 className='wow animate__animated animate__fadeInUp animate-delay'>CHÚNG TÔI TIN VÀO TIỀM NĂNG CỦA CON NGƯỜI</h2>
                  <p className='wow animate__animated animate__fadeInUp animate-delay '> Bất kể ai cũng có thể là một lập trình, tham gia trong đội ngữ Tech, bất kể tuổi tác, nền tảng, giới tính hoặc tình trạng tài chính. Chúng tôi không bỏ qua những người mới bắt đầu hoặc chưa có kinh nghiệm theo đuổi đam mê lập trình. Thay vào đó, chúng tôi chào đón học viên của tất cả các cấp độ kinh nghiệm. Lộ trình học tập của Tech-learning may đo cho từng đối tượng để học xong và đi làm ngay.</p>
                  <NavLink to='/' className="btn btn--common btn-primary wow animate__animated animate__fadeInUp animate-delay" data-animation="fadeInUp" data-delay="1s" tabIndex={-1} >
                    Xem chi tiết
                    <i className="fa-solid fa-arrow-right"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section >
  )
}

export default CarouselHome