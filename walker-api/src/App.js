import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import {BrowserRouter, Switch, Route} from  'react-router-dom';
import DisplayPage from './components/DisplayPage';
function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>ApiWalker</h1>
        <SearchBar></SearchBar>
        <Switch>
          <Route exact path ="/:category/:id">
          <DisplayPage></DisplayPage>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
