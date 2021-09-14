import React from 'react';
import './App.css'
import {GlobalStore} from './components/GlobalStore';
import Header from './components/Header.js'
import ShowTask from './components/ShowTask';

function App() {
  return (
    <div className='container'>
      <GlobalStore>
        <Header />
        <ShowTask/>
      </GlobalStore>



    </div>
  );
}

export default App;
