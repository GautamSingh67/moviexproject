import React, {useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';

export function SearchDetails() {
  const location = useLocation()
  const[data1,setData1] = useState([]);
  useEffect(()=>{
    initial();
    // eslint-disable-next-line
  },[])
  const arr = location.pathname.split("/");
  async function initial(){
  const responce = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${arr[2]}&page=1&api_key=7375e5209b35a7926f88e480159467be`);
    setData1(responce.data);
}

console.log(data1);

  
  return (
    <div>SearchDetails</div>
  )
}
