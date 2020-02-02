import React from 'react';
import GrammarEachWeek from './GrammarEachWeek';
import './JukuGrammar.css';

class JukuGrammar extends React.Component {

    render(){
        
        return(
            <div className="grid-container">
                <GrammarEachWeek level={this.props.level} week="1" />
                <GrammarEachWeek level={this.props.level} week="2" />
                <GrammarEachWeek level={this.props.level} week="3" />
                <GrammarEachWeek level={this.props.level} week="4" />
                <GrammarEachWeek level={this.props.level} week="5" />
                <GrammarEachWeek level={this.props.level} week="6" />
                <GrammarEachWeek level={this.props.level} week="7" />
                <GrammarEachWeek level={this.props.level} week="8" />
                <GrammarEachWeek level={this.props.level} week="9" />
                <GrammarEachWeek level={this.props.level} week="10" />
                <GrammarEachWeek level={this.props.level} week="11" />
          </div>
        );

    }
}

export default JukuGrammar;
