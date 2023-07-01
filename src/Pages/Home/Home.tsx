import React from 'react'
import CarouselHome from '../../Components/Carousel/CarouselHome'
import InfoCoureHome from './InfoCoureHome/InfoCoureHome'
import NumberUp from './NumberBox/NumberUp'
import Services from './Services/Services'
import Case from './Case/Case'
import Support from './SupportBG/Support'
import BlogsHome from './BlogsHome/BlogsHome'
import Contact from './ContactHome/Contact'

type Props = {}

const Home = (props: Props) => {
  return (
    <div >
    <CarouselHome></CarouselHome>
    <InfoCoureHome></InfoCoureHome>
    <h2 className='text-dark container' style={{height:'200px'}}>Danh mục khoá học <br /> phần này bổ sung sau khi call api danh sách khoá học vô sau sẽ để ở đây là đẹp</h2>
    <NumberUp></NumberUp>
    <Services></Services>
    <Support></Support>
    <Case></Case>
    <BlogsHome></BlogsHome>
    <Contact></Contact>
    </div>
  )
}

export default Home