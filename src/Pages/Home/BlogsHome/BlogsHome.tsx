import { NavLink } from 'react-router-dom';

type Props = {}

const BlogsHome = (props: Props) => {
  return (
    <section className="blog ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-heading ">
              <span className="section-heading__title_small"> Blogs &amp; tin tức </span>
              <h2 className="section-heading__title_big">Bài nổi bật</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-button d-flex">
              <NavLink to='/' className="btn btn--common btn-primary wow animate__animated animate__fadeInRight animate-delay-0_9"  >
                Xem thêm
                <i className="fa-solid fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="blog--wrapper">
              <div className="row g-0">

              
                <div className=" col-md-6 col-lg-4 blog-item__column">
                  <div className="blog-item ">
                    <header className="blog-item__header ">
                    <NavLink to="/" className="blog-item__img_link">
                        <img  src="./img/blog-img-1.jpg" alt="Blogs-1" />
                        </NavLink>
                      <NavLink to="https://www.facebook.com/Leagueoflegendsvn" className="blog-item__tags">Tin Game</NavLink>
                    </header>
                    <div className="blog-item__article">
                      <span className="blog-item__date">26 - 06 - 2023</span>
                      <h3 className="blog-item__title">
                        <NavLink to="https://fb.watch/lqIeLxhF0g/">
                      Liên minh huyên thoại
                        </NavLink>
                      </h3>
                      <p >
                      Chào mừng đến với Tinh Võ Sư, nơi hội tụ của những vị tướng cao thủ, combo chiêu thức tuyệt đỉnh, cùng các chế độ chơi mới!
                      </p>
                      <ul >
                        <li >
                          <i className="far fa-user blog-item__list_icon" />
                          <span>Riot game</span>
                        </li>
                        <li >
                          <i className="far fa-comments" />
                          <span >500 Bình luận</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              
                <div className=" col-md-6 col-lg-4 blog-item__column">
                  <div className="blog-item ">
                    <header className="blog-item__header sticky">
                    <NavLink to="/" className="blog-item__img_link">
                        <img  src="./img/blog-img-2.jpg" alt="Blogs-2" />
                        </NavLink>
                      <NavLink to="https://www.youtube.com/@Optimus96" className="blog-item__tags">Tin game 2</NavLink>
                    </header>
                    <div className="blog-item__article">
                      <span className="blog-item__date">21 06 2023</span>
                      <h3 className="blog-item__title">
                        <NavLink to="https://www.youtube.com/watch?v=Pi8l6EpGuIM">
                      Optimus youtube video
                        </NavLink>
                      </h3>
                      <p >
                      MAX BINH VỚI POWER PICK RYZE TRONG TAY CƯỜNG 7 NÚI: TEAM BẠN ĐẤM NHAU - TEAM TUI CHIẾN THẮNG!
                      </p>
                      <ul >
                        <li >
                          <i className="far fa-user blog-item__list_icon" />
                          <span >Cường gà</span>
                        </li>
                        <li >
                          <i className="far fa-comments" />
                          <span >1000 Bình luận</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className=" col-md-6 col-lg-4 blog-item__column">
                  <div className="blog-item ">
                    <header className="blog-item__header sticky">
                    <NavLink to="/" className="blog-item__img_link">
                        <img  src="./img/blog-img-3.jpg" alt="Blogs-3" />
                        </NavLink>
                      <NavLink to="https://www.youtube.com/@qyuto6685" className="blog-item__tags">QYUTO</NavLink>
                    </header>
                    <div className="blog-item__article">
                      <span className="blog-item__date">7 7 2021</span>
                      <h3 className="blog-item__title">
                        <NavLink to="https://youtu.be/MQE0Y29sNgE">
                        Nhạc hay cho dev 
                        </NavLink>
                      </h3>
                      <p >
                      'A Flute Girl' Most Beautiful Chinese Flute Music "Endless love"  <br /> <br /> 
                      </p>
                      <ul >
                        <li >
                          <i className="far fa-user blog-item__list_icon" />
                          <span >Lưu Diệc Phi</span>
                        </li>
                        <li >
                          <i className="far fa-comments" />
                          <span >7749 Bình Luận</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default BlogsHome