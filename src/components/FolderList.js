import React from 'react';
import FolderItem from './FolderItem';
import { folders } from '../initialState';

class FolderList extends React.Component {

  render() {

    return (
      <div>
        {folders.map(folder => (
          <FolderItem key={folder.id} folder={folder} id={folder.id} />
        ))}
      </div>
    );

  }

}

export default FolderList;

