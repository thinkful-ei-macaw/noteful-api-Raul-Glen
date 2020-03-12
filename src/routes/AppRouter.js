import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import App from '../components/App';
import Main from '../components/Main';
import { folders, notes } from '../initialState';
import ContextData from '../components/ContexData';
import NoteItem from '../components/NoteItem';

class AppRouter extends React.Component {


  state = {


    folders, notes

  }




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

  deleteNoteById = (id) => {

    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    })

  }

  render() {


    return (


      <BrowserRouter >
        <Header />
        <ContextData.Provider value={{ folders: this.state.folders, notes: this.state.notes, deleteNoteById: this.deleteNoteById }}>
          <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/folder/:folderId' component={Main} />
            <Route exact path='/note/:noteId' component={NoteItem} />
          </Switch>
        </ContextData.Provider>
      </BrowserRouter >



    );

  }

}

export default AppRouter;

   // this.someArr1.filter((value, i) => {
    //   return <p key={i}>{value.name === 'Alex'}</p>
    // })

    // const arr1 = this.someArr1.map(data => data.id);
    // const arr2 = this.someArr2.map(data => data.id);

    // for (let i = 0; i < arr1.length; i++) {

    //   if (arr1[i] !== arr2[i]) {
    //     console.log("These id's don't match")
    //   } else {
    //     console.log(`id:${arr1[i]} matches id:${arr2[i]}`)
    //   }

    // }

    // someArr1 = [{ id: 1, name: 'Alex' }, { id: 2, name: 'John' }, { id: 3, name: 'Tim' }];
  // someArr2 = [{ id: 1, name: 'Edward' }, { id: 3, name: 'Stan' }, { id: 1, name: 'Joe' }];

