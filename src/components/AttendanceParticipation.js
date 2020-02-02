import React from 'react';
import termB from './termB.json';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Label, BarChart, Bar, Cell, Legend } from 'recharts';
import './AttendanceParticipation.css';

class AttendanceParticipation extends React.Component {
    
    getAttendance(level){

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
            let total = currentLevel[j]['pt1'];
        
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

    getParticipation(level){

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
            let total = currentLevel[j]['pt2'];
        
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

    participationWeek(level, week){

        /*getting all data for the target level*/
        let currentLevel = [];
        for(let i=0;i<termB.length;i++){
            if(termB[i]['Level'] === level){
                currentLevel.push(termB[i]);
            }
        }

        let a_plus = [];
        let a = [];
        let a_minus = [];
        let b_plus = [];
        let b = [];
        let b_minus = [];
        let c = [];
        let absent = [];
        
        for(let j=0;j<currentLevel.length;j++){
            let total = currentLevel[j][week];

                if(total === 'A+'){
                    a_plus.push(currentLevel[j]);
                } else if (total === 'A'){
                    a.push(currentLevel[j]);
                } else if (total === 'A-'){
                    a_minus.push(currentLevel[j]);
                } else if (total === 'B+'){
                    b_plus.push(currentLevel[j]);
                } else if (total === 'B'){
                    b.push(currentLevel[j]);
                } else if (total === 'B-'){
                    b_minus.push(currentLevel[j]);
                } else if (total === 'C'){
                    c.push(currentLevel[j]);
                } else if (total === '/'){
                    absent.push(currentLevel[j]);
                }
        }

        let data = [
            {name : 'A+', count : a_plus.length},
            {name : 'A', count : a.length},
            {name : 'A-', count : a_minus.length},
            {name : 'B+', count : b_plus.length},
            {name : 'B', count : b.length},
            {name : 'B-', count : b_minus.length},
            {name : 'C', count : c.length},
            {name : 'NA', count : absent.length}
        ];

        return data;
    }

    render(){

        const COLORS = ['#ff0084', '#0377fc', '#2cd163','#ff6161','#1cbfff', '#00ff6e', '#ff9100', '#ff9100','#fbff00', '#00ff22'];
        
        return(
            <div>
                <h1>{this.props.level}</h1>
                <div className="total-container">
                    <h2>Attendance</h2>
                    <AreaChart width={1000} height={350} data={this.getAttendance(this.props.level)}>
                    <Area type="monotone" dataKey="count" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name">
                        <Label value="Percentage" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis label={{ value: 'cnt', angle: -90, position: 'insideLeft', textAnchor: 'middle' }}/>
                    </AreaChart>
                </div>

                <div className="total-container">
                    <h2>Participation</h2>
                    <AreaChart width={1000} height={350} data={this.getParticipation(this.props.level)}>
                    <Area type="monotone" dataKey="count" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name">
                        <Label value="Percentage" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis label={{ value: 'cnt', angle: -90, position: 'insideLeft', textAnchor: 'middle' }}/>
                    </AreaChart>
                    <div className="all-week">

                        <div className="each">
                            <h3 className="week-title">Week 1</h3>
                            <BarChart width={500} height={350}
                                    data={this.participationWeek(this.props.level, 'pt.Week.1')}
                                    dataKey="count"
                                    outerRadius={80}
                            >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="count">
                            {this.participationWeek(this.props.level, 'pt.Week.1').map((entry, index)=><Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                            </Bar>
                            </BarChart>
                        </div>

                        <div className="each">
                            <h3 className="week-title">Week 2</h3>
                            <BarChart width={500} height={350}
                                    data={this.participationWeek(this.props.level, 'pt.Week.2')}
                                    dataKey="count"
                                    outerRadius={80}
                            >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="count">
                            {this.participationWeek(this.props.level, 'pt.Week.2').map((entry, index)=><Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                            </Bar>
                            </BarChart>
                        </div>

                        <div className="each">
                            <h3 className="week-title">Week 3</h3>
                            <BarChart width={500} height={350}
                                    data={this.participationWeek(this.props.level, 'pt.Week.3')}
                                    dataKey="count"
                                    outerRadius={80}
                            >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="count">
                            {this.participationWeek(this.props.level, 'pt.Week.3').map((entry, index)=><Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                            </Bar>
                            </BarChart>
                        </div>

                        <div className="each">
                            <h3 className="week-title">Week 4</h3>
                            <BarChart width={500} height={350}
                                    data={this.participationWeek(this.props.level, 'pt.Week.4')}
                                    dataKey="count"
                                    outerRadius={80}
                            >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="count">
                            {this.participationWeek(this.props.level, 'pt.Week.4').map((entry, index)=><Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                            </Bar>
                            </BarChart>
                        </div>

                        <div className="each">
                            <h3 className="week-title">Week 5</h3>
                            <BarChart width={500} height={350}
                                    data={this.participationWeek(this.props.level, 'pt.Week.5')}
                                    dataKey="count"
                                    outerRadius={80}
                            >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="count">
                            {this.participationWeek(this.props.level, 'pt.Week.5').map((entry, index)=><Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                            </Bar>
                            </BarChart>
                        </div>

                        <div className="each">
                            <h3 className="week-title">Week 6</h3>
                            <BarChart width={500} height={350}
                                    data={this.participationWeek(this.props.level, 'pt.Week.6')}
                                    dataKey="count"
                                    outerRadius={80}
                            >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="count">
                            {this.participationWeek(this.props.level, 'pt.Week.6').map((entry, index)=><Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                            </Bar>
                            </BarChart>
                        </div>

                        <div className="each">
                            <h3 className="week-title">Week 7</h3>
                            <BarChart width={500} height={350}
                                    data={this.participationWeek(this.props.level, 'pt.Week.7')}
                                    dataKey="count"
                                    outerRadius={80}
                            >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="count">
                            {this.participationWeek(this.props.level, 'pt.Week.7').map((entry, index)=><Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                            </Bar>
                            </BarChart>
                        </div>

                        <div className="each">
                            <h3 className="week-title">Week 8</h3>
                            <BarChart width={500} height={350}
                                    data={this.participationWeek(this.props.level, 'pt.Week.8')}
                                    dataKey="count"
                                    outerRadius={80}
                            >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="count">
                            {this.participationWeek(this.props.level, 'pt.Week.8').map((entry, index)=><Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                            </Bar>
                            </BarChart>
                        </div>

                        <div className="each">
                            <h3 className="week-title">Week 9</h3>
                            <BarChart width={500} height={350}
                                    data={this.participationWeek(this.props.level, 'pt.Week.9')}
                                    dataKey="count"
                                    outerRadius={80}
                            >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="count">
                            {this.participationWeek(this.props.level, 'pt.Week.9').map((entry, index)=><Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                            </Bar>
                            </BarChart>
                        </div>

                        <div className="each">
                            <h3 className="week-title">Week 10</h3>
                            <BarChart width={500} height={350}
                                    data={this.participationWeek(this.props.level, 'pt.Week.10')}
                                    dataKey="count"
                                    outerRadius={80}
                            >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="count">
                            {this.participationWeek(this.props.level, 'pt.Week.10').map((entry, index)=><Cell key={`cell-${index}`} fill={COLORS[index]} />)}
                            </Bar>
                            </BarChart>
                        </div>
                    </div>
                </div>

            </div>
                
        );

    }
}

export default AttendanceParticipation;