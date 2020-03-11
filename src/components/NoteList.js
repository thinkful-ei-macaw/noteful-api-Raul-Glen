import React from 'react';
import NoteItem from './NoteItem';




class NoteList extends React.Component {
  render() {

    return (
      <div>
        {this.props.notes.map(note => <NoteItem key={note.id} note={note} name={note.name} modified={note.modified} />)}
      </div>
    );

  }

}

export default NoteList;
