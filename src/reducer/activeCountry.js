const initialState = {name: 'Aucun'}

function activeCountryReducer (state = initialState, action){
    switch (action.type){
        case 'READ_ACTIVECOUNTRY':
            return action.payload
        default:
            return state
    }
}

export default activeCountryReducer