import React from 'react';
import logo from './movieLogo.svg'
import style from './style.module.css'
export function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div>
                    <img src={logo} alt="Logo" width="200" className="d-inline-block align-text-top" />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <button className={style['navbarButtons']}>Movies</button>
                        <button className={style['navbarButtons']}>TV Shows</button>
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