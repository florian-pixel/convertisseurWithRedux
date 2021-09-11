import axios from "axios"

let listCountry = []
export const readCountry = () => {
    return function(dispatch){
        axios ({
            method: 'GET',
            url:"https://restcountries.eu/rest/v2/all"
        })
        .then(({data}) => {    
            console.log(data)
            listCountry.push(...data)                    
            dispatch({
                type: 'READ_COUNTRY',
                payload: data
            })
        })
    }
}

let listExchangeRates = []
export const exchangeRates = () => {
    return function(dispatch){
        axios ({
            method: 'GET',
            url:"http://localhost:3004/exchangeRates"
        })
        .then(({data}) => {
            listExchangeRates.push(...data)    
            console.log(listExchangeRates)                              
            dispatch({
                type: 'READ_EXCHANGERATES',
                payload: listExchangeRates
            })
        })
    }
}


export const activeCountry = (country) => {
    const sortCountry = listCountry.find(elt => elt.name === country)
    console.log('pays selectionné: ', sortCountry)
    return function (dispatch){
        dispatch({
            type: 'READ_ACTIVECOUNTRY',
            payload: sortCountry
        })
    }
}

export const activeRates = (country) => {
    const sortCountry = listCountry.find(elt => elt.name === country)
    const currency = sortCountry.currencies
    console.log('currency ',currency)
    if (currency[0].code === listExchangeRates[0].base){
        console.log('Juste')
        return function (dispatch){
            dispatch({
                type: 'READ_ACTIVEEXCHANGERATES',
                payload: listExchangeRates[0].rates
            })
        }
    }
}