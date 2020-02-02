import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Label } from 'recharts';
import termB from './termB.json';

class GrammarEachWeek extends React.Component {

    constructor(props) {
        super(props);
        this.grammarEachWeek = this.grammarEachWeek.bind(this);
    }

    grammarEachWeek(level, week) {

        var week1 = [];
        var week2 = [];
        var week3 = [];
        var week4 = [];
        var week5 = [];
        var week6 = [];
        var week7 = [];
        var week8 = [];
        var week9 = [];
        var week10 = [];
        var week11 = [];

        var currentLevel = [];
        for(var i = 0 ; i < termB.length ; i++) {
            if(termB[i]['X1'] > 0 && !week1.includes(termB[i]['Level'])) {
                week1.push(termB[i]['Level']);
            }
            if(termB[i]['X2'] > 0 && !week2.includes(termB[i]['Level'])) {
                week2.push(termB[i]['Level']);
            }
            
            if(termB[i]['Level'] === level) {
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

        for(var i = 0 ; i < currentLevel.length ; i++) {

            var student = currentLevel[i] ;

            var score;

            switch (week) {
                case "1":
                    score = student['X1'];
                    break;
                case "2":
                    score = student['X2'];
                    break;
                case "3":
                    score = student['X3'];
                    break;
                case "4":
                    score = student['X4'];
                    break;
                case "5":
                    score = student['X5'];
                    break;
                case "6":
                    score = student['X6'];
                    break;
                case "7":
                    score = student['X7'];
                    break;
                case "8":
                    score = student['X8'];
                    break;
                case "9":
                    score = student['X9'];
                    break;
                case "10":
                    score = student['X14'];
                    break;
                case "11":
                    score = student['X15'];
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

    render() {
        return (
            <div>
                <h3>Grammar Week {this.props.week}</h3>
                <AreaChart width={500} height={250} data={this.grammarEachWeek(this.props.level, this.props.week)}>
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

export default GrammarEachWeek;