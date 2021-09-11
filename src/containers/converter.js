import React, {Component as ReactComponent} from 'react'
import { AreaChart } from 'react-chartkick'
import 'chartkick/chart.js'
import { connect } from 'react-redux'
import { readCountry, activeCountry, exchangeRates, activeRates } from '../action/country'
import CountryList from '../components/CountryList'
class Converter extends ReactComponent {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.readCountry()
        this.props.exchangeRates()        
    }

    render(){
        return (
            <div id="main">               
                <div className="country" >
                    <select className="nameValue" onChange = {(e) => {
                        this.props.activeCountry(e.target.value)
                        this.props.activeRates(e.target.value)
                        } }>
                        {this.props.countries.map( (country, index) => <CountryList country = {country} key = {index} />)}
                    </select>                    
                </div>                
                <div className="titles">
                    <p>Pays</p>
                    <p>Valeur de la monnaie par rapport au dollar</p>                
                </div>
                <hr></hr>
                <div className="converter">
                    <div className="country-elements">
                        <p>{this.props.countryChosen.name}</p>
                        <img className="country-flag" alt="" src={this.props.countryChosen.flag}/>
                    </div>                   
                    <div className="chart">
                        <AreaChart data={this.props.activeExchange} />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    countries: state.country,
    countryChosen: state.activeCountry,
    exchange: state.exchangeRates,
    activeExchange: state.activeExchange    
})

const mapDispatchToProps = {
    readCountry,
    activeCountry,
    exchangeRates,
    activeRates
}
export default connect(mapStateToProps, mapDispatchToProps)(Converter)