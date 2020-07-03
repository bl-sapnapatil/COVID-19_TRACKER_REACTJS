import React from 'react';
import Level from './Level';
import data from '../data/data.min.json';

class Home extends React.Component{
    render(){
        return(
            <div className="Home">
                <div className="home-left">
                    <Level data={data['TT']}  />
                    
                </div> 
           </div>
        )
    }
} 
export default Home