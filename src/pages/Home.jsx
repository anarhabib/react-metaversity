import React from 'react'
import Blocks from '../components/Blocks'
import FutureTechnology from '../components/FutureTechnology'
import News from '../components/News'
import Vision from '../components/Vision'
import ModalBox from '../components/ModalBox'
import Triangle from '../components/Triangle'
import Slider from '../components/Slider'
import Communuty from '../components/Communuty'
import { FloatButton } from 'antd';


const Home = () => {
  return (
    <>
     <FutureTechnology/>
     <News/>
     <Communuty/>
     <Blocks/>
     <Vision/>
     <ModalBox/>
     <Triangle/>
     <Slider/>
     <FloatButton.BackTop/>

    </>
  )
}

export default Home