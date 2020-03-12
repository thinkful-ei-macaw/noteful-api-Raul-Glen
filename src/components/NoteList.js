import React from 'react';
import NoteItem from './NoteItem';
import ContexData from './ContexData';




class NoteList extends React.Component {
  static contextType = ContexData;
  render() {

    return (
      <div>
        {this.context.notes.map(note => <NoteItem key={note.id} note={note} name={note.name} modified={note.modified} />)}
      </div>
    );

  }

}

export default NoteList;
