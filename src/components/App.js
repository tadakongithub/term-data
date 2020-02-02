import React from 'react';
import Total from './Total';
import Quiz from './Quiz';
import AttendanceParticipation from './AttendanceParticipation';
import Homework from './Homework';
import SearchLevel from './SearchLevel';
import FinalExam from './FinalExam';

class App extends React.Component{

    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {level:'', dataType:''};
    }
    

    onFormSubmit = (level, dataType) => {
        this.setState({level : level, dataType : dataType});
    }

    render(){
        if(this.state.dataType === '' || this.state.level === ''){
            return(
                <div className="ui container"><SearchLevel onFormSubmit={this.onFormSubmit}/></div>
            )
        } else if(this.state.dataType === 'total'){
            return (
                <div>
                    <div className="ui container"><SearchLevel onFormSubmit={this.onFormSubmit}/></div>
                    <Total level={this.state.level} dataType={this.state.dataType} />
                </div>           
            );
        } else if(this.state.dataType === 'quiz'){
            return(
                <div>
                    <div className="ui container"><SearchLevel onFormSubmit={this.onFormSubmit}/></div>
                    <Quiz level={this.state.level} dataType={this.state.dataType} />
                </div>   
            )
        } else if(this.state.dataType === 'attendance_participation'){
            return(
                <div>
                    <div className="ui container"><SearchLevel onFormSubmit={this.onFormSubmit}/></div>
                    <AttendanceParticipation level={this.state.level} dataType={this.state.dataType} />
                </div>
            )
        } else if(this.state.dataType === 'homework'){
            return(
                <div>
                    <div className="ui container"><SearchLevel onFormSubmit={this.onFormSubmit}/></div>
                    <Homework level={this.state.level} />
                </div>
            )
        } else if(this.state.dataType === 'Final Exam') {
            return (
                <div>
                    <div className="ui container"><SearchLevel onFormSubmit={this.onFormSubmit}/></div>
                    <FinalExam level={this.state.level} />
                </div>
            )
        }
        
    }
}

export default App