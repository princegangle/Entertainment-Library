import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'



function Img ({src,className}) {
  return (
   <LazyLoadImage 
   className={className || ""}
   effect='blur'
   alt='ds'
   src={src}
   />
  )
}

export default Img