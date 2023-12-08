import React from 'react'
import './Details.scss'
import {Usefetch,DetailsBanner,ContentWrapper,Cast,  VideoCrousel,Samethinghs,Sugetion} from '../../../Index.js'
import { useParams } from 'react-router-dom'



function Details() {
  const {mediaType,id} = useParams()
  const  {data,loading } = Usefetch(`/${mediaType}/${id}/videos`)
  const  {data : credits,loading:creditsLoading } = Usefetch(`/${mediaType}/${id}/credits`)
  return (
  <div>
    <ContentWrapper>

      
    <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
    <Cast data={credits?.cast} loading={creditsLoading}/>
    <  VideoCrousel data={data} loading={loading}/>
    <Samethinghs mediaType={mediaType} id={id}/>
    <Sugetion  mediaType={mediaType} id={id}/>
    

    </ContentWrapper>

  </div>
  
  ) 
}

export default Details