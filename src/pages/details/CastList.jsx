import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import { Link } from 'react-router-dom';

const CastList = props => {

    const { category } = useParams();

    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const response = await tmdbApi.credits(category, props.id);
            setCasts(response.cast.slice(0, 5));
        }
        getCredits();
    }, [category, props.id]);

    return (
        <div className="casts">
            {
                casts.map((item, i) => (
                    <Link to={`/person/${item.id}`} key={i} className="casts__item">
                        <div className="casts__item__img" style={{ backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})` }}></div>
                        <p className="casts__item__name">{item.name}</p>
                    </Link>
                ))
            }
        </div>

    );
}

export default CastList;