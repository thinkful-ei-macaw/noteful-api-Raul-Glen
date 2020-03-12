import React from 'react';
import FolderList from './FolderList';
import ContextData from './ContexData';

class SideBar extends React.Component {
  static contextType = ContextData;

  render() {
    return (
      <div>
        <h1>SideBar</h1>
        {this.context.folders.length && <FolderList />}
      </div>
    );

  }

}
export default SideBar;
