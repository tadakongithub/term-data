import React from 'react';
import {Form, Select, Button} from 'semantic-ui-react';
import termB from './termB.json';

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


class SearchLevel extends React.Component{

    state = {level : ''};

    handleChange = (e, {value}) => this.setState({level : value})

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.level);
    }
    
    render(){
        return(
        <Form onSubmit={this.handleSubmit}>
            <Form.Field
                control={Select}
                label='Search Level'
                options={levelOptions}
                placeholder='Search Level'
                onChange={this.handleChange}
            />
            <Form.Button content='Submit' />
        </Form>
        )
    }
}

export default SearchLevel;
