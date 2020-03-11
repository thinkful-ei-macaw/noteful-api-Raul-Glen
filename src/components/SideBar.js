import React from 'react';
import FolderList from './FolderList';

export default function SideBar({ folders }) {
  return (
    <div>
      <h1>SideBar</h1>
      {folders && <FolderList folders={folders} />}
    </div>
  );
}
