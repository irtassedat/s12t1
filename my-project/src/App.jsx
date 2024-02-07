import './App.css';
import React, { useState, useEffect } from 'react';
import axiosInstance from './axiosInstance'; // axios importu kaldırıldı, kullanılmıyor

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Veri çekme işlemi için doğru endpoint ve state güncelleme fonksiyonu
    axiosInstance.get('/posts') //
      .then(response => {
        setPosts(response.data); // 
      })
      .catch(error => console.error('There was an error fetching the posts', error));
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
