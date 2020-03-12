import React from 'react';
import FolderItem from './FolderItem';
import ContextData from './ContexData';

class FolderList extends React.Component {
  static contextType = ContextData;
  render() {


    return (
      <div>
        {this.context.folders.map(folder => (
          <FolderItem key={folder.id} folder={folder} id={folder.id} />
        ))}
      </div>
    );

  }

}

export default FolderList;

