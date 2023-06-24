import { Carousel } from 'antd'
import React from 'react'
import CarouselHome from '../../Components/Carousel/CarouselHome'
import InfoCoureHome from './InfoCoureHome/InfoCoureHome'

type Props = {}

const Home = (props: Props) => {
  return (
    <div >
    <CarouselHome></CarouselHome>
    <InfoCoureHome></InfoCoureHome>
    </div>
  )
}

export default Home