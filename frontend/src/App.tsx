import React from 'react';
import './App.css';
import MainLayout from './MainLayout/MainLayout';

let IsAuthorized = true;

function App() {
  return (
    <div className="App">
      {IsAuthorized ? (
        <MainLayout />
      ) : (
        <p>No está autorizado</p>
      )}
    </div>
  );
}

export default App;
