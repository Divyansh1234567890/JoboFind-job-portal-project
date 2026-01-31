import React from 'react'
import Hero from '../components/Hero'
import PopularVacancies from '../components/popularVacancies'
import HowJoboFindWorks from '../components/HowJoboFindWorks'
import Categories from '../components/Categories'
import Jobs from '../components/Jobs'
import Testimonial from '../components/Testimonial'
import { AppContext } from '../context/AppContext'
import { useContext,useEffect } from 'react'
const Home = () => {
  return (
    <div>
      <Hero/>
      <PopularVacancies/>
      <HowJoboFindWorks/>
      <Categories/>
      <Jobs/>
      <Testimonial/>
    </div>
  )
}

export default Home
