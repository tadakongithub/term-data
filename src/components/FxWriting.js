import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Label} from 'recharts';
import termB from './termB.json';

class FxWriting extends React.Component {
    constructor(props) {
        super(props);
        this.finalExamWriting = this.finalExamWriting.bind(this);
    }

    finalExamWriting(level) {

        /*getting all data for the target level*/
        let currentLevel = [];
        for(let i = 0 ; i < termB.length ; i++) {
            if(termB[i]['Level'] === level) {
                currentLevel.push(termB[i]);
            }
        }

        let writing_10 = [];
        let writing_20 = [];
        let writing_30 = [];
        let writing_40 = [];
        let writing_50 = [];
        let writing_60 = [];
        let writing_70 = [];
        let writing_80 = [];
        let writing_90 = [];
        let writing_100 = [];

        for(let j = 0 ; j < currentLevel.length ; j++) {

            let writing ;

            writing = currentLevel[j]['we'];
        
            //writint exam is not done by every course
            if(level === 'ES011' || level === 'ES012' || level === 'ES020' || level === 'ES030' || level === 'ES040' ||
            level === 'ES210' || level === 'ES220' || level === 'ES250' || level === 'ES320' || level === 'ES350' ||
            level === 'ES450' || level === 'EX100') {
                if( writing < .1) {
                    writing_10.push(currentLevel[j]);
                } else if ( writing >= .1 && writing < .2){
                    writing_20.push(currentLevel[j]);
                } else if ( writing >= .2 && writing < .3){
                    writing_30.push(currentLevel[j]);
                } else if ( writing >= .3 && writing < .4){
                    writing_40.push(currentLevel[j]);
                } else if ( writing >= .4 && writing < .5){
                    writing_50.push(currentLevel[j]);
                } else if ( writing >= .5 && writing < .6){
                    writing_60.push(currentLevel[j]);
                } else if ( writing >= .6 && writing < .7){
                    writing_70.push(currentLevel[j]);
                } else if ( writing >= .7 && writing < .8){
                    writing_80.push(currentLevel[j]);
                } else if ( writing >= .8 && writing < .9){
                    writing_90.push(currentLevel[j]);
                } else if ( writing >= .9 && writing <= 1){
                    writing_100.push(currentLevel[j]);
                }
            }
            
            
        }

        let data = [
            {name : '0-10%', count : writing_10.length},
            {name : '10-20%', count : writing_20.length},
            {name : '20-30%', count : writing_30.length},
            {name : '30-40%', count : writing_40.length},
            {name : '40-50%', count : writing_50.length},
            {name : '50-60%', count : writing_60.length},
            {name : '60-70%', count : writing_70.length},
            {name : '70-80%', count : writing_80.length},
            {name : '80-90%', count : writing_90.length},
            {name : '90-100%', count : writing_100.length}
        ];

        return data ;
    }


    render() {
        return (
            <div>
                <h2>Final Exam Writing</h2>
                <AreaChart width={1000} height={400} data={this.finalExamWriting(this.props.level)}>
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

export default FxWriting;