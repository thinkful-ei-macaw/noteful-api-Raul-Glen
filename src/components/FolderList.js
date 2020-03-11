import React from 'react';
import FolderItem from './FolderItem';

export default function FolderList({ folders }) {
  return (
    <div>
      {folders.map(folder => (
        <FolderItem key={folder.id} folder={folder} id={folder.id} />
      ))}
    </div>
  );
}
