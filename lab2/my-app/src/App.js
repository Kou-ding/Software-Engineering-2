import React, {useEffect, useState} from 'react';
import './App.css';
const App = () => {
  const [posts, setPosts] = useState([
  ]);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response)=> (response.json()))
  .then((newPosts) => { setPosts(newPosts) });
  console.log('fetching data')
}, []);

  return (
    <div className='container'>
      <div className='jumbotron'>
        <hi>posts</hi>
      </div>
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;