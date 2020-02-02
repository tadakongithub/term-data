import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Label } from 'recharts';
import termB from './termB.json';
import './KidsGrammar.css';

var multipleGrammar = [];
var rearrangeGrammar = [];
var grammarWeek4 = [];
var grammarWeek7 = [];

for(var i = 0 ; i < termB.length ; i++) {
    if(termB[i]['X61'] > 0 && !multipleGrammar.includes(termB[i]['Level'])) {
        multipleGrammar.push(termB[i]['Level']);
    }
    if(termB[i]['X62'] > 0 && !rearrangeGrammar.includes(termB[i]['Level'])) {
        rearrangeGrammar.push(termB[i]['Level']);
    }
    if(termB[i]['X4'] > 0 && !grammarWeek4.includes(termB[i]['Level'])) {
        grammarWeek4.push(termB[i]['Level']);
    }
    if(termB[i]['X7'] > 0 && !grammarWeek7.includes(termB[i]['Level'])) {
        grammarWeek7.push(termB[i]['Level']);
    }
}

class KidsGrammar extends React.Component {

    constructor(props) {
        super(props);
        this.multiRearrange = this.multiRearrange.bind(this);
    }
    
    multiRearrange(level, testType){

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

        //going through each student of current level
        for(let i=0;i<currentLevel.length;i++){

            let score = undefined;

            if(testType === 'multiple' && multipleGrammar.includes(level)) {
                score = currentLevel[i]['X61'];
            } else if(testType === 'rearrange' && rearrangeGrammar.includes(level)) {
                score = currentLevel[i]['X62'];
            }
        
            if(score < .1){
                t_10.push(currentLevel[i]);
            } else if (score >= .1 && score < .2){
                t_20.push(currentLevel[i]);
            } else if (score >= .2 && score < .3){
                t_30.push(currentLevel[i]);
            } else if (score >= .3 && score < .4){
                t_40.push(currentLevel[i]);
            } else if (score >= .4 && score < .5){
                t_50.push(currentLevel[i]);
            } else if (score >= .5 && score < .6){
                t_60.push(currentLevel[i]);
            } else if (score >= .6 && score < .7){
                t_70.push(currentLevel[i]);
            } else if (score >= .7 && score < .8){
                t_80.push(currentLevel[i]);
            } else if (score >= .8 && score < .9){
                t_90.push(currentLevel[i]);
            } else if (score >= .9 && score < 1){
                t_100.push(currentLevel[i]);
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
            <div className="grid-container-kids">
                <div>
                    <h3>Grammar Multiple Choice</h3>
                    <AreaChart width={500} height={250} data={this.multiRearrange(this.props.level, 'multiple')}>
                        <Area type="monotone" dataKey="count" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name">
                            <Label value="Percentage" offset={0} position="insideBottom" />
                        </XAxis>
                        <YAxis label={{ value: 'cnt', angle: -90, position: 'insideLeft', textAnchor: 'middle' }}/>
                    </AreaChart>
                </div>
                <div>
                    <h3>Grammar Rearrange</h3>
                    <AreaChart width={500} height={250} data={this.multiRearrange(this.props.level, 'rearrange')}>
                        <Area type="monotone" dataKey="count" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name">
                            <Label value="Percentage" offset={0} position="insideBottom" />
                        </XAxis>
                        <YAxis label={{ value: 'cnt', angle: -90, position: 'insideLeft', textAnchor: 'middle' }}/>
                    </AreaChart>
                </div>
          </div>
        );

    }
}

export default KidsGrammar;
