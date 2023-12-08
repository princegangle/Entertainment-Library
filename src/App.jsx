import FecthdatafromApi from "./Utils/api.js"
import {
  Header,
  Footer,
  Home,
  PageNotfound,
  Explore,
  Details,
  Searchresult
} from '../index.js'
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
