import React from 'react'
import style from "./style.module.css";
export function About() {
  return (
    <div className={style["header"]}>
      <div className={style["div1"]}>
        <span className={style["content1"]}>Hi there,</span>
        <img src='https://www.themoviedb.org/assets/2/v4/marketing/deadpool-06f2a06d7a418ec887300397b6861383bf1e3b72f604ddd5f75bce170e81dce9.png' alt="img"></img>
        <span className={style["content2"]}>Let's talk about TMDB</span>
        <span className={style["content3"]}>The Movie Database (TMDB) is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDB's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different.</span>
      </div>
    </div>
  )
}