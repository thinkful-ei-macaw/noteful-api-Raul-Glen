import React from 'react';
import ContextData from './ContexData';



class NoteItem extends React.Component {

  static contextType = ContextData;

  handleDelete = () => {

    fetch(`http://localhost:9090/notes/${this.props.id}`, {
      method: 'DELETE'
    })
      .then(result => result.json())
      .then(() => this.context.deleteNoteById(this.props.id))
  }



  render() {
    return (
      <div>
        <form>
          Name: {this.props.name}
          Modified: {this.props.modified}
          <button onClick={this.handleDelete} type="button">Delete</button>
        </form>
      </div>
    );

  }

}

export default NoteItem;
