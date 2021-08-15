import React, {Component as ReactComponent} from 'react'
import { AreaChart } from 'react-chartkick'
import 'chartkick/chart.js'

class Converter extends ReactComponent {
    constructor(){
        super()
    }

    render(){
        return (
            <div id="main">
                <div className="converter">
                    <select className="nameValue">
                        <option>Afrique du sud</option>
                        <option>Côte d'Ivoire</option>
                        <option>Ghana</option>
                    </select>                    
                </div>                
                <div className="titles">
                    <p>Pays</p>
                    <p>Valeur de la monnaie par rapport au dollar</p>                
                </div>
                <hr></hr>
                <div>
                    <AreaChart data={{"2021-01-01 00:00:00 -0800": 2, "2021-01-01 00:01:00 -0800": 5}} />
                </div>
            </div>
        )
    }
}
export default Converter