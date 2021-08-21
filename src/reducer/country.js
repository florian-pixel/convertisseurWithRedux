const initialState = []

function countryReducer (state = initialState, action) {
    switch(action.type){
        case 'READ_COUNTRY':
            return action.payload
        default:
            return state
    }
}

export default countryReducer