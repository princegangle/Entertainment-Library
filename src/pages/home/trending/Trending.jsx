import React, { useState } from 'react'
import './Trending.scss'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper.jsx'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs.jsx'
import  Crousuel  from '../../../components/crousuel/Crousuel.jsx'
import Usefetch from '../../../hooks/Usefetch.jsx'




function Trendingd() {
  const [endpoint,SetendPoint] = useState("day")

  const { data,loading} =Usefetch(`/trending/all/${endpoint }`)


  const onTabChang = (tab) =>{
    SetendPoint(tab ==="Day" ? "day": "week" )
  }
  return (
      <div className="carouselSaction">
            <ContentWrapper>
                <span className=' carouselTitel' >Trending</span>
                <SwitchTabs data={["Day","Week" ,]} onTabChang = {onTabChang} />
            </ContentWrapper>
            <Crousuel data ={data?.results} loading={loading}/> 
            </div>  
  )
}

export default Trendingd