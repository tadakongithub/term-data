import React from 'react';
import {Form, Select } from 'semantic-ui-react';
import termB from './termB.json';

/*creating data for level dropdown*/
let levels = [];
for(let i=0;i<termB.length;i++){
    if(!levels.includes(termB[i]['Level'])){
        levels.push(termB[i]['Level']);
    }
}

let levelOptions = [];

for(let j=0;j<levels.length;j++){
    levelOptions.push({key: levels[j], text: levels[j], value: levels[j]});
}

/*creating data for data types dropdown*/
let dataTypes = ['total', 'quiz', 'attendance_participation', 'homework', 'Final Exam'];

let dataTypeOptions = [];

for(let k=0;k<dataTypes.length;k++){
    dataTypeOptions.push({key: dataTypes[k], text: dataTypes[k], value: dataTypes[k]});
}

class SearchLevel extends React.Component{

    state = {level : '', dataType : ''};

    handleChange = (e, {name, value}) => this.setState({[name] : value })

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.level, this.state.dataType);
    }
    
    render(){
        return(
        <Form onSubmit={this.handleSubmit}>
            <Form.Field
                control={Select}
                label='Search Level'
                options={levelOptions}
                name='level'
                placeholder='Choose Level'
                onChange={this.handleChange}
            />
            <Form.Field
                control={Select}
                label='Data Type'
                options={dataTypeOptions}
                name='dataType'
                placeholder='Choose Data Type'
                onChange={this.handleChange}
            />
            <Form.Button primary content='Submit' />
        </Form>
        )
    }
}

export default SearchLevel;
