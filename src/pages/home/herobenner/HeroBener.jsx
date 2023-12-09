import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Herobenner.scss'
import Usefetch from '../../../hooks/Usefetch.jsx'
import Img from '../../../components/lazyLoadimeg/Img.jsx'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper.jsx'

import { useSelector } from 'react-redux'


function HeroBener() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [background, SetBackground] = useState('')
  const [query, SetQuery] = useState('')
  const { data, loading } = Usefetch("/movie/upcoming")
  const { url } = useSelector((state) => state.home)


  const SearchQueryHandler = (e) => {
    if (e.key === 'Enter' && query.length > 0) {
      navigate(`search/:${query}`)
    }

  }
  const SearchQueryHandle = ()=>{
    
     return navigate(`search/:${query}`)
  
  }


  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
    SetBackground(bg)

  },
[data])

    // setInterval(()=>{
    //   const bg =
    //   url.backdrop +
    //   data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path

    //   if(bg){

    //     SetBackground(bg)
    //   }else{
    //     null
    //   }

    // },2000)


      
      
      
             



  return (
    <>
      <div className="heroBanner">
        {!loading && <div className="backdrop-image">

          <Img src={background} alt="c" />
        </div>}
        <ContentWrapper>

        <div className="opacity-layer"></div>
        <div className="heroBennerContent">



          <span className='title'> Wellcome </span>
          <span className='subtitle'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus nam quia labore mollitia cumque obcaecati tempore voluptate
          </span>
          <div className="searchInpute">
            <input type="text"
              onKeyUp={SearchQueryHandler}
              placeholder=' Search a movei or tv show'
              onChange={(e) => { SetQuery(e.target.value) }}
              />
            <button
             className='button'
             onClick={()=>{SearchQueryHandle()}}
             >Search</button>
             
          </div>
        </div>
        </ContentWrapper>
      </div>
    </>
  )
}

export default HeroBener