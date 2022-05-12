import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

const CastList = props => {

    const { category } = useParams();

    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const response = await tmdbApi.credits(category, props.id);
            setCasts(response.cast);
        }
        getCredits();
    }, [category, props.id]);

    return (
        <div className="casts">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    casts.map((item, i) => (
                        item.profile_path && <SwiperSlide key={i}>
                            <Link to={`/person/${item.id}`} key={i} className="casts__item">
                                <div className="casts__item__bg">
                                    <div className="casts__item__bg__img" style={{ backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})` }}></div>
                                </div>
                                <p className="casts__item__name">{item.name}</p>
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>

    );
}

export const MovieCredits = props => {

    const category = props.type;

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const response = await tmdbApi.movie_credits(category, props.id);

            // console.log(response.cast);
            setMovies(response.cast);
        }
        getCredits();
    }, [category, props.id]);

    return (
        <div className="movies">
            {
                movies.map((item, i) => (

                    item.poster_path && item.backdrop_path &&

                    <Link to={`/${category}/${item.id}`} key={i} className="movies__item">
                        <div className="movies__item__bg">
                            <div className="movies__item__bg__img"
                                style={{ backgroundImage: `url(${apiConfig.w500Image(item.poster_path || item.backdrop_path)})` }}>
                            </div>
                        </div>
                        <p className="movies__item__name">{item.title || item.original_title || item.original_name}</p>
                    </Link>
                ))
            }
        </div>

    );
}

export default CastList;