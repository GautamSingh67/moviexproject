import React from 'react';
import style from './style.module.css'
import { useNavigate } from 'react-router-dom';
export function Header() {
    const navigate = useNavigate();
    function handleLogo() {
        navigate("/");
    }
    function handlerMovieOrTv(type) {
        if (type === "Movie") navigate('/explore/movie')
        if (type === "TV") navigate('./explore/tv');
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div onClick={handleLogo} className='logoHead'>
                    <span  className='logo1'>MovieDekho</span>
                    <span className='logo2'></span>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <button className={style['navbarButtons']} onClick={() => handlerMovieOrTv("Movie")}>Movies</button>
                        <button className={style['navbarButtons']} onClick={() => handlerMovieOrTv("TV")}>TV Shows</button>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className={style['navbarButtons']}>Search</button>
                        </form>
                    </div>

                </div>
            </div>
        </nav>

    )
}