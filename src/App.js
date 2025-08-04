import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/router';
import Header from './components/header';




function App() {
  return (
        
        <BrowserRouter basename="/">
          <Header/>
          <main>
            <Router />
          </main>
          
        </BrowserRouter>
      );
    }
    

export default App;
