import countryReducer from "./country"
import activeCountryReducer from "./activeCountry"
import exchangeRatesReducer from "./exchangeRates"
import activeExchangeRatesReducer from "./activeExchangeRates"
const rootReducer = {
    country : countryReducer,
    activeCountry : activeCountryReducer,
    exchangeRates : exchangeRatesReducer,
    activeExchange : activeExchangeRatesReducer
}
export default rootReducer