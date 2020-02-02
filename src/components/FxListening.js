import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Label } from 'recharts';
import termB from './termB.json';

class FxListening extends React.Component {

    constructor(props){
        super(props);
    }

    listeningTotal(level) {

        var currentLevel = [];
        var listeningCourses = [];

        for(var i = 0 ; i < termB.length ; i++) {
            if(termB[i]['Level'] === level) {
                currentLevel.push(termB[i]);
            }
            if(termB[i]['l'] > 0 && !listeningCourses.includes(termB[i]['Level'])) {
                listeningCourses.push(termB[i]['Level']);
            }
        }
    
        var t_10 = [];
        var t_20 = [];
        var t_30 = [];
        var t_40 = [];
        var t_50 = [];
        var t_60 = [];
        var t_70 = [];
        var t_80 = [];
        var t_90 = [];
        var t_100 = [];
    
        for(var i = 0 ; i < currentLevel.length ; i++) {
    
            var stu = currentLevel[i] ;
            var listening = undefined;
    
            if(listeningCourses.includes(level)) {
                listening = currentLevel[i]['l'];
            }
    
            if(listening < .1) {
                t_10.push(stu);
            } else if(listening >= .1 && listening < .2) {
                t_20.push(stu);
            } else if(listening >= .2 && listening < .3) {
                t_30.push(stu);
            } else if(listening >= .3 && listening < .4) {
                t_40.push(stu);
            } else if(listening >= .4 && listening < .5) {
                t_50.push(stu);
            } else if(listening >= .5 && listening < .6) {
                t_60.push(stu);
            } else if(listening >= .6 && listening < .7) {
                t_70.push(stu);
            } else if(listening >= .7 && listening < .8) {
                t_80.push(stu);
            } else if(listening >= .8 && listening < .9) {
                t_90.push(stu);
            } else if(listening >= .9 && listening <= 1) {
                t_100.push(stu);
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
    
        return data ;

    }
    

    //grammar test is different between kids and juku
    render() {
        return(
            <div>
                <h2>Final Exam Listening</h2>
                <AreaChart width={1000} height={400} data={this.listeningTotal(this.props.level)}>
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

export default FxListening;