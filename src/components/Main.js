import React from 'react';
import NoteList from './NoteList';
import ContextData from './ContexData';



//props.match.params is part of the route component library 
//Inside the main component we will get the folder ID for the URL
class Main extends React.Component {

  static contextType = ContextData;

  filterData = () => {

    if (this.props.match.params.folderId !== undefined) {
      return this.context.notes.filter(note => note.folderId === this.props.match.params.folderId)

    } else {
      return this.context.notes
    }

  }


  static defaultProps = {
    match: {
      params: {

      }
    }
  }


  // props.match.params.foliderID

  // notes={this.state.notes.filter(note => note.folderId === folders.id)}
  //if this.props.match.params.foldeId !== undefined then filter, compare the folder ID to the id in notes
  render() {

    return (

      <div>
        <NoteList notes={this.filterData()} />
      </div>
    );
  }

}

export default Main;
