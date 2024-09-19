import './App.css';
import React, {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const inrement = () => setCounter(prev => prev + 1);

  return (
    <div className="App">
      <header className="App-header">
        {counter}
        <button onClick={inrement}>Increment</button>
      </header>
    </div>
  );
}

export default App;
