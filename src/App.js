import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route } from 'react-router-dom';

//components and pages
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ResumeModal from './components/resume-modal/resume-modal';

//context
import SelectTabContextProvider from './contexts/selectedTabContext';
import RefContextProvider from './contexts/refContext';
import ModalContextProvider from './contexts/modalContext';


const App = () => {
 
    return (
      <div className="App">
      <RefContextProvider>
        <SelectTabContextProvider>
         <ModalContextProvider>
            <Header />
            <ResumeModal />
            <Route path='/' component={Homepage}/>
         </ModalContextProvider>    
        </SelectTabContextProvider>
      </RefContextProvider>
        
      </div>
    );
}

export default App;
