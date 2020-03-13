import {axiosApi} from "../../axiosApi";

export const FETCH_ALBUMS_REQUEST = 'FETCH_ALBUMS_REQUEST';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_ERROR = 'FETCH_ALBUMS_ERROR';

export const fetchAlbumsSuccess = data => ({type: FETCH_ALBUMS_SUCCESS, data});
export const fetchErrorRequest = error =>({type: FETCH_ALBUMS_ERROR});
export const fetchAlbumsRequest = ()=>({type:FETCH_ALBUMS_REQUEST});


export const getAlbums = (artistId) => {
    return async dispatch => {
        try {
            dispatch(fetchAlbumsRequest());
            const response = await axiosApi.get('/albums?artist=' + artistId);
            dispatch(fetchAlbumsSuccess(response.data))
        }catch (e) {
            dispatch(fetchErrorRequest(e))
        }


    }
};