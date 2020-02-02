import React from 'react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Label, Cell } from 'recharts';
import termB from './termB.json';
import './Homework.css';

class Homework extends React.Component{

    homeworkTotal(level){

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
            let total = currentLevel[j]['hw'];
        
            if(level === 'ES011' || level === 'ES012' || level === 'ES020' || level === 'ES030' || level === 'ES040'){
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

    homeworkWeek(level, week){

        /*getting all data for the target level*/
        let currentLevel = [];
        for(let i=0;i<termB.length;i++){
            if(termB[i]['Level'] === level){
                currentLevel.push(termB[i]);
            }
        }

        let _S = [];
        let _U = [];
        let _F = [];
        let _NA = [];
        
        for(let j=0;j<currentLevel.length;j++){
            let total = currentLevel[j][week];

                if(total === 'S'){
                    _S.push(currentLevel[j]);
                } else if (total === 'U'){
                    _U.push(currentLevel[j]);
                } else if (total === 'F'){
                    _F.push(currentLevel[j]);
                } else if (total === '/'){
                    _NA.push(currentLevel[j]);
                }
        }

        let data = [
            {name : 'S', count : _S.length},
            {name : 'U', count : _U.length},
            {name : 'F', count : _F.length},
            {name : 'NA', count : _NA.length}
        ];

        return data;
    }

    render(){

        const COLORS = ['#1cbfff', '#0377fc', '#2cd163', '#00ff22'];
        
        return(
            <div>
                <h1 className="levelTitle">{this.props.level}</h1>

                <div className="total-container">
                    <h2>Homework Total</h2>
                    <AreaChart width={1000} height={400} data={this.homeworkTotal(this.props.level)}>
                    <Area type="monotone" dataKey="count" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name">
                        <Label value="Percentage" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis label={{ value: 'cnt', angle: -90, position: 'insideLeft', textAnchor: 'middle' }}/>
                    </AreaChart>
                </div>

                <div className="grid-container">

                    <div className="each">
                    <h3>Week 1</h3>
                    <BarChart width={500} height={250} data={this.homeworkWeek(this.props.level, 'HW.Week.1')}>
                    
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="count">
                            {this.homeworkWeek(this.props.level, 'HW.Week.1').map((entry, index)=><Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                            </Bar>
                    </BarChart>
                    </div>

                    <div className="each">
                        <h3>Week 2</h3>
                    <BarChart width={500} height={250} data={this.homeworkWeek(this.props.level, 'HW.Week.2')}>
                    
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="count">
                            {this.homeworkWeek(this.props.level, 'HW.Week.2').map((entry, index)=><Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                            </Bar>
                    </BarChart>
                    </div>

                    <div className="each">
                        <h3>Week 3</h3>
                    <BarChart width={500} height={250} data={this.homeworkWeek(this.props.level, 'HW.Week.3')}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="count">
                            {this.homeworkWeek(this.props.level, 'HW.Week.3').map((entry, index)=><Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                            </Bar>
                    </BarChart>
                    </div>

                    <div className="each">
                        <h3>Week 4</h3>
                    <BarChart width={500} height={250} data={this.homeworkWeek(this.props.level, 'HW.Week.4')}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="count">
                            {this.homeworkWeek(this.props.level, 'HW.Week.4').map((entry, index)=><Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                            </Bar>
                    </BarChart>
                    </div>

                    <div className="each">
                        <h3>Week 5</h3>
                    <BarChart width={500} height={250} data={this.homeworkWeek(this.props.level, 'HW.Week.5')}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="count">
                            {this.homeworkWeek(this.props.level, 'HW.Week.5').map((entry, index)=><Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                            </Bar>
                    </BarChart>
                    </div>

                    <div className="each">
                        <h3>Week 6</h3>
                    <BarChart width={500} height={250} data={this.homeworkWeek(this.props.level, 'HW.Week.6')}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="count">
                            {this.homeworkWeek(this.props.level, 'HW.Week.6').map((entry, index)=><Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                            </Bar>
                    </BarChart>
                    </div>

                    <div className="each">
                        <h3>Week 7</h3>
                    <BarChart width={500} height={250} data={this.homeworkWeek(this.props.level, 'HW.Week.7')}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="count">
                            {this.homeworkWeek(this.props.level, 'HW.Week.7').map((entry, index)=><Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                            </Bar>
                    </BarChart>
                    </div>

                    <div className="each">
                        <h3>Week 8</h3>
                    <BarChart width={500} height={250} data={this.homeworkWeek(this.props.level, 'HW.Week.8')}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="count">
                            {this.homeworkWeek(this.props.level, 'HW.Week.8').map((entry, index)=><Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                            </Bar>
                    </BarChart>
                    </div>

                    <div className="each">
                        <h3>Week 9</h3>
                    <BarChart width={500} height={250} data={this.homeworkWeek(this.props.level, 'HW.Week.9')}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="count">
                            {this.homeworkWeek(this.props.level, 'HW.Week.9').map((entry, index)=><Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                            </Bar>
                    </BarChart>
                    </div>
                    <div className="each">
                        <h3>Week 10</h3>
                    <BarChart width={500} height={250} data={this.homeworkWeek(this.props.level, 'HW.Week.10')}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="count">
                            {this.homeworkWeek(this.props.level, 'HW.Week.10').map((entry, index)=><Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                            </Bar>
                    </BarChart>
                    </div>
                </div>
          </div>
                
        );

    }
}

export default Homework;