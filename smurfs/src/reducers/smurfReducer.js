const initialState = {
    smurfs: [
        {
            name: "Awake",
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

        default:
        return state
    }
}

export default reducer;