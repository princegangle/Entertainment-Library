import React from 'react'
import './Home.scss'

import HeroBener from "./herobenner/HeroBener";
import {Trendingd,PopulerSection ,TopRateingSection} from "../../../Index.js"
 

function Home() {
  return (
    <div className='homePage'>
      <HeroBener/>
    
      <Trendingd/>
      <PopulerSection/>
      <TopRateingSection/>
     
    </div>
  )
}

export default Home