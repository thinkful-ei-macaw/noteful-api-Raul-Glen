import React from 'react';
import FolderList from './FolderList';
import { folders } from '../initialState';

class SideBar extends React.Component {

  render() {
    return (
      <div>
        <h1>SideBar</h1>
        {folders && <FolderList folders={folders} />}
      </div>
    );

  }

}
export default SideBar;
