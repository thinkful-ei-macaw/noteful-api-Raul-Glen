import React, { Component } from 'react';
import { folders, notes } from '../initialState';
import SideBar from './SideBar';
import Main from './Main';
import ContextData from './ContexData';

export default class App extends Component {


  //fetch data from back end
  //pass data from back end through Context
  // folders, notes
  // data: ContextData,

  state = {
    folders, notes
  }

  // myFilter(arrOne, arrTwo) {
  //   return arrOne.map(folder => {
  //     return arrTwo.filter(note => {
  //       return folder.id === note.folderId
  //     })
  //   })
  // }

  // myFilter(folders, notes)

  componentDidMount() {



    fetch(`http://localhost:9090/folders`)
      .then(folder => folder.json())
      .then(folderResult => this.setState({
        folders: folderResult
      }))


    fetch(`http://localhost:9090/notes`)
      .then(notes => notes.json())
      .then(noteResult => this.setState({
        notes: noteResult
      }))
  }

  render() {

    return (
      <ContextData.Provider value={{ folders: this.state.folders, notes: this.state.notes }}>
        <div>
          <li></li>
          <SideBar />
          <Main />
        </div>
      </ContextData.Provider>
    );
  }
}
