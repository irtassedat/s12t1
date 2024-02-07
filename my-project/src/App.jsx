import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Axios instance'ını, özel bir başlık ile oluştur
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000, // İsteğin zaman aşımı süresi (ms)
  headers: {
    'Secret-Custom-Header': 'token' // Özel başlık ve değeri
  }
});

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // axiosInstance kullanarak API'den veri çek
    axiosInstance.get('/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => console.error('There was an error!', error));
  }, []);

  return (
    <div>
      <h1>Posts S12G3 TEKRAR</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
