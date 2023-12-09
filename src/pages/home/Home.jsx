import React from 'react'
import './Home.scss'
import Trendingd from '../home/trending/Trending.jsx';
import PopulerSection from '../home/populerSection/PopulerSection.jsx';
import TopRateingSection from '../home/topRated/TopRated.jsx';
import HeroBener from "./herobenner/HeroBener";

 

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