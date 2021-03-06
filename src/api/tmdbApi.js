import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv',
    person: 'person'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
    now_playing: 'now_playing'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

//

export const personType = {
    popular: 'popular',
    movieCredits: 'movie',
    tvCredits: 'tv'

}

const tmdbApi = {
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, params);
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, params);
    },

    getPeopleList: (type, params) => {
        const url = 'person/' + personType[type];
        return axiosClient.get(url, params);
    },


    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, { params: {} });
    },

    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },

    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, params);
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, { params: {} });
    },

    //
    movie_credits: (cate, id) => {
        const url = 'person/' + id + '/' + category[cate] + '_credits';
        return axiosClient.get(url, { params: {} });
    },

    //Giong
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, { params: {} });
    },
}

export default tmdbApi;