import { Category } from '@material-ui/icons';
import CategoriesSec from './HomePage/CategoriesSec';
import React from 'react';
import Nav from './HomePage/Nav';
import Home from './HomePage/Home'
import './HomePage/styles/main.scss'



function App() {
  return (
    <div className="App">
       <Nav/>
       <CategoriesSec/>
       <Home/>
    </div>
  );
}

export default App;
