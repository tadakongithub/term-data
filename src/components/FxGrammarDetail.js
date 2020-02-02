import React from 'react';
import termB from './termB.json';
import KidsGrammar from './KidsGrammar';
import JukuGrammar from './JukuGrammar';

//checking courses that do multiple choice grammar test and rearrange grammar test
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

class FxGrammarDetail extends React.Component {

    constructor(props) {
        super(props);
        this.grammarDetail = this.grammarDetail.bind(this);
    }

    grammarDetail(level) {

        var currentLevel = [];

        for(var i = 0 ; i < termB.length ; i++) {
            if(termB[i]['Level'] === level) {
                currentLevel.push(termB[i]);
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
            var multiple = undefined;

            if(multipleGrammar.includes(level)) {
                multiple = currentLevel[i]['X61'];
            }

            if(multiple < .1) {
                t_10.push(stu);
            } else if(multiple >= .1 && multiple < .2) {
                t_20.push(stu);
            } else if(multiple >= .2 && multiple < .3) {
                t_30.push(stu);
            } else if(multiple >= .3 && multiple < .4) {
                t_40.push(stu);
            } else if(multiple >= .4 && multiple < .5) {
                t_50.push(stu);
            } else if(multiple >= .5 && multiple < .6) {
                t_60.push(stu);
            } else if(multiple >= .6 && multiple < .7) {
                t_70.push(stu);
            } else if(multiple >= .7 && multiple < .8) {
                t_80.push(stu);
            } else if(multiple >= .8 && multiple < .9) {
                t_90.push(stu);
            } else if(multiple >= .9 && multiple <= 1) {
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
       if(multipleGrammar.includes(this.props.level) || rearrangeGrammar.includes(this.props.level)) {
           return <KidsGrammar level={this.props.level} />
       } else if(grammarWeek4.includes(this.props.level) || grammarWeek7.includes(this.props.level)) {
           return <JukuGrammar level={this.props.level} />
       } else {
           return (null);
       }
    }

}

export default FxGrammarDetail;