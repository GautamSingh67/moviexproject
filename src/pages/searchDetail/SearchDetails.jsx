import React, { useEffect, useState } from 'react'
import style from '../explore/movie/style.module.css';
import InfiniteScroll from 'react-infinite-scroll-component'
import { Img } from "./../../component/lazyLoadImage/Img"
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux';

export function SearchDetails() {
  const location = useLocation()
  const [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  useEffect(() => {
    initial();
    // eslint-disable-next-line
  }, [])
  const arr = location.pathname.split("/");
  async function initial() {
    const responce = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${arr[2]}&page=1&api_key=7375e5209b35a7926f88e480159467be`);
    setData(responce.data);
    setLoading(false);
  }

  async function moreScroll() {
    setPage(++page);
    const responce = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${arr[2]}&page=${page}&api_key=7375e5209b35a7926f88e480159467be`);
    if (data?.results) {
      setData({
        ...data,
        results: [...data?.results, ...responce.data.results],
      });
      setLoading(false);
    }
  }
  
  //const endpoint = "movie"
  function movieDetail(id,endpoint){
    navigate(`/${endpoint}/${id}`);
}


  return (
    <div className={style['parent']}>
      {
        !loading && <InfiniteScroll
          className={style['child']}
          dataLength={data.results.length}
          next={moreScroll}
          hasMore={page < data.total_pages}
        //  loader = {<h3 style={{color:'white'}}>loading.......</h3>}
        >

          {

            data.results.length>0?data.results.map((item, index) => {
              let image = url.poster + item.poster_path
              if (item.media_type === "movie" || item.media_type === "tv") {
                return <div key={index}>
                  <Img src={image} alt='img' className={style['image']}  onClick={()=>movieDetail(item.id,item.media_type)}/>
                </div>
              }
              else{
                return ""
              }

            }):<div style={{textAlign:"center", color:"white", fontSize:"1.5rem"}}>data not found!</div>
          }
        </InfiniteScroll>
      }
    </div>
  )
}
