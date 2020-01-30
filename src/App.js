import React from 'react';
import './App.css';
import Stopwatch from './Components/Timer/Stopwatch';

function App() {
  return (
    <div className="App">
    <h1 className='App-heading'>Timer Demo</h1>
    <div className= "Timers">
      <Stopwatch />
    </div>
    </div>
  );
}

export default App;
