import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button, { ButtonSize,ButtonType } from './components/Button/button'

function App() {
  return (
    <div className="App">
     <Button size={ButtonSize.Large} btnType={ButtonType.Primary}>123</Button>
     <Button btnType={ButtonType.Link} disabled>333</Button>
    </div>
  );
}

export default App;
