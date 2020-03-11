import React from 'react';
import { notes } from '../initialState';

class NoteItem extends React.Component {


  render() {
    console.log(notes)
    return (
      <div>
        <div>
          Name: {this.props.name}
          Modified: {this.props.modified}
        </div>
      </div>
    );

  }

}

export default NoteItem;
