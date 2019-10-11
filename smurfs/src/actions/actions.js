import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const START_POST = 'START_POST';


export const fetchSmurfs = () => dispatch => {
    dispatch({type: START_FETCHING});

    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res)
        dispatch({type: FETCH_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({ type: FETCH_FAILURE, payload: err.response })
    })
};

export const postSmurfs = (newSmurf) => dispatch => {
    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
            console.log("post failed", err)
        }
    )
}