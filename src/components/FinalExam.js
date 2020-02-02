import React from 'react';
import FxTotal from './FxTotal';
import FxVocab from './FxVocab';
import FxReading from './FxReading';
import FxWriting from './FxWriting';
import FxGrammar from './FxGrammar';
import FxGrammarDetail from './FxGrammarDetail';
import FxListening from './FxListening';
import FxListeningDetail from './FxListeningDetail';
import './FinalExam.css';

class FinalExam extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="grid-container-final">
                <h1>{this.props.level}</h1>
                <FxTotal level={this.props.level} />
                <FxVocab level={this.props.level} />
                <FxReading level={this.props.level} />
                <FxWriting level={this.props.level} />
                <FxGrammar level={this.props.level} />
                <FxGrammarDetail level={this.props.level} />
                <FxListening level={this.props.level} />
                <FxListeningDetail level={this.props.level} />
            </div>
        );
    }
}

export default FinalExam;