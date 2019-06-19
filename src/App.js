import React from 'react';
import Calender from './components/Calender';
import './App.css';

function App() {
  const date = new Date();
  return (
    <div className="App">
        <Calender 
          date={String(date.getDate())}
          month={String(date.getMonth())}
          year={String(date.getFullYear())}
        />
    </div>
  );
}

export default App;
