import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Label } from 'recharts';
import termB from './termB.json';

var phonics = [] ;
var vocabulary = [] ;
var picture_desc = [] ;
var conversation = [] ;
var story = [] ;

for(var i = 0 ; i < termB.length ; i++) {
    if(termB[i]['X66'] > 0 && !phonics.includes(termB[i]['Level'])) {
        phonics.push(termB[i]['Level']);
    }
    if(termB[i]['X67'] > 0 && !vocabulary.includes(termB[i]['Level'])) {
        vocabulary.push(termB[i]['Level']);
    }
    if(termB[i]['X68'] > 0 && !picture_desc.includes(termB[i]['Level'])) {
        picture_desc.push(termB[i]['Level']);
    }
    if(termB[i]['X69'] > 0 && !conversation.includes(termB[i]['Level'])) {
        conversation.push(termB[i]['Level']);
    }
    if(termB[i]['70'] > 0 && !story.includes(termB[i]['Level'])) {
        story.push(termB[i]['Level']);
    }
}

class ListeningSection extends React.Component {

    constructor(props) {
        super(props);
        this.listeningSection = this.listeningSection.bind(this);
    }

    listeningSection(level, type) {

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

            var stu = currentLevel[i];
            var score = undefined;

            if(type === "Phonics" && phonics.includes(level)) {
                score = stu['X66'];
            } else if(type === "Vocabulary" && vocabulary.includes(level)) {
                score = stu['X67'];
            } else if(type === "Picture Description" && picture_desc.includes(level)) {
                score = stu['X68'];
            } else if(type === "Conversation" && conversation.includes(level)) {
                score = stu['X69'];
            } else if(type === "Story" && story.includes(level)) {
                score = stu['X70'];
            }

            if(score < .1) {
                t_10.push(stu);
            } else if(score >= .1 && score < .2) {
                t_20.push(stu);
            } else if(score >= .2 && score < .3) {
                t_30.push(stu);
            } else if(score >= .3 && score < .4) {
                t_40.push(stu);
            } else if(score >= .4 && score < .5) {
                t_50.push(stu);
            } else if(score >= .5 && score < .6) {
                t_60.push(stu);
            } else if(score >= .6 && score < .7) {
                t_70.push(stu);
            } else if(score >= .7 && score < .8) {
                t_80.push(stu);
            } else if(score >= .8 && score < .9) {
                t_90.push(stu);
            } else if(score >= .9 && score <= 1) {
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

    render() {
        
        return (
            <div>
                <h3>{this.props.type}</h3>
                <AreaChart width={500} height={250} data={this.listeningSection(this.props.level, this.props.type)}>
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

export default ListeningSection;