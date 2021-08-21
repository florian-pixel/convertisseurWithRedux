import axios from "axios"


export const readCountry = () => {
    return function(dispatch){
        axios ({
            method: 'GET',
            url:"https://restcountries.eu/rest/v2/all"
        })
        .then(({data}) => {    
            console.log(data)        
            dispatch({
                type: 'READ_COUNTRY',
                payload: data
            })
        })
    }
}
