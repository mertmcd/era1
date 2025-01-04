import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => setMessage(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Era1 - Full-Stack App</h1>
        <p className="text-xl">{message}</p>
      </div>
    </div>
  );
}

export default App;
