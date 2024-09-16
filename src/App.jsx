import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="logo-container">
        <img src={reactLogo} className="logo" alt="React logo" />
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>Hello, World!</h1>
      <button onClick={() => setCount(count + 1)}>
        Count is: {count}
      </button>
    </div>
  );
}

export default App;
