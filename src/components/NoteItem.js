import React from 'react';


class NoteItem extends React.Component {


  render() {
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
