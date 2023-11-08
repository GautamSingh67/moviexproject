import React from 'react'
import style from './style.module.css'
import { Usefetch } from '../../customHook/Usefetch';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useLocation } from 'react-router-dom';

export function Vedio() {
  const location = useLocation();
   const { data, loading } = Usefetch(`https://api.themoviedb.org/3${location.pathname}/videos?api_key=7375e5209b35a7926f88e480159467be`);

   const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    }
  };

  return (
    <div className={style['head']}>
      <h2 className={style['heading']}>Official Vedios</h2>

      {
        !loading &&
        <Carousel responsive={responsive} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} >
          {
            data.results.map((item, index) => {
              return <div key={index}>
                <a href={`https://www.youtube.com/watch?v=${item.key}`}><img alt='img' src={`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`} className={style['poster']} /></a>
                <a href={`https://www.youtube.com/watch?v=${item.key}`}><div className={style['clipPath']}></div></a>
               
              </div>
            })
          }
        </Carousel>
      }


    </div>
  )
}

