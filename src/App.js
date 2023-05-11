import React from 'react';
import './App.css'
import Experiencepeople from './components/organisms/scrollbar/experiencepeople';

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h4>This are some experience people we can take into consideration for your startup</h4>
        <Experiencepeople/>
      </header>
    </div>
   
  
  );
}
