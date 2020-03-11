import React from 'react';
import NoteItem from './NoteItem';




export default function NoteList({ notes }) {
  return (
    <div>
      {notes && notes.map(note => <NoteItem key={note.id} note={note} />)}
    </div>
  );
}
