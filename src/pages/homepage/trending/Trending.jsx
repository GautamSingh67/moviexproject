import React, { useState } from 'react'
import style from './style.module.css'
import { ContentWrapper } from './../../../component/contentWrapper/ContentWrapper';
import { Usefetch } from './../../../customHook/Usefetch';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from 'react-redux';
import { Img } from '../../../component/lazyLoadImage/Img';
import { useNavigate } from 'react-router-dom';

export function Trending() {
  const [button1, setButton1] = useState("button1");
  const [button2, setButton2] = useState("");
  const [endpoint, setEndpoint] = useState("day");
  const { data, loading } = Usefetch(`https://api.themoviedb.org/3/trending/movie/${endpoint}?api_key=7375e5209b35a7926f88e480159467be`)
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  function handle1() {
    setButton2("");
    setButton1("button1");
    setEndpoint("day");
  }
  function handle2() {
    setButton1("");
    setButton2("button2");
    setEndpoint("week");
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
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

  function movieDetail(id, media_type) {
    navigate(`./${media_type}/${id}`);
  }

  return (
    <div className={style['trending']}>
      <ContentWrapper>
        <div className={style['switchTabParent']}>
          <div className={style['trendingTitle']}>Trending</div>
          <div className={style['switchTab']}>
            <span className={style[`${button1}`]} onClick={() => handle1()}>Day</span>
            <span className={style[`${button2}`]} onClick={() => handle2()}>Week</span>
          </div>
        </div>


        <Carousel responsive={responsive} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
          {!loading &&
            data.results.map((item, index) => {
              const posterUrl = url.poster + item.poster_path
              return <div key={index}>
                <Img title={item.original_title} src={posterUrl} alt='image' onClick={() => movieDetail(item.id, item.media_type)} className={style['poster']} />

              </div>

            })}

        </Carousel>



      </ContentWrapper>
    </div>
  )
}