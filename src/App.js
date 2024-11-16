import React from 'react';
import Transaction from './components/Transaction';
import './App.css'

function App() {
  return (
    <div className="container ">
      <h1 style={{ color: "red", textAlign: "center", fontSize: "1.5rem" }} > แอพบัญชีรายรัย - รายจ่าย </h1>
      <Transaction />
    </div>
  );
}

export default App;
