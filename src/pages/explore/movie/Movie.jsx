import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSelector } from 'react-redux';
import style from './style.module.css';
import { Img } from './../../../component/lazyLoadImage/Img';
import axios from 'axios';
export function Movie() {
  const [page,setPage] = useState(1);
  const [loading,setLoading] = useState(true);
  const [data,setData] = useState([]);
  const { url } = useSelector((state) => state.home);
  

 async function showData(){
    const responce = await axios.get(`https://api.themoviedb.org/3/discover/movie?page=${page}&api_key=7375e5209b35a7926f88e480159467be`);
     setData(responce.data);
    setLoading(false);
  }
  showData();
  
 async function moreScroll(){
  const responce = await axios.get(`https://api.themoviedb.org/3/discover/movie?page=${page}&api_key=7375e5209b35a7926f88e480159467be`);
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
                <Img src={image} alt='img' className={style['image']}/>
            </div>
            })
          }
        </InfiniteScroll>
      }
    </div>
  )
}
