import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import App from '../components/App';
import Main from '../components/Main';
import { folders, notes } from '../initialState';
import ContextData from '../components/ContexData';

class AppRouter extends React.Component {


  state = {

    notes: notes,
    folders: folders

  }


  render() {

    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' render={(props) => <App {...props} notes={this.state.notes} />} />
          <Route exact path='/folder/:folderId' render={(props) => <Main notes={this.state.notes.filter(note => note.folderId === props.match.params.folderId)} />} />
        </Switch>
      </BrowserRouter>
    );

  }

}

export default AppRouter;
