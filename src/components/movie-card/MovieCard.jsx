import React from 'react';

import './movie-card.scss';

import { Link } from 'react-router-dom';

import Button from '../button/Button';

import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import Pie from '../progress-circle/Pie';

const MovieCard = props => {

    const item = props.item;
    // console.log(item);

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path || item.profile_path);
    const date = item.release_date || item.first_air_date;

    return (
        <Link to={link}>
            <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
                {
                    item.vote_average
                        ? <Pie percentage={item.vote_average * 10} colour="#ff0000" /> : null
                }

                {/* {
                    props.category === 'tv' && 
                    <Button>
                        <i className="bx bx-play"></i>
                    </Button>
                }
                {
                    props.category === 'movie' && 
                    <Button>
                        <i className="bx bx-play"></i>
                    </Button>
                } */}

                {
                    !(props.category === 'person') &&
                    <Button>
                        <i className="bx bx-play"></i>
                    </Button>
                }

            </div>
            <h3>
                {item.title || item.name}
                <span> {date && `(${date.slice(0, 4)})`}</span>
            </h3>

        </Link>
    );
}

export default MovieCard;