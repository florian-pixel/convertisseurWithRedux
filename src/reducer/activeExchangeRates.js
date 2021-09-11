const initialState = {}

function activeExchangeRatesReducer (state = initialState, action){
    switch(action.type) {
        case 'READ_ACTIVEEXCHANGERATES':
            return action.payload
        default:
            return state
    }
}

export default activeExchangeRatesReducer