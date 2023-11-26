import React from 'react'
import { Usefetch } from '../../customHook/Usefetch';
import { useSelector } from 'react-redux';
import {useLocation, useNavigate } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Img } from '../lazyLoadImage/Img';
import style from './style.module.css';

export function Similar() {
    const navigate = useNavigate()
    const location = useLocation();
    const { data, loading } = Usefetch(`https://api.themoviedb.org/3/${location.pathname}/similar?api_key=7375e5209b35a7926f88e480159467be`);
    const { url } = useSelector((state) => state.home);
    let media = location.pathname.split("/");

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

    function movieDetail(id) {
        navigate(`/${media[1]}/${id}`);
    }

    return (
        <div className={style['head']}>
            <h2 className={style['heading']}>{`Similar ${media[1]}`}</h2>

            {
                !loading &&
                <Carousel responsive={responsive} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} >
                    {
                        data.results.map((item, index) => {
                            const posterUrl = url.poster + item.poster_path
                            return <div key={index}>
                                <Img title={item.original_title} src={posterUrl} alt='image' onClick={() => movieDetail(item.id, item.media_type)} className={style['poster']} />

                            </div>
                        })
                    }
                </Carousel>
            }


        </div>
    )
}


