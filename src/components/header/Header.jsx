import React, { useEffect, useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { SlMenu } from 'react-icons/sl'
import { VscChromeClose } from 'react-icons/vsc'
import { useNavigate, useLocation } from 'react-router-dom'
import { ContentWrapper, Home } from "../../../index.js"

import "./Header.scss"

function Header() {
  const [show, SetShow] = useState('top')
  const [lastscrolly, SetLastScrolly] = useState(0)
  const [mobailmenu, SetMobailMenu] = useState(false)
  const [query, SetQuery] = useState('')
  const [showsearch, SetShowSearch] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()



  const  controlNavbar = () => {
    if(window.scrollY > 600){
          if(window.scroll > lastscrolly){
            SetShow("hide");
          }else{
            SetShow('top');
          }
    }else{
      SetShow("top");
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',controlNavbar)
    return ()=>{window.removeEventListener('scroll',controlNavbar)}

  },[lastscrolly])



 

  const SearchQueryHandler = (e) => {
    if (e.key === 'Enter' && query.length > 0) {
      navigate(`search/:${query}`)
      setTimeout(()=>{
        SetShowSearch(false)
      },1000)
    }
  

  }

  const openSearch = () => {
    SetShowSearch(true)
    SetMobailMenu(false)
  }
  const openMobailmenu = () => {
    SetMobailMenu(true)
    SetShowSearch(false)
  }


  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate('/explore/movie')
    } else {
      navigate('/explore/tv')
    }

  }

  useEffect(()=>{
    window.scrollTo( 0 ,0)
  },[location])


  return (
    <header className={`header ${mobailmenu ? 'mobileView' : " "} ${show} `}>
      <ContentWrapper>
        <div className="logo">
          <span className='logotitellll' onClick={() => navigate('/')} >  Entertainment Library </span>
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler('movie')}>Movies</li>
          <li className="menuItem" onClick={() => navigationHandler('tv')}>TV show</li>
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch} /></li>
        </ul>
        <div className="mobailMenuItem">
          <HiOutlineSearch onClick={openSearch} />
          {
            mobailmenu ? (
              <VscChromeClose onClick={() => SetMobailMenu(false)} />
            ) : (<SlMenu onClick={openMobailmenu} />)
          }
        </div>
      </ContentWrapper>

      {showsearch && <div className="searchBar">

        <div className="searchInput">
          <input type="text"
            onKeyUp={SearchQueryHandler}
            placeholder=' Search a movei or tv show'
            onChange={(e) => { SetQuery(e.target.value) }}
          />
          <VscChromeClose onClick={() => SetShowSearch(false)} />

        </div>

      </div>}



    </header>
  )
}

export default Header