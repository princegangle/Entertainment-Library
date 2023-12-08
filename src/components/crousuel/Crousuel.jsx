
import './Crousuel.scss'
// import './f.scss'
import React, {useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import{ContentWrapper,Genres} from "../../../index.js"
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from "react-icons/bs"
import dayjs from 'dayjs'
import Img from '../lazyLoadimeg/Img.jsx';
import CircleRating from '../circlerating/Circlerating.jsx'






function Crousuel({data,loading ,endpoint,title}) {
    const crousuelContiner = useRef()
    const {url} = useSelector((state)=>state.home)
    const navigate = useNavigate()

    const navigation = (dir)=>{

 const continer = crousuelContiner.current

 const scrollAmount = dir === "left" ?  continer.scrollLeft - (continer.offsetWidth + 20
    ) : 
    continer.scrollLeft + (continer.offsetWidth + 20)

    continer.scrollTo({
        left : scrollAmount,
        behavior:"smooth"
    })

    }


    const  Loadingillusion = ()=>{
         return (
         <div className="skeletonItem">
            <div className="posterBlock skeleton"></div>
            <div className="textBlock">
                <div className="title skeleton"></div>
                <div className="date skeleton"></div>
            </div>
        </div> 
        )
    }

   




   return (
  

    <div className="carousel">
       
        <ContentWrapper>
            { 
            title && <div className="carouselTitle">{title}</div>
            }
            <BsFillArrowLeftCircleFill
             className='carouselLeftNav arrow'
             onClick={()=>navigation("left")}
             />
            <BsFillArrowRightCircleFill 
            className='carouselRighttNav arrow'
            onClick={()=>navigation("right")}
            />

            
            
            {  loading?  (
                
                
                <div className='loadingSkeleton'>
                    {Loadingillusion()} 
                    {Loadingillusion()} 
                    {Loadingillusion()} 
                    {Loadingillusion()} 
                    {Loadingillusion()} 
                    {Loadingillusion()} 
                    {Loadingillusion()} 
                     
           </div>
                    
                    ):(
                        
                        <div className="carouselItems" ref={crousuelContiner}>
                    
                      
                    { 
                    
                    data?.map((item)=>{
                            const posterURl = item.poster_path ?  url.poster + item.poster_path : ""
                            
                            
                            return (
                                <div key={item.id} className="carouselItem"
                                onClick={()=>navigate(`/${item.media_type || endpoint}/${item.id}`)}
                                >
                                       <div className="posterBlock">
                                           <Img src={posterURl }/>
                                           <CircleRating rating={item.vote_average.toFixed(1)}/>
                                           <Genres data= {item.genre_ids.slice(0,2)}/> 
                                       </div>

                                        
                                       <div className="textBlock">
                                        <span className="title">
                                            {
                                                item. original_title
                                                || item.name
                                            }
                                        </span>
                                        <span className="date">
                                            {
                                                
                                                dayjs(item.release_date).format("MMM D, YYYY")
                                            }
                                        </span>
                                       </div>
                                </div>
                            )
                        })
                    }
                </div>

                 
)
}

        </ContentWrapper>
    </div>

  )
}

export default Crousuel