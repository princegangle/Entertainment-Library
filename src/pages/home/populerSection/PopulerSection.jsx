import React, { useState } from 'react'
import '../trending/Trending.scss'
import FecthdatafromApi from '../../../Utils/api.js'
import {ContentWrapper,SwitchTabs,Usefetch ,Crousuel} from '../../../../index.js'



function PopulerSection() {
  const [endpoint,SetendPoint] = useState("movie")

  const { data,loading} =Usefetch(`/${endpoint }/popular`)


  const onTabChang = (tab) =>{
    SetendPoint(tab ==="Movie" ? "movie": "tv" )
  }
  return (
      <div className="carouselSaction">
            <ContentWrapper>
                <span className=' carouselTitel' >Popular  </span>
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

export default PopulerSection