import React from 'react';
import style from './style.module.css';
import { useLocation} from 'react-router-dom';
import { Usefetch } from '../../customHook/Usefetch';
import { useSelector } from 'react-redux';
import { Usefetch1 } from './../../customHook/Usefetch1';
import { TopCast } from '../../component/topCast/TopCast';


export function MovieDetail() {
    const location = useLocation();
    const { data, loading } = Usefetch(`https://api.themoviedb.org/3/${location.pathname}?api_key=7375e5209b35a7926f88e480159467be`);
    const { data1, loading1 } = Usefetch1(`https://api.themoviedb.org/3/${location.pathname}/credits?api_key=7375e5209b35a7926f88e480159467be`);
    const { url } = useSelector((state) => state.home);
    let director = "";
    let writer = ""
    if(!loading1){
        data1.crew.map((item,index)=>{
            if(item.job === "Director") return director = director + item.name+", ";
            if(item.department === "Writing") return writer = writer + item.name+", ";
            else return "";
        })
    }


    return (
        <div>
            {
                !loading &&
                <div className= {style['content2']}>
                    <img src={url.backdrop + data.poster_path} alt="poster" className={style['posterImage']} />
                    <div className = {style['content1']}>
                        <span className = {style['title']}>{data.original_title}</span>
                        <span className = {style['tagline']}>{data.tagline}</span>
                        <span className = {style['generes']}>{data.genres.map((item)=><span>{item.name}</span>)}</span>
                        <span className = {style['reting']}>Rating: {data.vote_average}</span>
                        <span className = {style['overview']}>Overview</span>
                        <span className = {style['overviewDetail']}>{data.overview}</span>
                        <div className = {style['status']}>
                            <span className = {style['statusDetail']}>Status: <span>{data.status}</span></span>
                            <span className = {style['statusDetail']}>Release Date: <span>{data.release_date}</span></span>
                            <span className = {style['statusDetail']}>Runtime: <span>{data.runtime}minutes</span></span>
                        </div>
                        <hr/>
                        <div className = {style['status']}>
                        <span>Director: </span>
                        <span className={style['dirWri']}>{director}</span>
                        </div>
                        <hr/>
                        <div className = {style['status']}>
                        <span>Writer: </span>
                        <span className={style['dirWri']}>{writer}</span>
                        </div>
                    </div>
                </div>
            }
            <TopCast data = {data1.cast} loading = {loading1}/>
        </div>
    )
}

