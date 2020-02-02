import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Label} from 'recharts';
import termB from './termB.json';

//all the courses
var allCourses = [];

//courses that have grammar test
var gCourses = [];
for(var i = 0 ; i < termB.length ; i++) {
    if(!allCourses.includes(termB[i]['Level'])) {
        allCourses.push(termB[i]['Level']);
    }
    if(termB[i]['g'] > 0 && !gCourses.includes(termB[i]['Level'])) {
        gCourses.push(termB[i]['Level']);
    }
}

class FxGrammar extends React.Component {

    constructor(props) {
        super(props);
        this.finalExamGrammar = this.finalExamGrammar.bind(this);
    }

    finalExamGrammar(level) {

        var currentLevel = [] ;
        for(var j = 0 ; j < termB.length ; j++) {
            if(termB[j]['Level'] === level) {
                currentLevel.push(termB[j]);
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

        for(var k = 0 ; k < currentLevel.length ; k++) {

            var stu = currentLevel[k];

            var g_total = undefined;

            //checking if the course has grammar test
            if(gCourses.includes(level)) {
                g_total = stu['g'];
            }

            if(g_total < .1) {
                t_10.push(stu);
            } else if(g_total >= .1 && g_total < .2) {
                t_20.push(stu);
            } else if(g_total >= .2 && g_total < .3) {
                t_30.push(stu);
            } else if(g_total >= .3 && g_total < .4) {
                t_40.push(stu);
            } else if(g_total >= .4 && g_total < .5) {
                t_50.push(stu);
            } else if(g_total >= .5 && g_total < .6) {
                t_60.push(stu);
            } else if(g_total >= .6 && g_total < .7) {
                t_70.push(stu);
            } else if(g_total >= .7 && g_total < .8) {
                t_80.push(stu);
            } else if(g_total >= .8 && g_total < .9) {
                t_90.push(stu);
            } else if(g_total >= .9 && g_total <= 1) {
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

    render(){
        return (
            <div>
                <h2>Final Exam Grammar Total</h2>
                <AreaChart width={1000} height={400} data={this.finalExamGrammar(this.props.level)}>
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

export default FxGrammar;