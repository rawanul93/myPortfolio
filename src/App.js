import React, { useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Switch } from 'react-router-dom';

//components and pages
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Portfolio from './pages/portfolio/portfolio.component';
import Contact from './pages/contact/contact.component';
//context
import SelectTabContextProvider from './contexts/selectedTabContext';


const App = () => {

    return (
      <div className="App">
        <SelectTabContextProvider>
          <Header />
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
        </SelectTabContextProvider>
      </div>
    );
}

export default App;
