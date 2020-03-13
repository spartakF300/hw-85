import {axiosApi} from "../../axiosApi";

export const REQUEST_START = 'REQUEST_START';
export const FETCH_ARTIST_SUCCESS = 'REQUEST_ARTIST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const REQUEST_END = 'REQUEST_END';

export const fetchArtistsSuccess = (data) => {
    return {type: FETCH_ARTIST_SUCCESS, data}
};
export const request = () => {
    return {type: REQUEST_START}
};
export const requestEnd = () => {
    return {type: REQUEST_END}
};

export const errorRequest = (err) => {
    return {type: REQUEST_ERROR, err}
};

export const getArtists = () => {
    return async (dispatch) => {
        try {
            dispatch(request());
            const response = await axiosApi.get('/artists');
            dispatch(fetchArtistsSuccess(response.data))
        } catch (e) {
            dispatch(errorRequest(e))
        }

    }
};

export const getLink = (id) => {
    return async (dispatch) => {
        try {
            dispatch(request());
            await axiosApi.get('/links/' + id);
            dispatch(requestEnd());
        } catch (e) {
            dispatch(errorRequest(e))
        }

    }
};