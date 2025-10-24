import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNumber = async () => {
    setLoading(true);
    setError(null);

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    
    try {
      const response = await fetch(`${API_URL}/number`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      setRandomNumber(data.number);
      
    } catch (err) {
      console.error("Failed to fetch number:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      <div className="card">
        <button onClick={fetchNumber} disabled={loading}>
          {loading ? 'Loading...' : 'Get Random Number'}
        </button>
        
        {randomNumber !== null && <h2>Your random number is: {randomNumber}</h2>}

        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;