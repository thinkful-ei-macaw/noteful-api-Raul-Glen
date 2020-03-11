import React, { Component } from 'react';

import { folders, notes } from '../initialState';
import SideBar from './SideBar';
import Main from './Main';

export default class App extends Component {
  state = { folders, notes };

  // myFilter(arrOne, arrTwo) {
  //   return arrOne.map(folder => {
  //     return arrTwo.filter(note => {
  //       return folder.id === note.folderId
  //     })
  //   })
  // }

  // myFilter(folders, notes)

  render() {
    return (
      <div>
        <li></li>
        <SideBar folders={this.state.folders} />
        <Main notes={this.state.notes} />
      </div>
    );
  }
}
