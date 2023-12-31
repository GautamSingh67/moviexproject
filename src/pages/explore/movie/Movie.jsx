import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSelector } from 'react-redux';
import style from './style.module.css';
import { Img } from './../../../component/lazyLoadImage/Img';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export function Movie() {
  let [page,setPage] = useState(1);
  const [loading,setLoading] = useState(true);
  const [data,setData] = useState([]);
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

 useEffect(()=>{
    showData();
  },[]);

 async function showData(){
    const responce = await axios.get(`https://api.themoviedb.org/3/discover/movie?page=1&api_key=7375e5209b35a7926f88e480159467be`);
     setData(responce.data);
    setLoading(false);
  }
  
 async function moreScroll(){
  setPage(++page);
  const responce = await axios.get(`https://api.themoviedb.org/3/discover/movie?page=${page}&api_key=7375e5209b35a7926f88e480159467be`);
  if(data?.results){
    setData({
      ...data,
      results:[...data?.results,...responce.data.results],
    });
    setLoading(false);
  }
}

  const endpoint = "movie"
  function movieDetail(id){
    navigate(`/${endpoint}/${id}`);
}

  return (
    <div className={style['parent']}>
      {
      !loading && <InfiniteScroll
         className={style['child']}
         dataLength={data.results.length}
         next={moreScroll} 
         hasMore = {page < data.total_pages}
        //  loader = {<h3 style={{color:'white'}}>loading.......</h3>}
         >
        
          {
            data.results.map((item, index) => {
              let image = url.poster + item.poster_path
              return <div key={index}>
                <Img src={image} alt='img' className={style['image']} onClick={()=>movieDetail(item.id,item.media_type)} />
            </div>
            })
          }
        </InfiniteScroll>
      }
    </div>
  )
}
