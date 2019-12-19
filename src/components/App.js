import React from 'react';
import FinalExam from './FinalExam';
import SearchLevel from './SearchLevel';

class App extends React.Component{

    state = {level:'ES011'};

    onFormSubmit = (level) => {
        this.setState({level : level});
    }

    render(){
        return (
            <div>
                <div className="ui container"><SearchLevel onFormSubmit={this.onFormSubmit}/></div>
                <FinalExam level={this.state.level} />
            </div>           
        );
    }
}

export default App