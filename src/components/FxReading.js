import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Label} from 'recharts';
import termB from './termB.json';

class FxReading extends React.Component {
    constructor(props) {
        super(props);
        this.finalExamReading = this.finalExamReading.bind(this);
    }

    finalExamReading(level) {

        /*getting all data for the target level*/
        let currentLevel = [];
        for(let i = 0 ; i < termB.length ; i++) {
            if(termB[i]['Level'] === level) {
                currentLevel.push(termB[i]);
            }
        }

        let reading_10 = [];
        let reading_20 = [];
        let reading_30 = [];
        let reading_40 = [];
        let reading_50 = [];
        let reading_60 = [];
        let reading_70 = [];
        let reading_80 = [];
        let reading_90 = [];
        let reading_100 = [];

        for(let j = 0 ; j < currentLevel.length ; j++) {

            let reading = undefined;

            //kids final total and juku final total in separate columns
            if(level === 'ES020' || level === 'ES030' || level === 'ES040' ||
            level === 'EX100' || level === 'EX250') {

                reading = currentLevel[j]['X56'];

            } else  if(level === 'ES110' || level === 'ES120' || level === 'ES150' || level === 'ES210' ||
            level === 'ES220' || level === 'ES250' || level ==='ES320' || level === 'ES350' || level === 'ES360' ||
            level === 'EX300' || level === 'EX350'){

                reading = currentLevel[j]['X25'];

            }
        
            //sorting students to groups (final total)
            if(reading < .1){
                reading_10.push(currentLevel[j]);
            } else if (reading >= .1 && reading< .2){
                reading_20.push(currentLevel[j]);
            } else if ( reading >= .2 && reading< .3){
                reading_30.push(currentLevel[j]);
            } else if ( reading >= .3 && reading< .4){
                reading_40.push(currentLevel[j]);
            } else if ( reading >= .4 && reading< .5){
                reading_50.push(currentLevel[j]);
            } else if ( reading >= .5 && reading< .6){
                reading_60.push(currentLevel[j]);
            } else if ( reading >= .6 && reading< .7){
                reading_70.push(currentLevel[j]);
            } else if ( reading >= .7 && reading< .8){
                reading_80.push(currentLevel[j]);
            } else if ( reading >= .8 && reading< .9){
                reading_90.push(currentLevel[j]);
            } else if ( reading >= .9 && reading<= 1){
                reading_100.push(currentLevel[j]);
            }
            
        }

        let data = [
            {name : '0-10%', count : reading_10.length},
            {name : '10-20%', count : reading_20.length},
            {name : '20-30%', count : reading_30.length},
            {name : '30-40%', count : reading_40.length},
            {name : '40-50%', count : reading_50.length},
            {name : '50-60%', count : reading_60.length},
            {name : '60-70%', count : reading_70.length},
            {name : '70-80%', count : reading_80.length},
            {name : '80-90%', count : reading_90.length},
            {name : '90-100%', count : reading_100.length}
        ];

        return data ;
    }


    render() {
        return (
            <div>
                <h2>Final Exam Reading</h2>
                <AreaChart width={1000} height={400} data={this.finalExamReading(this.props.level)}>
                    <Area type="monotone" dataKey="count" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name">
                        <Label value="Percentage" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis>
                        <Label angle={-90} value='cnt' position='insideLeft' style={{textAnchor: 'middle'}} />
                    </YAxis>
                </AreaChart>
            </div>
        );
    }
}

export default FxReading;