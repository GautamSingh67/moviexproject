import React, { useEffect, useState } from 'react'
import { ContentWrapper } from '../../../component/contentWrapper/ContentWrapper'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Usefetch } from '../../../customHook/Usefetch';
import { Img } from '../../../component/lazyLoadImage/Img';

export function HeroBaner() {
  const [background, setBackgroung] = useState("");
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const { url } = useSelector((state) => {
    return state.home;
  })
  const { data, loading } = Usefetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=7375e5209b35a7926f88e480159467be`);

  useEffect(() => {
    if (!loading) {
      const image = url.backdrop + data.results[Math.floor(Math.random() * 20)].backdrop_path;
      setBackgroung(image);
    }
  }, [data, loading, url.backdrop]);

  function searchQueryHandler(e) {
    if (e.key === "Enter" && searchInput.length > 0) {
      navigate(`/search/${searchInput}`);
    }
    else {
      if (e.key === "Enter" && searchInput.length === 0)
        return alert("Empty Input Field!");
    }
  }
  function handleSubmit() {
    if (searchInput.length === 0)
      return alert("Empty Input Field!");
    else
      navigate(`/search/${searchInput}`);
  }


  return (
    <div className={style['herobanner']}>
      <ContentWrapper>
        <div className={style['heroBannerImage']}>
          {
            !loading && <Img src={background} alt="img" className={style['img']} />
          }
          <div className={style['opacity']}></div>
        </div>
        <div className={style['heroBannerContent']}>
          <span className={style['title']}>Welcome</span>
          <span className={style['subTitle']}>Millions of movies, TV shows and people to discover. Explore now</span>
          <div className={style['form']}>
            <input type='search' placeholder='Search for a movie or tv show.....' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} onKeyUp={searchQueryHandler} />
            <button type='button' onClick={handleSubmit}>Search</button>
          </div>
        </div>
      </ContentWrapper>

    </div>
  )
}
