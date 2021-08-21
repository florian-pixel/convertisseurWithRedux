import React, {Component as ReactComponent} from 'react'
import { AreaChart } from 'react-chartkick'
import 'chartkick/chart.js'
import imgADS from '../img/southAfrica.png'
import { connect } from 'react-redux'
import { readCountry } from '../action/country'
import CountryList from '../components/CountryList'
class Converter extends ReactComponent {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.readCountry()
    }

    render(){
        return (
            <div id="main">               
                <div className="country">
                    <select className="nameValue">
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
                        <p>Afrique du Sud</p>
                        <img className="country-flag" alt="Afrique du Sud" src={imgADS}/>
                    </div>
                    <div className="chart">
                        <AreaChart data={{"2021-01-01 00:00:00 -0800": 2, "2021-01-01 00:01:00 -0800": 5}} />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    countries: state.country
})

const mapDispatchToProps = {
    readCountry
}
export default connect(mapStateToProps, mapDispatchToProps)(Converter)