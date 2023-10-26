
import React from 'react'
import style from './style.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from 'react-redux';

export function TopCast({data, loading}) {
    console.log(data);
    const { url } = useSelector((state) => state.home);

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 4,
        }
      };

  return (
    <div className={style['head']}>

        <h2 className={style['heading']}>Top Cast</h2>
      <Carousel responsive={responsive} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} >
            {
                !loading && 
                    data.map((item,index)=>{
                        
                        return <div key={index}>
                            <div className={style['carouselImage']}>
                            <img src={url.backdrop + item.profile_path} alt="poster" className={style['poster']}/>
                            <span className={style['imageChar']}>{item.character}</span>
                            <span className={style['imgName']}>{item.name}</span>
                            </div>
                        </div>
                    })
                
            }

          </Carousel>
    </div>
  )
}

