import React, { useEffect } from 'react'
import CarouselHome from '../../Components/Carousel/CarouselHome'
import InfoCoureHome from './InfoCoureHome/InfoCoureHome'
import NumberUp from './NumberBox/NumberUp'
import Services from './Services/Services'
import Case from './Case/Case'
import Support from './SupportBG/Support'
import BlogsHome from './BlogsHome/BlogsHome'
import Contact from './ContactHome/Contact'
import { useDispatch } from 'react-redux'
import { getListCourseActionApi } from '../../Redux/reducer/quanLyKhoaHocReducer'
import { DispatchType } from '../../Redux/configStote'
import ListCourses from './ListCourses/ListCourses'

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
     <ListCourses></ListCourses>
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