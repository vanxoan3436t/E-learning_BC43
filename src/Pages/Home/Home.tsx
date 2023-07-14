import React, { useEffect } from 'react'
import CarouselHome from '../../Components/Carousel/CarouselHome'
import InfoCoureHome from './InfoCoureHome/InfoCoureHome'
import NumberUp from './NumberBox/NumberUp'
import Services from './Services/Services'
import Case from './Case/Case'
import Support from './SupportBG/Support'
import BlogsHome from './BlogsHome/BlogsHome'
import Contact from './ContactHome/Contact'
import { useDispatch, useSelector } from 'react-redux'
import { getListCourseActionApi } from '../../Redux/reducer/quanLyKhoaHocReducer'
import { DispatchType, RootState } from '../../Redux/configStote'
import { useSearchParams } from 'react-router-dom'

type Props = {}
const Home = (props: Props) => {
  const dispatch : DispatchType= useDispatch()

const getDataListCourse = async () => {
  const actionApi = getListCourseActionApi()
dispatch (actionApi)
}
  useEffect(() => {
    getDataListCourse()

  }, [])
  return (
    <div >
      <CarouselHome></CarouselHome>
      <InfoCoureHome></InfoCoureHome>
      <h2 className='text-dark container' style={{ height: '200px' }}>Danh mục khoá học <br /> phần này bổ sung sau khi call api danh sách khoá học vô sau sẽ để ở đây là đẹp <br /> ĐÃ CALL API thành công</h2>
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