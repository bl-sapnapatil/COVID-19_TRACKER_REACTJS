import React from 'react';
import {PRIMARY_STATISTICS,getStatistic,capitalize} from '../utils/commonfunc';
import '../scss/level.scss'

class Level extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:this.props.data
        }
    }

    render(){
        return(
            <div className="Level">
                {PRIMARY_STATISTICS.map((statistics,index) => (
                    <div className={`level-item is-${statistics}`}>
                        <h5>{capitalize(statistics)}</h5>
                        <h4> {`+`+getStatistic(this.state.data , 'delta',statistics)}</h4>
                        <h1>{getStatistic(this.state.data , 'total',statistics)}</h1>
                    </div>
                ))}
            </div>            
        )

    }
} 
export default Level