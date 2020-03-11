import React from 'react';
import EmployeeRegister from './component/EmployeeRegister';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="container">
          <h1>Excel Download Employee Register POC</h1>
        </div>
        <hr/>
        <EmployeeRegister />
    </div>
  );
}

export default App;
