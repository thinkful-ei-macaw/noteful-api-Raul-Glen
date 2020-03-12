import React from 'react';
import NoteList from './NoteList';
import ContextData from './ContexData';



//props.match.params is part of the route component library 
class Main extends React.Component {
  static contextType = ContextData;
  render() {
    return (
      <div>
        <NoteList notes={this.context.notes} />
      </div>
    );
  }

}

export default Main;
