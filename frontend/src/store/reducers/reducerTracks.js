import {FETCH_TRACKS_ERROR, FETCH_TRACKS_REQUEST, FETCH_TRACKS_SUCCESS} from "../actions/actionsTracks";

const initialState = {
    tracks:[],
    loading: false,
    error: null
};
const albumsReducer = (state = initialState, action)=>{
    switch (action.type) {
        case FETCH_TRACKS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_TRACKS_SUCCESS:
            return {
                ...state,
                tracks: action.data,
                loading: false
            };
        case FETCH_TRACKS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };


        default:
            return state
    }
};
export default  albumsReducer;