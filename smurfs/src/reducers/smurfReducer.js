import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, POST } from '../actions/actions';

const initialState = {
    smurfs: [
        {
            name: "Chubby",
            age: 4,
            height: "2cm",
            id: 2
        }
    ],
    isFetching: false,
    error: '',
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            };

        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfs: action.payload
            };
        
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case POST:
            console.log(state.smurfs)
            return{
                ...state,
                smurfs: action.payload,
                error: '',
                isFetching: false
            }
        default:
        return state
    }
}

export default reducer;