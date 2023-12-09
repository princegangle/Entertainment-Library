import FecthdatafromApi from "./Utils/api.js"
// import {
//   Header,
//   Footer,
  
//   PageNotfound,
//   Explore,
//   Details,
//   Searchresult
// } from '../index.js'
import Searchresult from "./pages/searchresult/Searchresult.jsx"
import Details from "./pages/details/Details.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import PageNotfound from "./pages/404/PageNotfound.jsx";
import Explore from "./pages/explore/Explore.jsx";

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getApiGenres } from "./Store/homeSlice";
import './App.css'

function App() {

  const dispatch = useDispatch()
  const { url } = useSelector((state) => state.home)


  const Featchconfiguration = () => {
    FecthdatafromApi('/configuration')
      .then((res) => {

        const url = {
          backdrop: res.images.secure_base_url +
            "original",
          profile: res.images.secure_base_url +
            "original",
          poster: res.images.secure_base_url +
            "original"

        }

        // console.log(res)
        dispatch(getApiConfiguration(url))

      });
  };

  useEffect(() => {
    Featchconfiguration()
    genersCall()
  }, [])

  const genersCall = async () => {
    let promises = []
    let endPoints = ["tv", 'movie']
    let allGEners = {}
    endPoints.forEach((url) => {
      promises.push(FecthdatafromApi(`/genre/${url}/list`))
    });

    const data = await Promise.all(promises)
    data.map(({ genres }) => {
      return genres.map((item) => (allGEners[item.id] = item))
    }

    )
    dispatch(getApiGenres(allGEners))


  }

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/"
            element={<Home />} />

          <Route path="/:mediaType/:id"
            element={<Details />} />

          <Route path="/search/:query"
            element={<Searchresult />} />

          <Route path="/explore/:mediatype"
            element={<Explore />} />

          <Route path="*"
            element={<PageNotfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
