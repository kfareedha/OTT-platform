
import './App.css';
import React from 'react'
import Navbar from './components/navbar/navbar' 
import {originals,actions } from './urls'
import Banner from './components/Banner/banner' 
import Rowpost from './components/Rowpost/Rowpost';
function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Banner/> 
       <Rowpost type='tv' url={originals} title='Netflix Originals'/>
       <Rowpost  type='movie' url={actions} title='Action' isSmall />
    </div>
  );
}

export default App;
