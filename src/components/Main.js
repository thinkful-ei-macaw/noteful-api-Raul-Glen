import React from 'react';
import NoteList from './NoteList';


//props.match.params is part of the route component library 
export default function Main(props) {
  console.log(props)

  return (

    <div>
      <NoteList notes={props.notes} />
    </div>
  );
}
