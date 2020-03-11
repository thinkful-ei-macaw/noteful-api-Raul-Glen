import React from 'react';

export default function NoteItem({ note }) {
  return (
    <div>
      <div>
        Name: {note.name}
        Modified: {note.modified}
      </div>
    </div>
  );
}
