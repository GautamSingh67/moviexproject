import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux';
import style from '../movie/style.module.css';
import { Img } from './../../../component/lazyLoadImage/Img';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export function Tv() {
  const [page,setPage] = useState(1);
  const [loading,setLoading] = useState(true);
  const [data,setData] = useState([]);
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

 async function showData(){
    const responce = await axios.get(`https://api.themoviedb.org/3/discover/tv?page=1&api_key=7375e5209b35a7926f88e480159467be`);
     setData(responce.data);
    setLoading(false);
  }
  showData();
  
 async function moreScroll(){
  const responce = await axios.get(`https://api.themoviedb.org/3/discover/tv?page=${page}&api_key=7375e5209b35a7926f88e480159467be`);
  if(data.results){
    setData({
      ...data,
      results:[...data.results,...responce.data.results],
    });
    setLoading(false);
  }
  
 }

  function nextPage(){
     setPage((page)=>page+1);
     moreScroll();
  }

  const endpoint = "tv"
  function movieDetail(id){
    navigate(`/${endpoint}/${id}`);
}

  return (
    <div className={style['parent']}>
      {
        !loading && <InfiniteScroll
         className={style['child']}
         dataLength={data.results.length}
         next={nextPage} 
         hasMore = {page <= data.total_pages}
         loader = {<h3 style={{color:'white'}}>loading.......</h3>}
         >
        
          {
            data.results.map((item, index) => {
              let image = url.poster + item.poster_path
              return <div key={index}>
                <Img src={image} alt='img' className={style['image']} onClick={()=>movieDetail(item.id,item.media_type)}/>
            </div>
            })
          }
        </InfiniteScroll>
      }
    </div>
  )
}
