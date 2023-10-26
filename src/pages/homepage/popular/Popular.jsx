import React, { useState } from 'react'
import style from './Style.module.css'
import { ContentWrapper } from './../../../component/contentWrapper/ContentWrapper';
import { Usefetch } from './../../../customHook/Usefetch';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from 'react-redux';
import { Img } from '../../../component/lazyLoadImage/Img';
import { useNavigate } from 'react-router-dom';

export function Popular() {
  const [button1, setButton1] = useState("button1");
  const [button2, setButton2] = useState("");
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = Usefetch(`https://api.themoviedb.org/3/${endpoint}/popular?api_key=7375e5209b35a7926f88e480159467be`)
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  function handle1() {
    setButton2("");
    setButton1("button1");
    setEndpoint("movie");
  }
  function handle2() {
    setButton1("");
    setButton2("button2");
    setEndpoint("tv");
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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

  function movieDetail(id){
    navigate(`./${endpoint}/${id}`);
}

  return (
    <div className={style['trending']}>
      <ContentWrapper>
        <div className={style['switchTabParent']}>
          <div className={style['trendingTitle']}>Popular</div>
          <div className={style['switchTab']}>
            <span className={style[`${button1}`]} onClick={() => handle1()}>Movie</span>
            <span className={style[`${button2}`]} onClick={() => handle2()}>TV Shows</span>
          </div>
        </div>

        {
          !loading && <Carousel responsive={responsive} infinite={true}  removeArrowOnDeviceType={["tablet", "mobile"]}>
            {data.results.map((item, index) => {
              const posterUrl = url.poster + item.poster_path
              return <div key={index} className={style['carousalContent']}>
                <div style={{marginTop:'0.5rem'}}>
                  <Img title={item.original_title} src={posterUrl} alt='image' className={style['carouselImage']}  onClick={()=>movieDetail(item.id,item.media_type)} /><br />
                </div>
              </div>

            })}
          </Carousel>
        }


      </ContentWrapper>
    </div>
  )
}