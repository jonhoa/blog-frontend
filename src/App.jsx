import axios from 'axios';
import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import Header from './Header';
import Footer from './Footer';


function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form >
      Title: <input label= "Name" type = "input"></input><br></br>
      Body: <input label= "body" type = "input"></input><br></br>
      Image: <input label= "image" type = "input"></input>
      </form>
    </div>
  );
}

function Content() {
  const [posts, setPosts] = useState([]);
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data);
    });
  };
  return (
    <div>
      <PostsNew/>
      <button onClick={handleIndexPosts}>Fetch Data</button>
      <PostsIndex posts={posts} />
    </div>
  );
}

function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <PostsIndex/>
      <Footer/>
      <Content/>
    </div>
  );
}

export default App;
