import React, { useState } from 'react'
import '../trending/Trending.scss'
import FecthdatafromApi from '../../../Utils/api.js'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper.jsx'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs.jsx'
import Usefetch from '../../../hooks/Usefetch.jsx'
import Crousuel from '../../../components/crousuel/Crousuel.jsx'




function TopRateingSection() {
  const [endpoint,SetendPoint] = useState("movie")

  const { data,loading} =Usefetch(`/${endpoint }/top_rated`)


  const onTabChang = (tab) =>{
    SetendPoint(tab ==="Movie" ? "movie": "tv" )
  }
  return (
      <div className="carouselSaction">
            <ContentWrapper>
                <span className=' carouselTitel' >Top Rated</span>
                <SwitchTabs data={["Movie","TV Show" ,]} onTabChang = {onTabChang} />
            </ContentWrapper>
            <Crousuel data =
            {data?.results} 
            loading={loading}
            endpoint={endpoint}
            /> 
            </div>  
  )
}

export default TopRateingSection