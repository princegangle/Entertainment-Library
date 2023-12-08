import React, { useState } from 'react'
import './Trending.scss'
import FecthdatafromApi from '../../../Utils/api.js'
import {ContentWrapper,SwitchTabs,Usefetch ,Crousuel} from '../../../../index.js'



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