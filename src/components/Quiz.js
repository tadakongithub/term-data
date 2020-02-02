import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Label} from 'recharts';
import termB from './termB.json';
import './Quiz.css';

class Quiz extends React.Component {

    totalQuiz(level){

        /*getting all data for the target level*/
        let currentLevel = [];
        for(let i=0;i<termB.length;i++){
            if(termB[i]['Level'] === level){
                currentLevel.push(termB[i]);
            }
        }

        let total_10 = [];
        let total_20 = [];
        let total_30 = [];
        let total_40 = [];
        let total_50 = [];
        let total_60 = [];
        let total_70 = [];
        let total_80 = [];
        let total_90 = [];
        let total_100 = [];

        for(let j=0;j<currentLevel.length;j++){
            let total = currentLevel[j]['quiz'];
        
            if(total < .1){
                total_10.push(currentLevel[j]);
            } else if (total >= .1 && total < .2){
                total_20.push(currentLevel[j]);
            } else if (total >= .2 && total < .3){
                total_30.push(currentLevel[j]);
            } else if (total >= .3 && total < .4){
                total_40.push(currentLevel[j]);
            } else if (total >= .4 && total < .5){
                total_50.push(currentLevel[j]);
            } else if (total >= .5 && total < .6){
                total_60.push(currentLevel[j]);
            } else if (total >= .6 && total < .7){
                total_70.push(currentLevel[j]);
            } else if (total >= .7 && total < .8){
                total_80.push(currentLevel[j]);
            } else if (total >= .8 && total < .9){
                total_90.push(currentLevel[j]);
            } else if (total >= .9 && total < 1){
                total_100.push(currentLevel[j]);
            }
        }

        let total = [
            {name : '0-10%', count : total_10.length},
            {name : '10-20%', count : total_20.length},
            {name : '20-30%', count : total_30.length},
            {name : '30-40%', count : total_40.length},
            {name : '40-50%', count : total_50.length},
            {name : '50-60%', count : total_60.length},
            {name : '60-70%', count : total_70.length},
            {name : '70-80%', count : total_80.length},
            {name : '80-90%', count : total_90.length},
            {name : '90-100%', count : total_100.length}
        ];

        return total;
    }

    eachQuiz(level, week){

        /*getting all data for the target level*/
        let currentLevel = [];
        for(let i=0;i<termB.length;i++){
            if(termB[i]['Level'] === level){
                currentLevel.push(termB[i]);
            }
        }

        let total_10 = [];
        let total_20 = [];
        let total_30 = [];
        let total_40 = [];
        let total_50 = [];
        let total_60 = [];
        let total_70 = [];
        let total_80 = [];
        let total_90 = [];
        let total_100 = [];

        for(let j=0;j<currentLevel.length;j++){
            let total = currentLevel[j][week];
        
            if(level === 'ES011' || level === 'ES012' || level === 'ES020' || level === 'ES030' || level === 'ES040'){
                if(total < 1){
                    total_10.push(currentLevel[j]);
                } else if (total >= 1 && total < 2){
                    total_20.push(currentLevel[j]);
                } else if (total >= 2 && total < 3){
                    total_30.push(currentLevel[j]);
                } else if (total >= 3 && total < 4){
                    total_40.push(currentLevel[j]);
                } else if (total >= 4 && total < 5){
                    total_50.push(currentLevel[j]);
                } else if (total >= 5 && total < 6){
                    total_60.push(currentLevel[j]);
                } else if (total >= 6 && total < 7){
                    total_70.push(currentLevel[j]);
                } else if (total >= 7 && total < 8){
                    total_80.push(currentLevel[j]);
                } else if (total >= 8 && total < 9){
                    total_90.push(currentLevel[j]);
                } else if (total >= 9 && total < 10){
                    total_100.push(currentLevel[j]);
                }
            } else {
                if(total < 2){
                    total_10.push(currentLevel[j]);
                } else if (total >= 2 && total < 4){
                    total_20.push(currentLevel[j]);
                } else if (total >= 4 && total < 6){
                    total_30.push(currentLevel[j]);
                } else if (total >= 6 && total < 8){
                    total_40.push(currentLevel[j]);
                } else if (total >= 8 && total < 10){
                    total_50.push(currentLevel[j]);
                } else if (total >= 10 && total < 12){
                    total_60.push(currentLevel[j]);
                } else if (total >= 12 && total < 14){
                    total_70.push(currentLevel[j]);
                } else if (total >= 14 && total < 16){
                    total_80.push(currentLevel[j]);
                } else if (total >= 16 && total < 18){
                    total_90.push(currentLevel[j]);
                } else if (total >= 18 && total < 20){
                    total_100.push(currentLevel[j]);
                }
            }
            
        }

        let data = [
            {name : '0-10%', count : total_10.length},
            {name : '10-20%', count : total_20.length},
            {name : '20-30%', count : total_30.length},
            {name : '30-40%', count : total_40.length},
            {name : '40-50%', count : total_50.length},
            {name : '50-60%', count : total_60.length},
            {name : '60-70%', count : total_70.length},
            {name : '70-80%', count : total_80.length},
            {name : '80-90%', count : total_90.length},
            {name : '90-100%', count : total_100.length}
        ];

        return data;
    }


    render(){
        
        return(
        <div>
            <h1>{this.props.level}</h1>
            <div className="total">
                <h2>Quiz Total</h2>
                <AreaChart width={1000} height={400} data={this.totalQuiz(this.props.level)}>
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
                
            <div className="grid-container">
                <div className="each">
                    <h3>Week 1</h3>
                    <AreaChart width={500} height={200} data={this.eachQuiz(this.props.level, 'qz.Week.1')}>
                    <Area type="monotone" dataKey="count" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name">
                        <Label value="Percentage" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis label={{ value: 'cnt', angle: -90, position: 'insideLeft', textAnchor: 'middle' }}/>
                    </AreaChart>
                </div>

                <div className="each">
                    <h3>Week 2</h3>
                    <AreaChart width={500} height={200} data={this.eachQuiz(this.props.level, 'qz.Week.2')}>
                    <Area type="monotone" dataKey="count" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name">
                        <Label value="Percentage" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis label={{ value: 'cnt', angle: -90, position: 'insideLeft', textAnchor: 'middle' }}/>
                    </AreaChart>
                </div>

                <div className="each">
                    <h3>Week 3</h3>
                    <AreaChart width={500} height={200} data={this.eachQuiz(this.props.level, 'qz.Week.3')}>
                    <Area type="monotone" dataKey="count" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name">
                        <Label value="Percentage" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis label={{ value: 'cnt', angle: -90, position: 'insideLeft', textAnchor: 'middle' }}/>
                    </AreaChart>
                </div>

                <div className="each">
                    <h3>Week 4</h3>
                    <AreaChart width={500} height={200} data={this.eachQuiz(this.props.level, 'qz.Week.4')}>
                    <Area type="monotone" dataKey="count" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name">
                        <Label value="Percentage" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis label={{ value: 'cnt', angle: -90, position: 'insideLeft', textAnchor: 'middle' }}/>
                    </AreaChart>
                </div>

                <div className="each">
                    <h3>Week 5</h3>
                    <AreaChart width={500} height={200} data={this.eachQuiz(this.props.level, 'qz.Week.5')}>
                    <Area type="monotone" dataKey="count" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name">
                        <Label value="Percentage" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis label={{ value: 'cnt', angle: -90, position: 'insideLeft', textAnchor: 'middle' }}/>
                    </AreaChart>
                </div>

                <div className="each">
                    <h3>Week 6</h3>
                    <AreaChart width={500} height={200} data={this.eachQuiz(this.props.level, 'qz.Week.6')}>
                    <Area type="monotone" dataKey="count" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name">
                        <Label value="Percentage" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis label={{ value: 'cnt', angle: -90, position: 'insideLeft', textAnchor: 'middle' }}/>
                    </AreaChart>
                </div>

                <div className="each">
                    <h3>Week 7</h3>
                    <AreaChart width={500} height={200} data={this.eachQuiz(this.props.level, 'qz.Week.7')}>
                    <Area type="monotone" dataKey="count" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name">
                        <Label value="Percentage" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis label={{ value: 'cnt', angle: -90, position: 'insideLeft', textAnchor: 'middle' }}/>
                    </AreaChart>
                </div>

                <div className="each">
                    <h3>Week 8</h3>
                    <AreaChart width={500} height={200} data={this.eachQuiz(this.props.level, 'qz.Week.8')}>
                    <Area type="monotone" dataKey="count" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name">
                        <Label value="Percentage" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis label={{ value: 'cnt', angle: -90, position: 'insideLeft', textAnchor: 'middle' }}/>
                    </AreaChart>
                </div>

                <div className="each">
                    <h3>Week 9</h3>
                    <AreaChart width={500} height={200} data={this.eachQuiz(this.props.level, 'qz.Week.9')}>
                    <Area type="monotone" dataKey="count" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name">
                        <Label value="Percentage" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis label={{ value: 'cnt', angle: -90, position: 'insideLeft', textAnchor: 'middle' }}/>
                    </AreaChart>
                </div>

                <div className="each">
                    <h3>Week 10</h3>
                    <AreaChart width={500} height={200} data={this.eachQuiz(this.props.level, 'qz.Week.10')}>
                    <Area type="monotone" dataKey="count" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name">
                        <Label value="Percentage" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis label={{ value: 'cnt', angle: -90, position: 'insideLeft', textAnchor: 'middle' }}/>
                    </AreaChart>
                </div>
            </div>
        </div>

        );

    }
}

export default Quiz;