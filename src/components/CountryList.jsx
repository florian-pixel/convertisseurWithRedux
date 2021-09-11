import React from 'react'

const CountryList = ({country}) => {    
    return (
        <option value = {country.name}>{country.name}</option>
    )
    
}
export default CountryList