import { REQUEST_END, REQUEST_ERROR, REQUEST_START, FETCH_ARTIST_SUCCESS} from "../actions/actionsArtists";

const initialState = {
    artists:[],
    loading: false,
    error: null
};
const reducerArtists = (state = initialState, action)=>{
    switch (action.type) {
        case REQUEST_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_ARTIST_SUCCESS:
            return {
                ...state,
                artists: action.data,
                loading: false
            };
        case REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.err
            };
        case REQUEST_END:
            return {
                ...state,
                loading: false
            };

        default:
            return state
    }
};
export default  reducerArtists;