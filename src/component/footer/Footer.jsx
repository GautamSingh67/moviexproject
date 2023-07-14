import React from 'react'
import style from './Style.module.css'
export function Footer() {
  return (
    <section className={style['footerHead']}>
        <div className={style['footer']}>
        <div>
            <li>Home</li>
            <li>About</li>
            <li>FAQ</li>
            <li>Privacy Police</li>
            <li>Terms of Uses</li>
            <li>My Blog</li>
        </div>
        <div>
            <h2>Contact Us</h2>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
        </div>
        <div>
            <h2>Explore</h2>
            <li>Movies</li>
            <li>TV Shows</li>
        </div>
        </div>
        <div className={style['footerBootom']}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nobis quam at doloribus nihil cumque obcaecati alias corrupti nemo sed!</p>
        </div>

    </section>
  )
}