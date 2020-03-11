import React from 'react';
import { Link } from 'react-router-dom';




class FolderItem extends React.Component {

  // Make it so when you click on one of the folders it sends you to the different route, make that a link.
  // When you click on that link, can you see the folder id, console log the id from the URL
  // Filter the list of notes that are at that Folder id
  render() {

    // console.log(this.folderId)

    return (
      <div>
        <Link to={`/folder/${this.props.id}`}><h1>{this.props.folder.name}</h1></Link>
      </div>

    );

  }

}


export default FolderItem;
