import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Label } from 'recharts';
import termB from './termB.json';
import './Total.css';

class Total extends React.Component {
    
    getData(level){

        /*getting all data for the target level*/
        let currentLevel = [];
        for(let i=0;i<termB.length;i++){
            if(termB[i]['Level'] === level){
                currentLevel.push(termB[i]);
            }
        }

        let t_10 = [];
        let t_20 = [];
        let t_30 = [];
        let t_40 = [];
        let t_50 = [];
        let t_60 = [];
        let t_70 = [];
        let t_80 = [];
        let t_90 = [];
        let t_100 = [];

        for(let j=0;j<currentLevel.length;j++){
            let total = currentLevel[j]['total'];
        
            if(total < .1){
                t_10.push(currentLevel[j]);
            } else if (total >= .1 && total < .2){
                t_20.push(currentLevel[j]);
            } else if (total >= .2 && total < .3){
                t_30.push(currentLevel[j]);
            } else if (total >= .3 && total < .4){
                t_40.push(currentLevel[j]);
            } else if (total >= .4 && total < .5){
                t_50.push(currentLevel[j]);
            } else if (total >= .5 && total < .6){
                t_60.push(currentLevel[j]);
            } else if (total >= .6 && total < .7){
                t_70.push(currentLevel[j]);
            } else if (total >= .7 && total < .8){
                t_80.push(currentLevel[j]);
            } else if (total >= .8 && total < .9){
                t_90.push(currentLevel[j]);
            } else if (total >= .9 && total < 1){
                t_100.push(currentLevel[j]);
            }
        }

        let data = [
            {name : '0-10%', count : t_10.length},
            {name : '10-20%', count : t_20.length},
            {name : '20-30%', count : t_30.length},
            {name : '30-40%', count : t_40.length},
            {name : '40-50%', count : t_50.length},
            {name : '50-60%', count : t_60.length},
            {name : '60-70%', count : t_70.length},
            {name : '70-80%', count : t_80.length},
            {name : '80-90%', count : t_90.length},
            {name : '90-100%', count : t_100.length}
        ];

        return data;
    }

    render(){
        
        return(
            <div className="total-container">
                <h1>{this.props.level}</h1>
                <h2>Total</h2>
                <AreaChart width={1000} height={400} data={this.getData(this.props.level)}>
                <Area type="monotone" dataKey="count" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name">
                        <Label value="Percentage" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis label={{ value: 'cnt', angle: -90, position: 'insideLeft', textAnchor: 'middle' }}/>
                </AreaChart>
          </div>
                
        );

    }
}

export default Total;