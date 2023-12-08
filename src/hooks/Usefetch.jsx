import React, { useEffect, useState } from 'react'
import FecthdatafromApi from '../Utils/api'



function Usefetch(url) {
  const [data, Setdata] = useState('')
  const [loading, SetLoading] = useState("is Loading")
  const [error, Seterror] = useState(null)

  useEffect(() => {
    Seterror(null)
    SetLoading("LOasing")
    Setdata(null)

    FecthdatafromApi(url).then((res) => {
      SetLoading(false)
      Setdata(res)
    }).catch((error) => {
      Seterror("error in USeFatch")
    })



  }, [url])
  return (
    { data, error, loading }
  )
}

export default Usefetch