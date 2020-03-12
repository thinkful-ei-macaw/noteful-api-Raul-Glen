import React from 'react';
import NoteItem from './NoteItem';
import ContexData from './ContexData';




class NoteList extends React.Component {
  static contextType = ContexData;
  render() {

    return (
      <div>
        {this.props.notes.map(note => <NoteItem key={note.id} id={note.id} name={note.name} modified={note.modified} />)}
      </div>
    );

  }

}

export default NoteList;
