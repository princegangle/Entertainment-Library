import React,{useState,useEffect} from 'react'
import './Searchresult.scss'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper.jsx'
import Spinner from '../../components/spinner/Spinner.jsx'
import MovieCard from '../../components/moveiCard/MovieCard.jsx'

import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import FecthdatafromApi from "../../Utils/api.js"

function Searchresult() {
  const {query} = useParams()
  const [data,setData] =useState(null)
  const [loading,Setloading] = useState(false )
  const [ pageNum ,SetPagenum] = useState(1)

  const featchInitialData = ()=>{
    Setloading(true)
    FecthdatafromApi(`/search/multi?query=${query}&page=${pageNum}`)
    .then((res)=>{
      setData(res)
      SetPagenum((prev)=>prev + 1)
      Setloading(false)
    })
  }
  
  const featNextPageData = ()=>{

    FecthdatafromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
             (res)=>{
             if(data?.results){
              setData({
                ...data,
                results:[ ...data?.results, ...res.results ]
              })
             }else{
              setData(res)
              
            }
            SetPagenum((prev)=>prev + 1)
    })
  }
  useEffect(()=>{
   SetPagenum(1)
    featchInitialData()
  },[query])
  
  
  
  return (
    <div className='searchResultsPage' >
      
      {loading && <Spinner initial={true}/> }

      {!loading && (
                <ContentWrapper>
                    {data?.results?.length > 0 ? (
                        <>
                            <div className="pageTitle">
                                {`Search ${
                                    data?.total_results > 1
                                        ? "results"
                                        : "result"
                                } of '${query}'`}
                            </div>
                            <InfiniteScroll
                                className="content"
                                dataLength={data?.results?.length || []}
                                next={featNextPageData}
                                hasMore={pageNum <= data?.total_pages}
                                loader={<Spinner />}
                            >
                                {data?.results.map((item, index) => {
                                    if (item.media_type === "person") return;
                                    return (
                                        <MovieCard
                                            key={index}
                                            data={item}
                                            fromSearch={true}
                                        />
                                    );
                                })}
                            </InfiniteScroll>
                        </>
                    ) : (
                        <span className="resultNotFound">
                            Sorry, Page not found
                        </span>
                    )}
                </ContentWrapper>
            )}
      
     
    </div>
  )
}

export default Searchresult  