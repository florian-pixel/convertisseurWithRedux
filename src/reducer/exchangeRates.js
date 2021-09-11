const initialState = []

function exchangeRatesReducer (state = initialState, action){
    switch(action.type) {
        case 'READ_EXCHANGERATES':
            return action.payload
        default:
            return state
    }
}

export default exchangeRatesReducer