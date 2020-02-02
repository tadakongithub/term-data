import React from 'react';
import ListeningSection from './ListeningSection';
import termB from './termB.json';
import './FxListeningDetail.css';

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


class FxListeningDetail extends React.Component {

    render() {
        if(phonics.includes(this.props.level) || vocabulary.includes(this.props.level) ||
            picture_desc.includes(this.props.level) || conversation.includes(this.props.level) ||
            story.includes(this.props.level)) {
                return(
                    <div className="grid-container-listening">
                        <ListeningSection level={this.props.level} type="Phonics" />
                        <ListeningSection level={this.props.level} type="Vocabulary" />
                        <ListeningSection level={this.props.level} type="Picture Description" />
                        <ListeningSection level={this.props.level} type="Conversation" />
                        <ListeningSection level={this.props.level} type="Story" />
                    </div>
                );
        } else {
            return <div></div>;
        }
        
    }
}

export default FxListeningDetail;