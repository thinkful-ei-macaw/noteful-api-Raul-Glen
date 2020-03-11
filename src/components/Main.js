import React from 'react';
import NoteList from './NoteList';



//props.match.params is part of the route component library 
class Main extends React.Component {

  render() {

    return (

      <div>
        <NoteList notes={this.props.notes} />
      </div>
    );
  }

}

export default Main;
