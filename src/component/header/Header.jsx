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


      function handleSubmit() {
          navigate(`/`);
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
                        <button className={style['navbarButtons']} onClick={handleSubmit}>Search</button>
                    
                    </div>

                </div>
            </div>
        </nav>

    )
}