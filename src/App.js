import React from 'react';
import Calender from './components/Calender';
import './App.css';

function App() {
  const date = new Date();
  return (
    <div className="App">
      <Calender
        dateNow={String(date.getDate())}
        monthNow={String(date.getMonth())}
        yearNow={String(date.getFullYear())}
      />
    </div>
  );
}

export default App;
