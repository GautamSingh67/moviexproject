import React from 'react'
import style from './Style.module.css'
import { Link} from 'react-router-dom';
export function Footer() {

  return (
    <section className={style['footerHead']}>
        <div className={style['footer']}>
        <div>
            <li><Link to={"/"} className={style['link']}>Home</Link></li>
            <li><Link to={"/about"} className={style['link']}>About</Link></li>
            <li>FAQ</li>
            <li>Privacy Police</li>
            <li>Terms of Uses</li>
            <li><Link to={`https://technocrez.blogspot.com/`} className={style['link']}>My Blog</Link></li>
        </div>
        <div>
            <h2>Contact Us</h2>
            <li><Link to={`https://www.linkedin.com/in/gautam-singh67/`} className={style['link']}>LinkedIn</Link></li>
            <li><Link to={`https://www.facebook.com/`} className={style['link']}>Facebook</Link></li>
            <li><Link to={`https://www.instagram.com/`} className={style['link']}>Instagram</Link></li>
            <li><Link to={`https://twitter.com/`} className={style['link']}>Twitter</Link></li>
        </div>
        <div>
            <h2>Explore</h2>
            <li><Link to = {'/explore/movie'} className={style['link']}>Movies</Link></li>
            <li><Link to = {'/explore/tv'} className={style['link']}>TV Shows</Link></li>
        </div>
        </div>
    </section>
  )
}