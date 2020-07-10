import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component'
import Homepage from './pages/homepage/homepage.component'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage}/>
        </Switch>
      </div>
    );
  }

}

export default App;
