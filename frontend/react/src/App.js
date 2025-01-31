// filepath: /home/yoshwa/Documents/nfc-rental/frontend/src/App.js
import React from 'react';
import './App.css';
import ItemList from './ItemList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NFC Rental System</h1>
        <ItemList />
      </header>
    </div>
  );
}

export default App;