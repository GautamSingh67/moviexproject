import React from 'react'
import { Usefetch } from '../../customHook/Usefetch';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Img } from '../lazyLoadImage/Img';
import style from './style.module.css';

export function Recommendation() {
    const navigate = useNavigate()
    const location = useLocation();
    const { data, loading } = Usefetch(`https://api.themoviedb.org/3/${location.pathname}/recommendations?api_key=7375e5209b35a7926f88e480159467be`);
    const { url } = useSelector((state) => state.home);

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
            items: 3,
        }
    };

    const endpoint = "movie"
    function movieDetail(id) {
        navigate(`/${endpoint}/${id}`);
    }

    return (
        <div className={style['head']}>
            <h2 className={style['heading']}>Recommendation Movies</h2>

            {
                !loading &&
                <Carousel responsive={responsive} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} >
                    {
                        data.results.map((item, index) => {
                            const posterUrl = url.poster + item.poster_path
                            return <div key={index}>
                                <Link reloadDocument><Img title={item.original_title} src={posterUrl} alt='image' onClick={() => movieDetail(item.id, item.media_type)} className={style['poster']} /></Link>

                            </div>
                        })
                    }
                </Carousel>
            }


        </div>
    )
}