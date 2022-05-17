import React from 'react'
import Announcement from '../components/Announcement'
import Nav from '../components/Nav'
import { Slider } from '../components/Slider'





const Home = () => {

  return (
    <div className='container'>
      <Announcement />
      <Nav/>
      <Slider />
    </div>
  )
}


export default Home  